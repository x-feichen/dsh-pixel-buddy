import type { SessionEvent } from '../contract.js';
import type { SessionEventAdapter } from '../adapter/session-event-adapter.js';

/**
 * 开发联调用事件总线：在 devhost 面板手动派发内部事件，模拟 DSH Hook API。
 * 仅用于本地联调与单测注入，不进入生产构建路径（生产使用 DshHookAdapter）。
 */
class DevEventBusImpl implements SessionEventAdapter {
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

export const DevEventBus = new DevEventBusImpl();
