import type { PetSprite } from './types.js';

/** 企鹅（深蓝灰背 + 白肚，橙喙橙脚） */
export const penguin: PetSprite = {
  id: 'penguin',
  label: '企鹅',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 头部（深蓝灰） -->
    <g fill="#39465A">
      <rect x="3" y="2" width="7" height="5"/>
      <rect x="2" y="3" width="1" height="3"/>
      <rect x="10" y="3" width="1" height="2"/>
    </g>
    <!-- 眼睛（白底黑点，在深色头上需白圈） -->
    <rect x="4" y="4" width="1" height="2" fill="#F5F7FA"/>
    <rect x="8" y="4" width="1" height="2" fill="#F5F7FA"/>
    <rect x="4" y="5" width="1" height="1" fill="#2B2B2B"/>
    <rect x="8" y="5" width="1" height="1" fill="#2B2B2B"/>
    <!-- 喙（橙，短） -->
    <rect x="6" y="6" width="2" height="1" fill="#F08C1B"/>
    <!-- 身体（站姿卵形，白肚） -->
    <g fill="#39465A">
      <rect x="3" y="7" width="8" height="6"/>
      <rect x="2" y="8" width="1" height="4"/>
      <rect x="11" y="8" width="1" height="3"/>
    </g>
    <g fill="#F5F7FA">
      <rect x="5" y="8" width="4" height="5"/>
      <rect x="4" y="9" width="1" height="3"/>
      <rect x="9" y="9" width="1" height="3"/>
    </g>
    <!-- 鳍翅（贴身） -->
    <rect x="12" y="9" width="1" height="3" fill="#2B3648"/>
    <!-- 脚（橙） -->
    <rect x="4" y="13" width="2" height="1" fill="#F08C1B"/>
    <rect x="8" y="13" width="2" height="1" fill="#F08C1B"/>
  </svg>`;
  },
};
