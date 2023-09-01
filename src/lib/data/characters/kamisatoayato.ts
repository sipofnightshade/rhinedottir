import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'kamisatoayato',
  fullName: 'Kamisato Ayato',
  rating: 5,
  weapon: 'sword',
  region: 'mondstat',
  vision: 'hydro',
  specialized: 'critdmg',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Kamisato Art: Marobashi',
    skill: 'Kamisato Art: Kyouka',
    burst: 'Kamisato Art: Suiyuu'
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
      name: 'Shunsuiken 1-Hit DMG',
      tag: 'E1',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'namisen',
      hasOwnBonusDMG: 'shunsuiken',
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
      name: 'Shunsuiken 2-Hit DMG',
      tag: 'E2',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'namisen',
      hasOwnBonusDMG: 'shunsuiken',
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
      name: 'Shunsuiken 3-Hit DMG',
      tag: 'E3',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'namisen',
      hasOwnBonusDMG: 'shunsuiken',
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
      name: 'Water Illusion DMG',
      tag: 'Ex',
      damageBonus: 'skill',
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
      name: 'Shunsuiken Total x15 DMG',
      tag: 'ET',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'namisen',
      hasOwnBonusDMG: 'shunsuiken',
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param3'
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
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param3'
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
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param3'
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
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param3'
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
            param: 'param2'
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
      name: 'Boundless Origin DMG',
      tag: 'X6',
      damageBonus: 'normal',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 4.5
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Bloomwater Blade DMG',
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
    }
  ],
  actions: [
    {
      name: 'Namisen Bonus',
      url: 'Skill_S_Ayato_01',
      description:
        "After a Shunsuiken attack hits an opponent, it will grant Ayato the Namisen effect, increasing the DMG dealt by Shunsuiken based on Ayato's current Max HP. The initial maximum number of Namisen stacks is 4, and 1 stack can be gained through Shunsuiken every 0.1s. This effect will be dispelled when Takimeguri Kanka ends.",
      target: 'self',
      actionType: 'stack',
      hasLevels: 'skill',
      values: [
        {
          scaling: 'namisen',
          coef: ['param5', 'param5', 'param5', 'param5'],
          source: ['hp', 0]
        }
      ]
    },
    {
      name: 'Suiyuu DMG Bonus',
      url: 'Skill_E_Ayato_01',
      description: 'Increases the **Normal Attack** DMG of the **Active*** character.',
      target: 'active',
      actionType: 'toggle',
      hasLevels: 'burst',
      values: [
        {
          scaling: 'normal',
          coef: 'param2'
        }
      ]
    },
    {
      name: 'Kyouka Fuushi',
      url: 'UI_Talent_S_Ayato_01',
      description:
        '"**Shunsuiken** DMG is increased by 40% against opponents with 50% HP or less."',
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'shunsuiken',
          coef: 0.4
        }
      ]
    },
    {
      name: 'World Source',
      url: 'UI_Talent_S_Ayato_02',
      description:
        "**Namisen**'s maximum stack count is increased to 5. When Kamisato Ayato has at least 3 Namisen stacks, his Max HP is increased by 50%.\n**MODIFIED**\nToggle to add the 5th Namisen bonus to your character + 50% HP increase",
      constellation: 2,
      target: 'self',
      actionType: 'toggle',
      hasLevels: 'skill',
      values: [
        {
          scaling: 'namisen',
          coef: 'param5',
          source: ['hp', 0]
        },
        {
          scaling: 'hp%',
          coef: 0.5
        }
      ]
    },
    {
      name: 'Endless Flow',
      url: 'UI_Talent_S_PlayerWind_02',
      description:
        'After using **Kamisato Art: Suiyuu**, all nearby party members will have 15% increased Normal Attack SPD for 15s.',
      constellation: 4,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.15
        }
      ]
    }
  ],
  offField: []
};

export default charName;
