import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000088,
  url: 'UI_AvatarIcon_Charlotte',
  id: 'charlotte',
  name: 'charlotte',
  fullName: 'Charlotte',
  region: 'fontaine',
  rating: 4,
  weapon: 'catalyst',
  vision: 'cryo',
  specialized: 'atk%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Cool-Color Capture',
    skill: 'Framing: Freezing Point Composition',
    burst: 'Still Photo: Comprehensive Confirmation'
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
      name: 'Spiritbreath Thorn DMG',
      tag: 'PN',
      damageBonus: 'normal',
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
      name: 'Photo DMG (Press)',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Charlotte_01.png',
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
      name: 'Photo DMG (Hold)',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Charlotte_01.png',
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
      name: '"Snappy Silhouette" Mark DMG',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Charlotte_01.png',
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
      name: '"Focused Impression" Mark DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Charlotte_01.png',
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
  burst: [
    {
      name: 'Cast Healing',
      isHealing: true,
      damageBonus: 'burst',
      url: 'Skill_E_Charlotte_01',
      damage: [
        [
          {
            scaling: 'atk',
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
      name: 'Burst DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Charlotte_01',
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
      name: 'Kamera Continuous Regeneration',
      isHealing: true,
      damageBonus: 'burst',
      url: 'Skill_E_Charlotte_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param4'
          },
          {
            scaling: 'flatValue',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Kamera DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Charlotte_01',
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
      name: 'A Need to Verify Facts',
      isHealing: true,
      damageBonus: 'burst',
      url: 'UI_Talent_S_Charlotte_01',
      constellation: 1,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param4',
            coef: 0.8
          }
        ]
      ]
    },
    {
      name: 'A Summation of Interest DMG',
      tag: 'X6',
      damageBonus: 'burst',
      constellation: 6,
      url: 'UI_Talent_S_Charlotte_04',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param6',
            coef: 1.8
          }
        ]
      ]
    },
    {
      name: 'A Summation of Interest Healing',
      isHealing: true,
      damageBonus: 'burst',
      constellation: 6,
      url: 'UI_Talent_S_Charlotte_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param4',
            coef: 0.42
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Diversified Investigation - Fontainians',
      url: 'UI_Talent_S_Charlotte_06',
      description:
        'When the party contains 1/2/3 Fontainians other than herself, Charlotte gains a 5%/10%/15% Healing Bonus.',
      level: 8,
      target: 'self',
      actionType: 'region',
      regionCondition: 'same',
      values: [
        {
          scaling: 'healing',
          coef: [0, 0.05, 0.1, 0.15]
        }
      ]
    },
    {
      name: 'Diversified Investigation - Outsiders',
      url: 'UI_Talent_S_Charlotte_06',
      description:
        ' When the party contains 1/2/3 non-Fontainians, Charlotte gains a 5%/10%/15% Cryo DMG Bonus.',
      level: 8,
      target: 'self',
      actionType: 'region',
      regionCondition: 'different',
      values: [
        {
          scaling: 'cryo',
          coef: [0, 0.05, 0.1, 0.15]
        }
      ]
    },
    {
      name: 'A Duty to Pursue Truth',
      url: 'UI_Talent_S_Charlotte_02',
      description:
        "When using **Framing: Freezing Point Composition**, when Monsieur Verite hits 1/2/3 (or more) opponents, Charlotte's own ATK will be increased by 10%/20%/30% for 12s.",
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'atk%',
          coef: [0.1, 0.1, 0.1]
        }
      ]
    },
    {
      name: 'A Responsibility to Oversee',
      url: 'UI_Talent_S_Charlotte_03',
      description:
        'When **Still Photo: Comprehensive Confirmation** hits an opponent marked by Snappy Silhouette or Focused Impression, it will deal 10% more DMG and restore 2 Energy to Charlotte. This restoration can be triggered 5 times every 20s.',
      constellation: 4,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'burst',
          coef: 0.1
        }
      ]
    }
  ]
};

export default charName;
