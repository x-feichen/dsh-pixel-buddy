import type { PetSprite } from './types.js';
import { duck } from './duck.js';
import { cat } from './cat.js';
import { dog } from './dog.js';
import { rabbit } from './rabbit.js';
import { fox } from './fox.js';
import { hamster } from './hamster.js';
import { panda } from './panda.js';
import { frog } from './frog.js';

/** 宠物注册表：新增宠物 = 新建一个文件实现 PetSprite 并在此登记 */
export const PET_SPRITES: Readonly<Record<string, PetSprite>> = {
  duck,
  cat,
  dog,
  rabbit,
  fox,
  hamster,
  panda,
  frog,
};

export const DEFAULT_PET_ID = 'duck';

export const PET_LIST: readonly PetSprite[] = Object.values(PET_SPRITES);

/** 解析宠物 id；未知/缺省回退默认宠物 */
export function resolvePet(id: string | null | undefined): PetSprite {
  return (id != null ? PET_SPRITES[id] : undefined) ?? PET_SPRITES[DEFAULT_PET_ID]!;
}

export type { PetSprite };
