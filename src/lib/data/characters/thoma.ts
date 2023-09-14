import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'thoma',
  fullName: 'Thoma',
  rating: 4,
  weapon: 'polearm',
  region: 'inazuma',
  vision: 'pyro',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Swiftshatter Spear',
    skill: 'Blazing Blessing',
    burst: 'Crimson Ooyoroi'
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
      name: 'Skill DMG',
      tag: 'E',
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
      name: 'Shield DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
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
      name: 'Max Shield DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5'
          },
          {
            scaling: 'flatValue',
            param: 'param6'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
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
    },
    {
      name: 'Fiery Collapse DMG',
      tag: 'QC',
      damageBonus: 'burst',
      hasOwnBonusFlatDMG: 'fieryCollapse',
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
      name: 'Shield DMG Absorption',
      isShield: true,
      damageBonus: 'burst',
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
      name: 'Imbricated Armor',
      url: 'UI_Talent_S_Tohma_05',
      description:
        "When your current active character obtains or refreshes a **Blazing Barrier**, this character's Shield Strength will increase by 5% for 6s.\nThis effect can be triggered once every 0.3s seconds. Max 5 stacks.",
      level: 2,
      target: 'party',
      actionType: 'stack',
      values: [
        {
          scaling: 'shieldStrength',
          coef: [0.05, 0.05, 0.05, 0.05, 0.05]
        }
      ]
    },
    {
      name: 'Flaming Assault',
      url: 'UI_Talent_S_Tohma_06',
      description:
        "DMG dealt by **Crimson Ooyoroi**'s Fiery Collapse is increased by 2.2% of Thoma's Max HP.",
      level: 8,
      target: 'self',
      sourceStats: ['hp'],
      actionType: 'passive',
      values: [
        {
          scaling: 'fieryCollapse',
          coef: 0.022,
          source: ['hp', 0]
        }
      ]
    },
    {
      name: 'Burning Heart',
      url: 'UI_Talent_S_Tohma_04',
      description:
        "When a **Blazing Barrier** is obtained or refreshed, the DMG dealt by all party members' Normal, Charged, and Plunging Attacks is increased by 15% for 6s.",
      constellation: 6,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normal',
          coef: 0.15
        },
        {
          scaling: 'charged',
          coef: 0.15
        },
        {
          scaling: 'plunge',
          coef: 0.15
        }
      ]
    }
  ]
};

export default charName;
