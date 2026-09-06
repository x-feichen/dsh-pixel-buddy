import type { PetSprite } from './types.js';

/** 狗（棕黄毛色 + 奶油吻部，垂耳造型避免侵入右上徽章区） */
export const dog: PetSprite = {
  id: 'dog',
  label: '狗',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 头部（圆轮廓，棕黄） -->
    <g fill="#B98A5A">
      <rect x="3" y="3" width="7" height="6"/>
      <rect x="2" y="4" width="1" height="4"/>
      <rect x="10" y="4" width="1" height="4"/>
    </g>
    <!-- 垂耳（深棕，两侧贴头） -->
    <g fill="#8A5F38">
      <rect x="1" y="3" width="1" height="5"/>
      <rect x="11" y="3" width="1" height="4"/>
    </g>
    <rect x="11" y="7" width="1" height="1" fill="#6E4A2A"/>
    <!-- 眉点 -->
    <rect x="4" y="4" width="1" height="1" fill="#8A5F38"/>
    <rect x="8" y="4" width="1" height="1" fill="#8A5F38"/>
    <!-- 眼睛 -->
    <rect x="4" y="5" width="1" height="2" fill="#2B2B2B"/>
    <rect x="8" y="5" width="1" height="2" fill="#2B2B2B"/>
    <!-- 吻部（奶油色块 + 深色鼻头） -->
    <rect x="5" y="7" width="4" height="2" fill="#EFE0C8"/>
    <rect x="6" y="7" width="2" height="1" fill="#2B2B2B"/>
    <rect x="6" y="8" width="1" height="1" fill="#6E4A2A"/>
    <!-- 身体 -->
    <g fill="#B98A5A">
      <rect x="3" y="9" width="8" height="4"/>
      <rect x="2" y="10" width="1" height="3"/>
      <rect x="11" y="10" width="1" height="2"/>
    </g>
    <!-- 胸口（奶油） -->
    <rect x="6" y="9" width="2" height="4" fill="#EFE0C8"/>
    <!-- 尾巴（上翘摇摆位） -->
    <rect x="12" y="8" width="1" height="2" fill="#B98A5A"/>
    <rect x="12" y="7" width="1" height="1" fill="#EFE0C8"/>
    <!-- 项圈（红，点缀色） -->
    <rect x="3" y="9" width="8" height="1" fill="#C94F4F"/>
    <!-- 爪（奶油） -->
    <rect x="3" y="13" width="2" height="1" fill="#EFE0C8"/>
    <rect x="8" y="13" width="2" height="1" fill="#EFE0C8"/>
  </svg>`;
  },

  blinkOverlay() {
    return `<rect x="4" y="5" width="1" height="2" fill="#B98A5A"/><rect x="8" y="5" width="1" height="2" fill="#B98A5A"/><rect x="4" y="6" width="1" height="1" fill="#8A5F38"/><rect x="8" y="6" width="1" height="1" fill="#8A5F38"/>`;
  },
};
