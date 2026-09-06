/**
 * <dsh-pixel-buddy> 容器组件。
 * Shadow DOM (closed) 隔离样式与点击热区；固定悬浮于页面右下角。
 * T1.2：尺寸三档可配（32/40/48px）、z-index 策略、宿主悬浮元素共存检测。
 * 徽章渲染与状态接入由 T1.5 完成。
 */
import {
  DEFAULT_BUDDY_SIZE,
  EDGE_OFFSET,
  BUDDY_SIZES,
  clampBottom,
  DRAG_THRESHOLD_PX,
} from './config.js';
import type { BuddySize } from './config.js';
import { badgeSvg, BADGE_LABELS } from './badges.js';
import { detectCornerOverlaps } from './coexistence.js';
import { resolvePet } from './pets/index.js';
import type { PetSprite } from './pets/index.js';
import type { BuddyState } from '../contract.js';

const HOST_Z_BASE = 2147480000; // 接近上限；与宿主悬浮元素冲突时以共存检测上报裁决，不盲目加高
export const CROSSFADE_MS = 150; // PRD §4.4 建议区间，澄清结论 D5 定值（T2.6 可调）

const style = /* css */ `
  :host {
    position: fixed;
    right: ${EDGE_OFFSET}px;
    left: auto;
    bottom: ${EDGE_OFFSET}px;
    z-index: ${HOST_Z_BASE};
    width: var(--buddy-size, ${DEFAULT_BUDDY_SIZE}px);
    height: var(--buddy-size, ${DEFAULT_BUDDY_SIZE}px);
    line-height: 0;
    user-select: none;
    -webkit-user-select: none;
    cursor: grab;
  }
  :host([side='left']) {
    right: auto;
    left: ${EDGE_OFFSET}px;
  }
  :host([dragging]) {
    cursor: grabbing;
  }
  .pet {
    width: 100%;
    height: 100%;
    /* 本体永不携带 animation/transition（PRD §4.4 性能红线） */
    image-rendering: pixelated;
  }
  .pet-wrap { position: relative; width: 100%; height: 100%; }
  .lids {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
  }
  :host([data-blink='on']) .lids {
    /* 待机眨眼（设置项，默认关）：纯 CSS 动画，无 JS 循环（性能红线） */
    animation: buddy-blink 4.6s linear infinite;
  }
  @keyframes buddy-blink {
    0%, 91%, 100% { opacity: 0; }
    93%, 95% { opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    :host([data-blink='on']) .lids { animation: none; } /* 与 T2.2 一致 */
  }
  .badge {
    position: absolute;
    /* 头顶正上方居中（产品裁决 2026-09-05，修订美术需求单 §4.1 右上角方案）；
       尺寸为本体 50%（48px 本体对应 24px，较原 55% 缩小约 2px） */
    top: -40%; /* 完全悬浮于头顶上方，不遮挡本体 */
    left: 40%; /* 头部中心（宠物头在画布左侧），非本体几何中心 */
    transform: translateX(-50%);
    width: 50%;
    height: 50%;
    opacity: 0;
    transition: opacity ${CROSSFADE_MS}ms linear; /* crossfade 仅作用于徽章 */
    pointer-events: none;
    /* 亮色主题：深底白符（对比度 ≥ 4.5:1，T2.2） */
    --badge-fg: #ffffff;
    --badge-stroke: #1f2937;
  }
  .badge.visible { opacity: 1; }
  .badge--running { --badge-bg: #2563eb; }
  .badge--input-required { --badge-bg: #b45309; }
  .badge--error { --badge-bg: #dc2626; }
  .badge--success { --badge-bg: #15803d; }
  .badge-bg { fill: var(--badge-bg); stroke: var(--badge-stroke); stroke-width: 1.5; }
  .badge-sym { fill: var(--badge-fg); stroke: var(--badge-fg); }
  /* 暗色主题：亮底深符（T2.1，data-theme 由 theme 属性/auto 解析驱动） */
  :host([data-theme='dark']) .badge {
    --badge-fg: #111827;
    --badge-stroke: #f3f4f6;
  }
  :host([data-theme='dark']) .badge--running { --badge-bg: #60a5fa; }
  :host([data-theme='dark']) .badge--input-required { --badge-bg: #fbbf24; }
  :host([data-theme='dark']) .badge--error { --badge-bg: #f87171; }
  :host([data-theme='dark']) .badge--success { --badge-bg: #4ade80; }
  @media (prefers-reduced-motion: reduce) {
    .badge { transition: none; } /* 可访问性：减弱动态效果时取消过渡（T2.2） */
  }
  /* 屏幕阅读器 live region：视觉隐藏（T2.2） */
  .sr-live {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
`;

