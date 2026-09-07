/**
 * T1.7 全链路集成联调：覆盖 PRD 验收标准 1~6 对应的正常流、异常流、
 * 快速连续事件流、超时降级，以及"真实适配器（DshHookAdapter）→ 状态机 → 渲染"全链。
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mountPixelBuddy } from './index.js';
import type { PixelBuddyHandle } from './index.js';
import { EventBus } from './bus/event-bus.js';
import { DshHookAdapter } from './adapter/dsh-hook-adapter.js';
import type { DshHookApi } from './adapter/dsh-hook-adapter.js';
import type { SessionEventAdapter } from './adapter/session-event-adapter.js';
import type { PixelBuddyElement } from './buddy/pixel-buddy.element.js';

function makeFakeApi(): DshHookApi & { fire(event: string): void } {
  const handlers = new Map<string, () => void>();
  return {
    on: (e, h) => handlers.set(e, h),
    off: (e) => handlers.delete(e),
    fire: (e) => handlers.get(e)?.(),
  };
}

function mount(options?: { adapter?: SessionEventAdapter }): PixelBuddyHandle {
  return mountPixelBuddy(document.body, options ?? {});
}

function visibleLabel(): string | null {
  const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
  const nodes = (
    el as unknown as { __testBadges(): Array<HTMLElement> }
  ).__testBadges();
  return nodes.find((n) => n.classList.contains('visible'))?.getAttribute('aria-label') ?? null;
}

describe('T1.7 全链路集成', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    EventBus.reset();
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('验收 1：挂载后默认无徽章（idle）', () => {
    mount();
    expect(visibleLabel()).toBeNull();
  });

  it('正常流：运行中 → 成功 → 2.5s 后自动淡出回待机（验收 2/3）', () => {
    mount({ adapter: EventBus });
    EventBus.dispatch({ type: 'task-start' });
    expect(visibleLabel()).toBe('会话运行中');

    EventBus.dispatch({ type: 'task-success' });
    expect(visibleLabel()).toBe('任务成功完成');

    vi.advanceTimersByTime(2499);
    expect(visibleLabel()).toBe('任务成功完成'); // 最短展示期内不消失
    vi.advanceTimersByTime(1);
    expect(visibleLabel()).toBeNull(); // 期满自动回待机
  });

  it('异常流：报错粘滞 → 点击宠物消除 → 后续事件恢复正常驱动（验收 4）', () => {
    const handle = mount({ adapter: EventBus });
    const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;

    EventBus.dispatch({ type: 'task-start' });
    EventBus.dispatch({ type: 'task-error' });
    expect(visibleLabel()).toBe('会话出现异常');

    EventBus.dispatch({ type: 'task-success' });
    expect(visibleLabel()).toBe('会话出现异常'); // 不被洗白（D2）

    el.click();
    expect(visibleLabel()).toBeNull();

    EventBus.dispatch({ type: 'task-start' });
    expect(visibleLabel()).toBe('会话运行中'); // 消除后恢复联动
    handle.destroy();
  });

  it('需要人工流：粘滞展示，点击消除（验收 5）', () => {
    const handle = mount({ adapter: EventBus });
    const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;

    EventBus.dispatch({ type: 'task-start' });
    EventBus.dispatch({ type: 'input-required' });
    expect(visibleLabel()).toBe('会话需要人工介入');

    el.click();
    expect(visibleLabel()).toBeNull();
    handle.destroy();
  });

  it('快速连续事件流（爆发）：终态一致、无双徽章同显（验收 6）', () => {
    const handle = mount({ adapter: EventBus });
    EventBus.dispatch({ type: 'task-start' });
    for (let i = 0; i < 20; i++) {
      EventBus.dispatch({ type: i % 2 === 0 ? 'task-error' : 'task-success' });
    }
    // 最后一次为 success；由于无粘滞（error 后紧跟 success 序列中最后事件决定粘滞位），
    // 期望最终由最后一次事件语义决定，且展示层至多一个可见徽章
    const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
    const nodes = (el as unknown as { __testBadges(): Array<HTMLElement> }).__testBadges();
    expect(nodes.filter((n) => n.classList.contains('visible'))).toHaveLength(1);
    handle.destroy();
  });

  it('超时降级：task-start 后终态丢失，10min 后强制回待机，不永久卡"运行中"', () => {
    mount({ adapter: EventBus });
    EventBus.dispatch({ type: 'task-start' });
    vi.advanceTimersByTime(10 * 60 * 1000);
    expect(visibleLabel()).toBeNull();
  });

  it('真实适配器全链：DSH 事件 → 适配层去抖/映射 → 状态机 → 徽章', () => {
    const api = makeFakeApi();
    mount({ adapter: new DshHookAdapter({ getApi: () => api }) });

    api.fire('stream:start');
    vi.advanceTimersByTime(200); // 适配层 200ms 去抖窗口
    expect(visibleLabel()).toBe('会话运行中');

    api.fire('stream:start'); // 重复事件：去抖合并，徽章不闪
    api.fire('stream:start');
    vi.advanceTimersByTime(200);
    expect(visibleLabel()).toBe('会话运行中');

    api.fire('stream:error');
    vi.advanceTimersByTime(200);
    expect(visibleLabel()).toBe('会话出现异常');
  });

  it('验收 7：任意状态流转中本体节点始终无动画声明', () => {
    const handle = mount({ adapter: EventBus });
    const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
    for (const t of ['task-start', 'task-success', 'task-error', 'task-start'] as const) {
      EventBus.dispatch({ type: t });
      expect(el.outerHTML).not.toContain('animation');
    }
    handle.destroy();
  });
});
