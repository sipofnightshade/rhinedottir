import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'wanderer',
  fullName: 'Wanderer',
  rating: 5,
  weapon: 'catalyst',
  region: 'sumeru',
  vision: 'anemo',
  specialized: 'critrate',
  c3: 'burst',
  c5: 'skill',
  burstCost: 60,
  talentNames: {
    normal: 'Yuuban Meigen',
    skill: 'Hanega: Song of the Wind',
    burst: 'Kyougen: Five Ceremonial Plays'
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
      name: 'C6 - 1 - Hit DMG',
      tag: 'X1',
      constellation: 6,
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
            param: 'param11'
          }
        ]
      ]
    },
    {
      name: 'C6 - 2 - Hit DMG',
      tag: 'X2',
      constellation: 6,
      damageBonus: 'normal',
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
            param: 'param12'
          }
        ]
      ]
    },
    {
      name: 'C6 - 3 - Hit DMG',
      tag: 'X3',
      constellation: 6,
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param13'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param14'
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
            param: 'param5'
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
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Wanderer_01',
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
      name: 'Wind Arrows',
      hasOwnBonusFlatDMG: 'windArrows',
      tag: 'A4',
      url: 'UI_Talent_S_Wanderer_06',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.35
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.35
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.35
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.35
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Burst DMG x1',
      damageBonus: 'burst',
      url: 'Skill_E_Wanderer_01',
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
      name: 'Burst DMG x5',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Wanderer_01',
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
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
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
      name: 'Windfavored State',
      url: 'Skill_S_Wanderer_01',
      description:
        'The Wanderer cannot perform Plunging Attacks in this state. When he uses Normal and Charged Attacks, they will be converted into Kuugo: Fushoudan and Kuugo: Toufukai respectively; the DMG they deal and their AoE will be increased, and their DMG will be considered Normal and Charged Attack DMG respectively.',
      target: 'self',
      actionType: 'toggle',
      hasLevels: 'skill',
      values: [
        {
          scaling: 'normalSpecialMultiplier',
          coef: 'param2'
        },
        {
          scaling: 'chargedSpecialMultiplier',
          coef: 'param3'
        }
      ]
    },
    {
      name: 'Jade-Claimed Flower',
      url: 'UI_Talent_S_Wanderer_05',
      description:
        'If **Hanega: Song of the Wind** comes into contact with Hydro/Pyro/Cryo/Electro when it is unleashed, this instance of the Windfavored state will obtain buffs according to the contacted element(s):\n·Hydro: Kuugoryoku Point cap increases by 20.\n·Pyro: ATK increases by 30%.\n·Cryo: CRIT Rate increases by 20%.\n·Electro: When Normal and Charged Attacks hit an opponent, 0.8 Energy will be restored. Energy can be restored this way once every 0.2s.\n\nYou can have up to 2 different kinds of these buffs simultaneously.',
      level: 2,
      target: 'self',
      actionType: 'multiSelect',
      maxSelects: 3,
      values: [
        {
          label: 'hydro',
          scaling: 'Kuugoryoku Point',
          coef: 20
        },
        {
          label: 'pyro',
          scaling: 'atk%',
          coef: 0.3
        },
        {
          label: 'cryo',
          scaling: 'critrate',
          coef: 0.2
        },
        {
          label: 'electro',
          scaling: 'Energy Particles',
          coef: 0.8
        }
      ]
    },
    {
      name: 'Shoban: Ostentatious Plumage',
      url: 'UI_Talent_S_Wanderer_01',
      description:
        'When in the **Windfavored** state, the Attack SPD of the Wanderer\'s Kuugo: Fushoudan and Kuugo: Toufukai is increased by 10%.\nAdditionally, the wind arrows fired by the Passive Talent "Gales of Reverie" will deal an additional 25% of his ATK as DMG. You must unlock the Passive Talent "Gales of Reverie" first.',
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      sourceStats: ['atk'],
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.1
        },
        {
          scaling: 'chargedATKSpd',
          coef: 0.1
        },
        {
          scaling: 'windArrows',
          coef: 0.25,
          source: ['atk', 0]
        }
      ]
    },
    {
      name: 'Niban: Isle Amidst White Waves',
      url: 'UI_Talent_S_Wanderer_02',
      description:
        "When in the **Windfavored** state, **Kyougen: Five Ceremonial Plays** will see its DMG increased by 4% per point of difference between the max amount of Kuugoryoku Points contrasted with Kuugoryoku's present capacity when using this skill.\nThrough this method, you can increase Kyougen: Five Ceremonial Plays's DMG by a maximum of 200%.",
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'burst',
          coef: [
            0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04,
            0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04,
            0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04,
            0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04
          ]
        }
      ]
    }
  ]
};

export default charName;
