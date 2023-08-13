import type { All_Stats } from '$lib/stores/actionStore';
import type { WeaponCategory } from './global';

export type Target = 'self' | 'enemy' | 'party' | 'nearby';
export type ActionType =
  | 'stack'
  | 'toggle'
  | 'select'
  | 'multiSelect'
  | 'input'
  | 'passive'
  | 'visionMatch';

export type ActionValues = {
  scaling: All_Stats;
  coef: number | number[];
  source?: [All_Stats, number] | [All_Stats, number, number]; // [ the source stat, minimum, maximum]
  forEvery?: number;
}[];

export type Action = {
  name: string;
  url: string;
  description?: string;
  weapons?: WeaponCategory[];
  level?: number;
  constellation?: number;
  target?: Target;
  shielded?: boolean;
  unique?: boolean;
  actionType?: ActionType;
  values: ActionValues;
};
