import { WeaponData } from '$lib/data/Weapons';
import type { WeaponCategory } from '$lib/types/global';

export function createWeapon(data: any) {
  const weaponType = Math.floor(data.itemId / 10000);
  const selectedWeapon = WeaponData[getWeaponType(weaponType)].find(
    (weaponData) => weaponData.uid === data.itemId
  );

  const name = selectedWeapon ? selectedWeapon.name : 'Unknown Weapon';
  const refinement = Object.values(data.weapon.affixMap)[0];
  return { name, lvl: data.weapon.level, refinement };
}

function getWeaponType(weaponTypeCode: number): WeaponCategory {
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
    default:
      return 'sword';
  }
}
