import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000079,
  id: 'dehya',
  name: 'dehya',
  fullName: 'Dehya',
  url: 'UI_AvatarIcon_Dehya',
  rating: 5,
  weapon: 'claymore',
  region: 'sumeru',
  vision: 'pyro',
  specialized: 'hp%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 70,
  talentNames: {
    normal: 'Sandstorm Assault',
    skill: 'Molten Inferno',
    burst: 'Leonine Bite'
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
      name: 'Indomitable Flame DMG',
      tag: 'E1',
      url: 'Skill_S_Dehya_01',
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
      name: 'Ranging Flame DMG',
      tag: 'E2',
      url: 'Skill_S_Dehya_01',
      damageBonus: 'skill',
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
      name: 'Field DMG',
      tag: 'EC',
      url: 'Skill_S_Dehya_01',
      damageBonus: 'skill',
      hasOwnBonusDMG: 'fierySanctum',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          },
          {
            scaling: 'hp',
            param: 'param4'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: "Flame-Mane's Fist DMG",
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Dehya_02',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'hp',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Incineration Drive DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Dehya_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          },
          {
            scaling: 'hp',
            param: 'param4'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'The Flame Incandescent',
      url: 'UI_Talent_S_Dehya_01',
      description:
        "Dehya's Max HP is increased by 20%, and she deals bonus DMG based on her Max HP when using the following attacks:\n·**Molten Inferno**'s DMG will be increased by 3.6% of her Max HP.\n·**Leonine Bite**'s DMG will be increased by 6% of her Max HP.",
      constellation: 1,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'hp%',
          coef: 0.2
        },
        {
          scaling: 'skillFlatDMG',
          coef: 0.036,
          source: ['hp', 0]
        },
        {
          scaling: 'burstFlatDMG',
          coef: 0.06,
          source: ['hp', 0]
        }
      ]
    },
    {
      name: 'The Sand-Blades Glittering',
      url: 'UI_Talent_S_Dehya_02',
      description:
        'When Dehya  Molten Inferno: Ranging Flame, the duration of the recreated Fiery Sanctum field will be increased by 6s. Additionally, when a Fiery Sanctum exists on the field, DMG dealt by its next coordinated attack will be increased by 50% when active character(s) within the Fiery Sanctum field are attacked.',
      constellation: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'fierySanctum',
          coef: 0.5
        }
      ]
    },
    {
      name: 'The Burning Claws Cleaving',
      url: 'UI_Talent_S_Dehya_04',
      description:
        "The CRIT Rate of **Leonine Bite** is increased by 10%.\nAdditionally, after a Flame-Mane's Fist attack hits an opponent and deals CRIT Hits during a single Blazing Lioness state, it will cause the CRIT DMG of Leonine Bite to increase by 15% for the rest of Blazing Lioness's duration and extend that duration by 0.5s. This effect can be triggered every 0.2s. The duration can be extended for a maximum of 2s and CRIT DMG can be increased by a maximum of 60% this way.",
      constellation: 6,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'burstCritRate',
          coef: [0.1, 0, 0, 0]
        },
        {
          scaling: 'burstCritDMG',
          coef: [0.15, 0.15, 0.15, 0.15]
        }
      ]
    }
  ]
};

export default charName;
