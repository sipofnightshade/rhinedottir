import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'xiao',
  name: 'xiao',
  fullName: 'Xiao',
  rating: 5,
  weapon: 'polearm',
  region: 'liyue',
  vision: 'anemo',
  specialized: 'critrate',
  c3: 'skill',
  c5: 'burst',
  burstCost: 70,
  talentNames: {
    normal: 'Whirlwind Thrust',
    skill: 'Lemniscatic Wind Cycling',
    burst: 'Bane of All Evil'
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
      name: '2 - Hit DMG',
      tag: 'N2',
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
      name: '3 - Hit DMG',
      tag: 'N3',
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
      name: '4 - Hit DMG',
      tag: 'N4',
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
    },
    {
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
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
      name: '6 - Hit DMG',
      tag: 'N6',
      damageBonus: 'normal',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param8'
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
            param: 'param9'
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
      url: 'Skill_S_Xiao_01',
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
  burst: [
    // {
    //   "name": "Burst DMG",
    //   "tag": "Q1",
    //   "damageBonus": "burst",
    //   "damage": [
    //     [
    //       {
    //         "scaling": "atk",
    //         "param": "param1"
    //       }
    //     ]
    //   ]
    // }
  ],
  actions: [
    {
      name: 'Bane of All Evil',
      url: 'Skill_E_Xiao_01',
      description:
        "Xiao dons the Yaksha Mask that set gods and demons trembling millennia ago.\n\n**Yaksha's Mask**\n·Greatly increases Xiao's jumping ability.\n·Increases his attack AoE and attack DMG.\n·Converts attack DMG into Anemo DMG, which cannot be overridden by any other elemental infusion.\n\nIn this state, Xiao will continuously lose HP.\nThe effects of this skill end when Xiao leaves the field.",
      target: 'self',
      actionType: 'toggle',
      infusion: 'anemo',
      hasLevels: 'burst',
      values: [
        {
          scaling: 'normal',
          coef: 'param1'
        },
        {
          scaling: 'charged',
          coef: 'param1'
        },
        {
          scaling: 'plunge',
          coef: 'param1'
        }
      ]
    },
    {
      name: 'Conqueror of Evil: Tamer of Demons',
      url: 'UI_Talent_S_Xiao_05',
      description:
        'While under the effects of **Bane of All Evil**, all DMG dealt by Xiao increases by 5%. DMG increases by a further 5% for every 3s the ability persists.\nThe maximum DMG Bonus is 25%.',
      level: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: [0.05, 0.05, 0.05, 0.05, 0.05]
        }
      ]
    },
    {
      name: 'Dissolution Eon: Heaven Fall',
      url: 'UI_Talent_S_Xiao_06',
      description:
        "Using **Lemniscatic Wind Cycling** increases the DMG of subsequent uses of Lemniscatic Wind Cycling by 15%.\nThis effect lasts for 7s, and has a maximum of 3 stacks. Gaining a new stack refreshes the effect's duration.",
      level: 8,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'skill',
          coef: [0.15, 0.15, 0.15]
        }
      ]
    },
    {
      name: 'Transcension: Extinction of Suffering',
      url: 'UI_Talent_S_Xiao_03',
      description: "When Xiao's HP falls below 50%, he gains a 100% DEF Bonus.",
      constellation: 4,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 1.0
        }
      ]
    }
  ]
};

export default charName;
