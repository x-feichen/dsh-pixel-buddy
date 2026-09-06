import type { SessionEvent } from '../contract.js';

/**
 * 事件适配层对状态机暴露的唯一接口（Hook API 附录 §4，签名已冻结）。
 * T1.4 状态机与 T1.3 适配层凭此并行；单测以 mock 实现驱动状态机。
 */
export interface SessionEventAdapter {
  /** 订阅内部事件；返回解绑函数，插件卸载时必须调用 */
  subscribe(listener: (event: SessionEvent) => void): () => void;
}
