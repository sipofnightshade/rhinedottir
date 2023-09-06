import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'lynette',
  fullName: 'Lynette',
  rating: 4,
  weapon: 'sword',
  region: 'fontaine',
  vision: 'anemo',
  specialized: 'anemo',
  c3: 'burst',
  c5: 'skill',
  burstCost: 70,
  talentNames: {
    normal: 'Rapid Ritesword',
    skill: 'Enigmatic Feint',
    burst: 'Magic Trick: Astonishing Shift'
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
      name: 'Enigma Thrust DMG',
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
      name: 'Surging Blade DMG',
      tag: 'OU',
      damageBonus: 'skill',
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
      name: 'HP Regeneration',
      isHealing: true,
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param4'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Skill DMG',
      tag: 'Q1',
      damageBonus: 'burst',
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
      name: 'Bogglecat Box DMG',
      tag: 'Q2',
      hasOwnBonusDMG: 'bogglecatBox',
      damageBonus: 'burst',
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
      name: 'Vivid Shot DMG - Hydro',
      tag: 'Q3',
      hasOwnDMGType: 'hydro',
      damageBonus: 'burst',
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
      name: 'Vivid Shot DMG - Pyro',
      tag: 'Q3',
      hasOwnDMGType: 'pyro',
      damageBonus: 'burst',
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
      name: 'Vivid Shot DMG - Cryo',
      tag: 'Q3',
      hasOwnDMGType: 'cryo',
      damageBonus: 'burst',
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
      name: 'Vivid Shot DMG - Electro',
      tag: 'Q3',
      hasOwnDMGType: 'electro',
      damageBonus: 'burst',
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
    // {
    //   name: 'Sophisticated Synergy',
    //   url: 'UI_Talent_S_Linette_05',
    //   description: "Within 10s after using **Magic Trick: Astonishing Shift**, when there are 1/2/3/4 Elemental Types in the party, all party members' ATK will be increased by 8%/12%/16%/20% respectively.",
    //   level: 2,
    //   target: 'party',
    //   actionType: 'passive',
    //   values: [
    //     {
    //       scaling: 'atk%',
    //       coef: [0.08,0.12,0.16,0.20]
    //     }
    //   ]
    // },
    {
      name: 'Props Positively Prepped',
      url: 'UI_Talent_S_Linette_06',
      description:
        "After the Bogglecat Box summoned by **Magic Trick: Astonishing Shift** performs Elemental Conversion, Lynette's Elemental Burst will deal 15% more DMG. This effect will persist until the Bogglecat Box's duration ends.",
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'bogglecatBox',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Watchful Eye',
      url: 'UI_Talent_S_Linette_04',
      description:
        "When Lynette uses **Enigmatic Feint**'s Enigma Thrust, she will gain an Anemo Infusion and 20% Anemo DMG Bonus for 6s.",
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      infusion: 'anemo',
      values: [
        {
          scaling: 'anemo',
          coef: 0.2
        }
      ]
    }
  ],
  offField: []
};

export default charName;
