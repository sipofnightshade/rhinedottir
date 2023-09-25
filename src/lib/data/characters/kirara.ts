import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'kirara',
  fullName: 'Kirara',
  rating: 4,
  weapon: 'sword',
  region: 'inazuma',
  vision: 'dendro',
  specialized: 'hp%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Boxcutter',
    skill: 'Meow-teor Kick',
    burst: 'Secret Art: Surprise Dispatch'
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
            param: 'param6'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param7'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
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
            param: 'param10'
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
            param: 'param11'
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
            param: 'param12'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Tail-Flicking Flying Kick DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Momoka_01',
      hasOwnBonusDMG: 'meowTeorKick',
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
      name: 'Shield DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
      url: 'Skill_S_Momoka_01',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'flatValue',
            param: 'param3'
          }
        ]
      ]
    },
    {
      name: 'Max Shield DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param4'
          }
        ],
        [
          {
            scaling: 'flatValue',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Urgent Neko Parcel Hit DMG',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Momoka_01',
      hasOwnBonusDMG: 'meowTeorKick',
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
      name: 'Flipclaw Strike DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Momoka_01',
      hasOwnBonusDMG: 'meowTeorKick',
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
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Momoka_01',
      hasOwnBonusDMG: 'surpriseDispatch',
      icd: 0,
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
      name: 'Cat Grass Cardamom Explosion DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Momoka_01',
      hasOwnBonusDMG: 'surpriseDispatch',
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
      name: 'Cat Grass Cardamom Explosion DMG x6',
      tag: 'QT',
      damageBonus: 'burst',
      url: 'Skill_E_Momoka_01',
      hasOwnBonusDMG: 'surpriseDispatch',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
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
    // {
    //   name: 'Cat Grass Cardamom Explosion DMG x10',
    //   tag: 'X1',
    //   damageBonus: 'burst',
    //   constellation: 1,
    //   hasOwnBonusDMG: 'surpriseDispatch',
    //   damage: [
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ],
    //     [
    //       {
    //         scaling: 'atk',
    //         param: 'param2'
    //       }
    //     ]
    //   ]
    // },
    {
      name: 'Small Cat Grass Cardamom DMG',
      tag: 'X4',
      damageBonus: 'burst',
      url: 'Skill_E_Momoka_01',
      hasOwnBonusDMG: 'surpriseDispatch',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param2',
            coef: 2.0
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Pupillary Variance',
      url: 'UI_Talent_S_Momoka_06',
      description:
        'Every 1,000 Max HP Kirara possesses will increase the DMG dealt by **Meow-teor Kick** by 0.4%, and the DMG dealt by **Secret Art: Surprise Dispatch** by 0.3%.',
      level: 8,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'meowTeorKick',
          coef: 0.004,
          source: ['hp', 0, 90000, 1000]
        },
        {
          scaling: 'surpriseDispatch',
          coef: 0.003,
          source: ['hp', 0, 90000, 1000]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
