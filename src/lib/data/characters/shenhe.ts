import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'shenhe',
  fullName: 'Shenhe',
  rating: 5,
  weapon: 'polearm',
  region: 'liyue',
  vision: 'cryo',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'normalName',
    skill: 'skillName',
    burst: 'burstName'
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
        ],
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
      name: 'Press Skill DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Shenhe_01',
      hasOwnBonusDMG: 'springSpiritSummoning',
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
      name: 'Hold Skill DMG',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Shenhe_01',
      hasOwnBonusDMG: 'springSpiritSummoning',
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
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Shenhe_01',
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
      name: 'DoT DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Shenhe_01',
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
  actions: [
    {
      name: 'Icy Quill',
      url: 'Skill_S_Shenhe_01',
      description:
        "When Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts deal Cryo DMG to opponents, the DMG dealt is increased based on Shenhe's current ATK.\n**Press/Hold Trigger Quota:** 5/7",
      target: 'active',
      actionType: 'toggle',
      hasLevels: 'skill',
      sourceStats: ['atk'],
      values: [
        {
          scaling: 'cryoFlatDMG',
          coef: 'param3',
          source: ['atk', 0]
        }
      ]
    },
    {
      name: 'Talisman Spirit Field',
      url: 'Skill_E_Shenhe_01',
      description:
        'The Talisman Spirit then creates a field that decreases the Cryo RES and Physical RES of opponents within it. It also deals periodic Cryo DMG to opponents within the field.',
      target: 'enemy',
      actionType: 'toggle',
      hasLevels: 'burst',
      values: [
        {
          scaling: 'cryoRes',
          coef: 'param2'
        },
        {
          scaling: 'physicalRes',
          coef: 'param2'
        }
      ]
    },
    {
      name: 'Deific Embrace',
      url: 'UI_Talent_S_Shenhe_05',
      description:
        "An active character within the field created by **Divine Maiden's Deliverance** gains 15% Cryo DMG Bonus.",
      level: 2,
      target: 'active',
      actionType: 'toggle',
      values: [
        {
          scaling: 'cryo',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Press - Spirit Communion Seal',
      url: 'UI_Talent_S_Shenhe_06',
      description:
        'After Shenhe uses **Spring Spirit Summoning**, she will grant all nearby party members the following effects:\n- Press: Elemental Skill and Elemental Burst DMG increased by 15% for 10s.',
      level: 8,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'skill',
          coef: 0.15
        },
        {
          scaling: 'burst',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Hold - Spirit Communion Seal',
      url: 'UI_Talent_S_Shenhe_06',
      description:
        'After Shenhe uses **Spring Spirit Summoning**, she will grant all nearby party members the following effects:\n- Hold: Normal, Charged, and Plunging Attack DMG increased by 15% for 15s.',
      level: 8,
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
    },
    {
      name: 'Centered Spirit',
      url: 'UI_Talent_S_Shenhe_01',
      description:
        "**Divine Maiden's Deliverance** lasts for 6 seconds longer. Active characters within the skill's field deal 15% increased Cryo CRIT DMG.",
      constellation: 2,
      target: 'active',
      actionType: 'toggle',
      values: [
        {
          scaling: 'cryoCritDMG',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Insight',
      url: 'UI_Talent_S_Shenhe_03',
      description:
        'When characters under the effect of **Icy Quill** applied by Shenhe trigger its DMG Bonus effects, Shenhe will gain a Skyfrost Mantra stack:\n· When Shenhe uses **Spring Spirit Summoning**, she will consume all stacks of Skyfrost Mantra, increasing the DMG of that Spring Spirit Summoning by 5% for each stack consumed.\n· Max 50 stacks. Stacks last for 60s.',
      constellation: 4,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'springSpiritSummoning',
          coef: [
            0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05,
            0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05,
            0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05,
            0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05
          ]
        }
      ]
    }
  ]
};

export default charName;
