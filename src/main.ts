/**
 * 生产入口（IIFE）：script 注入即自动挂载，并暴露全局句柄供宿主/调试销毁。
 * devhost 联调请使用 src/index.ts（可注入 mock 适配器）。
 */
import { mountPixelBuddy } from './index.js';

declare global {
  interface Window {
    dshPixelBuddy?: ReturnType<typeof mountPixelBuddy>;
  }
}

if (typeof window !== 'undefined') {
  window.dshPixelBuddy = mountPixelBuddy();
}
