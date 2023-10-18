import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000039,
  id: 'diona',
  name: 'diona',
  fullName: 'Diona',
  rating: 4,
  weapon: 'bow',
  region: 'mondstat',
  vision: 'cryo',
  specialized: 'cryo',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Kätzlein Style',
    skill: 'Icy Paws',
    burst: 'Signature Mix'
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
            param: 'param7'
          }
        ]
      ]
    },
    {
      name: 'Fully-Charged Aimed Shot',
      tag: 'C1',
      hasOwnDMGType: 'cryo',
      damageBonus: 'charged',
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
      name: 'Base Shield DMG Absorption',
      damageBonus: 'skill',
      url: 'Skill_S_Diona_01',
      isShield: true,
      damage: [
        [
          {
            scaling: 'hp',
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
      name: 'Icy Paw DMG',
      damageBonus: 'skill',
      url: 'Skill_S_Diona_01',
      hasOwnBonusDMG: 'icyPaws',
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
      name: 'Icy Paw DMG x2',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Diona_01',
      hasOwnBonusDMG: 'icyPaws',
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
      name: 'Icy Paw DMG x5',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Diona_01',
      hasOwnBonusDMG: 'icyPaws',
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
  burst: [
    {
      name: 'Skill DMG',
      tag: 'Q',
      url: 'Skill_E_Diona_01',
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
      name: 'Continuous Field DMG',
      tag: 'QC',
      url: 'Skill_E_Diona_01',
      damageBonus: 'burst',
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
      name: 'HP Regeneration Over Time',
      damageBonus: 'burst',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param3'
          },
          {
            scaling: 'flatValue',
            param: 'param4'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Shaken, Not Purred',
      url: 'UI_Talent_S_Diona_02',
      description:
        "Increases **Icy Paws**' DMG by 15%, and increases its shield's DMG Absorption by 15%.",
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'icyPaws',
          coef: 0.15
        },
        {
          scaling: 'shieldStrength',
          coef: 0.15
        }
      ]
    },
    {
      name: "Cat's Tail Closing Time",
      url: 'UI_Talent_S_Diona_04',
      description:
        "Characters within **Signature Mix**'s radius will gain the following effects based on their HP amounts:\n·Increases Incoming Healing Bonus by 30% when HP falls below or is equal to 50%.\n·Elemental Mastery increased by 200 when HP is above 50%.",
      constellation: 6,
      target: 'party',
      actionType: 'select',
      values: [
        {
          scaling: 'healingIncoming',
          coef: 0.3
        },
        {
          scaling: 'em',
          coef: 200
        }
      ]
    }
  ],
  offField: []
};

export default charName;
