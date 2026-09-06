import { readFileSync } from 'node:fs';

const decode = (s) => s.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
const files = {
  repo: 'dsh/client.js',
  local: process.env.USERPROFILE + '/.dsh/profiles/web/local/dsh-pixel-buddy/dsh/client.js',
  nm: process.env.USERPROFILE + '/.dsh/profiles/web/node_modules/dsh-pixel-buddy/dsh/client.js',
};
for (const [label, path] of Object.entries(files)) {
  const d = decode(readFileSync(path, 'utf8'));
  console.log(
    label.padEnd(14),
    '| 鸭子:', d.includes('鸭子'),
    '| 仓鼠:', d.includes('仓鼠'),
    '| 企鹅:', d.includes('企鹅'),
    '| 眨眼行:', d.includes('待机眨眼动画'),
  );
}
