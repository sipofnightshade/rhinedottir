import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'yoimiya',
  fullName: 'Yoimiya',
  rating: 5,
  weapon: 'bow',
  region: 'inazuma',
  vision: 'pyro',
  specialized: 'critrate',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Firework Flare-Up',
    skill: 'Niwabi Fire-Dance',
    burst: 'Ryuukin Saxifrage'
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
      name: 'Blazing Arrow 1 - Hit DMG',
      tag: 'X1',
      damageBonus: 'normal',
      constellation: 6,
      hasOwnDMGType: 'pyro',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param16'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param16'
          }
        ]
      ]
    },
    {
      name: 'Blazing Arrow 2 - Hit DMG',
      tag: 'X2',
      damageBonus: 'normal',
      constellation: 6,
      hasOwnDMGType: 'pyro',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param17'
          }
        ]
      ]
    },
    {
      name: 'Blazing Arrow 3 - Hit DMG',
      tag: 'X3',
      damageBonus: 'normal',
      constellation: 6,
      hasOwnDMGType: 'pyro',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param18'
          }
        ]
      ]
    },
    {
      name: 'Blazing Arrow 4 - Hit DMG',
      tag: 'X4',
      damageBonus: 'normal',
      constellation: 6,
      hasOwnDMGType: 'pyro',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param19'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param19'
          }
        ]
      ]
    },
    {
      name: 'Blazing Arrow 5 - Hit DMG',
      tag: 'X5',
      damageBonus: 'normal',
      constellation: 6,
      hasOwnDMGType: 'pyro',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param20'
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
      name: 'Charge Level 1 Aimed Shot',
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
    },
    {
      name: 'Kindling Arrow DMG',
      damageBonus: 'charged',
      hasOwnDMGType: 'pyro',
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
      name: 'Kindling Arrow x3 DMG',
      tag: 'CX',
      hasOwnDMGType: 'pyro',
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
            param: 'param8'
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
  skill: [],
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q',
      url: 'Skill_E_Yoimiya_01',
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
      name: 'Aurous Blaze Explosion DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Yoimiya_01',
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
      name: 'Niwabi Enshou',
      url: 'Skill_S_Yoimiya_01',
      description:
        "Yoimiya waves a sparkler and causes a ring of saltpeter to surround her.\n\n**Niwabi Enshou**\nDuring this time, arrows fired by Yoimiya's Normal Attack will be Blazing Arrows, and their DMG will be increased and converted to Pyro DMG. During this time, Normal Attack: Firework Flare-Up will not generate Kindling Arrows at Charge Level 2.\n\nThis effect will deactivate when Yoimiya leaves the field.",
      target: 'self',
      infusion: 'pyro',
      hasLevels: 'skill',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalSpecialMultiplier',
          coef: 'param4'
        }
      ]
    },
    {
      name: 'Tricks of the Trouble-Maker',
      url: 'UI_Talent_S_Yoimiya_05',
      description:
        "During **Niwabi Fire-Dance**, shots from Yoimiya's Normal Attack will increase her Pyro DMG Bonus by 2% on hit. This effect lasts for 3s and can have a maximum of 10 stacks.",
      level: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'pyro',
          coef: [0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02]
        }
      ]
    },
    {
      name: "Summer Night's Dawn",
      url: 'UI_Talent_S_Yoimiya_06',
      description:
        'Using **Ryuukin Saxifrage** causes nearby party members (not including Yoimiya) to gain a 10% ATK increase for 15s. Additionally, a further ATK Bonus will be added on based on the number of "Tricks of the Trouble-Maker" stacks Yoimiya possesses when using **Ryuukin Saxifrage**. Each stack increases this ATK Bonus by 1%.',
      level: 8,
      target: 'nearby',
      actionType: 'stack',
      values: [
        {
          scaling: 'atk%',
          coef: [0.1, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]
        }
      ]
    },
    {
      name: 'Agate Ryuukin',
      url: 'UI_Talent_S_Yoimiya_01',
      description:
        "The Aurous Blaze created by **Ryuukin Saxifrage** lasts for an extra 4s.\nAdditionally, when an opponent affected by Aurous Blaze is defeated within its duration, Yoimiya's ATK is increased by 20% for 20s.",
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk%',
          coef: 0.2
        }
      ]
    },
    {
      name: 'A Procession of Bonfires',
      url: 'UI_Talent_S_Yoimiya_02',
      description:
        "When Yoimiya's Pyro DMG scores a CRIT Hit, Yoimiya will gain a 25% Pyro DMG Bonus for 6s.\nThis effect can be triggered even when Yoimiya is not the active character.",
      constellation: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'pyro',
          coef: 0.25
        }
      ]
    }
  ]
};

export default charName;
