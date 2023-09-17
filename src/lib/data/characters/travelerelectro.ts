import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'aether',
  fullName: 'Aether',
  rating: 5,
  weapon: 'sword',
  region: 'other',
  vision: 'electro',
  c3: 'burst',
  c5: 'skill',
  specialized: 'atk%',
  burstCost: 80,
  talentNames: {
    normal: 'Foreign Thundershock',
    skill: 'Lightning Blade',
    burst: 'Bellowing Thunder'
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
    }
  ],
  plunge: [
    {
      name: 'Plunge DMG',
      tag: 'PD',
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
      tag: 'E',
      damageBonus: 'skill',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: 'Falling Thunder DMG',
      tag: 'QC',
      damageBonus: 'burst',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: 'Enhanced Falling Thunder DMG',
      tag: 'X6',
      constellation: 6,
      damageBonus: 'burst',
      damage: [[{ scaling: 'atk', param: 'param12' }]]
    }
  ],
  actions: [
    {
      name: 'Violet Vehemence',
      url: 'UI_Talent_S_PlayerElectric_02',
      description:
        'When Falling Thunder created by **Bellowing Thunder** hits an opponent, it will decrease their Electro RES by 15% for 8s.',
      constellation: 2,
      target: 'enemy',
      actionType: 'toggle',
      values: [{ scaling: 'electroRes', coef: 0.15 }]
    }
  ]
};

export default charName;
