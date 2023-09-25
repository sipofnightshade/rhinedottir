import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'amber',
  fullName: 'Amber',
  rating: 4,
  weapon: 'bow',
  region: 'mondstat',
  vision: 'pyro',
  specialized: 'atk%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Sharpshooter',
    skill: 'Explosive Puppet',
    burst: 'Fiery Rain'
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
      hasOwnDMGType: 'pyro',
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
      name: 'Explosion DMG',
      tag: 'E',
      url: 'Skill_S_Ambor_01',
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
      name: 'Fiery Rain DMG Per Wave',
      tag: 'Q',
      url: 'Skill_E_Ambor',
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
      name: 'Total Fiery Rain DMG',
      tag: 'QT',
      url: 'Skill_E_Ambor',
      multiHit: 18, // 5 Main arrows + 13 Sub arrows
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
      name: 'Every Arrow Finds Its Target',
      url: 'UI_Talent_S_Ambor_05',
      description:
        'Increases the CRIT Rate of **Fiery Rain** by 10% and widens its AoE by 30%.',
      level: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'burstCritRate',
          coef: 0.1
        }
      ]
    },
    {
      name: 'Precise Shot',
      url: 'UI_Talent_S_Ambor_06',
      description: 'Aimed Shot hits on weak points increase ATK by 15% for 10s.',
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk%',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Bunny Triggered',
      url: 'UI_Talent_S_Ambor_02',
      description:
        "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it.\nExplosion via manual detonation deals 200% additional DMG.",
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'skill',
          coef: 2.0
        }
      ]
    },
    {
      name: 'Wildfire',
      url: 'UI_Talent_S_Ambor_04',
      description:
        "**Fiery Rain** increases all party members' Movement SPD by 15% and ATK by 15% for 10s.",
      constellation: 2,
      target: 'party',
      actionType: 'passive',
      values: [
        {
          scaling: 'moveSpd',
          coef: 0.15
        },
        {
          scaling: 'atk%',
          coef: 0.15
        }
      ]
    }
  ]
};

export default charName;
