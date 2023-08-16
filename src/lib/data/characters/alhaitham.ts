import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'alhaitham',
  fullName: 'Alhaitham',
  region: 'sumeru',
  rating: 5,
  weapon: 'sword',
  vision: 'dendro',
  specialized: 'dendro',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Normal Attack: Abductive Reasoning',
    skill: 'Universality: An Elaboration on Form',
    burst: 'Particular Field: Fetters of Phenomena'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: '2 - Hit DMG',
      tag: 'N2',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
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
      name: 'Rush Attack DMG',
      tag: 'EP',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: '1-Mirror Projection Attack DMG',
      tag: 'E1',
      damageBonus: 'skill',
      hasOwnBonusDMG: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param4'
          },
          {
            scaling: 'em',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: '2-Mirror Projection Attack DMG',
      tag: 'E2',
      damageBonus: 'skill',
      hasOwnBonusDMG: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param6'
          },
          {
            scaling: 'em',
            param: 'param7'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param6'
          },
          {
            scaling: 'em',
            param: 'param7'
          }
        ]
      ]
    },
    {
      name: '3-Mirror Projection Attack DMG',
      tag: 'E3',
      damageBonus: 'skill',
      hasOwnBonusDMG: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param8'
          },
          {
            scaling: 'em',
            param: 'param9'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          },
          {
            scaling: 'em',
            param: 'param9'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          },
          {
            scaling: 'em',
            param: 'param9'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Single-Instance DMG',
      tag: 'Q',
      damageBonus: 'burst',
      hasOwnBonusDMG: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Basic Burst DMG',
      tag: 'QB',
      multiHit: 4,
      damageBonus: 'burst',
      hasOwnBonusDMG: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: '1-Mirror Burst DMG',
      tag: 'Q1',
      multiHit: 6,
      damageBonus: 'burst',
      hasOwnBonusDMG: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: '2-Mirror Burst DMG',
      tag: 'Q2',
      multiHit: 8,
      damageBonus: 'burst',
      hasOwnBonusDMG: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: '3-Mirror Burst DMG',
      tag: 'Q3',
      multiHit: 10,
      damageBonus: 'burst',
      hasOwnBonusDMG: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'em',
            param: 'param2'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Mysteries Laid Bare',
      url: 'UI_Talent_S_Alhatham_06',
      description:
        "Each point of Alhaitham's Elemental Mastery will increase the DMG dealt by Projection Attacks and Particular Field: Fetters of Phenomena by 0.1%.The DMG of both aforementioned abilities can be increased by a maximum of 100% this way.",
      level: 8,
      constellation: 0,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'cBonusDMG',
          coef: 0.001,
          source: ['em', 0, 1.0]
        }
      ]
    },
    {
      name: 'Debate',
      url: 'UI_Talent_S_Alhatham_01',
      description:
        "When Alhaitham generates a Chisel-Light Mirror, his Elemental Mastery will be increased by 50 for 8 seconds, max 4 stacks. Each stack's duration is counted independently. This effect can be triggered even when the maximum number of Chisel-Light Mirrors has been reached.",
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'em',
          coef: [50, 50, 50, 50]
        }
      ]
    },
    {
      name: 'Elucidation - Alhaitham',
      url: 'UI_Talent_S_Alhatham_03',
      description:
        'When Particular Field: Fetters of Phenomena is unleashed, the following effects will become active based on the number of Chisel-Light Mirrors consumed and created this time around: \n·Each Mirror generated will grant Alhaitham a 10% Dendro DMG Bonus for 15s.',
      constellation: 4,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'dendro',
          coef: [0.1, 0.1, 0.1]
        }
      ]
    },
    {
      name: 'Elucidation - Party',
      url: 'UI_Talent_S_Alhatham_03',
      description:
        'When Particular Field: Fetters of Phenomena is unleashed, the following effects will become active based on the number of Chisel-Light Mirrors consumed and created this time around: \n·Each Mirror consumed will increase the Elemental Mastery of all other nearby party members by 30 for 15s.',
      constellation: 4,
      target: 'nearby',
      actionType: 'stack',
      values: [
        {
          scaling: 'em',
          coef: [30, 30, 30]
        }
      ]
    },
    {
      name: 'Mysteries Laid Bare',
      url: 'UI_Talent_S_Alhatham_06',
      description:
        'Alhaitham gains the following effects: 2 seconds after Particular Field: Fetters of Phenomena is unleashed, he will generate 3 Chisel-Light Mirrors regardless of the number of mirrors consumed. If Alhaitham generates Chisel-Light Mirrors when their numbers have already maxed out, his CRIT Rate and CRIT DMG will increase by 10% and 70% respectively for 6s. If this effect is triggered again during its initial duration, the duration remaining will be increased by 6s.',
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'critrate',
          coef: 0.1
        },
        {
          scaling: 'critdmg',
          coef: 0.7
        }
      ]
    }
  ]
};

export default charName;
