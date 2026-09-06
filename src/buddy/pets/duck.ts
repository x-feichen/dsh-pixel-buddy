import type { PetSprite } from './types.js';

/** 鸭子（MVP 首发形象，美术需求单 §1 选型结论） */
export const duck: PetSprite = {
  id: 'duck',
  label: '鸭子',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 头部（浅黄） -->
    <g fill="#FFD966">
      <rect x="3" y="2" width="7" height="6"/>
      <rect x="2" y="3" width="1" height="4"/>
      <rect x="10" y="3" width="1" height="3"/>
    </g>
    <!-- 头部暗面（过渡到颈部） -->
    <rect x="3" y="7" width="7" height="1" fill="#F0B429"/>
    <!-- 喙（橙，双层） -->
    <rect x="11" y="5" width="3" height="2" fill="#F08C1B"/>
    <rect x="11" y="6" width="3" height="1" fill="#D9700F"/>
    <!-- 眼睛 -->
    <rect x="6" y="4" width="1" height="2" fill="#2B2B2B"/>
    <rect x="6" y="4" width="1" height="1" fill="#555555"/>
    <!-- 身体（主黄） -->
    <g fill="#F6C445">
      <rect x="2" y="8" width="10" height="5"/>
      <rect x="1" y="9" width="1" height="3"/>
      <rect x="1" y="7" width="1" height="1"/>
    </g>
    <!-- 尾羽上翘（深黄） -->
    <rect x="2" y="7" width="2" height="1" fill="#E8A13A"/>
    <!-- 翅膀（深黄，带高光边） -->
    <rect x="4" y="9" width="5" height="3" fill="#E8A13A"/>
    <rect x="4" y="9" width="5" height="1" fill="#F0B429"/>
    <!-- 腹部（奶油色） -->
    <rect x="3" y="12" width="8" height="1" fill="#FBEFD0"/>
    <!-- 脚（橙棕） -->
    <rect x="4" y="13" width="2" height="1" fill="#D9700F"/>
    <rect x="8" y="13" width="2" height="1" fill="#D9700F"/>
  </svg>`;
  },

  blinkOverlay() {
    return `<rect x="6" y="4" width="1" height="2" fill="#FFD966"/>`;
  },
};
