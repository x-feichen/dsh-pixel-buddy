import type { PetSprite } from './types.js';

/** 狐狸（橙毛白腹，深耳尖，大尾白尖——皮肤系统候选形象转正） */
export const fox: PetSprite = {
  id: 'fox',
  label: '狐狸',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 耳朵（三角，深色耳尖；位于头部左上，避开右上徽章区） -->
    <g fill="#E8873A">
      <rect x="2" y="1" width="2" height="2"/>
      <rect x="7" y="1" width="2" height="2"/>
    </g>
    <rect x="2" y="1" width="1" height="1" fill="#5A3A22"/>
    <rect x="8" y="1" width="1" height="1" fill="#5A3A22"/>
    <!-- 头部 -->
    <g fill="#E8873A">
      <rect x="2" y="2" width="8" height="5"/>
      <rect x="1" y="3" width="1" height="3"/>
      <rect x="10" y="3" width="1" height="3"/>
    </g>
    <!-- 白色颊毛（V 形下脸） -->
    <rect x="4" y="6" width="5" height="1" fill="#FBF3E4"/>
    <rect x="5" y="7" width="3" height="1" fill="#FBF3E4"/>
    <!-- 眼睛（眯眼） -->
    <rect x="4" y="4" width="1" height="1" fill="#2B2B2B"/>
    <rect x="8" y="4" width="1" height="1" fill="#2B2B2B"/>
    <!-- 鼻尖（深） -->
    <rect x="6" y="7" width="1" height="1" fill="#2B2B2B"/>
    <!-- 身体 -->
    <g fill="#E8873A">
      <rect x="3" y="8" width="7" height="5"/>
      <rect x="2" y="9" width="1" height="4"/>
    </g>
    <!-- 胸腹（白） -->
    <rect x="5" y="8" width="2" height="5" fill="#FBF3E4"/>
    <!-- 大尾（上翘，白尖） -->
    <g fill="#E8873A">
      <rect x="10" y="9" width="3" height="3"/>
      <rect x="12" y="8" width="1" height="1"/>
    </g>
    <rect x="12" y="9" width="2" height="1" fill="#FBF3E4"/>
    <rect x="13" y="10" width="1" height="2" fill="#FBF3E4"/>
    <!-- 爪（深） -->
    <rect x="3" y="13" width="2" height="1" fill="#5A3A22"/>
    <rect x="7" y="13" width="2" height="1" fill="#5A3A22"/>
  </svg>`;
  },
};
