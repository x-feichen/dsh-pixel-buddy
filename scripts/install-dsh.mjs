/**
 * dsh-pixel-buddy 源码安装脚本：把"构建 → 拷贝进 profile → 注册 bundle → pnpm 安装 → 校验"
 * 固化为一条命令。
 *
 * 用法：
 *   npm run dsh:install            安装/更新到 web profile（可 --profile <name> 指定其他 profile）
 *   npm run dsh:uninstall          从 profile 移除
 *
 * 实现说明：不使用 pnpm add <绝对路径>（Windows 盘符绝对路径会被 pnpm 链接成坏链），
 * 而是把包拷贝进 <profile>/local/dsh-pixel-buddy 后以相对路径 file:./local/... 安装。
 */
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';

const PKG_NAME = 'dsh-pixel-buddy';
const PROFILE_FILES = ['package.json', 'dsh.plugin.json', 'cordis.patch.yml', 'lib', 'dsh'];
const repoRoot = resolve(import.meta.dirname, '..');

// ---- 参数 ----
const args = process.argv.slice(2);
const uninstall = args.includes('--uninstall');
const profileArgIdx = args.indexOf('--profile');
const profileName = profileArgIdx >= 0 ? args[profileArgIdx + 1] : 'web';
const profileDir = join(homedir(), '.dsh', 'profiles', profileName);

const log = (msg) => console.log(`[dsh-pixel-buddy] ${msg}`);
const fail = (msg) => {
  console.error(`[dsh-pixel-buddy] 错误：${msg}`);
  process.exit(1);
};

if (!existsSync(join(profileDir, 'package.json'))) {
  fail(`未找到 profile：${profileDir}（请确认已用 dsh 创建过该 profile）`);
}

function run(cmd, cmdArgs, cwd) {
  const r = spawnSync(cmd, cmdArgs, { cwd, stdio: 'inherit', shell: process.platform === 'win32' });
  if (r.status !== 0) fail(`${cmd} ${cmdArgs.join(' ')} 执行失败（exit ${r.status}）`);
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

// ---- 卸载 ----
if (uninstall) {
  const pkgJsonPath = join(profileDir, 'package.json');
  const pkg = readJson(pkgJsonPath);
  delete pkg.dependencies?.[PKG_NAME];
  if (Array.isArray(pkg.dsh?.profile?.bundles)) {
    pkg.dsh.profile.bundles = pkg.dsh.profile.bundles.filter((b) => b !== PKG_NAME);
  }
  writeJson(pkgJsonPath, pkg);
  run('pnpm', ['install'], profileDir);
  rmSync(join(profileDir, 'local', PKG_NAME), { recursive: true, force: true });
  log(`已从 ${profileName} profile 移除。重启 dsh web 后生效。`);
  process.exit(0);
}

// ---- 安装 ----
// 1) 构建 DSH 客户端包（dsh/client.js）
log('构建 DSH 客户端包…');
run('npm', ['run', 'build:dsh'], repoRoot);

// 2) 拷贝包体到 <profile>/local/dsh-pixel-buddy
const localCopy = join(profileDir, 'local', PKG_NAME);
log(`拷贝包体到 ${localCopy}`);
rmSync(localCopy, { recursive: true, force: true });
mkdirSync(localCopy, { recursive: true });
for (const f of PROFILE_FILES) {
  cpSync(join(repoRoot, f), join(localCopy, f), { recursive: true });
}

// 3) 注册依赖与 bundle
log('注册依赖与 bundle…');
const pkgJsonPath = join(profileDir, 'package.json');
const profilePkg = readJson(pkgJsonPath);
profilePkg.dependencies ??= {};
profilePkg.dependencies[PKG_NAME] = 'file:./local/dsh-pixel-buddy';
profilePkg.dsh ??= { profile: { bundles: [] } };
profilePkg.dsh.profile ??= { bundles: [] };
if (!profilePkg.dsh.profile.bundles.includes(PKG_NAME)) {
  profilePkg.dsh.profile.bundles.push(PKG_NAME);
}
writeJson(pkgJsonPath, profilePkg);

// 4) pnpm 安装（把 local 拷贝落到 node_modules）
log('pnpm install…');
run('pnpm', ['install'], profileDir);

// 5) 校验：客户端包可解析 + bundle 组成树包含本插件
let installedClient;
try {
  installedClient = createRequire(join(profileDir, 'package.json')).resolve(`${PKG_NAME}/client`);
} catch {
  fail(`安装后无法解析 ${PKG_NAME}/client —— 请检查 exports 与 pnpm 输出`);
}
const dump = spawnSync('dsh', ['--dump-config', '--profile', profileName], {
  encoding: 'utf8',
  shell: process.platform === 'win32',
});
if (dump.status === 0) {
  if (!dump.stdout.includes(PKG_NAME)) {
    fail(`bundle 组成树中未发现 ${PKG_NAME} —— 请检查 dsh.profile.bundles`);
  }
  log('bundle 组成树核验通过');
} else {
  log(`警告：dsh --dump-config 校验跳过（exit ${dump.status}）`);
}

log(`安装完成：${installedClient}`);
log(
  `重启 dsh web 后生效：\n  dsh web --no-open --port <port>\n然后打开任一会话，右下角应出现像素宠物。`,
);
