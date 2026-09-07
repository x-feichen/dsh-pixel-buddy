/**
 * DSH Web 客户端插件入口（T3.1 安装测试版）。
 *
 * 形态：window.__ModuleLoader__.load 包裹的 CJS 模块（与 dsh-skill-lens / dsh-better-sidebar
 * 同构），占用 `conversation.session.header.utilities` 会话级座位，但渲染产出为 null——
 * 宠物本体以命令式 Web Component 挂载在 document.body 上（复用全部既有管线）。
 *
 * 事件派生：useSession 快照（ConversationSnapshot）→ 内部会话事件。
 * 派生规则（对齐《Hook API 对齐附录》§3.2 的真实绑定回填）：
 *   error  ← snapshot.promptError 非空
 *   input-required ← snapshot.pending 非空（权限确认/用户提问等，澄清结论 D4 的真实对应物）
 *   running ← snapshot.running / partial / runningCalls
 *   idle ← 其余
 * 聚合：多会话按 报错 > 需要人工 > 运行中 > 待机 取最高优先级（T3.2 §3 的最小实现）。
 */
import { createElement, useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { ReactElement } from 'react';
import { Menu } from '@deepseek-ai/dsh-client-ui-primitives';
/* DSH 宿主类型（ConversationSnapshot 等）由宿主运行时提供，接入层以窄化别名声明 */

import { mountPixelBuddy } from '../index.js';
import type { PixelBuddyHandle } from '../index.js';
import type { PixelBuddyElement } from '../buddy/pixel-buddy.element.js';
import { petName, t } from '../i18n.js';
import type { Lang } from '../i18n.js';

const PLUGIN_VERSION = '0.1.0';
import { DevEventBus } from '../dev/event-bus.js';
import type { SessionEvent } from '../contract.js';

/** DSH 宿主运行时类型（ConversationSnapshot / slots 上下文）由宿主提供，此处以结构化别名声明 */
interface HostSnapshot {
  promptError?: unknown;
  pending?: readonly unknown[];
  running?: boolean;
  partial?: unknown;
  runningCalls?: readonly unknown[];
}
interface SlotContext {
  slots: {
    inject(seat: string, register: () => unknown): void;
    register(options: Record<string, unknown>, component: unknown): unknown;
  };
}
interface Prefs {
  pet?: string;
  visible?: boolean;
  side?: 'left' | 'right';
  bottomOffset?: number;
  blink?: boolean;
}
interface SettingsScope<T = Prefs> {
  getSnapshot(): { status: string; value: T | undefined };
  subscribe(listener: () => void): () => void;
  set(field: string, value: unknown): Promise<void>;
}
interface SettingsScopeFactory {
  bind<T = Prefs>(spec: { namespace: string }): SettingsScope<T>;
}
interface SeatProps {
  useSession(selector: (snapshot: HostSnapshot) => DerivedStatus): DerivedStatus;
  sessionId: string;
}

type DerivedStatus = 'idle' | 'running' | 'input-required' | 'error';
type SessionId = string;

const STATUS_PRIORITY: Record<DerivedStatus, number> = {
  error: 3,
  'input-required': 2,
  running: 1,
  idle: 0,
};

/** 从 ConversationSnapshot 派生单会话状态 */
function deriveStatus(snap: HostSnapshot | null | undefined): DerivedStatus {
  if (!snap) return 'idle';
  if (snap.promptError != null) return 'error';
  if (Array.isArray(snap.pending) && snap.pending.length > 0) return 'input-required';
  if (
    snap.running === true ||
    snap.partial != null ||
    (Array.isArray(snap.runningCalls) && snap.runningCalls.length > 0)
  ) {
    return 'running';
  }
  return 'idle';
}

/** 全局状态转移 → 内部事件（保持状态机契约不变，含粘滞语义的宿主侧解除） */
function emitTransition(prev: DerivedStatus | null, next: DerivedStatus): void {
  const emit = (type: SessionEvent['type'] | 'user-ack') => DevEventBus.dispatch({ type } as SessionEvent);
  const startIfNeeded = (): void => {
    if (prev !== 'running') emit('task-start');
  };

  if (prev === null) {
    // 晚加载：直接对齐当前全局状态
    if (next === 'running') emit('task-start');
    if (next === 'error') {
      emit('task-start');
      emit('task-error');
    }
    if (next === 'input-required') {
      emit('task-start');
      emit('input-required');
    }
    return;
  }

  if (prev === next) return;

  switch (next) {
    case 'running':
      // 宿主侧已解除粘滞（如用户回答了提问/确认了权限）→ 以 user-ack 清位后回到运行中
      if (prev === 'error' || prev === 'input-required') emit('user-ack');
      startIfNeeded();
      break;
    case 'idle':
      if (prev === 'error' || prev === 'input-required') emit('user-ack');
      if (prev === 'running') emit('task-success');
      break;
    case 'input-required':
      if (prev === 'error' || prev === 'input-required') emit('user-ack');
      startIfNeeded();
      emit('input-required');
      break;
    case 'error':
      startIfNeeded();
      emit('task-error');
      break;
  }
}

/** 全局聚合引擎：各会话状态上报 → 全局最高优先级 → 转移事件 */
const engine = {
  statusBySession: new Map<SessionId, DerivedStatus>(),
  globalPrev: null as DerivedStatus | null,
  update(sessionId: SessionId, status: DerivedStatus): void {
    this.statusBySession.set(sessionId, status);
    let next: DerivedStatus = 'idle';
    for (const s of this.statusBySession.values()) {
      if (STATUS_PRIORITY[s] > STATUS_PRIORITY[next]) next = s;
    }
    if (next !== this.globalPrev) {
      emitTransition(this.globalPrev, next);
      this.globalPrev = next;
    }
  },
  remove(sessionId: SessionId): void {
    this.statusBySession.delete(sessionId);
    if (this.statusBySession.size === 0) this.globalPrev = null;
    else this.update(sessionId, this.statusBySession.values().next().value as DerivedStatus);
  },
};

let buddyHandle: PixelBuddyHandle | null = null;
let mountCount = 0;

/** 用户偏好（设置命名空间 dsh-pixel-buddy 的客户端镜像；未就绪时用默认值） */
const prefs: Required<Prefs> = { pet: 'duck', visible: true, side: 'right', bottomOffset: 16, blink: false };
let prefsScope: SettingsScope | null = null;
/** 宿主语言（locale 命名空间 preference 字段），缺省中文 */
let lang: Lang = 'zh';
let localeScope: SettingsScope<{ preference?: string }> | null = null;
const localeListeners = new Set<() => void>();
function onLangChange(listener: () => void): () => void {
  localeListeners.add(listener);
  return () => localeListeners.delete(listener);
}

function applyPrefsToElement(): void {
  const el = document.querySelector('dsh-pixel-buddy');
  if (!el) return;
  el.setAttribute('pet', prefs.pet);
  (el as HTMLElement).style.display = prefs.visible ? '' : 'none';
  el.setAttribute('side', prefs.side);
  (el as PixelBuddyElement).bottomOffset = prefs.bottomOffset;
  (el as PixelBuddyElement).blink = prefs.blink;
}

function PixelBuddySeat(props: SeatProps): null {
  const { useSession, sessionId } = props;
  const status = useSession(deriveStatus);

  useEffect(() => {
    engine.update(sessionId, status);
  }, [sessionId, status]);

  useEffect(() => {
    mountCount += 1;
    if (!buddyHandle) {
      buddyHandle = mountPixelBuddy(document.body, { adapter: DevEventBus });
    }
    applyPrefsToElement();
    const el0 = document.querySelector('dsh-pixel-buddy');
    if (el0) (el0 as PixelBuddyElement).lang = lang;
    const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement | null;
    if (el) {
      el.onDragEnd = (px: number) => void prefsScope?.set('bottomOffset', px);
      el.onContextMenu = () => openBuddyMenu(prefs.side);
    }
    return () => {
      mountCount -= 1;
      if (mountCount === 0 && buddyHandle) {
        buddyHandle.destroy();
        buddyHandle = null;
        engine.globalPrev = null;
      }
    };
  }, []);

  return null;
}

export const inject = ['slots', 'settingsScope'];

export function apply(ctx: SlotContext & { settingsScope: SettingsScopeFactory }): void {
  // 用户偏好：订阅命名空间，变更实时应用到本体
  const scope = ctx.settingsScope.bind({ namespace: 'dsh-pixel-buddy' });
  prefsScope = scope;
  localeScope = ctx.settingsScope.bind<{ preference?: string }>({ namespace: 'locale' });
  const consumeLocale = (): void => {
    if (!localeScope) return;
    const pref = localeScope.getSnapshot().value?.preference;
    const next: Lang = pref === 'en' ? 'en' : 'zh';
    if (next !== lang) {
      lang = next;
      const el = document.querySelector('dsh-pixel-buddy');
      if (el) (el as PixelBuddyElement).lang = lang;
      for (const listener of localeListeners) listener();
    }
  };
  localeScope.subscribe(consumeLocale);
  // 临时诊断
  (window as unknown as Record<string, unknown>).__dshBuddyLocale = localeScope;
  consumeLocale();
  const consume = (): void => {
    const snap = scope.getSnapshot();
    if (snap.value?.pet) prefs.pet = snap.value.pet;
    if (typeof snap.value?.visible === 'boolean') prefs.visible = snap.value.visible;
    if (snap.value?.side === 'left' || snap.value?.side === 'right') prefs.side = snap.value.side;
    if (typeof snap.value?.bottomOffset === 'number') prefs.bottomOffset = snap.value.bottomOffset;
    if (typeof snap.value?.blink === 'boolean') prefs.blink = snap.value.blink;
    applyPrefsToElement();
  };
  scope.subscribe(consume);
  consume();

  ctx.slots.inject(
    'settings.general.item',
    () =>
      ctx.slots.register(
        { name: 'settings.general.item', id: 'dsh-pixel-buddy', order: 90 },
        () => PixelBuddySettingsItem(scope),
      ),
  );

  ctx.slots.inject(
    'conversation.session.header.utilities',
    () =>
      ctx.slots.register(
        {
          name: 'conversation.session.header.utilities',
          id: 'dsh-pixel-buddy',
          order: 90,
          label: 'PixelBuddy',
        },
        PixelBuddySeat,
      ),
  );
}

/** 宠物选项（与 pets/index.ts 注册表对齐；文案为展示名） */
const PET_IDS = ['duck', 'cat', 'dog', 'rabbit', 'fox', 'hamster', 'panda', 'frog'] as const;

const rowStyle: Record<string, string> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  padding: '8px 0',
  minHeight: '32px',
};
const labelStyle: Record<string, string> = { color: 'inherit' };
const anchorStyle: Record<string, string> = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '4px 10px',
  background: 'rgba(127, 127, 127, 0.12)',
  border: '1px solid rgba(127, 127, 127, 0.25)',
  borderRadius: '8px',
  color: 'inherit',
  font: 'inherit',
  fontSize: '13px',
  cursor: 'pointer',
};
const chevronStyle: Record<string, string> = { opacity: '0.6', fontSize: '10px' };
/** 语言切换时重挂设置行（locale 非响应式字段，靠组件自身订阅） */
export function notifyLangChange(): void {
  for (const listener of localeListeners) listener();
}

