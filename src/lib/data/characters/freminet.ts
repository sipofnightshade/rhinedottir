import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000085,
  id: 'freminet',
  name: 'freminet',
  fullName: 'Freminet',
  url: 'UI_AvatarIcon_Freminet',
  rating: 4,
  weapon: 'claymore',
  region: 'fontaine',
  vision: 'cryo',
  specialized: 'atk%',
  c3: 'atk',
  c5: 'skill',
  burstCost: 60,
  talentNames: {
    normal: 'Flowing Eddies',
    skill: 'Pressurized Floe',
    burst: "Shadowhunter's Ambush"
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
      tag: 'CF',
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
      name: 'Upward Thrust DMG',
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
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
      name: 'Frost DMG',
      tag: 'EC',
      hasOwnBonusDMG: 'subnauticalHunter',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
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
      name: 'Lv. 0 Shattering Pressure',
      tag: 'E0',
      hasOwnBonusDMG: 'shatteringPressure',
      hasOwnCritRate: 'pressurizedFloe',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
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
      name: 'Lv. 1 Shattering Pressure',
      hasOwnBonusDMG: 'shatteringPressure',
      hasOwnCritRate: 'pressurizedFloe',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
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
      name: 'Lv. 2 Shattering Pressure',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
      hasOwnBonusDMG: 'shatteringPressure',
      hasOwnCritRate: 'pressurizedFloe',
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
      name: 'Lv. 3 Shattering Pressure',
      tag: 'E3',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
      hasOwnBonusDMG: 'shatteringPressure',
      hasOwnCritRate: 'pressurizedFloe',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param9'
          }
        ]
      ]
    },
    // physical
    {
      name: 'Lv. 1 Shattering Pressure',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
      hasOwnBonusDMG: 'shatteringPressure',
      hasOwnCritRate: 'pressurizedFloe',
      hasOwnDMGType: 'physical',
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
      name: 'Lv. 2 Shattering Pressure',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
      hasOwnBonusDMG: 'shatteringPressure',
      hasOwnCritRate: 'pressurizedFloe',
      hasOwnDMGType: 'physical',
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
      name: 'Lv. 3 Shattering Pressure',
      tag: 'E3',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
      hasOwnBonusDMG: 'shatteringPressure',
      hasOwnCritRate: 'pressurizedFloe',
      hasOwnDMGType: 'physical',
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
      name: 'Lv. 4 Shattering Pressure',
      tag: 'E4',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
      hasOwnBonusDMG: 'shatteringPressure',
      hasOwnCritRate: 'pressurizedFloe',
      hasOwnDMGType: 'physical',
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
      name: 'Spiritbreath Thorn DMG',
      tag: 'PN',
      damageBonus: 'skill',
      url: 'Skill_S_Freminet_01',
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
      url: 'Skill_E_Freminet_01',
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
    {
      name: 'Subnautical Hunter',
      url: 'Skill_E_Freminet_01',
      description:
        'Normal Attacks will increase the Pers Timer by 1 additional Pressure Level, and the frost released by his Normal Attacks deal 200% of their original DMG.',
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'subnauticalHunter',
          coef: 2.0
        }
      ]
    },
    {
      name: 'Parallel Condensers',
      url: 'UI_Talent_S_Freminet_06',
      description:
        'When Freminet triggers Shatter against opponents, the DMG dealt by **Pressurized Floe: Shattering Pressure** will be increased by 40% for 5s.',
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'shatteringPressure',
          coef: 0.4
        }
      ]
    },
    {
      name: 'Dreams of the Foamy Deep',
      url: 'UI_Talent_S_Freminet_01',
      description:
        'The CRIT Rate of **Pressurized Floe: Shattering Pressure** will be increased by 15%.',
      constellation: 1,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'pressurizedFloe',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Dance of the Snowy Moon and Flute',
      url: 'UI_Talent_S_Freminet_03',
      description:
        'After Freminet triggers Frozen, Shatter, or Superconduct against opponents, his ATK will be increased by 9% for 6s. Max 2 stacks. This can be triggered once every 0.3s.',
      constellation: 4,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'atk%',
          coef: [0.09, 0.09]
        }
      ]
    },
    {
      name: 'Moment of Waking and Resolve',
      url: 'UI_Talent_S_Freminet_04',
      description:
        'After Freminet triggers Frozen, Shatter, or Superconduct against opponents, his CRIT DMG will be increased by 12% for 6s. Max 3 stacks. This can be triggered once every 0.3s.',
      constellation: 6,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'critdmg',
          coef: [0.12, 0.12, 0.12]
        }
      ]
    }
  ]
};

export default charName;
