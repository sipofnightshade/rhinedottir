import type { WeaponCategory } from './global';
import type { ALL_STATS } from './talents';

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
  scaling: ALL_STATS;
  coef: number | number[];
  source?: [ALL_STATS, number] | [ALL_STATS, number, number]; // [ the source stat, minimum, maximum]
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
