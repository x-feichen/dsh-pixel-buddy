/**
 * DSH 客户端包构建：esbuild 打包 src/dsh/client.ts 为 CJS，
 * 再包裹 __ModuleLoader__.load 工厂（与 dsh 插件客户端加载器同构）。
 * react 保持 external —— 运行时经工厂注入的 require 解析宿主提供的 react。
 */
import { build } from 'esbuild';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const result = await build({
  entryPoints: [join(root, 'src/dsh/client.ts')],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: 'es2020',
  external: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', '@deepseek-ai/dsh-client-ui-primitives'],
  write: false,
  legalComments: 'none',
  minify: true,
});

const wrapped =
  `window.__ModuleLoader__.load({\n` +
  `  id: "dsh-pixel-buddy",\n` +
  `  factory: (require) => {\n` +
  `    var module = { exports: {} };\n` +
  `    var exports = module.exports;\n` +
  result.outputFiles[0].text +
  `\n    return module.exports;\n` +
  `  }\n` +
  `});\n`;

const outPath = join(root, 'dsh/client.js');
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, wrapped);
console.log(`dsh/client.js written (${wrapped.length} bytes)`);