/** 滑动开关（对齐 DSH 控件观感：圆角胶囊 + 滑块，150ms 过渡） */
function ToggleSwitch(props: { checked: boolean; onChange(next: boolean): void }): ReactElement {
  const { checked, onChange } = props;
  const track: Record<string, string> = {
    width: '36px',
    height: '20px',
    borderRadius: '10px',
    background: checked ? '#4C7DFF' : 'rgba(127, 127, 127, 0.35)',
    border: 'none',
    padding: '2px',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background 150ms linear',
    justifyContent: checked ? 'flex-end' : 'flex-start',
  };
  const knob: Record<string, string> = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: '#ffffff',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
    transition: 'transform 150ms linear',
  };
  return createElement('button', {
    type: 'button',
    role: 'switch',
    'aria-checked': checked,
    style: track,
    onClick: () => onChange(!checked),
  }, createElement('span', { style: knob }));
}

/**
 * 通用设置页偏好行（settings.general.item）：
 * 宠物形象 = DSH 风格下拉（Menu 原语），显示宠物 = 滑动开关。
 * 写路径经 SettingsScope.set（带 revision 防冲突），读路径订阅快照实时重渲。
 */
function PixelBuddySettingsItem(scope: SettingsScope): ReactElement {
  const [, force] = useReducer((n: number) => n + 1, 0);
  const [petMenuOpen, setPetMenuOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  useEffect(() => scope.subscribe(force), [scope]);
  useEffect(() => onLangChange(force), []);

  const snap = scope.getSnapshot();
  const pet = snap.value?.pet ?? 'duck';
  const visible = snap.value?.visible ?? true;

  return createElement(
    'div',
    null,
    createElement(
      'div',
      { style: rowStyle },
      createElement('span', { style: labelStyle }, t(lang, 'settings', 'pet')),
      createElement(Menu, {
        open: petMenuOpen,
        portal: true,
        anchor: createElement(
          'button',
          {
            type: 'button',
            style: anchorStyle,
            'aria-haspopup': 'listbox',
            'aria-expanded': petMenuOpen,
            onClick: () => setPetMenuOpen((now) => !now),
          },
          createElement('span', null, petName(lang, pet)),
          createElement('span', { style: chevronStyle }, '▼'),
        ),
        items: PET_IDS.map((id) => ({ id, label: petName(lang, id) })),
        selectedId: pet,
        onSelect: (id: string) => {
          if ((PET_IDS as readonly string[]).includes(id)) void scope.set('pet', id);
          setPetMenuOpen(false);
        },
        onClose: () => setPetMenuOpen(false),
      }),
    ),
    createElement(
      'div',
      { style: rowStyle },
      createElement('span', { style: labelStyle }, t(lang, 'settings', 'side')),
      createElement(Menu, {
        open: sideMenuOpen,
        portal: true,
        anchor: createElement(
          'button',
          {
            type: 'button',
            style: anchorStyle,
            'aria-haspopup': 'listbox',
            'aria-expanded': sideMenuOpen,
            onClick: () => setSideMenuOpen((now) => !now),
          },
          createElement('span', null, t(lang, 'settings', prefs.side === 'left' ? 'sideLeft' : 'sideRight')),
          createElement('span', { style: chevronStyle }, '▼'),
        ),
        items: (['right', 'left'] as const).map((id) => ({ id, label: t(lang, 'settings', id === 'left' ? 'sideLeft' : 'sideRight') })),
        selectedId: prefs.side,
        onSelect: (id: string) => {
          if (id === 'left' || id === 'right') void scope.set('side', id);
          setSideMenuOpen(false);
        },
        onClose: () => setSideMenuOpen(false),
      }),
    ),
    createElement(
      'div',
      { style: rowStyle },
      createElement('span', { style: labelStyle }, t(lang, 'settings', 'showPet')),
      createElement(ToggleSwitch, {
        checked: visible,
        onChange: (next: boolean) => {
          void scope.set('visible', next);
        },
      }),
    ),
    createElement(
      'div',
      { style: rowStyle },
      createElement('span', { style: labelStyle }, t(lang, 'settings', 'blink')),
      createElement(ToggleSwitch, {
        checked: prefs.blink,
        onChange: (next: boolean) => {
          void scope.set('blink', next);
        },
      }),
    ),
  );
}


// ===================== 右键菜单 =====================

type MenuPage = 'main' | 'pets' | 'about';
const VIEWPORT_MARGIN = 8;

/**
 * 锚点定位策略（产品裁决 2026-09-06）：
 * 宠物在右侧 → 菜单在宠物左上方向上展开（菜单右缘对齐宠物左缘）；
 * 宠物在左侧 → 菜单在宠物右上方向上展开（菜单左缘对齐宠物右缘）。
 * 渲染后按菜单实测尺寸做视口内钳制，绝不产生页面滚动条。
 */
/** 兼容方案（摸底结论：宿主无官方 API）：模拟点击宿主原生按钮。宿主 UI 改版可能失效。 */
function clickHostButton(names: string[]): boolean {
  const dialogOrBody = document.querySelector('[role="dialog"]') ?? document;
  const buttons = [...(dialogOrBody as HTMLElement).querySelectorAll('button')];
  for (const name of names) {
    const hit = buttons.find((b) => b.textContent?.trim() === name);
    if (hit) {
      hit.click();
      return true;
    }
  }
  return false;
}

function BuddyMenuApp(props: {
  side: 'left' | 'right';
  petRectJson: string;
  close: () => void;
}): ReactElement {
  const { side, petRectJson, close } = props;
  const scope = prefsScope as SettingsScope;
  const [page, setPage] = useState<MenuPage>('main');
  const [, force] = useReducer((n: number) => n + 1, 0);
  const listRef = useRef<HTMLElement | null>(null);
  useEffect(() => scope.subscribe(force), [scope]);
  useEffect(() => onLangChange(force), []);

  const snap = scope.getSnapshot();
  const pet = snap.value?.pet ?? 'duck';
  const visible = snap.value?.visible ?? true;
  const blink = snap.value?.blink ?? false;

  // 点击菜单外或 Escape 关闭
  useEffect(() => {
    const onPointerDown = (e: PointerEvent): void => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest('[data-buddy-menu]')) close();
    };
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('keydown', onKey);
    };
  }, [close]);

  // 定位：侧别方向 + 向上展开 + 视口内钳制（渲染后按实测尺寸计算，幂等）
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const r = list.getBoundingClientRect();
    const target = JSON.parse(petRectJson) as { left: number; right: number; top: number };
    let left = side === 'right' ? target.left - r.width - 4 : target.right + 4;
    let top = target.top - r.height - 4; // 向上展开，不遮挡宠物
    left = Math.min(Math.max(left, VIEWPORT_MARGIN), window.innerWidth - r.width - VIEWPORT_MARGIN);
    top = Math.min(Math.max(top, VIEWPORT_MARGIN), window.innerHeight - r.height - VIEWPORT_MARGIN);
    list.style.left = `${Math.round(left)}px`;
    list.style.top = `${Math.round(top)}px`;
  });

  const posStyle: Record<string, string> = {
    position: 'fixed',
    left: '0px',
    top: '0px',
    zIndex: '2147483000',
  };

  const item = (id: string, label: string): { id: string; label: string } => ({ id, label });

  function handleMenuSelect(id: string): void {
    if (id === '__pet') {
      setPage('pets');
      return;
    }
    if (id === '__back') {
      setPage('main');
      return;
    }
    if (id === '__hide') {
      void scope.set('visible', !visible);
      close();
      return;
    }
    if (id === '__reset') {
      const el = document.querySelector('dsh-pixel-buddy') as PixelBuddyElement | null;
      el?.resetPosition();
      void scope.set('bottomOffset', 16);
      close();
      return;
    }
    if (id === '__blink') {
      void scope.set('blink', !blink);
      close();
      return;
    }
    if (id === '__settings') {
      close();
      setTimeout(() => clickHostButton(['设置', 'Settings']), 50);
      return;
    }
    if (id === '__new') {
      close();
      setTimeout(() => clickHostButton(['新建会话', 'New session', '新会话']), 50);
      return;
    }
    if (id === '__about') {
      setPage('about');
      return;
    }
    if ((PET_IDS as readonly string[]).includes(id)) {
      void scope.set('pet', id);
      close();
    }
  }

  let items: Array<{ id: string; label: string }>;
  let selectedId: string | undefined;
  if (page === 'pets') {
    items = [
      ...PET_IDS.map((id) => item(id, petName(lang, id))),
      item('__back', t(lang, 'menu', 'back')),
    ];
    selectedId = pet;
  } else if (page === 'about') {
    items = [
      item('version', PLUGIN_VERSION + ' · ' + t(lang, 'menu', 'aboutTagline')),
      item('__back', t(lang, 'menu', 'back')),
    ];
  } else {
    items = [
      item('__pet', t(lang, 'menu', 'pet') + ' ▸'),
      item('__hide', t(lang, 'menu', visible ? 'hide' : 'show')),
      item('__reset', t(lang, 'menu', 'resetPosition')),
      item('__blink', t(lang, 'menu', 'blink') + (blink ? ' ✓' : '')),
      item('__settings', t(lang, 'menu', 'openSettings')),
      item('__new', t(lang, 'menu', 'newSession')),
      item('__about', t(lang, 'menu', 'about')),
    ];
  }

  return createElement(
    'div',
    {
      'data-buddy-menu': '',
      style: posStyle,
    },
    createElement('style', null, MENU_CSS),
    createElement(
      'div',
      { className: 'buddy-menu-list', role: 'menu', ref: listRef as never },
      items.map((it) =>
        createElement(
          'div',
          {
            key: it.id,
            className: 'buddy-menu-item' + (selectedId === it.id ? ' selected' : ''),
            role: 'menuitem',
            onClick: () => handleMenuSelect(it.id),
          },
          it.label,
        ),
      ),
    ),
  );
}

