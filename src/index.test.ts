import { describe, it, expect, beforeEach } from 'vitest';
import { mountPixelBuddy } from './index.js';
import { PixelBuddyElement } from './buddy/pixel-buddy.element.js';

describe('T1.1 工程骨架冒烟', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('挂载后在 body 上生成 <dsh-pixel-buddy> 且渲染占位宠物', () => {
    mountPixelBuddy();
    const buddy = document.querySelector('body > dsh-pixel-buddy');
    expect(buddy).toBeInstanceOf(PixelBuddyElement);
  });

  it('重复挂载幂等，不产生第二个实例', () => {
    mountPixelBuddy();
    mountPixelBuddy();
    expect(document.querySelectorAll('dsh-pixel-buddy')).toHaveLength(1);
  });

  it('destroy() 移除节点，且可重新挂载', () => {
    const handle = mountPixelBuddy();
    handle.destroy();
    expect(document.querySelector('dsh-pixel-buddy')).toBeNull();
    mountPixelBuddy();
    expect(document.querySelector('dsh-pixel-buddy')).not.toBeNull();
  });
});
