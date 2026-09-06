/**
 * T2.5 边缘场景加固：晚加载、刷新恢复、粘滞态不跨生命周期残留、超时降级不卡死。
 * 降级策略依据《Hook API 对齐附录》§3.4（无快照 API 时的保守降级）。
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mountPixelBuddy } from './index.js';
import { DevEventBus } from './dev/event-bus.js';
import type { PixelBuddyElement } from './buddy/pixel-buddy.element.js';

function visibleLabel(): string | null {
  const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement | null;
  if (!el) return null;
  const nodes = (el as unknown as { __testBadges(): Array<HTMLElement> }).__testBadges();
  return nodes.find((n) => n.classList.contains('visible'))?.getAttribute('aria-label') ?? null;
}

describe('T2.5 边缘场景加固', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    DevEventBus.reset();
    vi.useFakeTimers();
  });
  afterEach(() => vi.useRealTimers());

  it('插件晚加载：迟到终态事件被丢弃，保持待机直到下一个 task-start', () => {
    // 宿主页面任务已在进行中（插件错过 task-start），随后事件陆续到达
    mountPixelBuddy(document.body, { adapter: DevEventBus });
    DevEventBus.dispatch({ type: 'task-success' }); // 无起始的迟到终态
    expect(visibleLabel()).toBeNull(); // 不误显示"成功"

    DevEventBus.dispatch({ type: 'task-start' }); // 下一次真实请求
    expect(visibleLabel()).toBe('会话运行中');
  });

  it('页面刷新模拟：卸载重挂后回待机，无任何残留徽章（无快照的保守降级）', () => {
    const handle = mountPixelBuddy(document.body, { adapter: DevEventBus });
    DevEventBus.dispatch({ type: 'task-start' });
    DevEventBus.dispatch({ type: 'task-error' });
    expect(visibleLabel()).toBe('会话出现异常');

    handle.destroy();
    // "刷新"：全新挂载（等价于页面重载后插件重新注入）
    mountPixelBuddy(document.body, { adapter: DevEventBus });
    expect(visibleLabel()).toBeNull(); // 保守降级：待机，而非恢复报错
  });

  it('粘滞态不跨插件生命周期残留：重挂后旧粘滞位不影响新实例', () => {
    const first = mountPixelBuddy(document.body, { adapter: DevEventBus });
    DevEventBus.dispatch({ type: 'task-error' });
    first.destroy();

    mountPixelBuddy(document.body, { adapter: DevEventBus });
    DevEventBus.dispatch({ type: 'task-start' });
    DevEventBus.dispatch({ type: 'task-success' });
    expect(visibleLabel()).toBe('任务成功完成'); // 新实例无粘滞位，成功可正常展示
  });

  it('运行中不永久卡死：终态丢失后超时降级回收（多次任务循环验证）', () => {
    mountPixelBuddy(document.body, { adapter: DevEventBus });
    for (let round = 0; round < 3; round++) {
      DevEventBus.dispatch({ type: 'task-start' });
      expect(visibleLabel()).toBe('会话运行中');
      // 模拟终态事件丢失：不派发 success/error，等待超时
      vi.advanceTimersByTime(10 * 60 * 1000);
      expect(visibleLabel()).toBeNull();
    }
  });
});
