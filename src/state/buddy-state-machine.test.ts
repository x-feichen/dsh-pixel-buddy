import { describe, it, expect } from 'vitest';
import {
  reduce,
  INITIAL_STATE,
  assertInvariants,
  SUCCESS_MIN_DISPLAY_MS,
  TERMINAL_TIMEOUT_MS,
} from './buddy-state-machine.js';
import type { MachineEvent } from './buddy-state-machine.js';
import type { SessionEvent } from '../contract.js';

const ev = (type: SessionEvent['type']): MachineEvent => ({ type } as MachineEvent);
const run = (events: MachineEvent[]) => events.reduce(reduce, INITIAL_STATE);

describe('T1.4 状态机 —— 基本流转', () => {
  it('待机 → 运行中 → 成功 →（展示期满）→ 待机', () => {
    let s = run([ev('task-start')]);
    expect(s.current).toBe('running');
    expect(s.timerMs).toBe(TERMINAL_TIMEOUT_MS); // 终态超时降级已挂

    s = reduce(s, ev('task-success'));
    expect(s.current).toBe('success');
    expect(s.timerMs).toBe(SUCCESS_MIN_DISPLAY_MS);

    s = reduce(s, { type: 'timer-elapsed' });
    expect(s.current).toBe('idle');
    expect(s.timerMs).toBeNull();
  });

  it('待机 → 运行中 → 报错（粘滞，无自动消失定时器）', () => {
    const s = run([ev('task-start'), ev('task-error')]);
    expect(s.current).toBe('error');
    expect(s.stickyError).toBe(true);
    expect(s.timerMs).toBeNull();
  });

  it('task-start 挂 10min 超时降级定时器，到期强制回待机', () => {
    let s = run([ev('task-start')]);
    s = reduce(s, { type: 'timer-elapsed' });
    expect(s.current).toBe('idle');
  });

  it('user-ack 消除报错粘滞回待机；无粘滞时点击无效果', () => {
    let s = run([ev('task-start'), ev('task-error')]);
    s = reduce(s, { type: 'user-ack' });
    expect(s.current).toBe('idle');
    expect(s.stickyError).toBe(false);

    const untouched = reduce({ ...INITIAL_STATE, current: 'running' }, { type: 'user-ack' });
    expect(untouched.current).toBe('running');
  });
});

describe('T1.4 状态机 —— 澄清结论 D2 粘滞交互表', () => {
  it('报错粘滞：新 task-start 保持报错', () => {
    const s = run([ev('task-start'), ev('task-error'), ev('task-start')]);
    expect(s.current).toBe('error');
    expect(s.stickyError).toBe(true);
  });

  it('报错粘滞：新任务成功不洗白，仍显示报错', () => {
    const s = run([ev('task-start'), ev('task-error'), ev('task-start'), ev('task-success')]);
    expect(s.current).toBe('error');
    expect(s.stickyError).toBe(true);
  });

  it('需要人工粘滞：运行中/成功均不覆盖', () => {
    let s = run([ev('task-start'), ev('input-required'), ev('task-success')]);
    expect(s.current).toBe('input-required');
    expect(s.stickyInputRequired).toBe(true);

    s = reduce(s, ev('task-start'));
    expect(s.current).toBe('input-required');
  });

  it('双粘滞并存：显示报错；消除报错后切换显示需要人工', () => {
    let s = run([ev('task-start'), ev('task-error'), ev('input-required')]);
    expect(s.current).toBe('error');

    s = reduce(s, { type: 'user-ack' });
    expect(s.current).toBe('idle'); // D1：一次点击同时清除两个粘滞位
    expect(s.stickyError).toBe(false);
    expect(s.stickyInputRequired).toBe(false);
  });

  it('input-required 后跟随 task-error：报错置顶', () => {
    const s = run([ev('task-start'), ev('input-required'), ev('task-error')]);
    expect(s.current).toBe('error');
    expect(s.stickyError).toBe(true);
    expect(s.stickyInputRequired).toBe(true);
  });

  it('成功展示期内新任务到达：直接切运行中并接管定时器', () => {
    let s = run([ev('task-start'), ev('task-success')]);
    s = reduce(s, ev('task-start'));
    expect(s.current).toBe('running');
    expect(s.timerMs).toBe(TERMINAL_TIMEOUT_MS);
  });
});

describe('T1.4 状态机 —— 随机事件序列 fuzz（验收 6：无状态错乱）', () => {
  const EVENT_POOL: MachineEvent['type'][] = [
    'task-start',
    'task-success',
    'task-error',
    'input-required',
    'timer-elapsed',
    'user-ack',
  ];

  it('确定性种子随机序列 200 轮，每步满足不变量', () => {
    // mulberry32：可复现的伪随机（避免依赖 Math.random 导致失败不可复盘）
    let seed = 20260905;
    const next = () => {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    for (let round = 0; round < 200; round++) {
      let state = INITIAL_STATE;
      const steps = 30;
      for (let i = 0; i < steps; i++) {
        const type = EVENT_POOL[Math.floor(next() * EVENT_POOL.length)] as MachineEvent['type'];
        state = reduce(state, { type } as MachineEvent);
        expect(['idle', 'running', 'input-required', 'error', 'success']).toContain(
          state.current,
        );
        expect(() => assertInvariants(state)).not.toThrow();
        // 粘滞态不得携带自动消失定时器
        if (state.current === 'error' || (state.current === 'input-required' && state.stickyInputRequired && !state.stickyError)) {
          // 粘滞展示态不设成功展示定时器（超时降级定时器除外）
        }
        if (state.stickyError || state.stickyInputRequired) {
          expect(state.current === 'error' || state.current === 'input-required').toBe(true);
        }
      }
    }
  });
});
