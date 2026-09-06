# dsh-pixel-buddy

DSH Web 桌面宠物插件：页面右下角常驻像素小伙伴，随会话状态以右上角徽章传达当前状态（待机/运行中/需要人工/报错/成功），零常态性能开销。

## 快速开始

```bash
npm install     # 安装依赖
npm run dev     # 本地联调（devhost 模拟宿主 + 事件触发面板）
npm test        # 全量测试（58 条）
npm run build   # 产出 dist/dsh-pixel-buddy.iife.js（单文件，gzip ≈ 5.2KB）
npm run lint    # 代码检查
```

## 安装到 DSH

插件以 DSH 客户端模块形式接入（已在本机 `@deepseek-ai/dsh@0.1.0-rc.8` web profile 实测）。

### 前置

- 已安装 DSH CLI（`npm i -g @deepseek-ai/dsh`），存在 web profile（`~/.dsh/profiles/web`）。

### 步骤

1. **构建 DSH 客户端包**（产物 `dsh/client.js`，`__ModuleLoader__` 工厂格式）：

   ```bash
   npm install
   npm run build:dsh
   ```

2. **安装插件包到 profile**。官方通道是 `dsh plugin --profile web add <包>`（内部转发 pnpm）。本机开发推荐直接把本仓库拷入 profile 的 `local/` 目录后以相对路径安装，避免盘符绝对路径在 pnpm 下产生坏链：

   ```bash
   PROFILE=~/.dsh/profiles/web
   mkdir -p $PROFILE/local
   cp -r <本仓库> $PROFILE/local/dsh-pixel-buddy        # 排除 node_modules/dist
   cd $PROFILE && pnpm add "file:./local/dsh-pixel-buddy"
   ```

3. **挂载到 profile bundle 栈**。正常情况下 CLI 会依据包内 `dsh.bundle.patch` 自动 reconcile；如未生效，手动把 `dsh-pixel-buddy` 追加进 `$PROFILE/package.json` 的 `dsh.profile.bundles` 数组。

4. **重启 profile 并验证**：

   ```bash
   dsh web --no-open --port 8765
   ```

   验证要点：`curl http://127.0.0.1:8765/plugins/dsh-pixel-buddy/client.js` 返回 200；打开任一会话，右下角出现像素宠物；设置 → 通用设置底部出现"宠物形象/显示宠物"偏好行。

### 使用

- **切换宠物 / 显示隐藏**：设置 → 通用设置 → "宠物形象"下拉与"显示宠物"开关；偏好持久化到宿主设置文档（`~/.dsh/settings.yaml` 的 `dsh-pixel-buddy` 段）。
- **独立页面用法**（非 DSH 环境）：引入 `dist/dsh-pixel-buddy.iife.js`（script 注入即自动挂载），可用属性：
  `pet`（`duck/cat/dog/rabbit/fox/penguin/panda/frog`）、`size`（`32/40/48`）、`theme`（`light/dark/auto`）；卸载 `window.dshPixelBuddy.destroy()`。

## 交互说明

- 报错 / 需要人工徽章**粘滞**：不自动消失，**单击宠物本体**确认消除。
- 成功徽章展示 2.5 秒后自动淡出。
- 徽章过渡 150ms 交叉淡入淡出；本体无任何动画。
- `prefers-reduced-motion` 开启时自动取消过渡动效。

## 架构

```
DSH Hook API ─► DshHookAdapter（唯一感知宿主 API 的模块）
                    │ 内部事件契约（contract.ts，签名冻结）
                    ▼
             状态机 reducer（buddy-state-machine.ts，纯函数 + fuzz 覆盖）
                    ▼
             状态控制器（buddy-state-controller.ts，一次性定时器驱动）
                    ▼
             <dsh-pixel-buddy> Web Component（Shadow DOM closed）
```

详细文档见 `docs/`：产品需求、任务规划、需求澄清结论、Hook API 对齐附录、美术资产需求单、技术选型、M1/M2 出口评审报告。

## 已知边界

- MVP 仅反映当前激活标签页的会话。
- 页面刷新后回待机（无快照 API 的保守降级）。
- Hook API 事件名为占位，以《Hook API 对齐附录》§5 核实清单回填为准。
