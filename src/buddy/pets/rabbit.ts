import type { PetSprite } from './types.js';

/** 兔子（白毛粉耳，长耳在头部左上，尾团在侧下） */
export const rabbit: PetSprite = {
  id: 'rabbit',
  label: '兔子',
  svg() {
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <!-- 长耳（左外侧粉内耳） -->
    <g fill="#F5F7FA">
      <rect x="3" y="0" width="2" height="5"/>
      <rect x="6" y="0" width="2" height="4"/>
    </g>
    <rect x="3" y="1" width="1" height="3" fill="#F2A6B8"/>
    <rect x="7" y="1" width="1" height="2" fill="#F2A6B8"/>
    <!-- 头部（圆轮廓） -->
    <g fill="#F5F7FA">
      <rect x="2" y="4" width="8" height="5"/>
      <rect x="1" y="5" width="1" height="3"/>
      <rect x="10" y="5" width="1" height="3"/>
    </g>
    <!-- 眼睛（红瞳点缀） -->
    <rect x="4" y="6" width="1" height="1" fill="#C94F4F"/>
    <rect x="8" y="6" width="1" height="1" fill="#C94F4F"/>
    <!-- 鼻与嘴 -->
    <rect x="6" y="7" width="1" height="1" fill="#F2A6B8"/>
    <rect x="6" y="8" width="1" height="1" fill="#C9CDD3"/>
    <!-- 腮红 -->
    <rect x="2" y="7" width="1" height="1" fill="#F7C8D2"/>
    <rect x="9" y="7" width="1" height="1" fill="#F7C8D2"/>
    <!-- 身体（蜷坐） -->
    <g fill="#F5F7FA">
      <rect x="3" y="9" width="8" height="4"/>
      <rect x="2" y="10" width="1" height="3"/>
      <rect x="11" y="10" width="1" height="2"/>
    </g>
    <!-- 尾团（浅粉） -->
    <rect x="12" y="11" width="1" height="2" fill="#F2A6B8"/>
    <!-- 前爪（浅灰阴影） -->
    <rect x="3" y="13" width="2" height="1" fill="#C9CDD3"/>
    <rect x="8" y="13" width="2" height="1" fill="#C9CDD3"/>
  </svg>`;
  },

  blinkOverlay() {
    return `<rect x="4" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="8" y="6" width="1" height="1" fill="#F5F7FA"/><rect x="4" y="6" width="1" height="1" fill="#C9CDD3"/><rect x="8" y="6" width="1" height="1" fill="#C9CDD3"/>`;
  },
};
