import type { All_Stats } from '$lib/data/Stats';
import type { Action } from './actions';

export type DamageValueID =
  | 'param1'
  | 'param2'
  | 'param3'
  | 'param4'
  | 'param5'
  | 'param6'
  | 'param7'
  | 'param8'
  | 'param9'
  | 'param10'
  | 'param11'
  | 'param12'
  | 'param13'
  | 'param14'
  | 'param15'
  | 'param16'
  | 'param17'
  | 'param18'
  | 'param19'
  | 'param20';

export type HitDMG = {
  scaling: string;
  param: DamageValueID;
  coef?: number;
}[];

export type Hit = {
  name: string;
  tag?: string; // Empty string for hit fields that are showOnly
  damageBonus: 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';
  // normal default = physical, skill & burst default is character element
  isHealing?: boolean;
  isShield?: boolean;
  info?: string;
  hasOwnDMGType?:
    | 'anemo'
    | 'cryo'
    | 'dendro'
    | 'electro'
    | 'geo'
    | 'hydro'
    | 'pyro'
    | 'physical';
  multiHit?: number; // for some skills with repeated hits of same damage (up to my judgement)
  quadratic?: boolean;
  hasOwnBonusDMG?: string; // These are for custom stats
  hasOwnBonusFlatDMG?: string; // These are for custom stats
  hasOwnCritRate?: string; // These are for custom stats
  hasOwnCritDMG?: string; // These are for custom stats
  icd?: number;
  damage: HitDMG[];
  constellation?: 1 | 2 | 4 | 6;
};

export type StatObject = {
  stat: All_Stats;
  value: number;
}[];

export type OffField = {
  name: string;
  tag: string;
  damageBonus: 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';
  elemental?: boolean;
  multiHit: boolean;
  damage: {
    scaling: 'atk' | 'def' | 'hp' | 'em' | 'energy' | 'healing';
    param: string | number;
  };
};

export type TalentRecord = {
  normal: {
    name: string;
    hits: Hit[];
  };
  charged: {
    name: string;
    hits: Hit[];
  };
  plunge: {
    name: string;
    hits: Hit[];
  };
  skill: {
    name: string;
    hits: Hit[];
  };
  burst: {
    name: string;
    cost: number;
    hits: Hit[];
  };
  actions: Action[];
  offField?: OffField[];
};

/**🚀🚀🚀 This is the exported type */
export type TalentRecords = {
  [P: string]: TalentRecord;
};

export type ComboRowType = {
  title: string;
  hits: Hit[];
};
