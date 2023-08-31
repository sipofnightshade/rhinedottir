import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'ganyu',
  fullName: 'Ganyu',
  rating: 5,
  weapon: 'bow',
  region: 'liyue',
  vision: 'cryo',
  specialized: 'critdmg',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Liutian Archery',
    skill: 'Trail of the Qilin',
    burst: 'Celestial Shower'
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
      name: '6 - Hit DMG',
      tag: 'N6',
      damageBonus: 'normal',
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
      name: 'Aimed Shot',
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
    },
    {
      name: 'Aimed Shot Charge Level 1',
      tag: 'C1',
      damageBonus: 'charged',
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
      name: 'Aimed Shot Charge Level 2',
      tag: 'C2',
      damageBonus: 'charged',
      hasOwnCritRate: 'frostflakeArrow',
      icd: 0,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param9'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param10'
          }
        ]
      ]
    },
    {
      name: 'Frostflake Arrow DMG',
      damageBonus: 'charged',
      hasOwnCritRate: 'frostflakeArrow',
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
      name: 'Frostflake Arrow Bloom DMG',
      damageBonus: 'charged',
      hasOwnCritRate: 'frostflakeArrow',
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
  plunge: [
    {
      name: 'Plunge DMG',
      tag: 'PD',
      damageBonus: 'plunge',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param11'
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
            param: 'param12'
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
            param: 'param13'
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
      damage: [
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
      name: 'Ice Shard DMG',
      tag: 'QC',
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
      name: 'x10 Ice Shard DMG',
      tag: 'QT',
      icd: 2, // gpt link explaining why i used icd of 2 here https://chat.openai.com/share/d447b200-a250-4b5a-8de9-9fd078855747
      damageBonus: 'burst',
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
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
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
      name: 'Undivided Heart',
      url: 'UI_Talent_S_Ganyu_05',
      description:
        'After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their resulting bloom effects is increased by 20% for 5s.',
      level: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'frostflakeArrow',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Harmony Between Heaven and Earth',
      url: 'UI_Talent_S_Ganyu_06',
      description:
        '**Celestial Shower** grants a 20% Cryo DMG Bonus to active party members in the AoE.',
      level: 8,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'cryo',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Dew-Drinker',
      url: 'UI_Talent_S_Ganyu_01',
      description:
        "Charge Level 2 Frostflake Arrows or Frostflake Arrow Blooms decrease opponents' Cryo RES by 15% for 6s upon hit.\nA hit also regenerates 2 Energy for Ganyu. This effect can only occur once per Charge Level 2 Frostflake Arrow, regardless if Frostflake Arrow itself or its Bloom hits the target.",
      constellation: 1,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'cryoRes',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Westward Sojourn',
      url: 'UI_Talent_S_Ganyu_03',
      description:
        'Opponents standing within the AoE of **Celestial Shower** take increased DMG. This effect strengthens over time.\nIncreased DMG taken begins at 5% and increases by 5% every 3s, up to a maximum of 25%.\nThe effect lingers for 3s after the opponent leaves the AoE.',
      constellation: 4,
      target: 'party',
      actionType: 'stack',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: [0.05, 0.05, 0.05, 0.05, 0.05]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
