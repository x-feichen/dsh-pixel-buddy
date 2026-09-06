import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { DshHookAdapter } from './dsh-hook-adapter.js';
import type { DshHookApi } from './dsh-hook-adapter.js';
import type { SessionEvent } from '../contract.js';

/** 可编程的 Hook API 测试替身 */
function makeFakeApi(): DshHookApi & {
  fire(event: string, payload?: unknown): void;
  handlers: Map<string, (payload?: unknown) => void>;
} {
  const handlers = new Map<string, (payload?: unknown) => void>();
  return {
    handlers,
    on(event, handler) {
      handlers.set(event, handler);
    },
    off(event) {
      handlers.delete(event);
    },
    fire(event, payload) {
      handlers.get(event)?.(payload);
    },
  };
}

function makeAdapter(
  apiOrGet: DshHookApi | undefined | (() => DshHookApi | undefined),
  opts?: Partial<ConstructorParameters<typeof DshHookAdapter>[0]>,
) {
  const getApi = typeof apiOrGet === 'function' ? apiOrGet : () => apiOrGet;
  const warns: unknown[][] = [];
  const adapter = new DshHookAdapter({
    getApi,
    warn: (...args) => warns.push(args),
    ...opts,
  });
  return { adapter, warns };
}

describe('T1.3 事件适配层', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('四类 DSH 原始事件正确映射为内部事件', () => {
    const api = makeFakeApi();
    const { adapter } = makeAdapter(api);
    const received: SessionEvent[] = [];
    adapter.subscribe((e) => received.push(e));

    api.fire('stream:start');
    vi.advanceTimersByTime(200);
    api.fire('stream:end');
    vi.advanceTimersByTime(200);
    // 上一请求已终态；新请求开始后的 error 才有效（验证终态后活跃标记重置）
    api.fire('stream:start');
    vi.advanceTimersByTime(200);
    api.fire('stream:error');
    vi.advanceTimersByTime(200);
    api.fire('confirmation:request');
    vi.advanceTimersByTime(200);

    expect(received.map((e) => e.type)).toEqual([
      'task-start',
      'task-success',
      'task-start',
      'task-error',
      'input-required',
    ]);
  });

  it('200ms 内同型事件去抖合并，仅透传一次', () => {
    const api = makeFakeApi();
    const { adapter } = makeAdapter(api);
    const received: SessionEvent[] = [];
    adapter.subscribe((e) => received.push(e));

    api.fire('stream:start');
    api.fire('stream:start');
    api.fire('stream:start');
    vi.advanceTimersByTime(200);
    expect(received).toHaveLength(1);
  });

  it('乱序防护：无 task-start 的终态事件被丢弃', () => {
    const api = makeFakeApi();
    const { adapter, warns } = makeAdapter(api);
    const received: SessionEvent[] = [];
    adapter.subscribe((e) => received.push(e));

    api.fire('stream:end');
    vi.advanceTimersByTime(200);
    expect(received).toHaveLength(0);
    expect(warns.length).toBeGreaterThan(0);
  });

  it('task-start 后终态事件放行，且重置活跃标记', () => {
    const api = makeFakeApi();
    const { adapter } = makeAdapter(api);
    const received: SessionEvent[] = [];
    adapter.subscribe((e) => received.push(e));

    api.fire('stream:start');
    vi.advanceTimersByTime(200);
    api.fire('stream:end');
    vi.advanceTimersByTime(200);
    api.fire('stream:error'); // 上一次已终态，此终态应为脏事件
    vi.advanceTimersByTime(200);

    expect(received.map((e) => e.type)).toEqual(['task-start', 'task-success']);
  });

  it('宿主未注入 API：按 1s/2s/4s 退避重试，耗尽后静默放弃', () => {
    const { adapter, warns } = makeAdapter(undefined);
    const received: SessionEvent[] = [];
    adapter.subscribe((e) => received.push(e));

    vi.advanceTimersByTime(1000 + 2000 + 4000);
    expect(warns.some((w) => String(w[0]).includes('静默回退待机'))).toBe(true);
    expect(received).toHaveLength(0);
  });

  it('重试期间 API 可用即成功绑定，恢复事件流', () => {
    const holder: { api?: ReturnType<typeof makeFakeApi> } = {};
    const { adapter } = makeAdapter(() => holder.api);
    const received: SessionEvent[] = [];
    adapter.subscribe((e) => received.push(e));

    vi.advanceTimersByTime(1000); // 第一次重试时仍不可用
    holder.api = makeFakeApi();
    vi.advanceTimersByTime(2000); // 第二次重试绑定成功
    holder.api.fire('stream:start');
    vi.advanceTimersByTime(200);

    expect(received.map((e) => e.type)).toEqual(['task-start']);
  });

  it('监听方抛异常：捕获告警、卸载订阅，不向宿主抛未捕获异常', () => {
    const api = makeFakeApi();
    const { adapter, warns } = makeAdapter(api);
    adapter.subscribe(() => {
      throw new Error('listener boom');
    });

    expect(() => {
      api.fire('stream:start');
      vi.advanceTimersByTime(200);
    }).not.toThrow();
    expect(warns.some((w) => String(w[0]).includes('降级为待机'))).toBe(true);

    // 降级后事件流停止
    const received: SessionEvent[] = [];
    adapter.subscribe((e) => received.push(e));
    api.fire('stream:error');
    vi.advanceTimersByTime(200);
    expect(received).toHaveLength(0);
  });

  it('解绑后不再接收事件；定时器被清理', () => {
    const api = makeFakeApi();
    const { adapter } = makeAdapter(api);
    const received: SessionEvent[] = [];
    const unbind = adapter.subscribe((e) => received.push(e));

    api.fire('stream:start');
    unbind(); // 去抖定时器挂起时解绑
    vi.advanceTimersByTime(200);
    expect(received).toHaveLength(0);
  });
});
