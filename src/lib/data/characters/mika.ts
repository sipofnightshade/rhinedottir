import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'mika',
  fullName: 'Mika',
  rating: 4,
  weapon: 'polearm',
  region: 'mondstat',
  vision: 'cryo',
  specialized: 'hp%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 70,
  talentNames: {
    normal: "Spear of Favonius - Arrow's Passage",
    skill: 'Starfrost Swirl',
    burst: 'Skyfeather Song'
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
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
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
  charged: [
    {
      name: 'Charged Attack',
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
      name: 'Flowfrost Arrow DMG',
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
      name: 'Rimestar Flare DMG',
      tag: 'EH',
      damageBonus: 'skill',
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
      name: 'Rimestar Shard DMG',
      damageBonus: 'skill',
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
      name: 'Cast Healing',
      isHealing: true,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          },
          {
            scaling: 'flatValue',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: 'Eagleplume Healing',
      isHealing: true,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param4'
          },
          {
            scaling: 'flatValue',
            param: 'param3'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Soulwind',
      url: 'Skill_S_Mika_01',
      description:
        'Mika uses his crossbow to attack, granting all nearby characters in your party Soulwind. When characters in the Soulwind state are on the field, their ATK SPD will be increased. Will take effect in different ways if Tapped or Held.',
      target: 'party',
      hasLevels: 'skill',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 'param4'
        }
      ]
    },
    {
      name: 'Suppressive Barrage',
      url: 'UI_Talent_S_Mika_05',
      description:
        'Per the following circumstances, the Soulwind state caused by **Starfrost Swirl** will grant characters the Detector effect, increasing their Physical DMG by 10% when they are on the field.\n·If the Flowfrost Arrow hits more than one opponent, each additional opponent hit will generate 1 Detector stack.\n·When a Rimestar Shard hits an opponent, it will generate 1 Detector stack. Each Rimestar Shard can trigger the effect 1 time.\n\nThe Soulwind state can have a maximum of 3 Detector stacks, and if Starfrost Swirl is cast again during this duration, the pre-existing Soulwind state and all its Detector stacks will be cleared.',
      level: 2,
      target: 'party',
      actionType: 'stack',
      values: [
        {
          scaling: 'physical',
          coef: [0.1, 0.1, 0.1]
        }
      ]
    },
    {
      name: 'Topographical Mapping',
      url: 'UI_Talent_S_Mika_06',
      description:
        "When an active character affected by both **Skyfeather Song**'s Eagleplume and **Starfrost Swirl**'s Soulwind at once scores a CRIT Hit with their attacks, Soulwind will grant them 1 stack of Detector from Suppressive Barrage. During a single instance of Soulwind, 1 Detector stack can be gained in this manner.\nAdditionally, the maximum number of stacks that can be gained through Soulwind alone is increased by 1.\nRequires Suppressive Barrage to be unlocked first.",
      level: 8,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'physical',
          coef: 0.1
        }
      ]
    },
    {
      name: "Companion's Counsel",
      url: 'UI_Talent_S_Mika_04',
      description:
        'The maximum number of Detector stacks that **Starfrost Swirl**\'s Soulwind can gain is increased by 1. You need to have unlocked the Passive Talent "Suppressive Barrage" first.\nAdditionally, active characters affected by Soulwind will deal 60% more Physical CRIT DMG.',
      constellation: 6,
      target: 'active',
      actionType: 'toggle',
      values: [
        {
          scaling: 'physical',
          coef: 0.1
        },
        {
          scaling: 'physicalCritDMG',
          coef: 0.6
        }
      ]
    }
  ],
  offField: []
};

export default charName;