/** 菜单样式：深浅主题自适应（跟随系统），hover 高亮，选中项标记 */
const MENU_CSS = [
  '.buddy-menu-list {',
  '  position: absolute; left: 0; top: 0; min-width: 170px;',
  "  background: #22262e; color: #e8eaed;",
  '  border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 4px;',
  '  box-shadow: 0 6px 24px rgba(0,0,0,0.4); font-size: 13px;',
  '}',
  '.buddy-menu-item { padding: 7px 12px; border-radius: 6px; cursor: pointer; white-space: nowrap; }',
  '.buddy-menu-item:hover { background: rgba(255,255,255,0.08); }',
  '.buddy-menu-item.selected { color: #7ea6ff; }',
  '@media (prefers-color-scheme: light) {',
  '  .buddy-menu-list { background: #ffffff; color: #1f232b; border-color: rgba(0,0,0,0.1); box-shadow: 0 6px 24px rgba(0,0,0,0.15); }',
  '  .buddy-menu-item:hover { background: rgba(0,0,0,0.06); }',
  '  .buddy-menu-item.selected { color: #2563eb; }',
  '}',
].join('\n');

let menuRoot: ReturnType<typeof createRoot> | null = null;
let menuContainer: HTMLElement | null = null;

/** 打开右键菜单（单例 root；锚点按宠物位置与侧别计算） */
function openBuddyMenu(side: 'left' | 'right'): void {
  const el = document.querySelector('dsh-pixel-buddy');
  if (!el) return;
  const petRect = el.getBoundingClientRect().toJSON();
  if (!menuContainer) {
    menuContainer = document.createElement('div');
    document.body.appendChild(menuContainer);
    menuRoot = createRoot(menuContainer);
  }
  const close = (): void => {
    menuRoot?.render(createElement('span', { style: { display: 'none' } }));
  };
  menuRoot?.render(
    createElement(BuddyMenuApp, { side, petRectJson: JSON.stringify(petRect), close }),
  );
}
