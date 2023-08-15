import type { All_Stats } from '$lib/stores/actionStore';
import type { WeaponCategory } from './global';

export type Regions =
  | 'liyue'
  | 'sumeru'
  | 'mondstat'
  | 'inazuma'
  | 'fontaine'
  | 'natlan'
  | 'snezhnaya';
export type Target = 'self' | 'enemy' | 'party' | 'nearby' | 'active';
export type ActionType =
  | 'stack'
  | 'toggle'
  | 'select'
  | 'multiSelect'
  | 'input'
  | 'passive'
  | 'visionMatch';

export type CoefSource = [All_Stats, number] | [All_Stats, number, number]; // [ the source stat, minimum, maximum]

export type ActionValue = {
  scaling: All_Stats;
  coef: number | number[];
  source?: CoefSource;
  forEvery?: number;
};

export type Action = {
  name: string;
  url: string;
  description?: string;
  weapons?: WeaponCategory[];
  level?: 2 | 8;
  constellation?: number;
  target?: Target;
  shielded?: boolean;
  unique?: boolean;
  actionType?: ActionType;
  values: ActionValue[];
};
