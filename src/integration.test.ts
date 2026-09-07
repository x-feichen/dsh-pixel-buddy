/**
 * T1.5/T1.6 端到端集成冒烟：模拟 devhost 的真实接线
 * （mount 注入 EventBus → 事件派发 → 宠物徽章变化 → 点击消除）。
 * 防止"页面脚本与总线 API 断链"这类集成缺陷再次逃逸。
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { mountPixelBuddy } from './index.js';
import type { PixelBuddyHandle } from './index.js';
import { EventBus } from './bus/event-bus.js';
import type { PixelBuddyElement } from './buddy/pixel-buddy.element.js';

function badges(): [HTMLElement, HTMLElement] {
  const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
  return (el as unknown as { __testBadges(): [HTMLElement, HTMLElement] }).__testBadges();
}

const anyVisible = () => badges().some((n) => n.classList.contains('visible'));

describe('端到端：mount + EventBus + 徽章联动', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    EventBus.reset();
  });

  it('面板派发事件 → 徽章出现；点击宠物 → 粘滞徽章消除', () => {
    const handle: PixelBuddyHandle = mountPixelBuddy(document.body, {
      adapter: EventBus,
    });

    // 模拟面板按钮（与 devhost 完全同路径：EventBus.dispatch）
    EventBus.dispatch({ type: 'task-start' });
    expect(anyVisible()).toBe(true);
    expect(
      badges().find((n) => n.classList.contains('visible'))?.getAttribute('aria-label'),
    ).toBe('会话运行中');

    EventBus.dispatch({ type: 'task-error' });
    expect(
      badges().find((n) => n.classList.contains('visible'))?.getAttribute('aria-label'),
    ).toBe('会话出现异常');

    // 单击宠物本体 → user-ack → 消除
    (document.querySelector('dsh-pixel-buddy') as PixelBuddyElement).click();
    expect(anyVisible()).toBe(false);

    handle.destroy();
  });

  it('成功徽章挂一次性定时器（由控制器驱动，此处仅验证出现）', () => {
    mountPixelBuddy(document.body, { adapter: EventBus });
    EventBus.dispatch({ type: 'task-start' });
    EventBus.dispatch({ type: 'task-success' });
    expect(
      badges().find((n) => n.classList.contains('visible'))?.getAttribute('aria-label'),
    ).toBe('任务成功完成');
  });
});
