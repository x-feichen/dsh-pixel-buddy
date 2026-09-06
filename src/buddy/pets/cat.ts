import type { PetSprite } from './types.js';

/** 猫（灰白毛色，压圆小耳——美术需求单 §3.3 的猫形象结构约束） */
export const cat: PetSprite = {
  id: 'cat',
  label: '猫',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 耳朵（圆钝小三角，粉内耳；压在头部轮廓上沿，不侵入右上徽章区） -->
    <g fill="#9AA0A8">
      <rect x="3" y="1" width="2" height="2"/>
      <rect x="7" y="1" width="2" height="2"/>
    </g>
    <g fill="#F2A6B8">
      <rect x="3" y="2" width="1" height="1"/>
      <rect x="8" y="2" width="1" height="1"/>
    </g>
    <!-- 头部（圆轮廓，浅灰） -->
    <g fill="#9AA0A8">
      <rect x="2" y="2" width="8" height="6"/>
      <rect x="1" y="3" width="1" height="4"/>
      <rect x="10" y="3" width="1" height="4"/>
    </g>
    <!-- 额头花纹 -->
    <rect x="5" y="2" width="1" height="2" fill="#6E747C"/>
    <rect x="7" y="3" width="1" height="1" fill="#6E747C"/>
    <!-- 眼睛（竖瞳） -->
    <rect x="4" y="4" width="1" height="2" fill="#2B2B2B"/>
    <rect x="8" y="4" width="1" height="2" fill="#2B2B2B"/>
    <rect x="4" y="4" width="1" height="1" fill="#D9E0E7"/>
    <rect x="8" y="4" width="1" height="1" fill="#D9E0E7"/>
    <!-- 鼻与嘴 -->
    <rect x="6" y="6" width="1" height="1" fill="#F2A6B8"/>
    <rect x="6" y="7" width="1" height="1" fill="#6E747C"/>
    <!-- 胡须 -->
    <rect x="1" y="6" width="1" height="1" fill="#D9E0E7"/>
    <rect x="11" y="6" width="1" height="1" fill="#D9E0E7"/>
    <!-- 身体（坐姿） -->
    <g fill="#9AA0A8">
      <rect x="3" y="8" width="8" height="5"/>
      <rect x="2" y="9" width="1" height="4"/>
      <rect x="11" y="9" width="1" height="3"/>
    </g>
    <!-- 胸腹（白毛） -->
    <rect x="5" y="9" width="3" height="4" fill="#E8ECF0"/>
    <!-- 环纹尾巴（上翘，避开徽章区） -->
    <g fill="#6E747C">
      <rect x="12" y="7" width="1" height="3"/>
      <rect x="12" y="10" width="2" height="1"/>
    </g>
    <rect x="12" y="6" width="1" height="1" fill="#9AA0A8"/>
    <!-- 前爪（白） -->
    <rect x="3" y="13" width="2" height="1" fill="#E8ECF0"/>
    <rect x="8" y="13" width="2" height="1" fill="#E8ECF0"/>
  </svg>`;
  },

  blinkOverlay() {
    return `<rect x="4" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="8" y="4" width="1" height="2" fill="#9AA0A8"/><rect x="4" y="5" width="1" height="1" fill="#6E747C"/><rect x="8" y="5" width="1" height="1" fill="#6E747C"/>`;
  },
};
