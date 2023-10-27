import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000023,
  id: 'xiangling',
  name: 'xiangling',
  fullName: 'Xiangling',
  url: 'UI_AvatarIcon_Xiangling',
  rating: 4,
  weapon: 'polearm',
  region: 'liyue',
  vision: 'pyro',
  specialized: 'em',
  c3: 'burst',
  c5: 'skill',
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
        ],
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
      name: 'Implode',
      hasOwnDMGType: 'pyro',
      tag: 'N5',
      constellation: 2,
      damageBonus: 'normal',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param5',
            coef: 0.75
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
      name: 'Flame DMG',
      tag: 'E',
      url: 'Skill_S_Xiangling_01',
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
      name: 'Total Swing DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Xiangling_01',
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
            param: 'param2'
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
      name: '1-Hit Swing DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Xiangling_01',
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
      name: '2-Hit Swing DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Xiangling_01',
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
      name: '3-Hit Swing DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Xiangling_01',
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
      name: 'Pyronado DMG',
      icd: 0,
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Xiangling_01',
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
  actions: [
    {
      name: "Beware, It's Super Hot!",
      url: 'UI_Talent_S_Xiangling_06',
      description:
        "When **Guoba Attack**'s effect ends, Guoba leaves a chili pepper on the spot where it disappeared. Picking up a chili pepper increases ATK by 10% for 10s.",
      level: 8,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk%',
          coef: 0.1
        }
      ]
    },
    {
      name: 'Crispy Outside, Tender Inside',
      url: 'UI_Talent_S_Xiangling_01',
      description:
        "Opponents hit by Guoba's attacks have their Pyro RES reduced by 15% for 6s.",
      constellation: 1,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'pyroRes',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Condensed Pyronado',
      url: 'UI_Talent_S_Xiangling_04',
      description:
        'For the duration of **Pyronado**, all party members receive a 15% Pyro DMG Bonus.',
      constellation: 6,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'pyro',
          coef: 0.15
        }
      ]
    }
  ]
};

export default charName;
