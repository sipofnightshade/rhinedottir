import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'fischl',
  fullName: 'Fischl',
  rating: 4,
  weapon: 'bow',
  region: 'mondstat',
  vision: 'electro',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Bolts of Downfall',
    skill: 'Nightrider',
    burst: 'Midnight Phantasmagoria'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
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
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Gaze of the Deep',
      tag: 'X1',
      constellation: 1,
      damageBonus: 'normal',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.22
          }
        ]
      ]
    }
  ],
  charged: [
    {
      name: 'Aimed Shot',
      tag: 'CA',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param6'
          }
        ]
      ]
    },
    {
      name: 'Fully-Charged Aimed Shot',
      tag: 'C1',
      hasOwnDMGType: 'electro',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param7'
          }
        ]
      ]
    },
    {
      name: 'Stellar Predator DMG',
      tag: 'A2',
      damageBonus: 'charged',
      hasOwnBonusDMG: 'stellarPredator',
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
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ]
      ]
    },
    {
      name: 'Low Plunge',
      tag: 'PL',
      damageBonus: 'plunge',
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
      name: 'High Plunge',
      tag: 'PH',
      damageBonus: 'plunge',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param10'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: "Oz's ATK DMG",
      tag: 'EC',
      damageBonus: 'skill',
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
      name: 'Summoning DMG',
      tag: 'EP',
      damageBonus: 'skill',
      hasOwnBonusFlatDMG: 'nightrider',
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
      name: 'Thundering Retribution DMG',
      tag: 'A4',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.8
          }
        ]
      ]
    },
    {
      name: 'Evernight Raven DMG',
      tag: 'X6',
      constellation: 6,
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.3
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Falling Thunder DMG',
      tag: 'Q',
      damageBonus: 'burst',
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
      name: 'Her Pilgrimage of Bleak DMG',
      tag: 'X4',
      constellation: 4,
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
      name: 'Stellar Predator',
      url: 'UI_Talent_S_Fischl_05',
      description:
        "When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down Thundering Retribution, dealing AoE Electro DMG equal to 152.7% of the arrow's DMG.",
      level: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'stellarPredator',
          coef: 1.527
        }
      ]
    },
    {
      name: 'Devourer of All Sins',
      url: 'UI_Talent_S_Fischl_02',
      description:
        'When **Nightrider** is used, it deals an additional 200% ATK as DMG, and its AoE is increased by 50%.',
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'nightrider',
          coef: 2.0,
          source: ['atk', 0]
        }
      ]
    }
  ]
};

export default charName;
