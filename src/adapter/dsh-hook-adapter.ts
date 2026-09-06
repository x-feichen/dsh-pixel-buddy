/**
 * DSH Hook API 事件适配层（Hook API 附录 §3 的实装）。
 * 本模块是唯一允许感知 DSH 插件 API 的地方；其余模块只依赖内部契约。
 *
 * ⚠️ DSH 原始事件名为占位命名（附录 §5 核实清单 #1/#2 回填后仅需修订 EVENT_MAP）。
 */
import type { SessionEvent } from '../contract.js';
import type { SessionEventAdapter } from './session-event-adapter.js';

/** DSH Hook API 的最小事件面（占位形态，以核实结果修订） */
export interface DshHookApi {
  on(event: string, handler: (payload?: unknown) => void): void;
  off(event: string, handler: (payload?: unknown) => void): void;
}

/** DSH 原始事件 → 内部事件映射（占位命名） */
const EVENT_MAP: Readonly<Record<string, SessionEvent['type']>> = {
  'stream:start': 'task-start',
  'stream:end': 'task-success',
  'stream:error': 'task-error',
  'confirmation:request': 'input-required',
};

/** 终态事件：一个 task-start 后有且仅有一个（附录 §2 约束 2） */
const TERMINAL_TYPES: ReadonlySet<SessionEvent['type']> = new Set([
  'task-success',
  'task-error',
]);

const DEBOUNCE_MS = 200; // 同型事件去抖（澄清结论 D2）
const BIND_RETRY_DELAYS_MS = [1000, 2000, 4000] as const; // 绑定退避重试（附录 §3.4）

export interface DshHookAdapterOptions {
  /** 获取 DSH Hook API；返回 undefined 表示宿主尚未注入（触发退避重试） */
  getApi: () => DshHookApi | undefined;
  /** 告警出口，默认 console.warn；单测注入收集 */
  warn?: (message: string, detail?: unknown) => void;
  /** 定时器注入（单测用假时钟） */
  setTimeoutFn?: (fn: () => void, ms: number) => unknown;
  clearTimeoutFn?: (handle: unknown) => void;
}

export class DshHookAdapter implements SessionEventAdapter {
  readonly #options: Required<Omit<DshHookAdapterOptions, 'getApi'>> & DshHookAdapterOptions;
  #listeners = new Set<(event: SessionEvent) => void>();
  #debounceTimers = new Map<SessionEvent['type'], unknown>();
  #boundHandlers = new Map<string, (payload?: unknown) => void>();
  #boundApi: DshHookApi | null = null;
  #taskActive = false; // 乱序防护：task-start 后的终态事件才有效
  #bindAttempts = 0;
  #bindRetryTimer: unknown = null;
  #disposed = false;

  constructor(options: DshHookAdapterOptions) {
    this.#options = {
      warn: (message, detail) => console.warn(message, detail),
      setTimeoutFn: (fn, ms) => setTimeout(fn, ms),
      clearTimeoutFn: (handle) => clearTimeout(handle as number),
      ...options,
    };
  }

  subscribe(listener: (event: SessionEvent) => void): () => void {
    this.#listeners.add(listener);
    this.#ensureBound();
    return () => {
      this.#listeners.delete(listener);
      if (this.#listeners.size === 0) this.#teardown();
    };
  }

  // ---- 绑定与降级（附录 §3.4） ----

  #ensureBound(): void {
    if (this.#boundApi || this.#disposed) return;
    const api = this.#options.getApi();
    if (api) {
      try {
        this.#bind(api);
      } catch (error) {
        // 绑定阶段异常：静默回退待机，不向宿主抛出未捕获异常
        this.#options.warn('[dsh-pixel-buddy] Hook API 绑定失败，已降级为待机', error);
        this.#boundApi = null;
      }
      return;
    }
    this.#scheduleBindRetry();
  }

  #scheduleBindRetry(): void {
    if (this.#disposed || this.#bindRetryTimer !== null) return;
    const delay = BIND_RETRY_DELAYS_MS[this.#bindAttempts];
    if (delay === undefined) {
      this.#options.warn('[dsh-pixel-buddy] Hook API 不可用，已静默回退待机');
      return;
    }
    this.#bindAttempts += 1;
    this.#bindRetryTimer = this.#options.setTimeoutFn(() => {
      this.#bindRetryTimer = null;
      this.#ensureBound();
    }, delay);
  }

  #bind(api: DshHookApi): void {
    for (const raw of Object.keys(EVENT_MAP)) {
      const handler = (payload?: unknown) => this.#onRawEvent(raw, payload);
      api.on(raw, handler);
      this.#boundHandlers.set(raw, handler);
    }
    this.#boundApi = api;
  }

  #unbind(): void {
    if (this.#boundApi) {
      for (const [raw, handler] of this.#boundHandlers) {
        try {
          this.#boundApi.off(raw, handler);
        } catch {
          // 解绑失败不阻断清理
        }
      }
    }
    this.#boundApi = null;
    this.#boundHandlers.clear();
  }

  #teardown(): void {
    this.#unbind();
    for (const timer of this.#debounceTimers.values()) {
      this.#options.clearTimeoutFn(timer);
    }
    this.#debounceTimers.clear();
    this.#taskActive = false;
    this.#bindAttempts = 0;
    if (this.#bindRetryTimer !== null) {
      this.#options.clearTimeoutFn(this.#bindRetryTimer);
      this.#bindRetryTimer = null;
    }
  }

  // ---- 事件归一化（附录 §3.3） ----

  #onRawEvent(raw: string, _payload: unknown): void {
    if (this.#disposed) return;
    const type = EVENT_MAP[raw];
    if (!type) return; // 未登记事件忽略

    // 同型事件 200ms 去抖：仅保留最后一次，防爆发闪烁
    const pending = this.#debounceTimers.get(type);
    if (pending !== undefined) this.#options.clearTimeoutFn(pending);
    this.#debounceTimers.set(
      type,
      this.#options.setTimeoutFn(() => {
        this.#debounceTimers.delete(type);
        this.#emit(type);
      }, DEBOUNCE_MS),
    );
  }

  #emit(type: SessionEvent['type']): void {
    // 乱序防护：未收到 task-start 时的终态事件丢弃（宿主晚加载的脏事件）
    if (TERMINAL_TYPES.has(type) && !this.#taskActive) {
      this.#options.warn(`[dsh-pixel-buddy] 丢弃无起始的终态事件：${type}`);
      return;
    }
    if (type === 'task-start') this.#taskActive = true;
    if (TERMINAL_TYPES.has(type)) this.#taskActive = false;

    this.#dispatch({ type } as SessionEvent);
  }

  #dispatch(event: SessionEvent): void {
    for (const listener of this.#listeners) {
      try {
        listener(event);
      } catch (error) {
        // 监听方异常：卸载订阅、静默回退，不向宿主抛出未捕获异常
        this.#options.warn('[dsh-pixel-buddy] 事件处理异常，已降级为待机', error);
        this.#teardown();
        return;
      }
    }
  }
}
