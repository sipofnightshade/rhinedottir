import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'aratakiitto',
  fullName: 'Arataki Itto',
  rating: 5,
  weapon: 'claymore',
  region: 'mondstat',
  vision: 'geo',
  specialized: 'critrate',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Fight Club Legend',
    skill: 'Masatsu Zetsugi: Akaushi Burst!',
    burst: 'Royal Descent: Behold, Itto the Evil!'
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
      name: 'Arataki Kesagiri Combo Slash DMG',
      tag: 'CA',
      damageBonus: 'charged',
      hasOwnBonusFlatDMG: 'crimsonOni',
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
      name: 'Arataki Kesagiri Final Slash DMG',
      tag: 'CA',
      damageBonus: 'charged',
      hasOwnBonusFlatDMG: 'crimsonOni',
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
      name: 'Saichimonji Slash DMG',
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
      name: 'Skill DMG',
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
    }
  ],
  burst: [],
  actions: [
    {
      name: 'Royal Descent: Behold, Itto the Evil!',
      url: 'Skill_E_Itto_01',
      description:
        "Time to show 'em the might of the Arataki Gang! For a time, Itto lets out his inner Raging Oni King, wielding his Oni King's Kanabou in battle.\nThis state has the following special properties:\n· Converts Itto's Normal, Charged, and Plunging Attacks to Geo DMG. This cannot be overridden.\n· Increases Itto's Normal Attack SPD. Also increases his ATK based on his DEF.\n· On hit, the 1st and 3rd strikes of his attack combo will each grant Arataki Itto 1 stack of Superlative Superstrength.\n· Decreases Itto's Elemental and Physical RES by 20%.",
      target: 'self',
      infusion: 'geo',
      hasLevels: 'burst',
      sourceStats: ['def'],
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk',
          coef: 'param2',
          source: ['def', 0]
        },
        {
          scaling: 'normalATKSpd',
          coef: 0.1
        },
        {
          scaling: 'physicalRes',
          coef: -0.2
        },
        {
          scaling: 'anemoRes',
          coef: -0.2
        },
        {
          scaling: 'cryoRes',
          coef: -0.2
        },
        {
          scaling: 'dendroRes',
          coef: -0.2
        },
        {
          scaling: 'electroRes',
          coef: -0.2
        },
        {
          scaling: 'geoRes',
          coef: -0.2
        },
        {
          scaling: 'hydroRes',
          coef: -0.2
        },
        {
          scaling: 'pyroRes',
          coef: -0.2
        }
      ]
    },
    {
      name: 'Bloodline of the Crimson Oni',
      url: 'UI_Talent_S_Itto_06',
      description: "Arataki Kesagiri DMG is increased by 35% of Arataki Itto's DEF.",
      target: 'self',
      level: 8,
      actionType: 'passive',
      values: [
        {
          scaling: 'crimsonOni',
          coef: 0.35,
          source: ['def', 0]
        }
      ]
    },
    {
      name: 'Jailhouse Bread and Butter',
      url: 'UI_Talent_S_Itto_03',
      description:
        'When the Raging Oni King state caused by Royal Descent: Behold, Itto the Evil! ends, all nearby party members gain 20% DEF and 20% ATK for 10s.',
      target: 'nearby',
      constellation: 4,
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 0.2
        },
        {
          scaling: 'atk%',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Arataki Itto, Present!',
      url: 'UI_Talent_S_Itto_04',
      description:
        "Arataki Itto's Charged Attacks deal +70% Crit DMG. Additionally, when he uses Arataki Kesagiri, he has a 50% chance to not consume stacks of Superlative Superstrength.",
      target: 'self',
      constellation: 4,
      actionType: 'toggle',
      values: [
        {
          scaling: 'chargedCritDMG',
          coef: 0.7
        }
      ]
    }
  ],
  offField: []
};

export default charName;
