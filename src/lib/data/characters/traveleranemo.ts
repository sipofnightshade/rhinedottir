import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'aether',
  fullName: 'Aether',
  rating: 5,
  weapon: 'sword',
  region: 'other',
  vision: 'anemo',
  c3: 'burst',
  c5: 'skill',
  specialized: 'atk%',
  burstCost: 60,
  talentNames: {
    normal: 'Foreign Ironwind',
    skill: 'Palm Vortex',
    burst: 'Gust Surge'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: '2 - Hit DMG',
      tag: 'N2',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: '3 - Hit DMG',
      tag: 'N3',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param3' }]]
    },
    {
      name: '4 - Hit DMG',
      tag: 'N4',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param4' }]]
    },
    {
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param5' }]]
    },
    {
      name: 'Slitting DMG',
      tag: 'A1',
      damageBonus: 'normal',
      hasOwnDMGType: 'anemo',
      damage: [[{ scaling: 'atk', param: 'param1', coef: 0.6 }]]
    }
  ],
  charged: [
    {
      name: 'Charged Attack',
      tag: 'CA',
      damageBonus: 'charged',
      damage: [
        [{ scaling: 'atk', param: 'param6' }],
        [{ scaling: 'atk', param: 'param7' }]
      ]
    },
    {
      name: '1 - Hit DMG',
      damageBonus: 'charged',
      damage: [[{ scaling: 'atk', param: 'param6' }]]
    },
    {
      name: '2 - Hit DMG',
      damageBonus: 'charged',
      damage: [[{ scaling: 'atk', param: 'param7' }]]
    }
  ],
  plunge: [
    {
      name: 'Plunge DMG',
      tag: 'P',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param9' }]]
    },
    {
      name: 'Low Plunge',
      tag: 'PL',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param10' }]]
    },
    {
      name: 'High Plunge',
      tag: 'PH',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param11' }]]
    }
  ],
  skill: [
    {
      name: 'Press DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param3' }]]
    },
    {
      name: 'Hold DMG - Total',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_PlayerWind_01',
      damage: [
        [{ scaling: 'atk', param: 'param4' }],
        [{ scaling: 'atk', param: 'param1' }],
        [{ scaling: 'atk', param: 'param1' }],
        [{ scaling: 'atk', param: 'param1' }],
        [{ scaling: 'atk', param: 'param2' }],
        [{ scaling: 'atk', param: 'param2' }],
        [{ scaling: 'atk', param: 'param2' }]
      ]
    },
    {
      name: 'Max Storm Damage',
      damageBonus: 'skill',
      url: 'Skill_S_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param4' }]]
    },
    {
      name: 'Initial Cutting DMG x3',
      damageBonus: 'skill',
      url: 'Skill_S_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: 'Max Cutting DMG x3',
      damageBonus: 'skill',
      url: 'Skill_S_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    }
  ],
  burst: [
    {
      name: 'Tornado DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: 'Additional DMG - Hydro',
      tag: 'Q2',
      hasOwnDMGType: 'hydro',
      damageBonus: 'burst',
      url: 'Skill_E_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: 'Additional DMG - Pyro',
      tag: 'Q2',
      hasOwnDMGType: 'pyro',
      damageBonus: 'burst',
      url: 'Skill_E_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: 'Additional DMG - Cryo',
      tag: 'Q2',
      hasOwnDMGType: 'cryo',
      damageBonus: 'burst',
      url: 'Skill_E_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: 'Additional DMG - Electro',
      tag: 'Q2',
      hasOwnDMGType: 'electro',
      damageBonus: 'burst',
      url: 'Skill_E_PlayerWind_01',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    }
  ],
  actions: [
    {
      name: 'Uprising Whirlwind',
      url: 'UI_Talent_S_PlayerWind_02',
      description: 'Increases Energy Recharge by 16%.',
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [{ scaling: 'energy', coef: 0.16 }]
    },
    {
      name: 'Intertwined Winds - Anemo',
      url: 'UI_Talent_S_PlayerWind_04',
      description:
        'Targets who take DMG from **Gust Surge** have their Anemo RES decreased by 20%.',
      constellation: 6,
      target: 'enemy',
      actionType: 'toggle',
      values: [{ scaling: 'anemoRes', coef: 0.2 }]
    },
    {
      name: 'Intertwined Winds - Elemental Absorption',
      url: 'UI_Talent_S_PlayerWind_04',
      description:
        'If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
      constellation: 6,
      target: 'enemy',
      actionType: 'multiSelect',
      values: [
        { scaling: 'hydroRes', coef: 0.2 },
        { scaling: 'pyroRes', coef: 0.2 },
        { scaling: 'cryoRes', coef: 0.2 },
        { scaling: 'electroRes', coef: 0.2 }
      ]
    }
  ]
};

export default charName;
