import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { PixelBuddyElement} from './pixel-buddy.element.js';
import { registerPixelBuddy } from './pixel-buddy.element.js';
import { clampBottom, DRAG_THRESHOLD_PX } from './config.js';

describe('垂直拖拽与侧别设置（T2.x 增量）', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.useFakeTimers();
    registerPixelBuddy();
    document.body.appendChild(document.createElement('dsh-pixel-buddy'));
  });

  function buddy(): PixelBuddyElement {
    return document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
  }
  function mouse(type: string, y: number, button = 0): void {
    buddy().dispatchEvent(new MouseEvent(type, { button, clientY: y, bubbles: type !== 'mousemove' && type !== 'mouseup' }));
    if (type === 'mousemove' || type === 'mouseup') {
      window.dispatchEvent(new MouseEvent(type, { button, clientY: y }));
    }
  }

  it('clampBottom：钳制到底部最小值与顶部边界', () => {
    expect(clampBottom(-50, 720)).toBe(8);
    expect(clampBottom(16, 720)).toBe(16);
    expect(clampBottom(5000, 720)).toBe(720 - 48 - 8);
  });

  it('按住左键上拖：bottomOffset 实时更新，松手触发 onDragEnd', () => {
    const el = buddy();
    const onDragEnd = vi.fn();
    el.onDragEnd = onDragEnd;
    mouse('mousedown', 700);
    expect(el.hasAttribute('dragging')).toBe(true);
    mouse('mousemove', 700 - 100); // 上移 100px
    expect(el.bottomOffset).toBe(116); // 16 + 100
    mouse('mouseup', 700 - 100);
    expect(el.hasAttribute('dragging')).toBe(false);
    expect(onDragEnd).toHaveBeenCalledWith(116);
  });

  it('移动未超阈值视为点击：onAck 触发且不触发 onDragEnd', () => {
    const el = buddy();
    const onAck = vi.fn();
    const onDragEnd = vi.fn();
    el.onAck = onAck;
    el.onDragEnd = onDragEnd;
    mouse('mousedown', 700);
    mouse('mousemove', 700 - (DRAG_THRESHOLD_PX - 1));
    mouse('mouseup', 700 - (DRAG_THRESHOLD_PX - 1));
    el.click();
    expect(onAck).toHaveBeenCalledTimes(1);
    expect(onDragEnd).not.toHaveBeenCalled();
  });

  it('拖拽后松手：紧跟的 click 被抑制（不误清粘滞徽章）', () => {
    const el = buddy();
    const onAck = vi.fn();
    el.onAck = onAck;
    mouse('mousedown', 700);
    mouse('mousemove', 600);
    mouse('mouseup', 600);
    el.click(); // 浏览器在拖拽释放后仍会派发 click
    expect(onAck).not.toHaveBeenCalled();
    vi.advanceTimersByTime(0); // 宏任务后恢复
    el.click();
    expect(onAck).toHaveBeenCalledTimes(1);
  });

  it('side 属性：left/right 切换映射 data-side，非法回退 right', () => {
    const el = buddy();
    el.setAttribute('side', 'left');
    expect(el.side).toBe('left');
    expect(el.getAttribute('data-side')).toBe('left');
    el.setAttribute('side', 'right');
    expect(el.side).toBe('right');
    expect(el.hasAttribute('data-side')).toBe(false);
    el.setAttribute('side', 'nonsense');
    expect(el.side).toBe('right');
  });

  it('bottomOffset setter：非法值被钳制', () => {
    const el = buddy();
    el.bottomOffset = -20;
    expect(el.bottomOffset).toBe(8);
  });
});
