import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000044,
  id: 'xinyan',
  name: 'xinyan',
  fullName: 'Xinyan',
  rating: 4,
  weapon: 'claymore',
  region: 'liyue',
  vision: 'pyro',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Dance on Fire',
    skill: 'Sweeping Fervor',
    burst: 'Riff Revolution'
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
    }
  ],
  charged: [
    {
      name: 'Charged Attack Cyclic DMG',
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
      name: 'Charged Attack Final DMG',
      tag: 'CF',
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
      name: 'Swing DMG',
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Xinyan_01',
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
      name: 'Shield Level 1 DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param2'
          },
          {
            scaling: 'flatValue',
            param: 'param3'
          }
        ]
      ]
    },
    {
      name: 'Shield Level 2 DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param4'
          },
          {
            scaling: 'flatValue',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Shield Level 3 DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param6'
          },
          {
            scaling: 'flatValue',
            param: 'param7'
          }
        ]
      ]
    },
    {
      name: 'DoT DMG',
      tag: 'EC',
      url: 'Skill_S_Xinyan_01',
      damageBonus: 'skill',
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
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q1',
      hasOwnDMGType: 'physical',
      hasOwnCritRate: 'riffRevolution',
      damageBonus: 'burst',
      url: 'Skill_E_Xinyan_01',
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
      name: 'Pyro DoT x1',
      damageBonus: 'burst',
      url: 'Skill_E_Xinyan_01',
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
      name: 'Pyro DoT x7',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Xinyan_01',
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
  actions: [
    {
      name: "\"...Now That's Rock 'N' Roll!\"",
      url: 'UI_Talent_S_Xinyan_06',
      description:
        'Characters shielded by **Sweeping Fervor** deal 15% increased Physical DMG.',
      level: 8,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'physical',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Fatal Acceleration',
      url: 'UI_Talent_S_Xinyan_01',
      description:
        "Upon scoring a CRIT Hit, increases ATK SPD of Xinyan's Normal and Charged Attacks by 12% for 5s.\nCan only occur once every 5s.",
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.12
        },
        {
          scaling: 'chargedATKSpd',
          coef: 0.12
        }
      ]
    },
    {
      name: 'Impromptu Opening',
      url: 'UI_Talent_S_Xinyan_02',
      description:
        "**Riff Revolution**'s Physical DMG has its CRIT Rate increased by 100%, and will form a shield at Shield Level 3: Rave when cast.",
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'riffRevolution',
          coef: 1.0
        }
      ]
    },
    {
      name: 'Wildfire Rhythm',
      url: 'UI_Talent_S_Xinyan_03',
      description:
        "**Sweeping Fervor**'s swing DMG decreases opponent's Physical RES by 15% for 12s.",
      constellation: 4,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'physicalRes',
          coef: 0.15
        }
      ]
    },
    {
      name: "Rockin' in a Flaming World",
      url: 'UI_Talent_S_Xinyan_04',
      description:
        "Decreases the Stamina Consumption of Xinyan's Charged Attacks by 30%. Additionally, Xinyan's Charged Attacks gain an ATK Bonus equal to 50% of her DEF.",
      constellation: 6,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['def'],
      values: [
        {
          scaling: 'chargedFlatDMG',
          coef: 0.5,
          source: ['def', 0]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
