import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000048,
  id: 'yanfei',
  name: 'yanfei',
  fullName: 'Yanfei',
  url: 'UI_AvatarIcon_Feiyan',
  rating: 4,
  weapon: 'catalyst',
  region: 'liyue',
  vision: 'pyro',
  specialized: 'pyro',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Seal of Approval',
    skill: 'Signed Edict',
    burst: 'Done Deal'
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
    }
  ],
  charged: [
    {
      name: 'Charged Attack - 0 Seals',
      tag: 'C0',
      damageBonus: 'charged',
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
      name: 'Charged Attack - 1 Seal',
      tag: 'C1',
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
      name: 'Charged Attack - 2 Seals',
      tag: 'C2',
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
      name: 'Charged Attack - 3 Seals',
      tag: 'C3',
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
      name: 'Charged Attack - 4 Seals',
      tag: 'C4',
      damageBonus: 'charged',
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
      name: 'Blazing Eye DMG',
      tag: 'A4',
      icd: 0,
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param4',
            coef: 0.8
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
            param: 'param16'
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
            param: 'param17'
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
            param: 'param18'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Skill DMG',
      tag: 'E',
      url: 'Skill_S_Feiyan_01',
      damageBonus: 'skill',
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
      url: 'Skill_E_Feiyan_01',
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
      constellation: 4,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1',
            coef: 0.45
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Brilliance',
      url: 'Skill_E_Feiyan_01',
      description:
        '**Brilliance**\nHas the following effects:\n·Grants Yanfei a Scarlet Seal at fixed intervals.\n·Increases the DMG dealt by her Charged Attacks.',
      target: 'self',
      hasLevels: 'burst',
      actionType: 'toggle',
      values: [
        {
          scaling: 'charged',
          coef: 'param2'
        }
      ]
    },
    {
      name: 'Proviso',
      url: 'UI_Talent_S_Feiyan_05',
      description:
        "When Yanfei consumes Scarlet Seals by using a Charged Attack, each Scarlet Seal will increase Yanfei's Pyro DMG Bonus by 5%. This effect lasts for 6s. When a Charged Attack is used again during the effect's duration, it will dispel the previous effect.",
      level: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'pyro',
          coef: [0.05, 0.05, 0.05, 0.05]
        }
      ]
    },
    {
      name: 'Right of Final Interpretation',
      url: 'UI_Talent_S_Feiyan_02',
      description:
        "Increases Yanfei's Charged Attack CRIT Rate by 20% against enemies below 50% HP.",
      constellation: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'chargedCritRate',
          coef: 0.2
        }
      ]
    }
  ]
};

export default charName;