export class PixelBuddyElement extends HTMLElement {
  static readonly tagName = 'dsh-pixel-buddy';
  static readonly observedAttributes = ['size', 'theme', 'pet', 'side', 'blink'];

  #shadow: ShadowRoot | null = null;
  #wrap: HTMLElement | null = null;
  #pet: PetSprite | null = null;
  #themeQuery: MediaQueryList | null = null;
  #onSchemeChange: (() => void) | null = null;
  #liveRegion: HTMLElement | null = null;

  connectedCallback(): void {
    if (this.#shadow) return;
    const shadow = this.attachShadow({ mode: 'closed' });
    this.#shadow = shadow;

    const styleEl = document.createElement('style');
    styleEl.textContent = style;
    const wrap = document.createElement('div');
    wrap.className = 'pet-wrap';
    this.#wrap = wrap;
    wrap.innerHTML = this.#petMarkup(this.#readPet());
    // 双徽章节点：crossfade 时旧徽章淡出、新徽章同步淡入（PRD §4.4）
    this.#badgeNodes = [makeBadgeNode(), makeBadgeNode()];
    // ARIA live region：状态变化以文本播报，不依赖颜色/视觉（T2.2）
    this.#liveRegion = document.createElement('div');
    this.#liveRegion.className = 'sr-live';
    this.#liveRegion.setAttribute('role', 'status');
    this.#liveRegion.setAttribute('aria-live', 'polite');
    shadow.append(styleEl, wrap, ...this.#badgeNodes, this.#liveRegion);

    this.#applySize(this.#readSize());
    this.#applyTheme(this.#readTheme());
    this.#applyBottom(this.#bottomOffset);
    this.#applyBlinkPhase(this.#readPet());
    this.#checkCoexistence();

    // 消除交互（澄清结论 D1）：单击宠物本体即确认，控制器决定是否生效
    this.addEventListener('click', this.#onClick);
    // 垂直拖拽（按住左键上下拖，松手停住；移动超阈值抑制 click）
    this.addEventListener('mousedown', this.#onMouseDown);
    this.dataset.state = 'idle';
  }

  #badgeNodes: [HTMLElement, HTMLElement] | null = null;
  #activeBadge = 0;
  #shownState: BuddyState = 'idle';
  /** 距底边偏移（px），拖拽/设置共同读写 */
  #bottomOffset = EDGE_OFFSET;
  /** 粘滞态消除回调（由状态控制器注入） */
  onAck: (() => void) | null = null;

  #onClick = (): void => {
    if (this.#suppressClick) return; // 拖拽结束后的 click 不视为消除确认
    this.onAck?.();
  };

  // ---- 垂直拖拽（产品需求 2026-09-06）：仅上下移动，左右由设置决定 ----
  #drag: { startY: number; startBottom: number; moved: boolean } | null = null;
  #suppressClick = false;
  /** 拖拽结束回调：上抛最终距底偏移（由接入层持久化） */
  onDragEnd: ((bottomPx: number) => void) | null = null;

  #onMouseDown = (e: MouseEvent): void => {
    if (e.button !== 0) return;
    e.preventDefault(); // 阻止拖拽时的文本选择
    this.#drag = { startY: e.clientY, startBottom: this.#bottomOffset, moved: false };
    this.setAttribute('dragging', '');
    window.addEventListener('mousemove', this.#onDragMove);
    window.addEventListener('mouseup', this.#onDragUp);
  };

  #onDragMove = (e: MouseEvent): void => {
    if (!this.#drag) return;
    const dy = this.#drag.startY - e.clientY;
    if (!this.#drag.moved && Math.abs(dy) > DRAG_THRESHOLD_PX) this.#drag.moved = true;
    if (this.#drag.moved) {
      this.#bottomOffset = clampBottom(this.#drag.startBottom + dy);
      this.#applyBottom(this.#bottomOffset);
    }
  };

  #onDragUp = (): void => {
    window.removeEventListener('mousemove', this.#onDragMove);
    window.removeEventListener('mouseup', this.#onDragUp);
    const moved = this.#drag?.moved === true;
    this.#drag = null;
    this.removeAttribute('dragging');
    if (moved) {
      this.#suppressClick = true; // 拖拽后的 click 事件不触发消除
      setTimeout(() => (this.#suppressClick = false), 0);
      this.onDragEnd?.(this.#bottomOffset);
    }
  };

  /** 距底边偏移（px）：拖拽与设置的持久化目标 */
  get bottomOffset(): number {
    return this.#bottomOffset;
  }
  set bottomOffset(px: number) {
    this.#bottomOffset = clampBottom(px);
    this.#applyBottom(this.#bottomOffset);
  }

  #applyBottom(px: number): void {
    this.style.bottom = `${px}px`;
  }

  #parseSide(raw: string | null): 'left' | 'right' {
    return raw === 'left' ? 'left' : 'right';
  }

  #applySide(side: 'left' | 'right'): void {
    if (side === 'left') this.setAttribute('data-side', 'left');
    else this.removeAttribute('data-side');
  }

  /** 待机眨眼动画开关（默认关，纯 CSS 实现） */
  get blink(): boolean {
    return this.getAttribute('blink') === 'on';
  }
  set blink(value: boolean) {
    this.setAttribute('blink', value ? 'on' : 'off');
  }

  /** 显示侧别：left / right（缺省 right） */
  get side(): 'left' | 'right' {
    return this.#parseSide(this.getAttribute('side'));
  }
  set side(value: 'left' | 'right') {
    this.setAttribute('side', value);
  }

  /**
   * 渲染状态徽章：徽章间 crossfade，本体不动。
   * idle 无徽章；其余四态按"符号+颜色"双重编码展示。
   */
  setState(state: BuddyState): void {
    if (!this.#badgeNodes || state === this.#shownState) return;
    const current = this.#badgeNodes[this.#activeBadge] as HTMLElement;
    const incoming = this.#badgeNodes[1 - this.#activeBadge] as HTMLElement;

    if (state === 'idle') {
      current.classList.remove('visible'); // 旧徽章淡出消失
    } else {
      incoming.querySelector('svg')?.remove();
      incoming.insertAdjacentHTML('afterbegin', badgeSvg(state));
      incoming.className = `badge badge--${state}`;
      incoming.setAttribute('aria-label', BADGE_LABELS[state]);
      incoming.classList.add('visible'); // 新徽章淡入
      current.classList.remove('visible'); // 旧徽章同步淡出（PRD §4.4 交叉淡入淡出）
      this.#activeBadge = 1 - this.#activeBadge;
    }
    this.#shownState = state;
    // 可观测性：宿主元素上的当前状态（调试/测试读取，closed shadow 的对外窗口）
    this.dataset.state = state;
    if (this.#liveRegion) this.#liveRegion.textContent = BADGE_LABELS[state];
  }

  attributeChangedCallback(attr: string, _old: string | null, value: string | null): void {
    if (attr === 'size') this.#applySize(this.#parseSize(value));
    if (attr === 'theme') this.#applyTheme(this.#parseTheme(value));
    if (attr === 'pet') this.#applyPet(this.#parsePet(value));
    if (attr === 'side') this.#applySide(this.#parseSide(value));
    if (attr === 'blink') this.#applyBlink(value === 'on');
  }

  /** 本体尺寸档位：32/40/48px，非法值回退默认档 */
  get size(): BuddySize {
    return this.#readSize();
  }
  set size(value: BuddySize) {
    this.setAttribute('size', String(value));
  }

  /** 本体形象：pet 注册表 id（duck/cat/dog…），非法值回退默认宠物 */
  get pet(): string {
    return this.#readPet().id;
  }
  set pet(value: string) {
    this.setAttribute('pet', value);
  }

  #readPet(): PetSprite {
    return this.#pet ?? resolvePet(this.getAttribute('pet'));
  }

  #parsePet(raw: string | null): PetSprite {
    return resolvePet(raw);
  }

  /** 本体 SVG + 可选眨眼眼睑叠层（.lids 仅在 data-blink=on 时被 CSS 动画点亮） */
  #petMarkup(pet: PetSprite): string {
    const lids = pet.blinkOverlay
      ? `<svg class="lids" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">${pet.blinkOverlay()}</svg>`
      : '';
    return pet.svg() + lids;
  }

  #applyBlink(on: boolean): void {
    if (on) this.setAttribute('data-blink', 'on');
    else this.removeAttribute('data-blink');
  }

  /** 各宠物眨眼相位错开（负延迟），避免多实例同帧齐眨 */
  #applyBlinkPhase(pet: PetSprite): void {
    const lids = this.#wrap?.querySelector('.lids');
    if (!lids) return;
    let hash = 0;
    for (const ch of pet.id) hash += ch.charCodeAt(0);
    (lids as HTMLElement).style.animationDelay = `-${(hash % 46) * 100}ms`;
  }

  #applyPet(pet: PetSprite): void {
    if (this.#pet === pet || !this.#wrap) return;
    this.#pet = pet;
    this.#wrap.innerHTML = this.#petMarkup(pet); // 本体替换不做动画（PRD §4.4：本体永不动画）
    this.#applyBlinkPhase(pet);
  }

  /** 主题：light / dark / auto（auto 跟随系统 prefers-color-scheme，事件驱动非轮询） */
  get theme(): 'light' | 'dark' | 'auto' {
    return this.#readTheme();
  }
  set theme(value: 'light' | 'dark' | 'auto') {
    this.setAttribute('theme', value);
  }

  #readTheme(): 'light' | 'dark' | 'auto' {
    return this.#parseTheme(this.getAttribute('theme'));
  }

  #parseTheme(raw: string | null): 'light' | 'dark' | 'auto' {
    return raw === 'light' || raw === 'dark' ? raw : 'auto';
  }

  #applyTheme(mode: 'light' | 'dark' | 'auto'): void {
    // 清理旧的 auto 监听
    if (this.#themeQuery && this.#onSchemeChange) {
      this.#themeQuery.removeEventListener('change', this.#onSchemeChange);
      this.#themeQuery = null;
      this.#onSchemeChange = null;
    }
    if (mode !== 'auto') {
      this.#setAttributeTheme(mode);
      return;
    }
    const query = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!query) {
      this.#setAttributeTheme('light'); // 不支持时保守取亮色
      return;
    }
    this.#themeQuery = query;
    this.#onSchemeChange = () => this.#setAttributeTheme(query.matches ? 'dark' : 'light');
    query.addEventListener('change', this.#onSchemeChange);
    this.#setAttributeTheme(query.matches ? 'dark' : 'light');
  }

  #setAttributeTheme(theme: 'light' | 'dark'): void {
    if (theme === 'dark') this.setAttribute('data-theme', 'dark');
    else this.removeAttribute('data-theme');
  }

