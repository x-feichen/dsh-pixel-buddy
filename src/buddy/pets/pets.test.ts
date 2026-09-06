import { describe, it, expect, beforeEach } from 'vitest';
import { PET_SPRITES, PET_LIST, resolvePet, DEFAULT_PET_ID } from './index.js';
import type { PixelBuddyElement} from '../pixel-buddy.element.js';
import { registerPixelBuddy } from '../pixel-buddy.element.js';

describe('宠物注册表与切换（多形象支持）', () => {
  it('每种宠物 id 唯一、SVG 为 16x16 crispEdges', () => {
    expect(PET_LIST.length).toBeGreaterThanOrEqual(8);
    expect(new Set(PET_LIST.map((p) => p.id)).size).toBe(PET_LIST.length);
    for (const pet of PET_LIST) {
      const svg = pet.svg();
      expect(svg).toContain('viewBox="0 0 16 16"');
      expect(svg).toContain('crispEdges');
      expect(svg).not.toMatch(/animation|transition/i); // 本体红线
    }
    expect(PET_SPRITES[DEFAULT_PET_ID]).toBeDefined();
  });

  it('resolvePet：未知/缺省回退默认宠物，已知 id 精确命中', () => {
    expect(resolvePet('cat').id).toBe('cat');
    expect(resolvePet('dog').id).toBe('dog');
    expect(resolvePet('unknown-pet').id).toBe(DEFAULT_PET_ID);
    expect(resolvePet(null).id).toBe(DEFAULT_PET_ID);
  });

  describe('元素 pet 属性切换', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      registerPixelBuddy();
      document.body.appendChild(document.createElement('dsh-pixel-buddy'));
    });

    function buddy(): PixelBuddyElement {
      return document.querySelector('dsh-pixel-buddy') as PixelBuddyElement;
    }
    function petSvg(): string {
      return (buddy() as unknown as { __testPetSvg(): string }).__testPetSvg();
    }

    it('默认渲染鸭子；pet 属性切换形象，非法值回退', () => {
      expect(buddy().pet).toBe(DEFAULT_PET_ID);
      buddy().setAttribute('pet', 'cat');
      expect(buddy().pet).toBe('cat');
      expect(petSvg()).toContain('F2A6B8'); // 猫的粉耳色
      buddy().setAttribute('pet', 'dog');
      expect(petSvg()).toContain('C94F4F'); // 狗的红项圈
      buddy().setAttribute('pet', 'nope');
      expect(buddy().pet).toBe(DEFAULT_PET_ID);
    });
  });
});
