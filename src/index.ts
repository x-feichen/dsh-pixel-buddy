/**
 * 插件入口：注册组件并挂载到宿主页面右下角。
 * 产物形态：单 IIFE 文件，script 注入即生效（技术选型 §4）。
 */
import { PixelBuddyElement, registerPixelBuddy } from './buddy/pixel-buddy.element.js';
import { DshHookAdapter } from './adapter/dsh-hook-adapter.js';
import type { DshHookApi } from './adapter/dsh-hook-adapter.js';
import type { SessionEventAdapter } from './adapter/session-event-adapter.js';
import { startBuddyController } from './state/buddy-state-controller.js';

export interface PixelBuddyOptions {
  /** 注入事件适配层；缺省使用 DSH Hook 适配器（生产路径） */
  adapter?: SessionEventAdapter;
}

export interface PixelBuddyHandle {
  /** 卸载插件：解绑事件、清空定时器、移除节点（生命周期冻结项，技术选型 §6） */
  destroy(): void;
}

export function mountPixelBuddy(
  host: ParentNode = document.body,
  options: PixelBuddyOptions = {},
): PixelBuddyHandle {
  registerPixelBuddy();

  const existing = document.querySelector(`body > ${PixelBuddyElement.tagName}`);
  if (existing instanceof PixelBuddyElement) {
    return { destroy: () => existing.destroy() };
  }

  const buddy = document.createElement(PixelBuddyElement.tagName) as PixelBuddyElement;
  host.appendChild(buddy);

  const adapter = options.adapter ?? new DshHookAdapter({ getApi: getDshHookApi });
  const controller = startBuddyController(adapter, buddy);
  // 消除交互（澄清结论 D1）：单击宠物 → user-ack，状态机决定是否消除粘滞徽章
  buddy.onAck = () => controller.dispatch({ type: 'user-ack' });

  return {
    destroy: () => {
      buddy.onAck = null;
      controller.destroy();
      buddy.destroy();
    },
  };
}

/** DSH Hook API 获取路径（占位：核实清单 #1 回填后修订） */
function getDshHookApi(): DshHookApi | undefined {
  return (globalThis as { dshHooks?: DshHookApi }).dshHooks;
}
