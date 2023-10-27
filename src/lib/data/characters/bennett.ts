import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000032,
  id: 'bennett',
  name: 'bennett',
  fullName: 'Bennett',
  url: 'UI_AvatarIcon_Bennett',
  rating: 4,
  weapon: 'sword',
  region: 'mondstat',
  vision: 'pyro',
  specialized: 'energy',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Strike of Fortune',
    skill: 'Passion Overload',
    burst: 'Fantastic Voyage'
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
        ],
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
      name: 'Press DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Bennett_01',
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
      name: 'Charge Level 1 DMG',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Bennett_01',
      damage: [
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
      name: 'Charge Level 2 DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Bennett_01',
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
      name: 'Explosion DMG',
      tag: 'E3',
      damageBonus: 'skill',
      url: 'Skill_S_Bennett_01',
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
      name: 'Unexpected Odyssey',
      tag: 'X4',
      damageBonus: 'skill',
      url: 'UI_Talent_S_Bennett_03',
      constellation: 4,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param6',
            coef: 1.35
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
      url: 'Skill_E_Bennett_01',
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
      name: 'Continuous Regeneration Per Sec',
      damageBonus: 'burst',
      isHealing: true,
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
      name: 'Fantastic Voyage',
      url: 'Skill_E_Bennett_01',
      description:
        "If the health of a character within the AoE is higher than 70%, they gain an ATK Bonus that is based on Bennett's Base ATK.",
      target: 'party',
      actionType: 'toggle',
      hasLevels: 'burst',
      sourceStats: ['baseATK'],
      values: [
        {
          scaling: 'atk',
          coef: 'param4',
          source: ['baseATK', 0]
        }
      ]
    },
    {
      name: 'Grand Expectation',
      url: 'UI_Talent_S_Bennett_01',
      description:
        "**Fantastic Voyage**'s ATK increase no longer has an HP restriction, and gains an additional 20% of Bennett's Base ATK.",
      target: 'party',
      constellation: 1,
      sourceStats: ['baseATK'],
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk',
          coef: 0.2,
          source: ['baseATK', 0]
        }
      ]
    },
    {
      name: 'Impasse Conqueror',
      url: 'UI_Talent_S_Bennett_02',
      description:
        "When Bennett's HP falls below 70%, his Energy Recharge is increased by 30%.",
      target: 'party',
      constellation: 2,
      actionType: 'toggle',
      values: [
        {
          scaling: 'energy',
          coef: 0.3
        }
      ]
    },
    {
      name: 'Fire Ventures With Me',
      url: 'UI_Talent_S_Bennett_04',
      description:
        "Sword, Claymore, or Polearm-wielding characters inside **Fantastic Voyage**'s radius gain a 15% Pyro DMG Bonus and their weapons are infused with Pyro.",
      target: 'party',
      constellation: 6,
      infusion: 'pyro',
      actionType: 'toggle',
      values: [
        {
          scaling: 'pyro',
          coef: 0.15
        }
      ]
    }
  ],
  offField: []
};

export default charName;
