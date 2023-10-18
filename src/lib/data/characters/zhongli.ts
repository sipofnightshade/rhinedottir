import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000030,
  id: 'zhongli',
  name: 'zhongli',
  fullName: 'Zhongli',
  rating: 5,
  weapon: 'polearm',
  region: 'liyue',
  vision: 'geo',
  specialized: 'geo',
  c3: 'skill',
  c5: 'burst',
  burstCost: 40,
  talentNames: {
    normal: 'Rain of Stone',
    skill: 'Dominus Lapidis',
    burst: 'Planet Befall'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: '2 - Hit DMG',
      tag: 'N2',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: '3 - Hit DMG',
      tag: 'N3',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          }
        ]
      ]
    },
    {
      name: '4 - Hit DMG',
      tag: 'N4',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param4'
          }
        ]
      ]
    },
    {
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: '6 - Hit DMG',
      tag: 'N6',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param6'
          }
        ]
      ]
    }
  ],
  charged: [
    {
      name: 'Charged Attack',
      tag: 'CA',
      damageBonus: 'charged',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param7'
          }
        ]
      ]
    }
  ],
  plunge: [
    {
      name: 'Plunge DMG',
      tag: 'PD',
      damageBonus: 'plunge',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param9'
          }
        ]
      ]
    },
    {
      name: 'Low Plunge',
      tag: 'PL',
      damageBonus: 'plunge',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param10'
          }
        ]
      ]
    },
    {
      name: 'High Plunge',
      tag: 'PH',
      damageBonus: 'plunge',
      hasOwnBonusFlatDMG: 'dominanceAtks',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param11'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Stone Stele DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Zhongli_01',
      hasOwnBonusFlatDMG: 'dominusLapidis',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: 'Resonance DMG',
      tag: 'EC',
      damageBonus: 'skill',
      url: 'Skill_S_Zhongli_01',
      hasOwnBonusFlatDMG: 'dominusLapidis',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Hold DMG',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Zhongli_01',
      hasOwnBonusFlatDMG: 'dominusLapidis',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param4'
          }
        ]
      ]
    },
    {
      name: 'Shield DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param6'
          },
          {
            scaling: 'flatValue',
            param: 'param5'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q',
      hasOwnBonusFlatDMG: 'planetBefall',
      url: 'Skill_E_Zhongli_01',
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Jade Shield',
      url: 'Skill_S_Zhongli_01',
      description:
        'Characters protected by the Jade Shield will decrease the Elemental RES and Physical RES of opponents in a small AoE by 20%. This effect cannot be stacked',
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'anemoRes',
          coef: 0.2
        },
        {
          scaling: 'cryoRes',
          coef: 0.2
        },
        {
          scaling: 'dendroRes',
          coef: 0.2
        },
        {
          scaling: 'electroRes',
          coef: 0.2
        },
        {
          scaling: 'geoRes',
          coef: 0.2
        },
        {
          scaling: 'hydroRes',
          coef: 0.2
        },
        {
          scaling: 'pyroRes',
          coef: 0.2
        },
        {
          scaling: 'physicalRes',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Resonant Waves',
      url: 'UI_Talent_S_Zhongli_05',
      description:
        'When the Jade Shield takes DMG, it will Fortify:\n·Fortified characters have 5% increased Shield Strength.\nCan stack up to 5 times, and lasts until the Jade Shield disappears.',
      level: 2,
      target: 'party',
      actionType: 'stack',
      values: [
        {
          scaling: 'shieldStrength',
          coef: [0.05, 0.05, 0.05, 0.05, 0.05]
        }
      ]
    },
    {
      name: 'Dominance of Earth',
      url: 'UI_Talent_S_Zhongli_06',
      description:
        "Zhongli deals bonus DMG based on his Max HP:\n·Normal Attack, Charged Attack, and Plunging Attack DMG is increased by 1.39% of Max HP.\n·**Dominus Lapidis'** Stone Stele, resonance, and hold DMG is increased by 1.9% of Max HP.\n·**Planet Befall's** DMG is increased by 33% of Max HP.",
      level: 8,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'dominanceAtks',
          coef: 0.0139,
          source: ['hp', 0]
        },
        {
          scaling: 'dominusLapidis',
          coef: 0.019,
          source: ['hp', 0]
        },
        {
          scaling: 'planetBefall',
          coef: 0.33,
          source: ['hp', 0]
        }
      ]
    }
  ]
};

export default charName;
