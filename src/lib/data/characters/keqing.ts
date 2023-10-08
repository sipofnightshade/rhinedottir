import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'keqing',
  name: 'keqing',
  fullName: 'Keqing',
  rating: 5,
  weapon: 'sword',
  region: 'liyue',
  vision: 'electro',
  specialized: 'critdmg',
  c3: 'burst',
  c5: 'skill',
  burstCost: 40,
  talentNames: {
    normal: 'Yunlai Swordsmanship',
    skill: 'Stellar Restoration',
    burst: 'Starward Sword'
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
        ],
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
      name: 'Lightning Stiletto DMG',
      tag: 'E0',
      url: 'Skill_S_Keqing_01',
      damageBonus: 'skill',
      icd: 0,
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
      name: 'Slashing DMG',
      tag: 'E1',
      url: 'Skill_S_Keqing_01',
      damageBonus: 'skill',
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
      name: 'Thunderclap Slash DMG',
      tag: 'E2',
      url: 'Skill_S_Keqing_01',
      damageBonus: 'skill',
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
      name: 'Thundering Might DMG',
      tag: 'X1',
      url: 'Skill_S_Keqing_01',
      damageBonus: 'skill',
      constellation: 1,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.5
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Keqing_01',
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
      name: 'Consecutive Slash DMG x8',
      damageBonus: 'burst',
      url: 'Skill_E_Keqing_01',
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
      name: 'Last Attack DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Keqing_01',
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
      name: 'Total Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Keqing_01',
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
            param: 'param2'
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
            param: 'param2'
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
            param: 'param2'
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
    }
  ],
  actions: [
    {
      name: 'Thundering Penance',
      url: 'UI_Talent_S_Keqing_05',
      description:
        "After recasting **Stellar Restoration** while a Lightning Stiletto is present, Keqing's weapon gains an Electro Infusion for 5s.",
      infusion: 'electro',
      level: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'electro',
          coef: 0
        }
      ]
    },
    {
      name: 'Aristocratic Dignity',
      url: 'UI_Talent_S_Keqing_06',
      description:
        "When casting **Starward Sword**, Keqing's CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s.",
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'critrate',
          coef: 0.15
        },
        {
          scaling: 'energy',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Attunement',
      url: 'UI_Talent_S_Keqing_03',
      description:
        'For 10s after Keqing triggers an Electro-related Elemental Reaction, her ATK is increased by 25%.',
      constellation: 4,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk%',
          coef: 0.25
        }
      ]
    },
    {
      name: 'Tenacious Star',
      url: 'UI_Talent_S_Keqing_04',
      description:
        'When initiating a Normal Attack, a Charged Attack, Elemental Skill or Elemental Burst, Keqing gains a 6% Electro DMG Bonus for 8s.\nEffects triggered by Normal Attacks, Charged Attacks, Elemental Skills and Elemental Bursts are considered independent entities.',
      constellation: 4,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'electro',
          coef: [0.06, 0.06, 0.06, 0.06]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
