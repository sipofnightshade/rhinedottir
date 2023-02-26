import type { CharacterNames } from './characters';
import type { WeaponNames } from './weapons';

export type SelectedCharacter = {
  name: CharacterNames;
  fullName: string;
  rating: 4 | 5;
  weapon: WeaponCategory;
  vision: Visions;
  specialized: CharacterSpecialized;
};

export type SelectedWeapon = {
  name: WeaponNames;
  fullName: string;
  rating: 5 | 4 | 3;
  type: WeaponCategory;
  specialized: WeaponSpecialized;
};

export type Visions = 'anemo' | 'cryo' | 'dendro' | 'electro' | 'geo' | 'hydro' | 'pyro';
export type DamageType =
  | 'anemo'
  | 'cryo'
  | 'dendro'
  | 'electro'
  | 'geo'
  | 'hydro'
  | 'pyro'
  | 'physical';

export type WeaponCategory = 'sword' | 'catalyst' | 'polearm' | 'claymore' | 'bow';

export type CharacterSpecialized =
  | 'atk%'
  | 'def%'
  | 'hp%'
  | 'em'
  | 'energy'
  | 'critrate'
  | 'critdmg'
  | 'anemo'
  | 'cryo'
  | 'dendro'
  | 'electro'
  | 'geo'
  | 'hydro'
  | 'pyro'
  | 'physical';

export type WeaponSpecialized =
  | 'atk%'
  | 'def%'
  | 'hp%'
  | 'em'
  | 'critrate'
  | 'critdmg'
  | 'physical'
  | 'energy';
