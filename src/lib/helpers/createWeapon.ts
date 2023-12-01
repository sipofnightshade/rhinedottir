import { WeaponData } from '$lib/data/Weapons';
import type { WeaponCategory } from '$lib/types/global';
import type { SavedWeapon } from '$lib/types/loadout';
import type { WeaponNames } from '$lib/types/weapons';
import { getLevelIndex } from './getLevelIndex';

export function createWeapon(data: any): SavedWeapon {
  const weaponType = Math.floor(data.itemId / 1000);
  const selectedWeapon = WeaponData[getWeaponType(weaponType) as WeaponCategory].find(
    (weaponData) => weaponData.uid === data.itemId
  );

  const name = selectedWeapon?.name as WeaponNames;
  const url = selectedWeapon?.url as string;
  const rating = selectedWeapon?.rating as 3 | 4 | 5;

  const refinement = Object.values(data.weapon.affixMap)[0] as number;
  const lvl = getLevelIndex(data.weapon.promoteLevel, data.weapon.level);
  return { selected: name, lvl, refinement, url, rating };
}

function getWeaponType(weaponTypeCode: number) {
  switch (weaponTypeCode) {
    case 11:
      return 'sword';
    case 12:
      return 'claymore';
    case 13:
      return 'polearm';
    case 14:
      return 'catalyst';
    case 15:
      return 'bow';
  }
}
