import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'kukishinobu',
  name: 'kukishinobu',
  fullName: 'Kuki Shinobu',
  rating: 4,
  weapon: 'sword',
  region: 'inazuma',
  vision: 'electro',
  specialized: 'hp%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: "Shinobu's Shadowsword",
    skill: 'sanctifyingRing',
    burst: 'Gyoei Narukami Kariyama Rite'
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param6'
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
      name: 'Skill DMG',
      tag: 'E',
      hasOwnBonusFlatDMG: 'sanctifyingRing',
      damageBonus: 'skill',
      url: 'Skill_S_Shinobu_01',
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
      name: 'Grass Ring of Sanctification DMG',
      tag: 'EC',
      hasOwnBonusFlatDMG: 'sanctifyingRing',
      damageBonus: 'skill',
      url: 'Skill_S_Shinobu_01',
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
      name: 'Grass Ring of Sanctification Healing',
      isHealing: true,
      damageBonus: 'skill',
      url: 'Skill_S_Shinobu_01',
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
    },
    {
      name: 'Thundergrass Mark DMG',
      tag: 'X4',
      constellation: 4,
      damageBonus: 'skill',
      url: 'UI_Talent_S_Shinobu_03',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param4',
            coef: 0.097
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Single Instance DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Shinobu_01',
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
      name: 'Total DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Shinobu_01',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Total Low HP DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Shinobu_01',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param3'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Breaking Free',
      url: 'UI_Talent_S_Shinobu_05',
      description:
        "When Shinobu's HP is not higher than 50%, her Healing Bonus is increased by 15%.",
      level: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'healing',
          coef: 0.15
        }
      ]
    },
    {
      name: "Heart's Repose",
      url: 'UI_Talent_S_Shinobu_06',
      description:
        "**Sanctifying Ring**'s abilities will be boosted based on Shinobu's Elemental Mastery:\n·Healing amount will be increased by 75% of Elemental Mastery.\n·DMG dealt is increased by 25% of Elemental Mastery.",
      level: 8,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['em'],
      values: [
        {
          scaling: 'flatHealing',
          coef: 0.75,
          source: ['em', 0]
        },
        {
          scaling: 'sanctifyingRing',
          coef: 0.25,
          source: ['em', 0]
        }
      ]
    },
    {
      name: 'To Ward Weakness',
      url: 'UI_Talent_S_Shinobu_04',
      description:
        "When Shinobu's HP drops below 25%, she will gain 150 Elemental Mastery for 15s",
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 150
        }
      ]
    }
  ],
  offField: []
};

export default charName;
