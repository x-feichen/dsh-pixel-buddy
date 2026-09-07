# dsh-pixel-buddy

DSH Web 桌面宠物插件：页面右下角常驻像素小伙伴，随会话状态在头顶以徽章传达当前状态（待机/运行中/需要人工/报错/成功），支持垂直拖拽、右键菜单、双语界面与偏好持久化，零常态性能开销。

## 功能一览

| 能力 | 说明 |
|---|---|
| 8 只像素宠物 | 鸭子/猫/狗/兔子/狐狸/仓鼠/熊猫/青蛙（每宠物一个文件，注册表扩展） |
| 状态徽章 | 运行中蓝点 / 需要人工黄问号 / 报错红叹号 / 成功绿勾；150ms 交叉淡入淡出；报错与需要人工**粘滞**，单击宠物消除 |
| 垂直拖拽 | 按住左键上下移动，松手停住；左右位置由设置控制 |
| 右键菜单 | 宠物形象切换、隐藏/显示、回到默认位置、待机眨眼开关、关于、打开设置、新建会话 |
| 待机眨眼 | 纯 CSS 眨眼动画（设置项，默认关；prefers-reduced-motion 停用） |
| 国际化 | 中文/英文，随宿主语言实时切换 |
| 偏好持久化 | 宠物/侧别/显隐/垂直位置/眨眼 全部存宿主设置文档 |
| 性能 | 零 rAF 轮询、零常态定时器、零运行时依赖，gzip ≈ 6KB（IIFE） |

## 快速开始

```bash
npm install       # 安装依赖
npm run build:dsh # 产出 dsh/client.js（DSH 客户端包）
```

## 安装到 DSH

插件以 DSH 客户端模块形式接入（已在本机 `@deepseek-ai/dsh@0.1.0-rc.8` web profile 实测）。前置：已安装 DSH CLI（`npm i -g @deepseek-ai/dsh`）且存在 web profile（`~/.dsh/profiles/web`）。

```bash
npm run dsh:install     # 构建 + 拷贝进 profile + 注册 bundle + pnpm 安装 + 组成树校验
npm run dsh:uninstall   # 移除
```

默认安装到 `web` profile，其他 profile 用 `npm run dsh:install -- --profile <name>`；安装/更新后重启 profile 生效（`dsh web --no-open --port <port>`）。

### 通过 npm 安装（dsh plugin）

插件已发布为 npm 包（dsh-pixel-buddy）。标准安装方式：

```bash
dsh plugin --profile web add dsh-pixel-buddy
```

命令内部转发 pnpm 安装，读取包内 dsh.bundle.patch 自动把插件挂载进 profile 的 bundle 栈；重启 `dsh web` 后生效。移除：

```bash
dsh plugin --profile web remove dsh-pixel-buddy
```

> 本机偏好等设置数据独立存放（~/.dsh/settings.yaml），重装/更新插件不影响。

### 发布到 npm（维护者）

前置：已注册 npm 账号并 `npm login`；包名 dsh-pixel-buddy 已确认可发布（2026-09-07）。

```bash
npm version patch        # 或 minor / major，版本号符合 semver
npm publish              # prepublishOnly 自动跑 lint + test + build:dsh
```

发布前自动校验（prepublishOnly）：lint、75 条测试、重新构建 dsh/client.js——确保发布产物与源码一致。发布内容由 package.json#files 白名单控制：

- lib/（服务端插件入口）、dsh/client.js（客户端包）、dsh.plugin.json、cordis.patch.yml（bundle 挂载声明）、scripts/（构建/安装脚本）、README.md；
- src/ 源码与测试、docs/ 不随包发布。

## 使用

- **设置**：DSH 设置 → 通用设置 → “宠物形象 / 显示位置 / 显示宠物 / 待机眨眼动画”，偏好持久化到 `~/.dsh/settings.yaml` 的 `dsh-pixel-buddy` 段；
- **拖拽**：按住左键上下拖动宠物（左右锁定），松手停留并持久化；
- **右键菜单**：切换宠物、隐藏/显示、回到默认位置、眨眼开关、关于、打开设置、新建会话；
- **粘滞徽章**：报错/需要人工不自动消失，**单击宠物**确认消除；
- **独立页面用法**（非 DSH 环境）：引入 `dist/dsh-pixel-buddy.iife.js`（script 注入即自动挂载），可用属性：
  `pet`（`duck/cat/dog/rabbit/fox/hamster/panda/frog`）、`size`（`32/40/48`）、`theme`（`light/dark/auto`）、`lang`（`zh/en`）；卸载 `window.dshPixelBuddy.destroy()`。

## 架构

```
DSH 会话快照（useSession）──► src/dsh/client.ts（派生内部事件 / 设置面板 / 右键菜单）
                                    │ 内部事件契约（contract.ts）
                                    ▼
                              EventBus（src/bus，发布-订阅中枢）
                                    ▼
                        状态机 reducer（纯函数 + fuzz 覆盖）
                                    ▼
                        状态控制器（一次性定时器驱动）
                                    ▼
                    <dsh-pixel-buddy> Web Component（Shadow DOM closed）
```
