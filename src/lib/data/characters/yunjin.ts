import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'yunjin',
  fullName: 'Yunjin',
  rating: 4,
  weapon: 'polearm',
  region: 'liyue',
  vision: 'geo',
  specialized: 'energy',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Cloud-Grazing Strike',
    skill: 'Opening Flourish',
    burst: "Cliffbreaker's Banner"
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param6'
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
            param: 'param7'
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
            param: 'param8'
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
      name: 'Press DMG',
      tag: 'EP',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param3'
          }
        ]
      ]
    },
    {
      name: 'Charge Level 1 DMG',
      tag: 'E1',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param4'
          }
        ]
      ]
    },
    {
      name: 'Charge Level 2 DMG',
      tag: 'E2',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'def',
            param: 'param5'
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
            param: 'param1'
          },
          {
            scaling: 'flatValue',
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
  actions: [
    {
      name: 'Flying Cloud Flag Formation',
      url: 'Skill_E_Yunjin_01',
      description:
        "When Normal Attack DMG is dealt to opponents, Bonus DMG will be dealt based on Yun Jin's current DEF.\nThe effects of this skill will be cleared after a set duration or after being triggered a specific number of times.",
      hasLevels: 'burst',
      target: 'active',
      actionType: 'toggle',
      sourceStats: ['def'],
      values: [
        {
          scaling: 'normalFlatDMG',
          coef: 'param2',
          source: ['def', 0]
        }
      ]
    },
    {
      name: 'Breaking Conventions',
      url: 'UI_Talent_S_Yunjin_06',
      description:
        "The Normal Attack DMG Bonus granted by **Flying Cloud Flag Formation** is further increased by 2.5%/5%/7.5%/11.5% of Yun Jin's DEF when the party contains characters of 1/2/3/4 Elemental Types, respectively.",
      level: 8,
      target: 'active',
      actionType: 'visionMatchToggle',
      visionCondition: 'different',
      sourceStats: ['def'],
      values: [
        {
          scaling: 'normalFlatDMG',
          coef: [0.025, 0.05, 0.075, 0.115],
          source: ['def', 0]
        }
      ]
    },
    {
      name: 'Myriad Mise-En-Scène',
      url: 'UI_Talent_S_Yunjin_02',
      description:
        "After **Cliffbreaker's Banner** is unleashed, all nearby party members' Normal Attack DMG is increased by 15% for 12s.",
      constellation: 2,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normal',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Flower and a Fighter',
      url: 'UI_Talent_S_PlayerWind_02',
      description:
        'When Yun Jin triggers the Crystallize Reaction, her DEF is increased by 20% for 12s.',
      constellation: 4,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Decorous Harmony',
      url: 'UI_Talent_S_Yunjin_04',
      description:
        'Characters under the effects of the **Flying Cloud Flag Formation** have their Normal ATK SPD increased by 12%.',
      constellation: 6,
      target: 'active',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.12
        }
      ]
    }
  ],
  offField: []
};

export default charName;
