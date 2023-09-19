import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'yelan',
  fullName: 'Yelan',
  rating: 5,
  weapon: 'bow',
  region: 'liyue',
  vision: 'hydro',
  specialized: 'critrate',
  c3: 'burst',
  c5: 'skill',
  burstCost: 70,
  talentNames: {
    normal: 'Stealthy Bowshot',
    skill: 'Lingering Lifeline',
    burst: 'Depth-Clarion Dice'
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param4'
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
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Fully-Charged Aimed Shot',
      tag: 'C1',
      damageBonus: 'charged',
      hasOwnDMGType: 'hydro',
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
      name: 'Breakthrough Barb DMG',
      hasOwnDMGType: 'hydro',
      tag: 'C2',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param7'
          }
        ]
      ]
    },
    {
      name: 'Special Breakthrough Barbs',
      tag: 'X6',
      hasOwnDMGType: 'hydro',
      constellation: 6,
      hasOwnSpecialMultiplier: 'breakthroughBarbs',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'hp',
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
      name: 'Skill DMG',
      tag: 'E',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
      tag: 'QP',
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: 'Exquisite Throw DMG',
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Taking All Comers',
      damageBonus: 'burst',
      tag: 'X2',
      constellation: 2,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Exquisite Throw x3 DMG',
      tag: 'Q3',
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Exquisite Throw x3 + C2 DMG',
      tag: 'Q4',
      constellation: 2,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param2',
            coef: 0.14
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Turn Control',
      url: 'UI_Talent_S_Yelan_05',
      description:
        "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%.",
      level: 2,
      target: 'self',
      actionType: 'visionMatch',
      visionCondition: 'different',
      values: [
        {
          scaling: 'hp%',
          coef: [0.06, 0.12, 0.18, 0.3]
        }
      ]
    },
    {
      name: 'Adapt With Ease',
      url: 'UI_Talent_S_Yelan_06',
      description:
        'So long as an **Exquisite Throw** is in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second. The maximum increase to DMG dealt is 50%.\nThe pre-existing effect will be dispelled if Depth-Clarion Dice is recast during its duration.',
      level: 8,
      target: 'active',
      actionType: 'stack',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: [
            0.01, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035,
            0.035, 0.035, 0.035, 0.035
          ]
        }
      ]
    },
    {
      name: 'Bait-and-Switch',
      url: 'UI_Talent_S_Yelan_03',
      description:
        "Increases all party members' Max HP by 10% for 25s for every opponent marked by **Lifeline** when the Lifeline explodes. A maximum increase of 40% Max HP can be attained in this manner.",
      constellation: 4,
      target: 'party',
      actionType: 'stack',
      values: [
        {
          scaling: 'hp%',
          coef: [0.1, 0.1, 0.1, 0.1]
        }
      ]
    },
    {
      name: 'Winner Takes All',
      url: 'UI_Talent_S_Yelan_04',
      description: 'description',
      constellation: 6,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'breakthroughBarbs',
          coef: 0.56
        }
      ]
    }
  ]
};

export default charName;
