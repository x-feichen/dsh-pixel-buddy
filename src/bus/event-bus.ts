import type { SessionEvent } from '../contract.js';
import type { SessionEventAdapter } from '../adapter/session-event-adapter.js';

/**
 * 会话事件总线：DSH 接入层（src/dsh/client.ts）将派生出的内部事件投递于此，
 * 状态控制器订阅消费；测试以同一实例注入驱动全链路。事件发布-订阅的中枢。
 */
class EventBusImpl implements SessionEventAdapter {
  #listeners = new Set<(event: SessionEvent) => void>();

  dispatch(event: SessionEvent): void {
    for (const listener of this.#listeners) listener(event);
  }

  subscribe(listener: (event: SessionEvent) => void): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  /** 测试专用：清空全部订阅（隔离用例间状态） */
  reset(): void {
    this.#listeners.clear();
  }
}

export const EventBus = new EventBusImpl();