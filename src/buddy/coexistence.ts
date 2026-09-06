import type { OverlapReport } from './config.js';

/**
 * 宿主悬浮元素共存检测（T1.2 / 规划文档 R4）。
 * 扫描视口右下角区域内宿主的 fixed/sticky 元素，与宠物矩形相交即记为冲突；
 * 不擅自移动宠物——冲突清单上报，由产品裁决错位偏移方案。
 */
export function detectCornerOverlaps(
  petRect: DOMRect,
  root: ParentNode = document,
): OverlapReport {
  const conflicts: string[] = [];
  const candidates = (root as Document).querySelectorAll<HTMLElement>('body *');

  for (const el of candidates) {
    if (el.tagName === 'DSH-PIXEL-BUDDY' || el.closest?.('dsh-pixel-buddy')) continue;
    const pos = getComputedStyle(el).position;
    if (pos !== 'fixed' && pos !== 'sticky') continue;

    // 过滤不可见元素（display:none / 零尺寸）
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) continue;

    const intersects =
      rect.left < petRect.right &&
      rect.right > petRect.left &&
      rect.top < petRect.bottom &&
      rect.bottom > petRect.top;
    if (intersects) {
      conflicts.push(describe(el));
    }
  }
  return { conflicts };
}

function describe(el: HTMLElement): string {
  const id = el.id ? `#${el.id}` : '';
  const cls = el.classList.length
    ? `.${[...el.classList].slice(0, 2).join('.')}`
    : '';
  return `${el.tagName.toLowerCase()}${id}${cls}`;
}
