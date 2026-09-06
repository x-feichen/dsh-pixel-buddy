/** 本体尺寸档位（美术需求单 §3.2；实际使用档位联调后回填 PRD） */
export const BUDDY_SIZES = [32, 40, 48] as const;
export type BuddySize = (typeof BUDDY_SIZES)[number];
export const DEFAULT_BUDDY_SIZE: BuddySize = 48;

/** 距页面边缘的基础偏移（px） */
export const EDGE_OFFSET = 16;

/** 宿主悬浮元素共存检测的回调契约：检测结果交由宿主/产品裁决（规划文档 R4） */
export interface OverlapReport {
  /** 冲突元素的选择器摘要（用于定位裁决对象） */
  conflicts: string[];
}

/** 垂直拖拽：距底边偏移的取值范围与拖动判定阈值 */
export const MIN_BOTTOM_PX = 8;
export const DRAG_THRESHOLD_PX = 3;

/** 钳制垂直偏移到视口合法范围（不越过顶/底边界） */
export function clampBottom(px: number, viewportHeight = window.innerHeight, petSize = 48): number {
  const max = Math.max(MIN_BOTTOM_PX, viewportHeight - petSize - MIN_BOTTOM_PX);
  return Math.min(max, Math.max(MIN_BOTTOM_PX, Math.round(px)));
}
