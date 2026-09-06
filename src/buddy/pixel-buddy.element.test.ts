import { describe, it, expect, beforeEach, vi } from 'vitest';
import { registerPixelBuddy } from './pixel-buddy.element.js';
import type { PixelBuddyElement } from './pixel-buddy.element.js';
import { detectCornerOverlaps } from './coexistence.js';

describe('T1.2 宠物本体渲染', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    registerPixelBuddy();
    document.body.appendChild(document.createElement('dsh-pixel-buddy'));
  });

  it('默认尺寸为 48px 档，CSS 变量同步生效', () => {
    const buddy = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
    expect(buddy.size).toBe(48);
    expect(buddy.style.getPropertyValue('--buddy-size')).toBe('48px');
  });

  it('size 属性支持 32/40/48 三档，非法值回退 48', () => {
    const buddy = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
    for (const s of [32, 40, 48]) {
      buddy.setAttribute('size', String(s));
      expect(buddy.size).toBe(s);
      expect(buddy.style.getPropertyValue('--buddy-size')).toBe(`${s}px`);
    }
    buddy.setAttribute('size', '100');
    expect(buddy.size).toBe(48);
  });

  it('本体的宿主级样式不含 animation/transition（性能红线）', () => {
    const buddy = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
    const cs = getComputedStyle(buddy);
    // happy-dom 对未声明的动画属性返回空串，浏览器返回 'none'——两者均表示"未声明"
    expect(['', 'none']).toContain(cs.animationName);
    expect(['', '0s']).toContain(cs.transitionDuration);
  });

  it('共存检测：右下角区域的宿主 fixed 元素被识别为冲突', () => {
    const intruder = document.createElement('div');
    intruder.id = 'customer-entry';
    intruder.style.cssText =
      'position:fixed;right:8px;bottom:8px;width:64px;height:64px;';
    // happy-dom 无真实布局，注入矩形
    intruder.getBoundingClientRect = () =>
      ({ left: 928, right: 992, top: 928, bottom: 992 }) as DOMRect;
    document.body.appendChild(intruder);
    const petRect = { left: 936, right: 984, top: 936, bottom: 984 } as DOMRect;
    const { conflicts } = detectCornerOverlaps(petRect);
    expect(conflicts.some((c) => c.includes('#customer-entry'))).toBe(true);
  });

  it('共存检测：不可见元素（零尺寸）不误报', () => {
    const hidden = document.createElement('div');
    hidden.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;';
    document.body.appendChild(hidden);
    const petRect = { left: 936, right: 984, top: 936, bottom: 984 } as DOMRect;
    expect(detectCornerOverlaps(petRect).conflicts).toHaveLength(0);
  });

  it('connectedCallback 中的共存上报只执行一次 rAF（无循环）', () => {
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame');
    const buddy = document.createElement('dsh-pixel-buddy');
    document.body.appendChild(buddy);
    document.body.removeChild(buddy);
    document.body.appendChild(buddy);
    expect(rafSpy).toHaveBeenCalledTimes(1); // reconnect 不重复注册
  });
});

describe('待机眨眼动画（默认关）', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    registerPixelBuddy();
    document.body.appendChild(document.createElement('dsh-pixel-buddy'));
  });

  it('默认关闭：无 data-blink 属性', () => {
    const b = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
    expect(b.hasAttribute('data-blink')).toBe(false);
  });

  it('blink 属性开启后渲染眼睑叠层，关闭则移除', () => {
    const b = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
    b.setAttribute('blink', 'on');
    expect(b.getAttribute('data-blink')).toBe('on');
    expect((b as unknown as { __testWrap(): HTMLElement }).__testWrap().querySelector('.lids')).not.toBeNull();
    b.setAttribute('blink', 'off');
    expect(b.hasAttribute('data-blink')).toBe(false);
  });
});
