import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'nahida',
  fullName: 'Nahida',
  rating: 5,
  weapon: 'catalyst',
  region: 'sumeru',
  vision: 'dendro',
  specialized: 'em',
  c3: 'skill',
  c5: 'burst',
  burstCost: 50,
  talentNames: {
    normal: 'Akara',
    skill: 'All Schemes to Know',
    burst: 'Illusory Heart'
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
      name: 'Charged Attack',
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
            param: 'param7'
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
            param: 'param8'
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
            param: 'param9'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Press DMG',
      tag: 'EP',
      damageBonus: 'skill',
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
      name: 'Hold DMG',
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
    },
    {
      name: 'Tri-Karma Purification DMG',
      tag: 'EC',
      hasOwnBonusDMG: 'triKarma',
      hasOwnCritRate: 'triKarmaCritRate',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          },
          {
            scaling: 'em',
            param: 'param4'
          }
        ]
      ]
    },
    {
      name: 'Tri-Karma: Karmic Oblivion DMG',
      tag: 'X6',
      constellation: 6,
      hasOwnBonusDMG: 'triKarma',
      hasOwnCritRate: 'triKarmaCritRate',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3',
            coef: 2
          },
          {
            scaling: 'em',
            param: 'param4',
            coef: 4
          }
        ]
      ]
    }
  ],
  burst: [],
  actions: [
    {
      name: 'Shrine of Maya - Pyro',
      url: 'Skill_E_Nahida_01',
      description:
        'When the Shrine of Maya field is unleashed, the following effects will be separately unleashed based on the Elemental Types present within the party.\n·Pyro: While Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from "All Schemes to Know" is increased.\n·Electro: While Nahida remains within the Shrine of Maya, the interval between each Tri-Karma Purification from "All Schemes to Know" is decreased.\n·Hydro: The Shrine of Maya\'s duration is increased.\n\nIf there are at least 2 party members of the aforementioned Elemental Types present when the field is deployed, the aforementioned effects will be increased further.\n\nEven if Nahida is not on the field, these bonuses will still take effect so long as party members are within the Shrine of Maya.',
      target: 'self',
      actionType: 'visionMatchToggle',
      hasLevels: 'burst',
      hasVisionLabel: 'pyro',
      values: [
        {
          scaling: 'triKarma',
          coef: ['param1', 'param2']
        }
      ]
    },
    {
      name: 'Compassion Illuminated',
      url: 'UI_Talent_S_Nahida_05',
      description:
        'When unleashing **Illusory Heart**, the Shrine of Maya will gain the following effects:\nThe Elemental Mastery of the active character within the field will be increased by 25% of the Elemental Mastery of the party member with the highest Elemental Mastery.\nYou can gain a maximum of 250 Elemental Mastery in this manner.',
      level: 2,
      sourceStats: ['partyMaxEM'],
      target: 'active',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 0.25,
          source: ['partyMaxEM', 0, 1000]
        }
      ]
    },
    {
      name: 'Awakening Elucidated',
      url: 'UI_Talent_S_Nahida_06',
      description:
        "Each point of Nahida's Elemental Mastery beyond 200 will grant 0.1% Bonus DMG and 0.03% CRIT Rate to Tri-Karma Purification from **All Schemes to Know**.\nA maximum of 80% Bonus DMG and 24% CRIT Rate can be granted to Tri-Karma Purification in this manner.",
      level: 8,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['em'],
      values: [
        {
          scaling: 'triKarma',
          coef: 0.001,
          source: ['em', 200, 1000]
        },
        {
          scaling: 'triKarmaCritRate',
          coef: 0.0003,
          source: ['em', 200, 1000]
        }
      ]
    },
    // {
    //   name: 'The Seed of Stored Knowledge',
    //   url: 'UI_Talent_S_Nahida_01',
    //   description: "When the **Shrine of Maya** is unleashed and the Elemental Types of the party members are being tabulated, the count will add 1 to the number of Pyro, Electro, and Hydro characters respectively.",
    //   constellation:1,
    //   target: 'self',
    //   actionType: 'passive',
    //   values: [
    //     {
    //       scaling: 'energy',
    //       coef: 0
    //     }
    //   ]
    // },
    {
      name: 'The Root of All Fullness - Buffs',
      url: 'UI_Talent_S_Nahida_02',
      description:
        'Opponents that are marked by **Seeds of Skandha** applied by Nahida herself will be affected by the following effects:\n·Burning, Bloom, Hyperbloom, and Burgeon Reaction DMG they receive can score CRIT Hits. CRIT Rate and CRIT DMG are fixed at 20% and 100% respectively.',
      constellation: 2,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'burningCritRate',
          coef: 0.2
        },
        {
          scaling: 'bloomCritRate',
          coef: 0.2
        },
        {
          scaling: 'hyperbloomCritRate',
          coef: 0.2
        },
        {
          scaling: 'burgeonCritRate',
          coef: 0.2
        },
        {
          scaling: 'burningCritDMG',
          coef: 1.0
        },
        {
          scaling: 'bloomCritDMG',
          coef: 1.0
        },
        {
          scaling: 'hyperbloomCritDMG',
          coef: 1.0
        },
        {
          scaling: 'burgeonCritDMG',
          coef: 1.0
        }
      ]
    },
    {
      name: 'The Root of All Fullness - Debuffs',
      url: 'UI_Talent_S_Nahida_02',
      description:
        'Opponents that are marked by **Seeds of Skandha** applied by Nahida herself will be affected by the following effect:\n·Within 8s of being affected by Quicken, Aggravate, Spread, DEF is decreased by 30%.',
      constellation: 2,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 0.3
        }
      ]
    },
    {
      name: 'The Stem of Manifest Inference',
      url: 'UI_Talent_S_Nahida_03',
      description:
        "When 1/2/3/4 (or more) nearby opponents are affected by **All Schemes to Know**'s Seeds of Skandha, Nahida's Elemental Mastery will be increased by 100/120/140/160.",
      constellation: 4,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'em',
          coef: [100, 20, 20, 20]
        }
      ]
    },
    {
      name: 'name',
      url: 'UI_Talent_S_PlayerWind_02',
      description: 'description',
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'energy',
          coef: 0
        }
      ]
    }
  ],
  offField: []
};

export default charName;
