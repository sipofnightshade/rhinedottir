import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000055,
  id: 'gorou',
  name: 'gorou',
  fullName: 'Gorou',
  rating: 4,
  weapon: 'bow',
  region: 'inazuma',
  vision: 'geo',
  specialized: 'geo',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Ripping Fang Fletching',
    skill: 'Inuzaka All-Round Defense',
    burst: 'Juuga: Forward Unto Victory'
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
      name: 'Aimed Shot',
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
      name: 'Fully-Charged Aimed Shot',
      hasOwnDMGType: 'geo',
      tag: 'C1',
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
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Gorou_01',
      hasOwnBonusFlatDMG: 'allRoundDefenses',
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
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Gorou_01',
      hasOwnBonusFlatDMG: 'juugaForward',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: 'Crystal Collapse DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Gorou_01',
      hasOwnBonusFlatDMG: 'juugaForward',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Lapping Hound: Warm as Water',
      damageBonus: 'burst',
      url: 'Skill_E_Gorou_01',
      constellation: 4,
      isHealing: true,
      damage: [
        [
          {
            scaling: 'def',
            param: 'param1',
            coef: 0.5
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: "General's War Banner",
      url: 'Skill_S_Gorou_01',
      description:
        'Provides up to 3 buffs to active characters within the skill\'s AoE based on the number of Geo characters in the party at the time of casting:\n· 1 Geo character: Adds "Standing Firm" - DEF Bonus.\n· 2 Geo characters: Adds "Impregnable" - Increased resistance to interruption.\n· 3 Geo characters: Adds "Crunch" - Geo DMG Bonus.\n\nGorou can deploy only 1 General\'s War Banner on the field at any one time. Characters can only benefit from 1 General\'s War Banner at a time. When a party member leaves the field, the active buff will last for 2s.\n\n**Hold**\nAdjust the location of the skill.',
      target: 'active',
      actionType: 'visionMatchToggle',
      visionCondition: 'same',
      hasLevels: 'skill',
      values: [
        {
          scaling: 'def',
          coef: ['param2', 'param2', 'param2']
        },
        {
          scaling: 'geo',
          coef: [0, 0, 0.15]
        }
      ]
    },
    {
      name: 'Heedless of the Wind and Weather',
      url: 'UI_Talent_S_Gorou_05',
      description:
        "After using **Juuga: Forward Unto Victory**, all nearby party members' DEF is increased by 25% for 12s.",
      level: 2,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 0.25
        }
      ]
    },
    {
      name: 'A Favor Repaid',
      url: 'UI_Talent_S_Gorou_06',
      description:
        'Gorou receives the following DMG Bonuses to his attacks based on his DEF:\n· **Inuzaka All-Round Defense**: Skill DMG increased by 156% of DEF\n· **Juuga: Forward Unto Victory**: Skill DMG and Crystal Collapse DMG increased by 15.6% of DEF',
      level: 8,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'allRoundDefenses',
          coef: 1.56,
          source: ['def', 0]
        },
        {
          scaling: 'juugaForward',
          coef: 0.156,
          source: ['def', 0]
        }
      ]
    },
    {
      name: 'Uprising Whirlwind',
      url: 'UI_Talent_S_PlayerWind_02',
      description: 'description',
      constellation: 6,
      target: 'party',
      actionType: 'visionMatchToggle',
      visionCondition: 'same',
      values: [
        {
          scaling: 'geoCritDMG',
          coef: [0.1, 0.2, 0.4]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
