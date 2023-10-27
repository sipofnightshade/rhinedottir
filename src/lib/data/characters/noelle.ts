import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000034,
  id: 'noelle',
  name: 'noelle',
  fullName: 'Noelle',
  url: 'UI_AvatarIcon_Noel',
  rating: 4,
  weapon: 'claymore',
  region: 'mondstat',
  vision: 'geo',
  specialized: 'def%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Favonius Bladework - Maid',
    skill: 'Breastplate',
    burst: 'Sweeping Time'
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
      name: 'Skill DMG',
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Noel_01',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param6'
          }
        ]
      ]
    },
    {
      name: 'DMG Absorption',
      isShield: true,
      damageBonus: 'skill',
      url: 'Skill_S_Noel_01',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param1'
          },
          {
            scaling: 'flatValue',
            param: 'param7'
          }
        ]
      ]
    },
    {
      name: 'Healing',
      isHealing: true,
      damageBonus: 'skill',
      url: 'Skill_S_Noel_01',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param2'
          },
          {
            scaling: 'flatValue',
            param: 'param8'
          }
        ]
      ]
    },
    {
      name: 'Devotion',
      isShield: true,
      damageBonus: 'skill',
      url: 'Skill_S_Noel_01',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param1',
            coef: 4.0
          }
        ]
      ]
    },
    {
      name: 'To Be Cleaned DMG',
      constellation: 4,
      tag: 'X4',
      damageBonus: 'skill',
      url: 'Skill_S_Noel_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 4.0
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Noel_01',
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
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Noel_01',
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
      name: 'Sweeping Time',
      url: 'Skill_E_Noel_01',
      description:
        'Gathering the strength of stone around her weapon, Noelle strikes the opponents surrounding her within a large AoE, dealing Geo DMG.\nAfterwards, Noelle gains the following effects:\n·Larger attack AoE.\n·Converts attack DMG to Geo DMG that cannot be overridden by any other elemental infusion.\n·Increased ATK that scales based on her DEF.',
      target: 'self',
      infusion: 'geo',
      hasLevels: 'burst',
      sourceStats: ['def'],
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk',
          coef: 'param3',
          source: ['def', 0]
        }
      ]
    },
    {
      name: 'Combat Maid',
      url: 'UI_Talent_S_Noel_02',
      description:
        "Decreases the Stamina Consumption of Noelle's Charged Attacks by 20% and increases her Charged Attack DMG by 15%.",
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'charged',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Must Be Spotless',
      url: 'UI_Talent_S_Noel_04',
      description:
        "**Sweeping Time** increases Noelle's ATK by an additional 50% of her DEF.\nAdditionally, every opponent defeated during the skill's duration adds 1s to the duration, up to 10s.",
      constellation: 6,
      target: 'self',
      sourceStats: ['def'],
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk',
          coef: 0.5,
          source: ['def', 0]
        }
      ]
    }
  ]
};

export default charName;
