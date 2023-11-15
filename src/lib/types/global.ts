import type { CharacterNames, CharacterSpecificNames } from './characters';
import type { WeaponNames } from './weapons';
import type { Action, ActionValue, Regions, Target } from './actions';
import type { Hit, OffField } from './talents';
import type { All_Stats } from '$lib/data/Stats';

export type SelectedCharacter = CharacterRecord;

export type SelectedWeapon = {
  uid: number;
  name: WeaponNames;
  url: string;
  fullName: string;
  rating: 5 | 4 | 3;
  type: WeaponCategory;
  specialized: WeaponSpecialized;
  effectname: string;
  effect: string;
  ref: [] | string[] | string[][];
  action?: {
    actionType?:
      | 'stack'
      | 'toggle'
      | 'select'
      | 'multiSelect'
      | 'input'
      | 'passive'
      | 'visionMatch'
      | 'visionMatchToggle'
      | 'region';
    hasVisionRequirement?: Visions[]; // for actions that require specific visions in party alone
    visionCondition?:
      | 'same'
      | 'different'
      | 'anemo'
      | 'cryo'
      | 'dendro'
      | 'electro'
      | 'geo'
      | 'hydro'
      | 'pyro';
    target?: Target;
    shielded?: boolean;
    hasRegionRequirement?: Regions[]; // for actions that require specific visions in party alone
    regionCondition?:
      | 'same'
      | 'different'
      | 'liyue'
      | 'sumeru'
      | 'mondstat'
      | 'inazuma'
      | 'fontaine'
      | 'natlan'
      | 'snezhnaya'
      | 'other';
    sourceStats?: All_Stats[];
    unique?: boolean;
    values: [ActionValue[], ActionValue[], ActionValue[], ActionValue[], ActionValue[]];
  }[];
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
  | 'physical'
  | 'healing';

export type WeaponSpecialized =
  | 'atk%'
  | 'def%'
  | 'hp%'
  | 'em'
  | 'critrate'
  | 'critdmg'
  | 'physical'
  | 'energy';

export type CharacterRecord = {
  uid: number;
  id: CharacterSpecificNames;
  url: string;
  name: CharacterNames;
  fullName: string;
  region: Regions;
  rating: 4 | 5;
  c3: 'skill' | 'burst' | 'atk' | undefined;
  c5: 'skill' | 'burst' | 'atk' | undefined;
  weapon: WeaponCategory;
  vision: Visions;
  specialized: CharacterSpecialized;
  burstCost: number;
  talentNames: {
    normal: string;
    skill: string;
    burst: string;
  };
  normal: Hit[];
  charged: Hit[];
  plunge: Hit[];
  skill: Hit[];
  burst: Hit[];
  actions: Action[];
  offField?: OffField[];
};

export interface ReactionTotals {
  aggravate?: number;
  superconduct?: number;
  electrocharged?: number;
  overloaded?: number;
  spread?: number;
  pyroSwirl?: number;
  cryoSwirl?: number;
  electroSwirl?: number;
  hydroSwirl?: number;
  vaporize?: number;
  melt?: number;
}

export type Reactions =
  | 'aggravate'
  | 'superconduct'
  | 'electrocharged'
  | 'overloaded'
  | 'spread'
  | 'pyroSwirl'
  | 'cryoSwirl'
  | 'electroSwirl'
  | 'hydroSwirl'
  | 'vaporize'
  | 'melt'
  | 'hyperbloom'
  | 'bloom'
  | 'burgeon'
  | 'shattered'
  | 'crystallize'
  | 'burning';
