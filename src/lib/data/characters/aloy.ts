import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'aloy',
  fullName: 'Aloy',
  rating: 5,
  weapon: 'bow',
  region: 'other',
  vision: 'cryo',
  specialized: 'cryo',
  c3: undefined,
  c5: undefined,
  burstCost: 80,
  talentNames: {
    normal: 'Normal Attack: Rapid Fire',
    skill: 'Frozen Wilds',
    burst: 'Prophecies of Dawn'
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
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
            param: 'param3'
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
      name: 'Aimed Shot',
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
      name: 'Fully-Charged Aimed Shot',
      tag: 'C1',
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
      name: 'Freeze Bomb DMG',
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
      name: 'Chillwater Bomblet DMG',
      tag: 'EB',
      damageBonus: 'skill',
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
    // {
    //   name: 'Rushing Ice State',
    //   url: 'Skill_S_Aloy_01',
    //   description: 'description',
    //   constellation: 0,
    //   infusion: 'cryo',
    //   target: 'self',
    //   actionType: 'stack',
    //   hasLevels: 'skill',
    //   values: [
    //     {
    //       scaling: 'normal',
    //       coef: ['param1', 'param1', 'param1']
    //     }
    //   ]
    // },
    {
      name: 'Rushing Ice State',
      url: 'Skill_S_Aloy_01',
      description:
        "When a Freeze Bomb or Chillwater Bomblet hits an opponent, the opponent's ATK is decreased, and Aloy receives 1 Coil stack. Aloy can gain up to 1 Coil stack every 0.1s.\nEach stack of Coil increases Aloy's Normal Attack DMG. When Aloy has 4 Coil stacks, all stacks of Coil are cleared. She then enters the Rushing Ice state, which further increases the damage dealt by her Normal Attacks and converts her Normal Attack damage to Cryo damage.",
      constellation: 0,
      infusion: 'cryo',
      target: 'self',
      actionType: 'toggle',
      hasLevels: 'skill',
      values: [
        {
          scaling: 'normal',
          coef: 'param8'
        }
      ]
    },
    {
      name: 'Combat Override',
      url: 'UI_Talent_S_Aloy_05',
      description:
        "When a Freeze Bomb or Chillwater Bomblet hits an opponent, the opponent's ATK is decreased, and Aloy receives 1 Coil stack. Aloy can gain up to 1 Coil stack every 0.1s.\nEach stack of Coil increases Aloy's Normal Attack DMG. When Aloy has 4 Coil stacks, all stacks of Coil are cleared. She then enters the Rushing Ice state, which further increases the damage dealt by her Normal Attacks and converts her Normal Attack damage to Cryo damage.",
      constellation: 0,
      level: 2,
      target: 'halfnearby',
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk%',
          coef: 0.16
        }
      ]
    },
    {
      name: 'Strong Strike',
      url: 'UI_Talent_S_Aloy_06',
      description:
        "When a Freeze Bomb or Chillwater Bomblet hits an opponent, the opponent's ATK is decreased, and Aloy receives 1 Coil stack. Aloy can gain up to 1 Coil stack every 0.1s.\nEach stack of Coil increases Aloy's Normal Attack DMG. When Aloy has 4 Coil stacks, all stacks of Coil are cleared. She then enters the Rushing Ice state, which further increases the damage dealt by her Normal Attacks and converts her Normal Attack damage to Cryo damage.",
      constellation: 0,
      level: 8,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'cryo',
          coef: [0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035]
        }
      ]
    }
  ]
};

export default charName;
