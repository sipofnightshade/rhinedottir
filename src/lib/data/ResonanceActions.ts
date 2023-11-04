import type { Action } from '$lib/types/actions';

type ResonanceElements =
  | 'pyro'
  | 'anemo'
  | 'cryo'
  | 'geo'
  | 'geo2'
  | 'dendro'
  | 'hydro'
  | 'none';
type VisionActions = {
  [key in ResonanceElements]: Action;
};
const ResonanceActions: VisionActions = {
  pyro: {
    name: 'Fervent Flames',
    url: 'UI_Talent_S_Albedo_03',
    description: 'Increases ATK by 25%',
    target: 'party',
    actionType: 'toggle',
    values: [
      {
        scaling: 'atk%',
        coef: 0.25
      }
    ]
  },
  hydro: {
    name: 'Soothing Water',
    url: 'UI_Talent_S_Albedo_03',
    description: 'Increases MAX HP by 25%',
    target: 'party',
    actionType: 'toggle',
    values: [
      {
        scaling: 'hp%',
        coef: 0.25
      }
    ]
  },
  dendro: {
    name: 'Sprawling Greenery',
    url: 'UI_Talent_S_Albedo_03',
    description: '**MODIFIED** Increases Elemental Mastery by 50 per stack.',
    target: 'party',
    actionType: 'stack',
    values: [
      {
        scaling: 'em',
        coef: [50, 50]
      }
    ]
  },
  geo: {
    name: 'Enduring Rock - BUFF',
    url: 'UI_Talent_S_Albedo_03',
    description:
      'Increases shield strength by 15%. Characters protected by a shield will have the following characteristic: DMG dealt increased by 15%.',
    target: 'party',
    actionType: 'toggle',
    values: [
      {
        scaling: 'shieldStrength',
        coef: 0.15
      },
      {
        scaling: 'dmgIncrease',
        coef: 0.15
      }
    ]
  },
  geo2: {
    name: 'Enduring Rock - DEBUFF',
    url: 'UI_Talent_S_Albedo_03',
    description:
      'Characters protected by a shield will have the following characteristic: dealing dmg to enemies will decrease their Geo RES by 20% for 15s.',
    target: 'enemy',
    actionType: 'toggle',
    values: [
      {
        scaling: 'geoRes',
        coef: 0.2
      }
    ]
  },
  cryo: {
    name: 'Shattering Ice',
    url: 'UI_Talent_S_Albedo_03',
    description:
      'Increases CRIT RATE against enemies that are **Frozen** or affected by Cryo by 15%',
    target: 'party',
    actionType: 'toggle',
    values: [
      {
        scaling: 'critrate',
        coef: 0.15
      }
    ]
  },
  anemo: {
    name: 'Impetuous Winds',
    url: 'UI_Talent_S_Albedo_03',
    description: 'Increases Movement SPD by 10%.',
    target: 'party',
    actionType: 'toggle',
    values: [
      {
        scaling: 'moveSpd',
        coef: 0.1
      }
    ]
  },
  none: {
    name: 'Protective Canopy',
    url: 'UI_Talent_S_Albedo_03',
    description: 'All Element RES +15%. Physical RES +15%.',
    target: 'party',
    actionType: 'toggle',
    values: [
      {
        scaling: 'physicalRes',
        coef: 0.15
      },
      {
        scaling: 'anemoRes',
        coef: 0.15
      },
      {
        scaling: 'cryoRes',
        coef: 0.15
      },
      {
        scaling: 'dendroRes',
        coef: 0.15
      },
      {
        scaling: 'electroRes',
        coef: 0.15
      },
      {
        scaling: 'geoRes',
        coef: 0.15
      },
      {
        scaling: 'hydroRes',
        coef: 0.15
      },
      {
        scaling: 'pyroRes',
        coef: 0.15
      }
    ]
  }
};

export default ResonanceActions;
