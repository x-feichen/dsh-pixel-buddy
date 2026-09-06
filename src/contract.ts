/**
 * 内部事件契约 —— 状态机与渲染层只依赖本契约，不感知 DSH Hook API。
 * 契约定义见《Hook API 对齐附录》§2，自《技术选型一页纸》§6 起签名冻结。
 */

/** 内部会话事件（由事件适配层归一化产出） */
export type SessionEvent =
  | { type: 'task-start' } // 一次请求开始处理（"运行中"起点）
  | { type: 'task-success' } // 请求正常结束（"成功"）
  | { type: 'task-error' } // 请求异常结束（"报错"）
  | { type: 'input-required' }; // 需要用户介入（"需要人工"，澄清结论 D4）

/** 宠物状态（状态机输出，渲染层输入） */
export type BuddyState = 'idle' | 'running' | 'input-required' | 'error' | 'success';
