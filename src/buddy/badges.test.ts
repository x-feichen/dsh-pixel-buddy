import { describe, it, expect, beforeEach } from 'vitest';
import type { PixelBuddyElement} from './pixel-buddy.element.js';
import { registerPixelBuddy, CROSSFADE_MS } from './pixel-buddy.element.js';
import { BADGE_PALETTES, BADGE_SYMBOLS, BADGE_LABELS } from './badges.js';

/** WCAG 相对亮度与对比度（T2.2 静态校验） */
function luminance(hex: string): number {
  const n = hex.replace('#', '');
  const rgb = [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const r = rgb[0] as number, g = rgb[1] as number, b = rgb[2] as number;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a: string, b: string): number {
  const sorted = [luminance(a), luminance(b)].sort((x, y) => y - x);
  const l1 = sorted[0] as number;
  const l2 = sorted[1] as number;
  return (l1 + 0.05) / (l2 + 0.05);
}

describe('T2.1/T2.2 主题化徽章与可访问性', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    registerPixelBuddy();
    document.body.appendChild(document.createElement('dsh-pixel-buddy'));
  });

  function buddy(): PixelBuddyElement {
    return document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
  }
  function badgeNodes(): [HTMLElement, HTMLElement] {
    return (buddy() as unknown as { __testBadges(): [HTMLElement, HTMLElement] }).__testBadges();
  }

  it('crossfade 时长常量为 150ms（T2.6 定稿）', () => {
    expect(CROSSFADE_MS).toBe(150);
  });

  it('亮色主题：白符对四色底对比度全部 ≥ 4.5:1（美术需求单 §6.2-4）', () => {
    for (const bg of Object.values(BADGE_PALETTES.light)) {
      expect(contrast('#ffffff', bg)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('暗色主题：深符对四色底对比度全部 ≥ 4.5:1', () => {
    for (const bg of Object.values(BADGE_PALETTES.dark)) {
      expect(contrast('#111827', bg)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('四态符号互不相同（非仅靠颜色区分）且语义标签齐备', () => {
    expect(new Set(Object.values(BADGE_SYMBOLS)).size).toBe(4);
    // 双语：每种语言含全部 5 个状态键（含 idle）
    expect(Object.keys(BADGE_LABELS.zh)).toHaveLength(5);
    expect(Object.keys(BADGE_LABELS.en)).toHaveLength(5);
  });

  it('theme 属性：light/dark 显式生效，非法值回退 auto', () => {
    const b = buddy();
    b.theme = 'dark';
    expect(b.getAttribute('data-theme')).toBe('dark');
    b.theme = 'light';
    expect(b.hasAttribute('data-theme')).toBe(false);
    b.setAttribute('theme', 'nonsense');
    expect(b.theme).toBe('auto');
  });

  it('setState 更新 ARIA live region（role=status + polite）', () => {
    const b = buddy();
    b.setState('running');
    b.setState('idle');
    const live = (
      b as unknown as { __testLiveRegion(): HTMLElement | null }
    ).__testLiveRegion();
    expect(live?.getAttribute('aria-live')).toBe('polite');
    expect(live?.getAttribute('role')).toBe('status');
  });

  it('徽章节点携带主题状态类，SVG 颜色经 CSS 变量注入', () => {
    const b = buddy();
    b.setState('error');
    const visible = badgeNodes().find((n) => n.classList.contains('visible'));
    expect(visible?.classList.contains('badge--error')).toBe(true);
    expect(visible?.querySelector('.badge-sym')).not.toBeNull();
  });

  it('本体节点样式仍无动画（性能红线守卫）', () => {
    expect(buddy().outerHTML).not.toContain('animation');
  });
});
