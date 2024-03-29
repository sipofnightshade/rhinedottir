import type { All_Stats, Index_Stats } from '$lib/data/Stats';
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
  | 'passive'
  | 'region'
  | 'visionMatch'
  | 'visionMatchToggle'
  | 'addLevel';

export type ActionBtnID = 'main' | 'one' | 'two' | 'three';

type CoefStats = All_Stats | 'baseATK' | 'baseDEF' | 'baseHP';
export type CoefSource =
  | [CoefStats, number] // [ source stat, minimum]
  | [CoefStats, number, number | ((stats: Index_Stats) => number)] // [ source stat, minimum, maximum] ❓ maximum here is the maximum source stat value
  | [CoefStats, number, number | ((stats: Index_Stats) => number), number]; // [ source stat, minimum, maximum, forEvery]

export type ActionValue = {
  scaling: string;
  coef: number | number[] | DamageValueID | DamageValueID[];
  source?: CoefSource;
  label?: All_Stats;
  textLabel?: string;
};

export type Action = {
  name: string;
  url: string;
  description?: string;
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
  hasVisionLabel?: Visions; // adds an element icon centered at the bottom of the action button, eg. Nahida Burst, Wanderer A4
  weapons?: WeaponCategory[];
  level?: 2 | 8;
  maxSelects?: number;
  hasLevels?: 'atk' | 'skill' | 'burst';
  infusion?: Visions;
  constellation?: number;
  hideAtConstellation?: number;
  target?: Target;
  shielded?: boolean;
  unique?: boolean;
  actionType: ActionType;
  sourceStats?: CoefStats[];
  values: ActionValue[];
};

export type ActionButtonColor = Visions | 'weapon' | 'artifact' | 'resonance';
