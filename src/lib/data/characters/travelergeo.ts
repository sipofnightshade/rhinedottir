import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'aether',
  fullName: 'Aether',
  rating: 5,
  weapon: 'sword',
  region: 'other',
  vision: 'geo',
  c3: 'skill',
  c5: 'burst',
  specialized: 'atk%',
  burstCost: 60,
  talentNames: {
    normal: 'Foreign Rockblade',
    skill: 'Starfell Sword',
    burst: 'Wake of Earth'
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
      name: 'Rockslide DMG',
      tag: 'A4',
      damageBonus: 'normal',
      hasOwnDMGType: 'geo',
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
      name: 'Skill DMG',
      tag: 'E',
      damageBonus: 'skill',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: 'Explosion DMG',
      tag: 'X2',
      constellation: 2,
      damageBonus: 'skill',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    }
  ],
  burst: [
    {
      name: 'Total Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
      damage: [
        [{ scaling: 'atk', param: 'param1' }],
        [{ scaling: 'atk', param: 'param1' }],
        [{ scaling: 'atk', param: 'param1' }],
        [{ scaling: 'atk', param: 'param1' }]
      ]
    },
    {
      name: 'DMG Per Shockwave',
      damageBonus: 'burst',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    }
  ],
  actions: [
    {
      name: 'Invincible Stonewall',
      url: 'UI_Talent_S_PlayerRock_01',
      description:
        'Party members within the radius of **Wake of Earth** have their CRIT Rate increased by 10% and have increased resistance against interruption.',
      constellation: 1,
      target: 'party',
      actionType: 'toggle',
      values: [{ scaling: 'critrate', coef: 0.1 }]
    }
  ]
};

export default charName;
