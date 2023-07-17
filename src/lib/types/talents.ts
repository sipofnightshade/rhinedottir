export type Hit = {
  name: string;
  tag?: string; // Empty string for hit fields that are showOnly
  damageBonus: 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';
  // normal default = physical, skill & burst default is character element
  elemental?:
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
  icd?: number;
  damage: {
    scaling: 'atk' | 'def' | 'hp' | 'em' | 'energy' | 'healing';
    param:
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
    coef?: number;
  }[];
};

export type ALL_STATS =
  | 'atk'
  | 'def'
  | 'hp'
  | 'em'
  | 'critrate'
  | 'critdmg'
  | 'energy'
  | 'healing'
  | 'healingIncoming'
  | 'anemo'
  | 'cryo'
  | 'dendro'
  | 'electro'
  | 'geo'
  | 'hydro'
  | 'pyro'
  | 'anemoRes'
  | 'cryoRes'
  | 'dendroRes'
  | 'electroRes'
  | 'geoRes'
  | 'hydroRes'
  | 'pyroRes'
  | 'physical'
  | 'physicalRes'
  | 'normal'
  | 'charged'
  | 'plunge'
  | 'skill'
  | 'burst'
  | 'normalATKSpd'
  | 'chargedATKSpd'
  | 'normalSpecialMultiplier'
  | 'chargedSpecialMultiplier'
  | 'plungeSpecialMultiplier'
  | 'skillSpecialMultiplier'
  | 'burstSpecialMultiplier'
  | 'normalFlatDMG'
  | 'chargedFlatDMG'
  | 'plungeFlatDMG'
  | 'skillFlatDMG'
  | 'burstFlatDMG'
  | 'normalDefIgnore'
  | 'skillDefIgnore'
  | 'burstDefIgnore'
  | 'defReduce'
  | 'partyEnergy'
  | 'partyEM'
  | 'aggravate'
  | 'spread'
  | 'melt'
  | 'vaporize'
  | 'burning'
  | 'superconduct'
  | 'swirl'
  | 'electrocharged'
  | 'shattered'
  | 'overloaded'
  | 'bloom'
  | 'burgeon'
  | 'hyperbloom'
  | 'crystallize';

export type StatObject = {
  stat: ALL_STATS;
  value: number;
}[];

export type Target = 'self' | 'enemy' | 'party' | 'all';

export type Action = {
  name: string;
  url: string;
  description: string;
  level: number;
  constellation: number;
  target?: Target;
  /**
   * @description - target
   * This should be used to determine whether or not a characters' actions are
   * added to the action bar WHEN they are added as a party member
   */
  actionType: 'stack' | 'toggle' | 'select' | 'multiSelect' | 'input' | 'passive';
  values: {
    scaling: ALL_STATS;
    coef: number | number[];
    source?: ALL_STATS; // for scalings that use another stat
    threshold?: number; // for skills like nahida burst EM
  }[];
};

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
