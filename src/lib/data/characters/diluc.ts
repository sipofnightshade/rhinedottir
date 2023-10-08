import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'diluc',
  name: 'diluc',
  fullName: 'Diluc',
  rating: 5,
  weapon: 'claymore',
  region: 'mondstat',
  vision: 'pyro',
  specialized: 'critrate',
  c3: 'skill',
  c5: 'burst',
  burstCost: 40,
  talentNames: {
    normal: 'Tempered Sword',
    skill: 'Searing Onslaught',
    burst: 'Dawn'
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
      name: 'Charged Attack Cyclic DMG',
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
    },
    {
      name: 'Charged Attack Final DMG',
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
      name: '1-Hit DMG',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Diluc_01_01',
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
      name: '2-Hit DMG',
      tag: 'E2',
      hasOwnBonusDMG: 'searingOnslaught',
      damageBonus: 'skill',
      url: 'Skill_S_Diluc_01_02',
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
      name: '3-Hit DMG',
      tag: 'E3',
      damageBonus: 'skill',
      url: 'Skill_S_Diluc_01_03',
      hasOwnBonusDMG: 'searingOnslaught',
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
      name: 'Slashing DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Diluc_01',
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
      name: 'DoT',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Diluc_01',
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
      name: 'Explosion DMG',
      tag: 'QE',
      damageBonus: 'burst',
      url: 'Skill_E_Diluc_01',
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
    {
      name: 'Blessing of Phoenix + Pyro Infusion',
      url: 'UI_Talent_S_Diluc_06',
      description:
        'Includes Pyro infusion from **Dawn**. The Pyro Infusion provided by **Dawn** lasts for 4s longer. Additionally, Diluc gains 20% Pyro DMG Bonus during the duration of this effect.',
      target: 'self',
      level: 2,
      actionType: 'toggle',
      infusion: 'pyro',
      values: [
        {
          scaling: 'pyro',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Conviction',
      url: 'UI_Talent_S_Diluc_01',
      description: 'Diluc deals 15% more DMG to opponents whose HP is above 50%.',
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Searing Ember',
      url: 'UI_Talent_S_Diluc_02',
      description:
        'When Diluc takes DMG, his ATK increases by 10% and his ATK SPD increases by 5%. Lasts for 10s.\nThis effect can stack up to 3 times and can only occur once every 1.5s.',
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'atk%',
          coef: [0.1, 0.1, 0.1]
        },
        {
          scaling: 'normalATKSpd',
          coef: [0.05, 0.05, 0.05]
        }
      ]
    },
    {
      name: 'Flowing Flame',
      url: 'UI_Talent_S_Diluc_03',
      description:
        'Casting **Searing Onslaught** in rhythm greatly increases damage dealt.\n2s after casting **Searing Onslaught**, casting the next Searing Onslaught in the combo deals 40% additional DMG. This effect lasts for 2s.',
      constellation: 4,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'searingOnslaught',
          coef: 0.4
        }
      ]
    },
    {
      name: 'Flaming Sword, Nemesis of the Dark',
      url: 'UI_Talent_S_Diluc_04',
      description:
        'After casting **Searing Onslaught**, the next 2 Normal Attacks within the next 6s will have their DMG and ATK SPD increased by 30%.\nAdditionally, Searing Onslaught will not interrupt the Normal Attack combo.',
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normal',
          coef: 0.3
        },
        {
          scaling: 'normalATKSpd',
          coef: 0.3
        }
      ]
    }
  ],
  offField: []
};

export default charName;
