import type { CharacterNames } from './characters';
import type { WeaponNames } from './weapons';
import type { ArtifactNames } from './artifacts';
import type { ALL_STATS } from './talents';

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
  effectname: string;
  effect: string;
  ref: [] | string[] | string[][];
  target?: 'self' | 'enemy' | 'party' | 'all';
  actionType?: 'stack' | 'toggle' | 'select' | 'multiSelect' | 'input' | 'passive';
  actionValues?: [
    {
      scaling: ALL_STATS;
      coef: number | number[];
      threshold?: number;
    },
    {
      scaling: ALL_STATS;
      coef: number | number[];
      threshold?: number;
    },
    {
      scaling: ALL_STATS;
      coef: number | number[];
      threshold?: number;
    },
    {
      scaling: ALL_STATS;
      coef: number | number[];
      threshold?: number;
    },
    {
      scaling: ALL_STATS;
      coef: number | number[];
      threshold?: number;
    }
  ];
};

export type SelectedArtifact = {
  name: ArtifactNames;
  fullName: string;
  rating: number[];
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

export type ArtifactType = 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';

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

export type ArtifactStats =
  | ''
  | 'hp'
  | 'atk'
  | 'hp%'
  | 'atk%'
  | 'def%'
  | 'em'
  | 'energy'
  | 'critrate'
  | 'critdmg'
  | 'physical'
  | 'anemo'
  | 'cryo'
  | 'dendro'
  | 'electro'
  | 'geo'
  | 'hydro'
  | 'pyro'
  | 'healing';
