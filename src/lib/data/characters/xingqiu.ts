import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000025,
  id: 'xingqiu',
  name: 'xingqiu',
  fullName: 'Xingqiu',
  url: 'UI_AvatarIcon_Xingqiu',
  rating: 4,
  weapon: 'sword',
  region: 'liyue',
  vision: 'hydro',
  specialized: 'atk%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Guhua Style',
    skill: 'Guhua Sword: Fatal Rainscreen',
    burst: 'Guhua Sword: Raincutter'
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
            param: 'param6'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param7'
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
            param: 'param8'
          }
        ],
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
      icd: 0,
      url: 'Skill_S_Xingqiu_01',
      damageBonus: 'skill',
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
      name: 'Sword Rain x1 DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Xingqiu_01',
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
      name: 'Sword Rain x2 DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Xingqiu_01',
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
        ]
      ]
    },
    {
      name: 'Sword Rain x3 DMG',
      tag: 'Q3',
      damageBonus: 'burst',
      url: 'Skill_E_Xingqiu_01',
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
        ]
      ]
    },
    {
      name: 'Sword Rain x5 DMG',
      tag: 'Q5',
      constellation: 6,
      damageBonus: 'burst',
      url: 'UI_Talent_S_Xingqiu_04',
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
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Blades Amidst Raindrops',
      url: 'UI_Talent_S_Xingqiu_06',
      description: 'Xingqiu gains a 20% Hydro DMG Bonus.',
      level: 8,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'hydro',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Rainbow Upon the Azure Sky',
      url: 'UI_Talent_S_Xingqiu_02',
      description:
        'Extends the duration of **Guhua Sword: Raincutter** by 3s.\nDecreases the Hydro RES of opponents hit by sword rain attacks by 15% for 4s.',
      constellation: 2,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'hydroRes',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Evilsoother',
      url: 'UI_Talent_S_Xingqiu_03',
      description:
        'Throughout the duration of **Guhua Sword: Raincutter**, the DMG dealt by **Guhua Sword: Fatal Rainscreen** is increased by 50%.',
      constellation: 4,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'skillSpecialMultiplier',
          coef: 1.5
        }
      ]
    }
  ]
};

export default charName;
