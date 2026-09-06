import { defineConfig } from 'vitest/config';

// 库模式：产物为单 IIFE 文件，script 注入即注册 <dsh-pixel-buddy>（技术选型 §4）
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'DshPixelBuddy',
      formats: ['iife'],
      fileName: () => 'dsh-pixel-buddy.iife.js',
    },
    target: 'es2020',
    sourcemap: true,
  },
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.test.ts'],
  },
});
