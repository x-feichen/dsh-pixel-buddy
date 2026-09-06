import type { PetSprite } from './types.js';

/** 青蛙（绿背白肚，头顶凸眼） */
export const frog: PetSprite = {
  id: 'frog',
  label: '青蛙',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 凸眼（头顶两侧，白底黑瞳） -->
    <g fill="#6FBF4A">
      <rect x="2" y="1" width="3" height="3"/>
      <rect x="7" y="1" width="3" height="3"/>
    </g>
    <rect x="3" y="2" width="1" height="1" fill="#F5F7FA"/>
    <rect x="8" y="2" width="1" height="1" fill="#F5F7FA"/>
    <rect x="3" y="1" width="1" height="1" fill="#2B2B2B"/>
    <rect x="8" y="1" width="1" height="1" fill="#2B2B2B"/>
    <!-- 头身一体（阔嘴轮廓） -->
    <g fill="#6FBF4A">
      <rect x="2" y="4" width="9" height="7"/>
      <rect x="1" y="5" width="1" height="5"/>
      <rect x="11" y="5" width="1" height="4"/>
    </g>
    <!-- 嘴线（深绿横线） -->
    <rect x="4" y="7" width="6" height="1" fill="#4C8F33"/>
    <!-- 鼻孔 -->
    <rect x="5" y="5" width="1" height="1" fill="#4C8F33"/>
    <rect x="8" y="5" width="1" height="1" fill="#4C8F33"/>
    <!-- 腹部（浅绿白） -->
    <rect x="4" y="9" width="5" height="2" fill="#DFF0D0"/>
    <!-- 后腿（蹲姿，深绿） -->
    <g fill="#4C8F33">
      <rect x="1" y="10" width="1" height="3"/>
      <rect x="11" y="10" width="1" height="3"/>
    </g>
    <!-- 前脚掌 -->
    <rect x="3" y="13" width="2" height="1" fill="#4C8F33"/>
    <rect x="8" y="13" width="2" height="1" fill="#4C8F33"/>
  </svg>`;
  },

  blinkOverlay() {
    return `<rect x="2" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="7" y="1" width="3" height="3" fill="#6FBF4A"/><rect x="3" y="2" width="1" height="1" fill="#4C8F33"/><rect x="8" y="2" width="1" height="1" fill="#4C8F33"/>`;
  },
};
