import type { PetSprite } from './types.js';

/** 仓鼠（金毛白肚，圆耳腮红，replace penguin 2026-09-06） */
export const hamster: PetSprite = {
  id: 'hamster',
  label: '仓鼠',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 圆耳（金毛 + 粉内耳） -->
    <g fill="#E8B872">
      <rect x="2" y="1" width="3" height="3"/>
      <rect x="7" y="1" width="3" height="3"/>
    </g>
    <rect x="3" y="2" width="1" height="1" fill="#F2A6B8"/>
    <rect x="8" y="2" width="1" height="1" fill="#F2A6B8"/>
    <!-- 头部（圆轮廓） -->
    <g fill="#E8B872">
      <rect x="2" y="3" width="8" height="6"/>
      <rect x="1" y="4" width="1" height="4"/>
      <rect x="10" y="4" width="1" height="4"/>
    </g>
    <!-- 眼睛 -->
    <rect x="4" y="5" width="1" height="1" fill="#2B2B2B"/>
    <rect x="8" y="5" width="1" height="1" fill="#2B2B2B"/>
    <!-- 腮红（鼓颊） -->
    <rect x="2" y="7" width="2" height="1" fill="#F7C8A8"/>
    <rect x="8" y="7" width="2" height="1" fill="#F7C8A8"/>
    <!-- 鼻与嘴 -->
    <rect x="6" y="7" width="1" height="1" fill="#C97B6B"/>
    <rect x="6" y="8" width="1" height="1" fill="#D8A25E"/>
    <!-- 身体（白肚） -->
    <g fill="#E8B872">
      <rect x="3" y="9" width="8" height="4"/>
      <rect x="2" y="10" width="1" height="3"/>
      <rect x="11" y="10" width="1" height="2"/>
    </g>
    <rect x="5" y="10" width="3" height="3" fill="#F7E8CC"/>
    <!-- 小爪（粉） -->
    <rect x="3" y="13" width="2" height="1" fill="#F2C9A0"/>
    <rect x="8" y="13" width="2" height="1" fill="#F2C9A0"/>
  </svg>`;
  },

  blinkOverlay() {
    return '<rect x="4" y="5" width="1" height="1" fill="#D8A25E"/><rect x="8" y="5" width="1" height="1" fill="#D8A25E"/><rect x="4" y="5" width="1" height="1" fill="#8A5F38"/><rect x="8" y="5" width="1" height="1" fill="#8A5F38"/>';
  },
};