  #readSize(): BuddySize {
    return this.#parseSize(this.getAttribute('size'));
  }

  #parseSize(raw: string | null): BuddySize {
    const parsed = raw === null ? NaN : Number(raw);
    return (BUDDY_SIZES as readonly number[]).includes(parsed)
      ? (parsed as BuddySize)
      : DEFAULT_BUDDY_SIZE;
  }

  #applySize(px: BuddySize): void {
    this.style.setProperty('--buddy-size', `${px}px`);
  }

  /** 宿主悬浮元素共存检测：冲突即上报（console.warn），不擅自移动（规划 R4） */
  #checkCoexistence(): void {
    // 单次 rAF 仅用于等首帧布局完成后的一次性测量，非常态循环（PRD §5）
    requestAnimationFrame(() => {
      if (!this.isConnected) return;
      const { conflicts } = detectCornerOverlaps(this.getBoundingClientRect());
      if (conflicts.length > 0) {
        console.warn(
          '[dsh-pixel-buddy] 右下角检测到宿主悬浮元素重叠，需产品裁决错位方案：',
          conflicts,
        );
      }
    });
  }

  /** 测试专用：closed Shadow DOM 的徽章节点访问入口（生产路径不使用） */
  __testBadges(): HTMLElement[] {
    return this.#badgeNodes ? [...this.#badgeNodes] : [];
  }

  /** 测试专用：本体容器访问入口（生产路径不使用） */
  __testWrap(): HTMLElement | null {
    return this.#wrap;
  }

  /** 测试专用：当前本体 SVG 访问入口（生产路径不使用） */
  __testPetSvg(): string {
    return this.#wrap?.innerHTML ?? '';
  }

  /** 测试专用：live region 访问入口（生产路径不使用） */
  __testLiveRegion(): HTMLElement | null {
    return this.#liveRegion;
  }

  /** 插件卸载：解绑事件/监听、移除节点并释放引用（对齐核实清单 #8 的清理约定） */
  destroy(): void {
    if (this.#themeQuery && this.#onSchemeChange) {
      this.#themeQuery.removeEventListener('change', this.#onSchemeChange);
    }
    this.#themeQuery = null;
    this.#onSchemeChange = null;
    this.removeEventListener('click', this.#onClick);
    this.removeEventListener('mousedown', this.#onMouseDown);
    window.removeEventListener('mousemove', this.#onDragMove);
    window.removeEventListener('mouseup', this.#onDragUp);
    this.remove();
    this.#shadow = null;
    this.#badgeNodes = null;
    this.#liveRegion = null;
    this.#wrap = null;
    this.#pet = null;
  }
}

function makeBadgeNode(): HTMLElement {
  const node = document.createElement('div');
  node.className = 'badge';
  return node;
}

/** 注册自定义元素；重复注入（如宿主脚本重放）时幂等 */
export function registerPixelBuddy(): void {
  if (!customElements.get(PixelBuddyElement.tagName)) {
    customElements.define(PixelBuddyElement.tagName, PixelBuddyElement);
  }
}
