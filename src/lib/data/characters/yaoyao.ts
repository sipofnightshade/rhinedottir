import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000077,
  id: 'yaoyao',
  name: 'yaoyao',
  fullName: 'Yaoyao',
  rating: 4,
  weapon: 'polearm',
  region: 'liyue',
  vision: 'dendro',
  specialized: 'hp%',
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
      name: '4 - Hit DMG',
      tag: 'N4',
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
      name: 'Charged Attack',
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
            param: 'param8'
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
            param: 'param9'
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
            param: 'param10'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Radish DMG',
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Yaoyao_01',
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
      name: 'Radish Healing',
      isHealing: true,
      damageBonus: 'skill',
      url: 'Skill_S_Yaoyao_01',
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
      name: 'MEGA Radish DMG',
      tag: 'X6',
      constellation: 6,
      damageBonus: 'skill',
      url: 'UI_Talent_S_Yaoyao_04',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.75
          }
        ]
      ]
    },
    {
      name: 'MEGA Radish Healing',
      isHealing: true,
      constellation: 6,
      damageBonus: 'skill',
      url: 'UI_Talent_S_Yaoyao_04',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2',
            coef: 0.075
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
      url: 'Skill_E_Yaoyao_01',
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
      name: 'Adeptal Legacy Radish DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Yaoyao_01',
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
      name: 'Adeptal Legacy Radish Healing',
      isHealing: true,
      damageBonus: 'burst',
      url: 'Skill_E_Yaoyao_01',
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
    }
  ],
  actions: [
    {
      name: "Adeptus' Tutelage",
      url: 'UI_Talent_S_Yaoyao_01',
      description:
        'When **White Jade Radishes** explode, active characters within their AoE will gain 15% Dendro DMG Bonus for 8s and have 15 Stamina restored to them. This form of Stamina Restoration can only be triggered every 5s.',
      constellation: 1,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'dendro',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Winsome',
      url: 'UI_Talent_S_Yaoyao_03',
      description:
        "After using **Raphanus Sky Cluster** or **Moonjade Descent**, Yaoyao's Elemental Mastery will be increased based on 0.3% of her Max HP for 8s. The maximum Elemental Mastery she can gain this way is 120.",
      constellation: 4,
      target: 'self',
      sourceStats: ['hp'],
      actionType: 'passive',
      values: [
        {
          scaling: 'em',
          coef: 0.003,
          source: ['hp', 0, 40000]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
