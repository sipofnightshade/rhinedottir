import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'venti',
  fullName: 'Venti',
  rating: 5,
  weapon: 'bow',
  region: 'mondstat',
  vision: 'anemo',
  specialized: 'energy',
  c3: 'burst',
  c5: 'skill',
  burstCost: 60,
  talentNames: {
    normal: 'Divine Marksmanship',
    skill: 'Skyward Sonnet',
    burst: "Wind's Grand Ode"
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
      name: 'Fully-Charged Aimed Shot',
      tag: 'C1',
      damageBonus: 'charged',
      hasOwnDMGType: 'anemo',
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
      name: 'Splitting Gales',
      tag: 'X1',
      damageBonus: 'charged',
      hasOwnDMGType: 'anemo',
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
            param: 'param12'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param12'
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
      tag: 'EP',
      damageBonus: 'skill',
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
      name: 'Skill DMG',
      tag: 'EH',
      damageBonus: 'skill',
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
  burst: [
    {
      name: 'Burst DoT',
      tag: 'Q1',
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
      name: 'Additional Elemental DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      hasOwnDMGType: 'hydro',
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
      name: 'Additional Elemental DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      hasOwnDMGType: 'pyro',
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
      name: 'Additional Elemental DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      hasOwnDMGType: 'cryo',
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
      name: 'Additional Elemental DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      hasOwnDMGType: 'electro',
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
  actions: [
    {
      name: 'Breeze of Reminiscence',
      url: 'UI_Talent_S_Venti_02',
      description:
        "**Skyward Sonnet** decreases opponents' Anemo RES and Physical RES by 12% for 10s.\nOpponents launched by **Skyward Sonnet** suffer an additional 12% Anemo RES and Physical RES decrease while airborne.",
      constellation: 2,
      target: 'enemy',
      actionType: 'stack',
      values: [
        {
          scaling: 'anemoRes',
          coef: [0.12, 0.12]
        },
        {
          scaling: 'physicalRes',
          coef: [0.12, 0.12]
        }
      ]
    },
    {
      name: 'Hurricane of Freedom',
      url: 'UI_Talent_S_Venti_03',
      description:
        'When Venti picks up an Elemental Orb or Particle, he receives a 25% Anemo DMG Bonus for 10s.',
      constellation: 4,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'anemo',
          coef: 0.25
        }
      ]
    },
    {
      name: 'Storm of Defiance',
      url: 'UI_Talent_S_Venti_04',
      description:
        "Targets who take DMG from **Wind's Grand Ode** have their Anemo RES decreased by 20%.",
      constellation: 6,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'energy',
          coef: 0
        }
      ]
    },
    {
      name: 'Storm of Defiance - Elemental Absorption',
      url: 'UI_Talent_S_Venti_04',
      description:
        "Targets who take DMG from **Wind's Grand Ode**, and if an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
      constellation: 6,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'hydro',
          coef: 0.2
        },
        {
          scaling: 'pyro',
          coef: 0.2
        },
        {
          scaling: 'cryo',
          coef: 0.2
        },
        {
          scaling: 'electro',
          coef: 0.2
        }
      ]
    }
  ],
  offField: []
};

export default charName;
