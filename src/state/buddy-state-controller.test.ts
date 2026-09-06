import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { startBuddyController } from './buddy-state-controller.js';
import type { SessionEventAdapter } from '../adapter/session-event-adapter.js';
import type { SessionEvent } from '../contract.js';
import { SUCCESS_MIN_DISPLAY_MS } from './buddy-state-machine.js';

/** 手动派发事件的 mock 适配器 */
function makeMockAdapter() {
  const listeners = new Set<(e: SessionEvent) => void>();
  return {
    adapter: {
      subscribe(listener: (e: SessionEvent) => void) {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
    } as SessionEventAdapter,
    emit: (e: SessionEvent) => listeners.forEach((l) => l(e)),
  };
}

/** 记录型视图 + 手动时钟 */
function makeHarness() {
  const { adapter, emit } = makeMockAdapter();
  const states: string[] = [];
  const view = { setState: (s: string) => states.push(s) };
  const scheduled: Array<{ fn: () => void; ms: number; cancelled: boolean }> = [];
  const timers = {
    schedule: (fn: () => void, ms: number) => {
      const item = { fn, ms, cancelled: false };
      scheduled.push(item);
      return item;
    },
    cancel: (handle: unknown) => {
      (handle as { cancelled: boolean }).cancelled = true;
    },
  };
  const controller = startBuddyController(adapter, view, timers);
  return { emit, states, scheduled, controller };
}

describe('T1.5/T1.6 状态控制器接线', () => {
  beforeEach(() => vi.clearAllMocks());
  afterEach(() => vi.restoreAllMocks());

  it('事件驱动状态流转：运行中 → 成功 → 展示期满回待机', () => {
    const { emit, states, scheduled, controller } = makeHarness();

    emit({ type: 'task-start' });
    expect(states.at(-1)).toBe('running');
    expect(scheduled.at(-1)?.ms).toBe(10 * 60 * 1000); // 超时降级

    emit({ type: 'task-success' });
    expect(states.at(-1)).toBe('success');
    expect(scheduled.at(-1)?.ms).toBe(SUCCESS_MIN_DISPLAY_MS);
    expect(scheduled.at(-2)?.cancelled).toBe(true); // 旧定时器已清理

    scheduled.at(-1)?.fn(); // 成功展示期到期
    expect(states.at(-1)).toBe('idle');
    controller.destroy();
  });

  it('报错粘滞后点击宠物消除（T1.6），再点无效果', () => {
    const { emit, states, controller } = makeHarness();

    emit({ type: 'task-start' });
    emit({ type: 'task-error' });
    expect(states.at(-1)).toBe('error');

    controller.dispatch({ type: 'user-ack' });
    expect(states.at(-1)).toBe('idle');

    const before = states.length;
    controller.dispatch({ type: 'user-ack' }); // 无粘滞：无变化
    expect(states.length).toBe(before);
    controller.destroy();
  });

  it('destroy 后事件不再驱动视图，定时器被清理', () => {
    const { emit, states, scheduled, controller } = makeHarness();
    emit({ type: 'task-start' });
    controller.destroy();
    expect(scheduled.at(-1)?.cancelled).toBe(true);

    emit({ type: 'task-error' });
    expect(states.at(-1)).toBe('running'); // 卸载后不再变化
  });
});
