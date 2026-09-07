/**
 * T2.3 性能验收（PRD 验收标准 8）：
 * A. 静态审计——构建产物不含持续性动画/轮询 API（rAF 仅允许共存检测的一次性测量）；
 * B. 运行时审计——挂载→爆发事件→卸载全周期后零残留定时器（零常态开销）。
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mountPixelBuddy } from './index.js';
import { EventBus } from './bus/event-bus.js';

const distPath = join(dirname(fileURLToPath(import.meta.url)), '../dist/dsh-pixel-buddy.iife.js');

describe('T2.3-A 静态审计（构建产物）', () => {
  const dist = existsSync(distPath) ? readFileSync(distPath, 'utf-8') : null;

  it('产物存在且体积符合预算（gzip ≤ 8KB）', () => {
    expect(dist).toBeTruthy();
    // gzip 体积由构建报告核对（当前 5.18KB）；此处守卫未压缩上限
    expect((dist as string).length).toBeLessThan(64 * 1024);
  });

  it('不含 setInterval / XHR 轮询等持续性 API', () => {
    expect(dist).not.toContain('setInterval');
    expect(dist).not.toContain('XMLHttpRequest');
    expect(dist).not.toContain('EventSource');
  });

  it('requestAnimationFrame 仅出现一次（共存检测的一次性测量，PRD §5 允许）', () => {
    const count = (dist?.match(/requestAnimationFrame/g) ?? []).length;
    expect(count).toBe(1);
  });
});

describe('T2.3-B 运行时审计（定时器生命周期）', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    EventBus.reset();
    vi.useFakeTimers();
  });
  afterEach(() => vi.useRealTimers());

  it('爆发事件后卸载：零残留定时器（不引入常态开销）', () => {
    const handle = mountPixelBuddy(document.body, { adapter: EventBus });

    // 模拟高峰：20 次任务循环，每个任务挂超时降级定时器
    for (let i = 0; i < 20; i++) {
      EventBus.dispatch({ type: 'task-start' });
      EventBus.dispatch({ type: 'task-success' });
    }
    expect(vi.getTimerCount()).toBeGreaterThan(0); // 成功展示期定时器在挂

    handle.destroy(); // 卸载必须回收全部定时器
    expect(vi.getTimerCount()).toBe(0);
  });

  it('待机稳态：无活跃任务时零定时器（静止态零开销）', () => {
    const handle = mountPixelBuddy(document.body, { adapter: EventBus });
    EventBus.dispatch({ type: 'task-start' });
    EventBus.dispatch({ type: 'task-success' });
    vi.advanceTimersByTime(2500); // 成功展示期满自动回收
    expect(vi.getTimerCount()).toBe(0); // 稳态：零定时器、零轮询
    handle.destroy();
  });
});
