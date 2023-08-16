import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'aether',
  fullName: 'Aether',
  rating: 5,
  weapon: 'sword',
  vision: 'electro',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'normalName',
    skill: 'skillName',
    burst: 'burstName'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      damage: [
        {
          scaling: 'atk',
          param: 'param1'
        }
      ]
    },
    {
      name: '2 - Hit DMG',
      tag: 'N2',
      damageBonus: 'normal',
      damage: [
        {
          scaling: 'atk',
          param: 'param2'
        }
      ]
    },
    {
      name: '3 - Hit DMG',
      tag: 'N3',
      damageBonus: 'normal',
      damage: [
        {
          scaling: 'atk',
          param: 'param3'
        }
      ]
    },
    {
      name: '4 - Hit DMG',
      tag: 'N4',
      damageBonus: 'normal',
      damage: [
        {
          scaling: 'atk',
          param: 'param4'
        }
      ]
    },
    {
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
      damage: [
        {
          scaling: 'atk',
          param: 'param5'
        }
      ]
    }
  ],
  charged: [
    {
      name: 'Charged Attack',
      tag: 'CA',
      damageBonus: 'charged',
      damage: [
        {
          scaling: 'atk',
          param: 'param6'
        }
      ]
    }
  ],
  plunge: [
    {
      name: 'Plunge DMG',
      tag: 'PD',
      damageBonus: 'plunge',
      damage: [
        {
          scaling: 'atk',
          param: 'param9'
        }
      ]
    },
    {
      name: 'Low Plunge',
      tag: 'PL',
      damageBonus: 'plunge',
      damage: [
        {
          scaling: 'atk',
          param: 'param10'
        }
      ]
    },
    {
      name: 'High Plunge',
      tag: 'PH',
      damageBonus: 'plunge',
      damage: [
        {
          scaling: 'atk',
          param: 'param11'
        }
      ]
    }
  ],
  skill: [
    {
      name: 'Skill DMG',
      tag: 'EP',
      damageBonus: 'skill',
      damage: [
        {
          scaling: 'atk',
          param: 'param3'
        }
      ]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q1',
      multiHit: 9,
      damageBonus: 'burst',
      damage: [
        {
          scaling: 'atk',
          param: 'param1'
        }
      ]
    }
  ],
  actions: [
    {
      name: 'Uprising Whirlwind',
      url: 'UI_Talent_S_PlayerWind_02',
      description: 'description',
      level: 1,
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'energy',
          coef: 0
        }
      ]
    },
    {
      name: 'Intertwined Winds',
      url: 'UI_Talent_S_PlayerWind_04',
      description:
        'Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%. If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
      level: 1,
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
      level: 1,
      constellation: 6,
      target: 'enemy',
      actionType: 'multiSelect',
      values: [
        { scaling: 'pyroRes', coef: 0.2 },
        { scaling: 'hydroRes', coef: 0.2 },
        { scaling: 'electroRes', coef: 0.2 },
        { scaling: 'cryoRes', coef: 0.2 }
      ]
    },
    {
      name: 'Testing',
      url: 'UI_Talent_S_PlayerWind_04',
      description:
        'If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
      level: 1,
      constellation: 6,
      target: 'enemy',
      actionType: 'stack',
      values: [{ scaling: 'anemo', coef: [0.15, 0.05, 0.05, 0.05] }]
    },
    {
      name: 'Testing2',
      url: 'UI_Talent_S_PlayerWind_04',
      description:
        'If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
      level: 2,
      constellation: 6,
      target: 'enemy',
      actionType: 'select',
      values: [
        { scaling: 'electroRes', coef: 0.15 },
        { scaling: 'pyroRes', coef: 0.05 },
        { scaling: 'hydroRes', coef: 0.15 },
        { scaling: 'cryoRes', coef: 0.05 }
      ]
    }
  ],
  offField: []
};

export default charName;
