/**
 * 状态控制器：适配层事件 → 状态机 → 渲染层 的接线层。
 * 负责按 reducer 产出的 timerMs 安排一次性定时器（成功展示期/超时降级），
 * 并把宠物单击转成 user-ack。零轮询：所有定时器均为一次性且可清理。
 */
import { reduce, INITIAL_STATE } from './buddy-state-machine.js';
import type { BuddyMachineState, MachineEvent } from './buddy-state-machine.js';
import type { SessionEventAdapter } from '../adapter/session-event-adapter.js';

export interface BuddyView {
  setState(state: BuddyMachineState['current']): void;
}

export interface TimerHooks {
  schedule(fn: () => void, ms: number): unknown;
  cancel(handle: unknown): void;
}

const defaultTimers: TimerHooks = {
  schedule: (fn, ms) => setTimeout(fn, ms),
  cancel: (handle) => clearTimeout(handle as number),
};

export interface BuddyController {
  /** 外部注入事件（如宠物单击 → user-ack） */
  dispatch(event: MachineEvent): void;
  /** 卸载：解绑订阅、清理定时器 */
  destroy(): void;
}

export function startBuddyController(
  adapter: SessionEventAdapter,
  view: BuddyView,
  timers: TimerHooks = defaultTimers,
): BuddyController {
  let state: BuddyMachineState = INITIAL_STATE;
  let timerHandle: unknown = null;

  const cancelTimer = () => {
    if (timerHandle !== null) {
      timers.cancel(timerHandle);
      timerHandle = null;
    }
  };

  const step = (event: MachineEvent): void => {
    const next = reduce(state, event);
    if (next === state) return; // reducer 引用相等：无变化
    state = next;
    view.setState(next.current);

    cancelTimer();
    if (next.timerMs !== null) {
      timerHandle = timers.schedule(() => {
        timerHandle = null;
        step({ type: 'timer-elapsed' });
      }, next.timerMs);
    }
  };

  const unbind = adapter.subscribe((event) => step(event));

  return {
    dispatch: (event) => step(event),
    destroy: () => {
      unbind();
      cancelTimer();
    },
  };
}
