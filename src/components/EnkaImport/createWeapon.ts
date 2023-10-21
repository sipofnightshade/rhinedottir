import { WeaponData } from '$lib/data/Weapons';
import type { WeaponCategory } from '$lib/types/global';
import type { SavedWeapon } from '$lib/types/loadout';
import type { WeaponNames } from '$lib/types/weapons';

export function createWeapon(data: any): SavedWeapon {
  const weaponType = Math.floor(data.itemId / 1000);
  const selectedWeapon = WeaponData[getWeaponType(weaponType) as WeaponCategory].find(
    (weaponData) => weaponData.uid === data.itemId
  );

  const name = selectedWeapon?.name as WeaponNames;
  const refinement = Object.values(data.weapon.affixMap)[0] as number;
  return { selected: name, lvl: data.weapon.level, refinement };
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
