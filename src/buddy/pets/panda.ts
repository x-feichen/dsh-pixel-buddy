import type { PetSprite } from './types.js';

/** 熊猫（白毛黑耳黑眼圈黑四肢） */
export const panda: PetSprite = {
  id: 'panda',
  label: '熊猫',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 圆耳（黑） -->
    <rect x="2" y="1" width="2" height="2" fill="#2B2B2B"/>
    <rect x="8" y="1" width="2" height="2" fill="#2B2B2B"/>
    <!-- 头部（白） -->
    <g fill="#F5F7FA">
      <rect x="2" y="2" width="8" height="6"/>
      <rect x="1" y="3" width="1" height="4"/>
      <rect x="10" y="3" width="1" height="4"/>
    </g>
    <!-- 黑眼圈（斜置）+ 白眼点 -->
    <rect x="3" y="4" width="2" height="2" fill="#2B2B2B"/>
    <rect x="7" y="4" width="2" height="2" fill="#2B2B2B"/>
    <rect x="3" y="4" width="1" height="1" fill="#F5F7FA"/>
    <rect x="8" y="5" width="1" height="1" fill="#F5F7FA"/>
    <!-- 鼻 -->
    <rect x="6" y="6" width="1" height="1" fill="#2B2B2B"/>
    <!-- 身体（白，黑肩带环绕） -->
    <g fill="#F5F7FA">
      <rect x="3" y="8" width="8" height="5"/>
      <rect x="2" y="9" width="1" height="4"/>
      <rect x="11" y="9" width="1" height="3"/>
    </g>
    <rect x="3" y="9" width="8" height="1" fill="#2B2B2B"/>
    <!-- 黑四肢 -->
    <rect x="2" y="10" width="1" height="3" fill="#2B2B2B"/>
    <rect x="11" y="10" width="1" height="2" fill="#2B2B2B"/>
    <rect x="3" y="13" width="2" height="1" fill="#2B2B2B"/>
    <rect x="8" y="13" width="2" height="1" fill="#2B2B2B"/>
  </svg>`;
  },
};
