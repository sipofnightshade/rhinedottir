import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000087,
  id: 'neuvillette',
  name: 'neuvillette',
  fullName: 'Neuvillette',
  url: 'UI_AvatarIcon_Neuvillette',
  region: 'fontaine',
  rating: 5,
  weapon: 'catalyst',
  vision: 'hydro',
  specialized: 'critdmg',
  c3: 'atk',
  c5: 'burst',
  burstCost: 70,
  talentNames: {
    normal: 'As Water Seeks Equilibrium',
    skill: 'O Tears, I Shall Repay',
    burst: 'O Tides, I Have Returned'
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
      name: 'Charged Attack',
      tag: 'CA',
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
      name: 'Equitable Judgment x1',
      tag: 'C1',
      hasOwnSpecialMultiplier: 'equitableJudgment',
      hasOwnCritDMG: 'equitableJudgmentCritDMG',
      url: 'UI_Talent_EJ_Neuvillette',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Equitable Judgment x8',
      tag: 'C8',
      hasOwnSpecialMultiplier: 'equitableJudgment',
      hasOwnCritDMG: 'equitableJudgmentCritDMG',
      url: 'UI_Talent_EJ_Neuvillette',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Additional Currents x2',
      tag: 'X6',
      constellation: 6,
      hasOwnSpecialMultiplier: 'equitableJudgment',
      hasOwnCritDMG: 'equitableJudgmentCritDMG',
      url: 'UI_Talent_S_Neuvillette_04',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5',
            coef: 0.1
          }
        ],
        [
          {
            scaling: 'hp',
            param: 'param5',
            coef: 0.1
          }
        ]
      ]
    },
    {
      name: 'Additional Current x1',
      constellation: 6,
      hasOwnSpecialMultiplier: 'equitableJudgment',
      hasOwnCritDMG: 'equitableJudgmentCritDMG',
      url: 'UI_Talent_S_Neuvillette_04',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5',
            coef: 0.1
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
            param: 'param11'
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
            param: 'param12'
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
            param: 'param13'
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
      url: 'Skill_S_Neuvillette_01',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: 'Spiritbreath Thorn DMG',
      tag: 'PN',
      damageBonus: 'skill',
      url: 'Skill_S_Neuvillette_01',
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
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Neuvillette_01',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: 'Waterfall  DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Neuvillette_01',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: "Heir to the Ancient Sea's Authority",
      url: 'UI_Talent_S_Neuvillette_05',
      description:
        'When a party member triggers a Vaporize, Frozen, Electro-Charged, Bloom, Hydro Swirl, or a Hydro Crystallize reaction on opponents, 1 stack of Past Draconic Glories will be granted to Neuvillette for 30s. Max 3 stacks. Past Draconic Glories causes Charged Attack: Equitable Judgment to deal 110%/125%/160% of its original DMG.\nThe stacks of Past Draconic Glories created by each kind of Elemental Reaction exist independently.',
      level: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'equitableJudgment',
          coef: [1.1, 0.15, 0.35]
        }
      ]
    },
    {
      name: 'Discipline of the Supreme Arbitration',
      url: 'UI_Talent_S_Neuvillette_06',
      description:
        "For each 1% of Neuvillette's current HP greater than 30% of Max HP, he will gain 0.6% Hydro DMG Bonus. A maximum bonus of 30% can be obtained this way.",
      level: 8,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'hydro',
          coef: [
            0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006,
            0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006,
            0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006,
            0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006,
            0.006, 0.006, 0.006, 0.006, 0.006, 0.006
          ]
        }
      ]
    },
    {
      name: 'Juridical Exhortation',
      url: 'UI_Talent_S_Neuvillette_02',
      description:
        'The Passive Talent "Heir to the Ancient Sea\'s Authority" will be enhanced: Each stack of Past Draconic Glories will increase the CRIT DMG of Charged Attack: Equitable Judgment by 14%. The maximum increase that can be achieved this way is 42%.\n\n**MODIFIED**\nEach stack will increase the CRIT DMG of Charged Attack: Equitable Judgment by 14%.',
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'equitableJudgmentCritDMG',
          coef: [0.14, 0.14, 0.14]
        }
      ]
    }
  ]
};

export default charName;
