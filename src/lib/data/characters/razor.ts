import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'razor',
  fullName: 'Razor',
  rating: 4,
  weapon: 'claymore',
  region: 'mondstat',
  vision: 'electro',
  specialized: 'physical',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Steel Fang',
    skill: 'Claw and Thunder',
    burst: 'Lightning Fang'
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
      name: 'Wolf 1 - Hit DMG',
      tag: 'N1',
      hasOwnDMGType: 'electro',
      damageBonus: 'normal',
      hasOwnSpecialMultiplier: 'lupusBoreas',
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
      name: 'Wolf 2 - Hit DMG',
      tag: 'N2',
      hasOwnDMGType: 'electro',
      damageBonus: 'normal',
      hasOwnSpecialMultiplier: 'lupusBoreas',
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
      name: 'Wolf 3 - Hit DMG',
      tag: 'N3',
      hasOwnDMGType: 'electro',
      damageBonus: 'normal',
      hasOwnSpecialMultiplier: 'lupusBoreas',
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
      name: 'Wolf 4 - Hit DMG',
      tag: 'N4',
      hasOwnDMGType: 'electro',
      damageBonus: 'normal',
      hasOwnSpecialMultiplier: 'lupusBoreas',
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
      name: 'Lupus Fulguris',
      tag: 'X6',
      damageBonus: 'normal',
      hasOwnDMGType: 'electro',
      constellation: 6,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 1.0
          }
        ]
      ]
    }
  ],
  charged: [
    {
      name: 'Charged Attack Cyclic DMG',
      tag: 'CC',
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
      name: 'Press Skill DMG',
      tag: 'EP',
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
      name: 'Hold Skill DMG',
      tag: 'EP',
      damageBonus: 'skill',
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
      name: 'The Wolf Within Co-ordinated Attacks',
      url: 'Skill_E_Razor_01',
      description:
        "The Wolf Within attacks deal damage equal to a percentage of Razor's Normal Attacks.",
      hasLevels: 'burst',
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'lupusBoreas',
          coef: 'param2'
        }
      ]
    },
    {
      name: 'The Wolf Within',
      url: 'Skill_E_Razor_01',
      description:
        "**The Wolf Within**\n·Raises Razor's ATK SPD and Electro RES.\n·Causes Razor to be immune to DMG inflicted by the Electro-Charged status.\n·Disables Razor's Charged Attacks.\n·Increases Razor's resistance to interruption.\n\nThese effects end when Razor leaves the battlefield.",
      hasLevels: 'burst',
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 'param3'
        },
        {
          scaling: 'electroRes',
          coef: 0.8
        }
      ]
    },
    {
      name: 'Hunger',
      url: 'UI_Talent_S_PlayerWind_02',
      description: "When Razor's Energy is below 50%, increases Energy Recharge by 30%.",
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'energy',
          coef: 0.3
        }
      ]
    },
    {
      name: "Wolf's Instinct",
      url: 'UI_Talent_S_Razor_01',
      description:
        "Picking up an Elemental Orb or Particle increases Razor's DMG by 10% for 8s.",
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: 0.1
        }
      ]
    },
    {
      name: 'Suppression',
      url: 'UI_Talent_S_Razor_02',
      description: 'Increases CRIT Rate against opponents with less than 30% HP by 10%.',
      constellation: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'critrate',
          coef: 0.3
        }
      ]
    },
    {
      name: 'Bite',
      url: 'UI_Talent_S_Razor_03',
      description:
        'When casting **Claw and Thunder** (Press), opponents hit will have their DEF decreased by 15% for 7s.',
      constellation: 4,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 0.15
        }
      ]
    }
  ],
  offField: []
};

export default charName;
