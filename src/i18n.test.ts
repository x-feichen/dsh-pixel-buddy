import { describe, it, expect } from 'vitest';
import { STRINGS, petName, t } from './i18n.js';

describe('国际化词典（zh/en 对齐）', () => {
  it('zh/en 两册键结构完全一致（settings/states/pets）', () => {
    const zh = STRINGS.zh;
    const en = STRINGS.en;
    expect(Object.keys(zh.settings).sort()).toEqual(Object.keys(en.settings).sort());
    expect(Object.keys(zh.states).sort()).toEqual(Object.keys(en.states).sort());
    expect(Object.keys(zh.pets).sort()).toEqual(Object.keys(en.pets).sort());
  });

  it('t() 与 petName() 按语言取值，未知键回退键名', () => {
    expect(t('zh', 'settings', 'pet')).toBe('宠物形象');
    expect(t('en', 'settings', 'pet')).toBe('Pet');
    expect(petName('zh', 'hamster')).toBe('仓鼠');
    expect(petName('en', 'hamster')).toBe('Hamster');
    expect(t('zh', 'settings', 'nope')).toBe('nope');
  });
});
