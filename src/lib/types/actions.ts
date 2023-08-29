import type { All_Stats } from '$lib/data/Stats';
import type { Visions, WeaponCategory } from './global';
import type { DamageValueID } from './talents';

export type Regions =
  | 'liyue'
  | 'sumeru'
  | 'mondstat'
  | 'inazuma'
  | 'fontaine'
  | 'natlan'
  | 'snezhnaya'
  | 'other';
export type Target =
  | 'self'
  | 'enemy'
  | 'party'
  | 'nearby'
  | 'halfnearby'
  | 'thirdnearby'
  | 'active'
  | 'notactive';

export type ActionType =
  | 'stack'
  | 'toggle'
  | 'select'
  | 'multiSelect'
  | 'input'
  | 'passive';
// | 'visionMatch';

export type ActionBtnID = 'main' | 'one' | 'two' | 'three';

export type CoefSource =
  | [All_Stats, number] // [ source stat, minimum]
  | [All_Stats, number, number] // [ source stat, minimum, maximum] ❓ maximum here is the maximum source stat value
  | [All_Stats, number, number, number]; // [ source stat, minimum, maximum, forEvery]

export type ActionValue = {
  scaling: string;
  coef: number | number[] | DamageValueID | DamageValueID[];
  source?: CoefSource;
  forEvery?: number;
};

export type Action = {
  name: string;
  url: string;
  description?: string;
  weapons?: WeaponCategory[];
  level?: 2 | 8;
  hasLevels?: 'atk' | 'skill' | 'burst';
  infusion?: Visions;
  constellation?: number;
  target?: Target;
  shielded?: boolean;
  unique?: boolean;
  actionType: ActionType;
  sourceStats?: All_Stats[];
  values: ActionValue[];
};
