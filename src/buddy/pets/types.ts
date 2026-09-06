/** 宠物精灵契约：每种宠物一个文件，实现本接口并注册到 index.ts */
export interface PetSprite {
  /** 唯一 id，对应 <dsh-pixel-buddy pet="..."> 属性值 */
  readonly id: string;
  /** 展示名（测试面板/文档用） */
  readonly label: string;
  /**
   * 返回本体 SVG：16x16 逻辑像素网格、crispEdges、透明背景。
   * 约束（美术需求单 §3.3）：右上 1/4（约 x≥11 且 y≤5）留空给徽章；
   * 禁止携带 animation/transition。
   */
  svg(): string;
}
