import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'yaemiko',
  fullName: 'Yae Miko',
  rating: 5,
  weapon: 'catalyst',
  region: 'inazuma',
  vision: 'electro',
  specialized: 'critrate',
  c3: 'skill',
  c5: 'burst',
  burstCost: 90,
  talentNames: {
    normal: 'Spiritfox Sin-Eater',
    skill: 'Yakan Evocation: Sesshou Sakura',
    burst: 'Great Secret Art: Tenko Kenshin'
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
            param: 'param6'
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
            param: 'param7'
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
            param: 'param8'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Sesshou Sakura DMG: Level 1',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Yae_01',
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
      name: 'Sesshou Sakura DMG: Level 2',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Yae_01',
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
      name: 'Sesshou Sakura DMG: Level 3',
      tag: 'E3',
      damageBonus: 'skill',
      url: 'Skill_S_Yae_01',
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
      name: 'Sesshou Sakura DMG: Level 4',
      tag: 'E4',
      damageBonus: 'skill',
      url: 'Skill_S_Yae_01',
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
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q1',
      icd: 0,
      damageBonus: 'burst',
      url: 'Skill_E_Yae_01',
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
      name: 'Tenko Thunderbolt DMG x1',
      tag: 'Q2',
      icd: 0,
      damageBonus: 'burst',
      url: 'Skill_E_Yae_01',
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
      name: 'Base + 3x Thunderbolt DMG',
      tag: 'QT',
      icd: 0,
      damageBonus: 'burst',
      url: 'Skill_E_Yae_01',
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
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Enlightened Blessing',
      url: 'UI_Talent_S_Yae_06',
      description:
        'Every point of Elemental Mastery Yae Miko possesses will increase **Sesshou Sakura** DMG by 0.15%.',
      level: 8,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['em'],
      values: [
        {
          scaling: 'skill',
          coef: 0.0015,
          source: ['em', 0]
        }
      ]
    },
    {
      name: 'Sakura Channeling',
      url: 'UI_Talent_S_Yae_03',
      description:
        'When **Sesshou Sakura** lightning hits opponents, the Electro DMG Bonus of all nearby party members is increased by 20% for 5s.',
      constellation: 4,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'electro',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Forbidden Art: Daisesshou',
      url: 'UI_Talent_S_Yae_04',
      description:
        "**The Sesshou Sakura's** attacks will ignore 60% of the opponents' DEF.",
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'skillDefIgnore',
          coef: 0.6
        }
      ]
    }
  ],
  offField: []
};

export default charName;
