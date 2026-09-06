/**
 * 5 状态 FSM（T1.4 核心逻辑）。
 * 纯函数 reducer：(state, event) => state —— 无副作用、无定时器依赖，
 * 时长类行为（成功最短展示、超时降级）由调用方按 reducer 产出的定时请求驱动。
 * 规则依据：PRD §4.5/§4.6、需求澄清结论 D1/D2/D3/D5。
 */
import type { BuddyState, SessionEvent } from '../contract.js';

/** 成功徽章最短展示时长（澄清结论 D5，T2.6 可调） */
export const SUCCESS_MIN_DISPLAY_MS = 2500;
/** 单次定时器上限：task-start 后终态丢失的超时降级（Hook API 附录 §3.4） */
export const TERMINAL_TIMEOUT_MS = 10 * 60 * 1000;

export interface BuddyMachineState {
  /** 当前对外展示的状态 */
  current: BuddyState;
  /** 粘滞位（澄清结论 D2）：只被用户点击消除，不被自动事件覆盖 */
  stickyError: boolean;
  stickyInputRequired: boolean;
  /** 活跃任务标记：task-start 后、终态前为 true（附录 §2 约束 2 的机器内保障） */
  taskActive: boolean;
  /**
   * 需要调用方安排的一次性定时器（毫秒）；null 表示无需定时。
   * 调用方在定时到期后发送 { type: 'timer-elapsed' }。
   */
  timerMs: number | null;
}

export type MachineEvent =
  | SessionEvent
  | { type: 'timer-elapsed' } // 成功展示期到期 / 终态超时降级
  | { type: 'user-ack' }; // 用户单击宠物（澄清结论 D1 消除途径）

export const INITIAL_STATE: BuddyMachineState = {
  current: 'idle',
  stickyError: false,
  stickyInputRequired: false,
  taskActive: false,
  timerMs: null,
};

// 优先级仲裁（PRD §4.5，报错 > 需要人工 > 运行中 > 成功 > 待机）已内化于
// 粘滞位判定顺序：stickyError 先于 stickyInputRequired 先于底层流转。

export function reduce(state: BuddyMachineState, event: MachineEvent): BuddyMachineState {
  switch (event.type) {
    case 'user-ack':
      return reduceUserAck(state);

    case 'timer-elapsed':
      // 仅成功展示期到期（或超时降级）将非粘滞展示态收回待机
      if (state.current === 'success' || state.current === 'running') {
        return { ...state, current: 'idle', timerMs: null };
      }
      return { ...state, timerMs: null };

    case 'task-start':
      return reduceTaskStart(state);

    case 'task-success':
    case 'task-error':
    case 'input-required':
      return reduceTerminalish(state, event.type);

    default: {
      const _exhaustive: never = event;
      return _exhaustive;
    }
  }
}

function reduceUserAck(state: BuddyMachineState): BuddyMachineState {
  // 无粘滞内容时点击无效果（避免把运行中/成功误清）
  if (!state.stickyError && !state.stickyInputRequired) return state;
  return {
    ...state,
    stickyError: false,
    stickyInputRequired: false,
    current: 'idle',
    timerMs: null,
  };
}

function reduceTaskStart(state: BuddyMachineState): BuddyMachineState {
  const next: BuddyMachineState = {
    ...state,
    taskActive: true,
    // 底层任务照常执行；徽章是否变化由粘滞与优先级决定（澄清结论 D2）
    timerMs: TERMINAL_TIMEOUT_MS, // 终态丢失超时降级（单次定时器，非轮询）
  };
  if (next.stickyError) {
    next.current = 'error'; // 保持报错
  } else if (next.stickyInputRequired) {
    next.current = 'input-required'; // 保持需要人工
  } else {
    next.current = 'running';
  }
  return next;
}

function reduceTerminalish(
  state: BuddyMachineState,
  type: 'task-success' | 'task-error' | 'input-required',
): BuddyMachineState {
  // 纵深防御：无活跃任务的终态/分支事件一律丢弃（附录 §2 约束 2，
  // 与适配层乱序防护互为冗余，任何事件源都无法产生脏终态）
  if (!state.taskActive) return state;

  const next: BuddyMachineState = { ...state, timerMs: null };

  switch (type) {
    case 'task-error':
      next.stickyError = true;
      next.taskActive = false;
      next.current = 'error'; // 报错优先级最高，直接置顶
      next.timerMs = null; // 粘滞态不设自动消失
      return next;

    case 'input-required':
      next.stickyInputRequired = true;
      // input-required 为运行中任务的分支信号，任务仍活跃
      if (!next.stickyError) next.current = 'input-required';
      // 报错粘滞时保持显示报错（D2：报错 > 需要人工）
      next.timerMs = null;
      return next;

    case 'task-success':
      // 粘滞态不被成功洗白（D2）；运行中才允许展示成功
      next.taskActive = false;
      if (next.stickyError) {
        next.current = 'error';
        return next;
      }
      if (next.stickyInputRequired) {
        next.current = 'input-required';
        return next;
      }
      next.current = 'success';
      next.timerMs = SUCCESS_MIN_DISPLAY_MS; // 展示期满自动淡出回待机
      return next;

    default: {
      const _exhaustive: never = type;
      return _exhaustive;
    }
  }
}

/** 供渲染层/fuzz 校验的不变量：粘滞位与展示态一致性 */
export function assertInvariants(state: BuddyMachineState): void {
  if (state.stickyError) {
    // 报错粘滞存在时，展示态只能是 error（D2 优先级仲裁）
    if (state.current !== 'error') {
      throw new Error(`不变量破坏：stickyError 存在但展示态为 ${state.current}`);
    }
  } else if (state.stickyInputRequired && state.current !== 'input-required') {
    throw new Error(`不变量破坏：stickyInputRequired 存在但展示态为 ${state.current}`);
  }
}
