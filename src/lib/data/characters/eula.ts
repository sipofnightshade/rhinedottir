import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'eula',
  fullName: 'Eula',
  rating: 5,
  weapon: 'claymore',
  region: 'mondstat',
  vision: 'cryo',
  specialized: 'critdmg',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Favonius Bladework - Edel',
    skill: 'Icetide Vortex',
    burst: 'Glacial Illumination'
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
            param: 'param3'
          }
        ]
      ]
    },
    {
      name: '1 - Hit',
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
      name: '2 - Hit',
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
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: '1 - Hit',
      damageBonus: 'normal',
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
      name: '2 - Hit',
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
      name: 'Charged Attack Spinning DMG',
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
    },
    {
      name: 'Charged Attack Final DMG',
      tag: 'CA',
      damageBonus: 'charged',
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
      name: 'Press DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Eula_01',
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
      name: 'Hold DMG + 1 Stack',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Eula_01',
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
            param: 'param3'
          }
        ]
      ]
    },
    {
      name: 'Hold DMG + 2 Stacks',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Eula_01',
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
      name: 'Icewhirl Brand DMG',
      damageBonus: 'skill',
      url: 'Skill_S_Eula_01',
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
      url: 'Skill_E_Eula_01',
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
      name: 'Lightfall Sword Base DMG',
      tag: 'Q2',
      url: 'Skill_E_Eula_01',
      damageBonus: 'burst',
      hasOwnDMGType: 'physical',
      hasOwnBonusDMG: 'lightfallSword',
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
      name: 'DMG Per Stack',
      tag: 'Qx',
      url: 'Skill_E_Eula_01',
      damageBonus: 'burst',
      hasOwnDMGType: 'physical',
      hasOwnBonusDMG: 'lightfallSword',
      stackable: 30,
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
      name: 'Shattered Lightfall Sword',
      tag: 'A1',
      url: 'UI_Talent_S_Eula_05',
      damageBonus: 'burst',
      hasOwnDMGType: 'physical',
      hasOwnBonusDMG: 'shatteredLightfallSword',
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
  actions: [
    {
      name: 'Grimheart',
      url: 'Skill_S_Eula_01',
      description: "**Grimheart**\nIncreases Eula's resistance to interruption and DEF.",
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'def%',
          coef: [0.3, 0.3]
        }
      ]
    },
    {
      name: 'Icetide Vortex',
      url: 'Skill_S_Eula_01',
      description:
        'Wielding her sword, Eula consumes all stacks of Grimheart and lashes forward, dealing AoE Cryo DMG to opponents in front of her.\nIf Grimheart stacks are consumed, surrounding opponents will have their Physical RES and Cryo RES decreased.\nEach consumed stack of Grimheart will be converted into an Icewhirl Brand that deals Cryo DMG to nearby opponents.',
      target: 'enemy',
      actionType: 'toggle',
      hasLevels: 'skill',
      values: [
        {
          scaling: 'physicalRes',
          coef: 'param4'
        },
        {
          scaling: 'cryoRes',
          coef: 'param5'
        }
      ]
    },
    {
      name: 'Roiling Rime',
      url: 'UI_Talent_S_Eula_05',
      description:
        'If 2 stacks of Grimheart are consumed upon unleashing the Holding Mode of **Icetide Vortex**, a Shattered Lightfall Sword will be created that will explode immediately, dealing 50% of the basic Physical DMG dealt by a Lightfall Sword created by **Glacial Illumination**.',
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'shatteredLightfallSword',
          coef: -0.5
        }
      ]
    },
    {
      name: 'Tidal Illusion',
      url: 'UI_Talent_S_Eula_02',
      description:
        "Every time **Icetide Vortex**'s Grimheart stacks are consumed, Eula's Physical DMG is increased by 30% for 6s.\nEach stack consumed will increase the duration of this effect by 6s up to a maximum of 18s.",
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'physical',
          coef: 0.3
        }
      ]
    },
    {
      name: "The Obstinacy of One's Inferiors",
      url: 'UI_Talent_S_Eula_03',
      description:
        'Lightfall Swords deal 25% increased DMG against opponents with less than 50% HP.',
      constellation: 4,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'lightfallSword',
          coef: 0.25
        },
        {
          scaling: 'shatteredLightfallSword',
          coef: 0.25
        }
      ]
    }
  ],
  offField: []
};

export default charName;
// shatteredLightfallSword
