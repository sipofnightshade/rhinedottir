import type { CharacterRecord } from '$lib/types/global';
import type { Index_Stats } from '../Stats';

const charName: CharacterRecord = {
  uid: 10000046,
  id: 'hutao',
  name: 'hutao',
  fullName: 'Hu Tao',
  rating: 5,
  weapon: 'polearm',
  url: 'UI_AvatarIcon_Hutao',
  region: 'liyue',
  vision: 'pyro',
  specialized: 'critdmg',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Secret Spear of Wangsheng',
    skill: 'Guide to Afterlife',
    burst: 'Spirit Soother'
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
      name: '6 - Hit DMG',
      tag: 'N6',
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
      name: 'Blood Blossom DMG',
      tag: 'EC',
      url: 'Skill_S_Hutao_01',
      damageBonus: 'skill',
      hasOwnBonusFlatDMG: 'bloodblossom',
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
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q1',
      url: 'Skill_E_Hutao_01',
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
      name: 'Low HP Burst DMG',
      tag: 'Q2',
      url: 'Skill_E_Hutao_01',
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
      name: 'Burst HP Regeneration',
      isHealing: true,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param3'
          }
        ]
      ]
    },
    {
      name: 'Low HP Burst Regeneration',
      isHealing: true,
      damageBonus: 'burst',
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
  actions: [
    {
      name: 'Paramita Papilio State',
      url: 'Skill_S_Hutao_01',
      description:
        "Increases Hu Tao's ATK based on her Max HP at the time of entering this state. ATK Bonus gained this way cannot exceed 400% of Hu Tao's Base ATK.\n·Converts attack DMG to Pyro DMG, which cannot be overridden by any other elemental infusion.\n·Charged Attacks apply the Blood Blossom effect to the enemies hit.\n·Increases Hu Tao's resistance to interruption.",
      target: 'self',
      actionType: 'toggle',
      infusion: 'pyro',
      hasLevels: 'skill',
      sourceStats: ['hp', 'baseATK'],
      values: [
        {
          scaling: 'atk',
          coef: 'param2',
          source: ['hp', 0, calcSkillMax]
        }
      ]
    },
    {
      name: 'Flutter By',
      url: 'UI_Talent_S_Hutao_05',
      description:
        'When a **Paramita Papilio** state activated by **Guide to Afterlife** ends, all allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 8s.',
      level: 2,
      target: 'nearby',
      actionType: 'toggle',
      values: [
        {
          scaling: 'critrate',
          coef: 0.12
        }
      ]
    },
    {
      name: 'Sanguine Rouge',
      url: 'UI_Talent_S_Hutao_06',
      description:
        "When Hu Tao's HP is equal to or less than 50%, her Pyro DMG Bonus is increased by 33%.",
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'pyro',
          coef: 0.33
        }
      ]
    },
    {
      name: 'Ominous Rainfall',
      url: 'UI_Talent_S_Hutao_01',
      description:
        "Increases the **Blood Blossom** DMG by an amount equal to 10% of Hu Tao's Max HP at the time the effect is applied.\nAdditionally, **Spirit Soother** will also apply the **Blood Blossom** effect.",
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'bloodblossom',
          coef: 0.1,
          source: ['hp', 0]
        }
      ]
    },
    {
      name: 'Garden of Eternal Rest',
      url: 'UI_Talent_S_Hutao_02',
      description:
        'Upon defeating an enemy affected by a **Blood Blossom** that Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s.',
      constellation: 4,
      target: 'nearby',
      actionType: 'toggle',
      values: [
        {
          scaling: 'critrate',
          coef: 0.12
        }
      ]
    },
    {
      name: "Butterfly's Embrace",
      url: 'UI_Talent_S_Hutao_04',
      description:
        "Triggers when Hu Tao's HP drops below 25%, or when she suffers a lethal strike:\nHu Tao will not fall as a result of the DMG sustained. Additionally, for the next 10s, her All Elemental and Physical RES is increased by 200%, her CRIT Rate is increased by 100%, and her resistance to interruption is greatly increased.\nThis effect triggers automatically when Hu Tao has 1 HP left.\nCan only occur once every 60s.",
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'critrate',
          coef: 1.0
        },
        {
          scaling: 'anemoRes',
          coef: 2.0
        },
        {
          scaling: 'cryoRes',
          coef: 2.0
        },
        {
          scaling: 'dendroRes',
          coef: 2.0
        },
        {
          scaling: 'electroRes',
          coef: 2.0
        },
        {
          scaling: 'geoRes',
          coef: 2.0
        },
        {
          scaling: 'hydroRes',
          coef: 2.0
        },
        {
          scaling: 'pyroRes',
          coef: 2.0
        },
        {
          scaling: 'physicalRes',
          coef: 2.0
        }
      ]
    }
  ]
};

// helper
function calcSkillMax(stats: Index_Stats) {
  return stats.baseATK * 4;
}

export default charName;
