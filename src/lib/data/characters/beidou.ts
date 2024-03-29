import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000024,
  id: 'beidou',
  name: 'beidou',
  fullName: 'Beidou',
  url: 'UI_AvatarIcon_Beidou',
  rating: 4,
  weapon: 'claymore',
  region: 'liyue',
  vision: 'electro',
  specialized: 'electro',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Oceanborne',
    skill: 'Tidecaller',
    burst: 'Stormbreaker'
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
      name: 'Stunning Revenge',
      tag: 'X4',
      damageBonus: 'normal',
      hasOwnDMGType: 'electro',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.2
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
            param: 'param6'
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
            param: 'param10'
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
            param: 'param11'
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
            param: 'param12'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Shield DMG Absorption',
      damageBonus: 'skill',
      url: 'Skill_S_Beidou_01',
      isShield: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          },
          {
            scaling: 'flatValue',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Base DMG',
      tag: 'E0',
      damageBonus: 'skill',
      url: 'Skill_S_Beidou_01',
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
      name: 'DMG Bonus on Hit Taken',
      damageBonus: 'skill',
      url: 'Skill_S_Beidou_01',
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
      name: 'Total DMG  1 Hit Taken',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Beidou_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          },
          {
            scaling: 'atk',
            param: 'param4'
          }
        ]
      ]
    },
    {
      name: 'DMG With 2+ Hits Taken',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Beidou_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          },
          {
            scaling: 'atk',
            param: 'param4'
          },
          {
            scaling: 'atk',
            param: 'param4'
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
      url: 'Skill_E_Beidou_01',
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
      name: 'Lightning DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Beidou_01',
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
      name: "Sea Beast's Scourge",
      damageBonus: 'burst',
      url: 'Skill_E_Beidou_01',
      isShield: true,
      constellation: 1,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1',
            coef: 0.16
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Lightning Storm',
      url: 'UI_Talent_S_Beidou_06',
      description:
        'Gain the following effects for 10s after unleashing **Tidecaller** with its maximum DMG Bonus: \n·DMG dealt by Normal and Charged Attacks is increased by 15%. ATK SPD of Normal and Charged Attacks is increased by 15%.\n·Greatly reduced delay before unleashing Charged Attacks.',
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normal',
          coef: 0.15
        },
        {
          scaling: 'charged',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Bane of Evil',
      url: 'UI_Talent_S_Beidou_04',
      description:
        'During the duration of **Stormbreaker**, the Electro RES of surrounding opponents is decreased by 15%.',
      constellation: 6,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'electroRes',
          coef: 0.15
        }
      ]
    }
  ]
};

export default charName;
