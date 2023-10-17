import type { SelectedWeapon } from '$lib/types/global';

import { bow } from './weapons/bow';
import { sword } from './weapons/sword';
import { claymore } from './weapons/claymore';
import { catalyst } from './weapons/catalyst';
import { polearm } from './weapons/polearm';

type Data = {
  claymore: SelectedWeapon[];
  sword: SelectedWeapon[];
  bow: SelectedWeapon[];
  catalyst: SelectedWeapon[];
  polearm: SelectedWeapon[];
};

export const WeaponData: Data = {
  bow,
  sword,
  claymore,
  catalyst,
  polearm
};
