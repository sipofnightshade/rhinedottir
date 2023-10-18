import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000045,
  id: 'rosaria',
  name: 'rosaria',
  fullName: 'Rosaria',
  rating: 4,
  weapon: 'polearm',
  region: 'mondstat',
  vision: 'cryo',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Spear of the Church',
    skill: 'Ravaging Confession',
    burst: 'Rites of Termination'
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
        ],
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
        ],
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
            param: 'param9'
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
            param: 'param10'
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
            param: 'param11'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Skill DMG',
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Rosaria_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Rosaria_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Ice Lance DoT',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Rosaria_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Regina Probationum',
      url: 'UI_Talent_S_Rosaria_05',
      description:
        "When Rosaria strikes an opponent from behind using **Ravaging Confession**, Rosaria's CRIT Rate increases by 12% for 5s.",
      level: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'critrate',
          coef: 0.12
        }
      ]
    },
    {
      name: 'Shadow Samaritan',
      url: 'UI_Talent_S_Rosaria_06',
      description:
        "Casting **Rites of Termination** increases CRIT Rate of all nearby party members (except Rosaria herself) by 15% of Rosaria's CRIT Rate for 10s.\nCRIT Rate Bonus gained this way cannot exceed 15%.",
      level: 8,
      target: 'nearby',
      actionType: 'toggle',
      sourceStats: ['critrate'],
      values: [
        {
          scaling: 'critrate',
          coef: 0.15,
          source: ['critrate', 0, 1.0]
        }
      ]
    },
    {
      name: 'Unholy Revelation',
      url: 'UI_Talent_S_Rosaria_01',
      description:
        'When Rosaria deals a CRIT Hit, her ATK SPD increases by 10% and her Normal Attack DMG increases by 10% for 4s.',
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.1
        },
        {
          scaling: 'normal',
          coef: 0.1
        }
      ]
    },
    {
      name: 'Divine Retribution',
      url: 'UI_Talent_S_Rosaria_04',
      description:
        "**Rites of Termination**'s attack decreases opponents' Physical RES by 20% for 10s.",
      constellation: 6,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'physicalRes',
          coef: 0.2
        }
      ]
    }
  ],
  offField: []
};

export default charName;
