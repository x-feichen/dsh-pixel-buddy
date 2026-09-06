import type { BuddyState } from '../contract.js';

/**
 * 徽章主题化色板（T2.1）。
 * 亮色主题：深底白符（白符对各底色对比度 ≥ 4.5:1，T2.2 校验见测试）；
 * 暗色主题：亮底深符，同等对比度达标。
 * 正式色值仍以 T0.4 设计规范（美术需求单 §4.2/§5）为准，回填时仅改本表。
 */
export type BadgeThemeName = 'light' | 'dark';
export type BadgeStateName = Exclude<BuddyState, 'idle'>;

export const BADGE_PALETTES: Readonly<
  Record<BadgeThemeName, Readonly<Record<BadgeStateName, string>>>
> = {
  light: {
    running: '#2563EB',
    'input-required': '#B45309',
    error: '#DC2626',
    success: '#15803D',
  },
  dark: {
    running: '#60A5FA',
    'input-required': '#FBBF24',
    error: '#F87171',
    success: '#4ADE80',
  },
};

/** 24x24 viewBox 内的符号图形（正式像素字形由 T0.4 设计资产替换） */
export const BADGE_SYMBOLS: Readonly<Record<BadgeStateName, string>> = {
  running: '<rect x="9" y="9" width="6" height="6"/>',
  'input-required':
    '<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">?</text>',
  error: '<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700">!</text>',
  success: '<path d="M7 12.5 L10.5 16 L17 8.5" stroke-width="2.5" fill="none"/>',
};

/** 屏幕阅读器可感知的状态语义（色觉可及性的文本冗余编码，T2.2；i18n 双语） */
export const BADGE_LABELS: Readonly<
  Record<'zh' | 'en', Readonly<Record<BuddyState, string>>>
> = {
  zh: {
    idle: '会话空闲',
    running: '会话运行中',
    'input-required': '会话需要人工介入',
    error: '会话出现异常',
    success: '任务成功完成',
  },
  en: {
    idle: 'Session idle',
    running: 'Session running',
    'input-required': 'Input required',
    error: 'Session error',
    success: 'Task completed',
  },
};

export function badgeSvg(state: BadgeStateName): string {
  // 颜色全部经 CSS 变量注入（.badge--<state> 类 + :host([data-theme]) 选择器），
  // 主题切换零重建 DOM——仅属性切换
  return `<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" class="badge-bg"/>
    <g class="badge-sym">${BADGE_SYMBOLS[state]}</g>
  </svg>`;
}
