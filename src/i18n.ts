/**
 * 双语词典（国际化，2026-09-06）。
 * 语言来源：宿主设置命名空间 `locale` 的 `preference` 字段（zh/en），
 * 由 DSH 客户端接入层绑定 settingsScope 读取并响应式下发；缺省回退中文。
 */
export type Lang = 'zh' | 'en';

export const STRINGS = {
  zh: {
    settings: {
      pet: '宠物形象',
      side: '显示位置',
      showPet: '显示宠物',
      blink: '待机眨眼动画',
      sideRight: '右侧',
      sideLeft: '左侧',
    },
    pets: {
      duck: '鸭子',
      cat: '猫',
      dog: '狗',
      rabbit: '兔子',
      fox: '狐狸',
      hamster: '仓鼠',
      panda: '熊猫',
      frog: '青蛙',
    },
    states: {
      idle: '会话空闲',
      running: '会话运行中',
      inputRequired: '会话需要人工介入',
      error: '会话出现异常',
      success: '任务成功完成',
    },
  },
  en: {
    settings: {
      pet: 'Pet',
      side: 'Position',
      showPet: 'Show pet',
      blink: 'Idle blink animation',
      sideRight: 'Right',
      sideLeft: 'Left',
    },
    pets: {
      duck: 'Duck',
      cat: 'Cat',
      dog: 'Dog',
      rabbit: 'Rabbit',
      fox: 'Fox',
      hamster: 'Hamster',
      panda: 'Panda',
      frog: 'Frog',
    },
    states: {
      idle: 'Session idle',
      running: 'Session running',
      inputRequired: 'Input required',
      error: 'Session error',
      success: 'Task completed',
    },
  },
} as const;

export type StringKey = keyof (typeof STRINGS)['zh'];

export function t(lang: Lang, section: 'settings' | 'states', key: string): string {
  return (STRINGS[lang] ?? STRINGS.zh)[section][key as never] ?? key;
}

export function petName(lang: Lang, petId: string): string {
  return (STRINGS[lang] ?? STRINGS.zh).pets[petId as never] ?? petId;
}
