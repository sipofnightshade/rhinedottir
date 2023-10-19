import type { SelectedWeapon } from '$lib/types/global';

type Polearms = SelectedWeapon & {
  type: 'polearm';
};

export const polearm: Polearms[] = [
  {
    uid: 13404,
    name: 'blackcliffpole',
    fullName: 'Blackcliff Pole',
    rating: 4,
    type: 'polearm',
    specialized: 'critdmg',
    effectname: 'Press the Advantage',
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'atk%', coef: [0.12, 0.12, 0.12] }],
          [{ scaling: 'atk%', coef: [0.15, 0.15, 0.15] }],
          [{ scaling: 'atk%', coef: [0.18, 0.18, 0.18] }],
          [{ scaling: 'atk%', coef: [0.21, 0.21, 0.21] }],
          [{ scaling: 'atk%', coef: [0.24, 0.24, 0.24] }]
        ]
      }
    ],
    effect:
      'After defeating an enemy, ATK is increased by {0} for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
    ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
  },
  {
    uid: 13303,
    name: 'blacktassel',
    fullName: 'Black Tassel',
    rating: 3,
    type: 'polearm',
    specialized: 'hp%',
    effectname: 'Bane of the Soft',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'dmgIncrease', coef: 0.4 }],
          [{ scaling: 'dmgIncrease', coef: 0.5 }],
          [{ scaling: 'dmgIncrease', coef: 0.6 }],
          [{ scaling: 'dmgIncrease', coef: 0.7 }],
          [{ scaling: 'dmgIncrease', coef: 0.8 }]
        ]
      }
    ],
    effect:
      'Increases DMG against slimes by {0}. \n MODIFIED: Makes the assumption that the enemy is a slime.',
    ref: [['40%'], ['50%'], ['60%'], ['70%'], ['80%']]
  },
  {
    uid: 13507,
    name: 'calamityqueller',
    fullName: 'Calamity Queller',
    rating: 5,
    type: 'polearm',
    specialized: 'atk%',
    effectname: 'Extinguishing Precept',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'dmgIncreaseElemental', coef: 0.12 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.15 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.18 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.21 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.24 }]
        ]
      },
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'atk%', coef: [0.032, 0.032, 0.032, 0.032, 0.032, 0.032] }],
          [{ scaling: 'atk%', coef: [0.04, 0.04, 0.04, 0.04, 0.04, 0.04] }],
          [{ scaling: 'atk%', coef: [0.048, 0.048, 0.048, 0.048, 0.048, 0.048] }],
          [{ scaling: 'atk%', coef: [0.056, 0.056, 0.056, 0.056, 0.056, 0.056] }],
          [{ scaling: 'atk%', coef: [0.064, 0.064, 0.064, 0.064, 0.064, 0.064] }]
        ]
      }
    ],
    effect:
      "Gain {0} All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by {1} per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    ref: [
      ['12%', '3.2%'],
      ['15%', '4%'],
      ['18%', '4.8%'],
      ['21%', '5.6%'],
      ['24%', '6.4%']
    ]
  },
  {
    uid: 13403,
    name: 'crescentpike',
    fullName: 'Crescent Pike',
    rating: 4,
    type: 'polearm',
    specialized: 'physical',
    effectname: 'Infusion Needle',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'atk', coef: 0.2 }],
          [{ scaling: 'atk', coef: 0.25 }],
          [{ scaling: 'atk', coef: 0.3 }],
          [{ scaling: 'atk', coef: 0.35 }],
          [{ scaling: 'atk', coef: 0.4 }]
        ]
      }
    ],
    effect:
      'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to {0} of ATK for 5s.',
    ref: [['20%'], ['25%'], ['30%'], ['35%'], ['40%']]
  },
  {
    uid: 13405,
    name: 'deathmatch',
    fullName: 'Deathmatch',
    rating: 4,
    type: 'polearm',
    specialized: 'critrate',
    effectname: 'Gladiator',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'atk%', coef: 0.24 }],
          [{ scaling: 'atk%', coef: 0.3 }],
          [{ scaling: 'atk%', coef: 0.36 }],
          [{ scaling: 'atk%', coef: 0.42 }],
          [{ scaling: 'atk%', coef: 0.48 }]
        ]
      }
    ],
    effect:
      'If there are at least 2 opponents nearby, ATK is increased by {0} and DEF is increased by {1}. If there are fewer than 2 opponents nearby, ATK is increased by {2}. \nMODIFIED: Only second buff available',
    ref: [
      ['16%', '16%', '24%'],
      ['20%', '20%', '30%'],
      ['24%', '24%', '36%'],
      ['28%', '28%', '42%'],
      ['32%', '32%', '48%']
    ]
  },
  {
    uid: 13401,
    name: 'dragonsbane',
    fullName: "Dragon's Bane",
    rating: 4,
    type: 'polearm',
    specialized: 'em',
    effectname: 'Bane of Flame and Water',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'pyro', coef: 0.2 },
            { scaling: 'hydro', coef: 0.2 }
          ],
          [
            { scaling: 'pyro', coef: 0.24 },
            { scaling: 'hydro', coef: 0.24 }
          ],
          [
            { scaling: 'pyro', coef: 0.28 },
            { scaling: 'hydro', coef: 0.28 }
          ],
          [
            { scaling: 'pyro', coef: 0.32 },
            { scaling: 'hydro', coef: 0.32 }
          ],
          [
            { scaling: 'pyro', coef: 0.36 },
            { scaling: 'hydro', coef: 0.36 }
          ]
        ]
      }
    ],
    effect: 'Increases DMG against opponents affected by Hydro or Pyro by {0}.',
    ref: [['20%'], ['24%'], ['28%'], ['32%'], ['36%']]
  },
  {
    uid: 13409,
    name: 'dragonspinespear',
    fullName: 'Dragonspine Spear',
    rating: 4,
    type: 'polearm',
    specialized: 'physical',
    effectname: 'Frost Burial',
    effect:
      'Hitting an opponent with Normal and Charged Attacks has a {0} chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to {1} of atk%. Opponents affected by Cryo are instead dealt DMG equal to {2} of atk%. Can only occur once every 10s.',
    ref: [
      ['60%', '80%', '200%'],
      ['70%', '95%', '240%'],
      ['80%', '110%', '280%'],
      ['90%', '125%', '320%'],
      ['100%', '140%', '360%']
    ]
  },
  {
    uid: 13509,
    name: 'engulfinglightning',
    fullName: 'Engulfing Lightning',
    rating: 5,
    type: 'polearm',
    specialized: 'energy',
    effectname: 'Timeless Dream: Eternal Stove',
    action: [
      {
        actionType: 'passive',
        sourceStats: ['energy'],
        values: [
          [{ scaling: 'atk%', coef: 0.28, source: ['energy', 1, 2.8571] }],
          [{ scaling: 'atk%', coef: 0.35, source: ['energy', 1, 2.5714] }],
          [{ scaling: 'atk%', coef: 0.42, source: ['energy', 1, 2.3809] }],
          [{ scaling: 'atk%', coef: 0.49, source: ['energy', 1, 2.2448] }],
          [{ scaling: 'atk%', coef: 0.56, source: ['energy', 1, 2.1428] }]
        ]
      },
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'energy', coef: 0.3 }],
          [{ scaling: 'energy', coef: 0.35 }],
          [{ scaling: 'energy', coef: 0.4 }],
          [{ scaling: 'energy', coef: 0.45 }],
          [{ scaling: 'energy', coef: 0.5 }]
        ]
      }
    ],
    effect:
      'ATK increased by {0} of Energy Recharge over the base 100%. You can gain a maximum bonus of {1} atk%. Gain {2} Energy Recharge for 12s after using an Elemental Burst.',
    ref: [
      ['28%', '80%', '30%'],
      ['35%', '90%', '35%'],
      ['42%', '100%', '40%'],
      ['49%', '110%', '45%'],
      ['56%', '120%', '50%']
    ]
  },
  {
    uid: 13407,
    name: 'favoniuslance',
    fullName: 'Favonius Lance',
    rating: 4,
    type: 'polearm',
    specialized: 'energy',
    effectname: 'Windfall',
    effect:
      'CRIT Hits have a {0} chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every {1}.',
    ref: [
      ['60%', '12s'],
      ['70%', '10.5s'],
      ['80%', '9s'],
      ['90%', '7.5s'],
      ['100%', '6s']
    ]
  },
  {
    uid: 13302,
    name: 'halberd',
    fullName: 'Halberd',
    rating: 3,
    type: 'polearm',
    specialized: 'atk%',
    effectname: 'Heavy',
    effect:
      'Normal Attacks deal an additional {0} ATK as DMG. This effect can only occur once every 10s.',
    ref: [['160%'], ['200%'], ['240%'], ['280%'], ['320%']]
  },
  {
    uid: 13414,
    name: 'kitaincrossspear',
    fullName: 'Kitain Cross Spear',
    rating: 4,
    type: 'polearm',
    specialized: 'em',
    effectname: 'Samurai Conduct',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'skill', coef: 0.06 }],
          [{ scaling: 'skill', coef: 0.075 }],
          [{ scaling: 'skill', coef: 0.09 }],
          [{ scaling: 'skill', coef: 0.105 }],
          [{ scaling: 'skill', coef: 0.12 }]
        ]
      }
    ],
    effect:
      'Increases Elemental Skill DMG by {0}. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates {1} Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.',
    ref: [
      ['6%', '3'],
      ['7.5%', '3.5'],
      ['9%', '4'],
      ['10.5%', '4.5'],
      ['12%', '5']
    ]
  },
  {
    uid: 13406,
    name: 'lithicspear',
    fullName: 'Lithic Spear',
    rating: 4,
    type: 'polearm',
    specialized: 'atk%',
    effectname: 'Lithic Axiom: Unity',
    action: [
      {
        actionType: 'region',
        regions: ['liyue'],
        values: [
          [
            { scaling: 'atk%', coef: 0.07 },
            { scaling: 'critrate', coef: 0.03 }
          ],
          [
            { scaling: 'atk%', coef: 0.08 },
            { scaling: 'critrate', coef: 0.04 }
          ],
          [
            { scaling: 'atk%', coef: 0.09 },
            { scaling: 'critrate', coef: 0.05 }
          ],
          [
            { scaling: 'atk%', coef: 0.1 },
            { scaling: 'critrate', coef: 0.06 }
          ],
          [
            { scaling: 'atk%', coef: 0.11 },
            { scaling: 'critrate', coef: 0.07 }
          ]
        ]
      }
    ],
    effect:
      'For every character in the party who hails from liyue, the character who equips this weapon gains a {0} ATK increase and a {1} CRIT Rate increase. This effect stacks up to 4 times.',
    ref: [
      ['7%', '3%'],
      ['8%', '4%'],
      ['9%', '5%'],
      ['10%', '6%'],
      ['11%', '7%']
    ]
  },
  {
    uid: 13419,
    name: 'missivewindspear',
    fullName: 'Missive Windspear',
    rating: 4,
    type: 'polearm',
    specialized: 'atk%',
    effectname: 'The Wind Unattained',
    action: [
      {
        actionType: 'toggle',
        values: [
          [
            { scaling: 'atk%', coef: 0.12 },
            { scaling: 'em', coef: 48 }
          ],
          [
            { scaling: 'atk%', coef: 0.15 },
            { scaling: 'em', coef: 60 }
          ],
          [
            { scaling: 'atk%', coef: 0.18 },
            { scaling: 'em', coef: 72 }
          ],
          [
            { scaling: 'atk%', coef: 0.21 },
            { scaling: 'em', coef: 84 }
          ],
          [
            { scaling: 'atk%', coef: 0.24 },
            { scaling: 'em', coef: 96 }
          ]
        ]
      }
    ],
    effect:
      'Within 10s after an Elemental Reaction is triggered, ATK is increased by {0} and Elemental Mastery is increased by {1}.',
    ref: [
      ['12%', '48'],
      ['15%', '60'],
      ['18%', '72'],
      ['21%', '84'],
      ['24%', '96']
    ]
  },
  {
    uid: 13417,
    name: 'moonpiercer',
    fullName: 'Moonpiercer',
    rating: 4,
    type: 'polearm',
    specialized: 'em',
    effectname: 'Stillwood Moonshadow',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'atk%', coef: 0.16 }],
          [{ scaling: 'atk%', coef: 0.2 }],
          [{ scaling: 'atk%', coef: 0.24 }],
          [{ scaling: 'atk%', coef: 0.28 }],
          [{ scaling: 'atk%', coef: 0.32 }]
        ]
      }
    ],
    effect:
      'After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Revival will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character {0} ATK for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field.',
    ref: [['16%'], ['20%'], ['24%'], ['28%'], ['32%']]
  },
  {
    uid: 13427,
    name: 'prospectorsdrill',
    fullName: "Prospector's Drill",
    rating: 4,
    type: 'polearm',
    specialized: 'atk%',
    effectname: "Masons' Ditty",
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'normal', coef: [0.03, 0.03, 0.03] },
            { scaling: 'dmgIncreaseElemental', coef: [0.07, 0.07, 0.07] }
          ],
          [
            { scaling: 'normal', coef: [0.04, 0.04, 0.04] },
            { scaling: 'dmgIncreaseElemental', coef: [0.085, 0.085, 0.085] }
          ],
          [
            { scaling: 'normal', coef: [0.05, 0.05, 0.05] },
            { scaling: 'dmgIncreaseElemental', coef: [0.1, 0.1, 0.1] }
          ],
          [
            { scaling: 'normal', coef: [0.06, 0.06, 0.06] },
            { scaling: 'dmgIncreaseElemental', coef: [0.115, 0.115, 0.115] }
          ],
          [
            { scaling: 'normal', coef: [0.07, 0.07, 0.07] },
            { scaling: 'dmgIncreaseElemental', coef: [0.13, 0.13, 0.13] }
          ]
        ]
      }
    ],
    effect:
      "When the wielder is healed or heals others, they will gain a Unity's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Struggle effect will be granted for 10s. For each Symbol consumed, gain {0} ATK and {1} All Elemental DMG Bonus. The Struggle effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
    ref: [
      ['3%', '7%'],
      ['4%', '8.5%'],
      ['5%', '10%'],
      ['6%', '11.5%'],
      ['7%', '13%']
    ]
  },
  {
    uid: 13505,
    name: 'primordialjadewingedspear',
    fullName: 'Primordial Jade Winged-Spear',
    rating: 5,
    type: 'polearm',
    specialized: 'critrate',
    effectname: 'Eagle Spear of Justice',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            {
              scaling: 'atk%',
              coef: [0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032]
            },
            { scaling: 'dmgIncrease', coef: [0, 0, 0, 0, 0, 0, 0.12] }
          ],
          [
            {
              scaling: 'atk%',
              coef: [0.039, 0.039, 0.039, 0.039, 0.039, 0.039, 0.039]
            },
            { scaling: 'dmgIncrease', coef: [0, 0, 0, 0, 0, 0, 0.15] }
          ],
          [
            {
              scaling: 'atk%',
              coef: [0.046, 0.046, 0.046, 0.046, 0.046, 0.046, 0.046]
            },
            { scaling: 'dmgIncrease', coef: [0, 0, 0, 0, 0, 0, 0.18] }
          ],
          [
            {
              scaling: 'atk%',
              coef: [0.053, 0.053, 0.053, 0.053, 0.053, 0.053, 0.053]
            },
            { scaling: 'dmgIncrease', coef: [0, 0, 0, 0, 0, 0, 0.21] }
          ],
          [
            { scaling: 'atk%', coef: [0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06] },
            { scaling: 'dmgIncrease', coef: [0, 0, 0, 0, 0, 0, 0.24] }
          ]
        ]
      }
    ],
    effect:
      'On hit, increases ATK by {0} for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by {1}.',
    ref: [
      ['3.2%', '12%'],
      ['3.9%', '15%'],
      ['4.6%', '18%'],
      ['5.3%', '21%'],
      ['6%', '24%']
    ]
  },
  {
    uid: 13402,
    name: 'prototypestarglitter',
    fullName: 'Prototype Starglitter',
    rating: 4,
    type: 'polearm',
    specialized: 'energy',
    effectname: 'Magic Affinity',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'normal', coef: [0.08, 0.08] },
            { scaling: 'charged', coef: [0.08, 0.08] }
          ],
          [
            { scaling: 'normal', coef: [0.1, 0.1] },
            { scaling: 'charged', coef: [0.1, 0.1] }
          ],
          [
            { scaling: 'normal', coef: [0.12, 0.12] },
            { scaling: 'charged', coef: [0.12, 0.12] }
          ],
          [
            { scaling: 'normal', coef: [0.14, 0.14] },
            { scaling: 'charged', coef: [0.14, 0.14] }
          ],
          [
            { scaling: 'normal', coef: [0.16, 0.16] },
            { scaling: 'charged', coef: [0.16, 0.16] }
          ]
        ]
      }
    ],
    effect:
      'After using an Elemental Skill, increases Normal and Charged Attack DMG by {0} for 12s. Max 2 stacks.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  {
    uid: 13425,
    name: 'rightfulreward',
    fullName: 'Rightful Reward',
    rating: 4,
    type: 'polearm',
    specialized: 'hp%',
    effectname: 'Tip of the Spear',
    effect:
      'When the wielder is healed, restore {0} Energy. This effect can be triggered once every 10s, and can occur even when the character is not on the field.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  {
    uid: 13408,
    name: 'royalspear',
    fullName: 'Royal Spear',
    rating: 4,
    type: 'polearm',
    specialized: 'atk%',
    effectname: 'Focus',
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'critrate', coef: [0.08, 0.08, 0.08, 0.08, 0.08] }],
          [{ scaling: 'critrate', coef: [0.1, 0.1, 0.1, 0.1, 0.1] }],
          [{ scaling: 'critrate', coef: [0.12, 0.12, 0.12, 0.12, 0.12] }],
          [{ scaling: 'critrate', coef: [0.14, 0.14, 0.14, 0.14, 0.14] }],
          [{ scaling: 'critrate', coef: [0.16, 0.16, 0.16, 0.16, 0.16] }]
        ]
      }
    ],
    effect:
      'Upon damaging an opponent, increases CRIT Rate by {0}. Max 5 stacks. A CRIT Hit removes all stacks.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  {
    uid: 13502,
    name: 'skywardspine',
    fullName: 'Skyward Spine',
    rating: 5,
    type: 'polearm',
    specialized: 'energy',
    effectname: 'Black Wing',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'critrate', coef: 0.08 },
            { scaling: 'normalATKSpd', coef: 0.12 }
          ],
          [
            { scaling: 'critrate', coef: 0.1 },
            { scaling: 'normalATKSpd', coef: 0.12 }
          ],
          [
            { scaling: 'critrate', coef: 0.12 },
            { scaling: 'normalATKSpd', coef: 0.12 }
          ],
          [
            { scaling: 'critrate', coef: 0.14 },
            { scaling: 'normalATKSpd', coef: 0.12 }
          ],
          [
            { scaling: 'critrate', coef: 0.16 },
            { scaling: 'normalATKSpd', coef: 0.12 }
          ]
        ]
      }
    ],
    effect:
      'Increases CRIT Rate by {0} and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals {1} of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
    ref: [
      ['8%', '40%'],
      ['10%', '55%'],
      ['12%', '70%'],
      ['14%', '85%'],
      ['16%', '100%']
    ]
  },
  {
    uid: 13501,
    name: 'staffofhoma',
    fullName: 'Staff of Homa',
    rating: 5,
    type: 'polearm',
    specialized: 'critdmg',
    effectname: 'Reckless Cinnabar',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'hp%', coef: 0.2 }],
          [{ scaling: 'hp%', coef: 0.25 }],
          [{ scaling: 'hp%', coef: 0.3 }],
          [{ scaling: 'hp%', coef: 0.35 }],
          [{ scaling: 'hp%', coef: 0.4 }]
        ]
      },
      {
        actionType: 'stack',
        sourceStats: ['hp'],
        values: [
          [{ scaling: 'atk', coef: [0.008, 0.01], source: ['hp', 0] }],
          [{ scaling: 'atk', coef: [0.01, 0.012], source: ['hp', 0] }],
          [{ scaling: 'atk', coef: [0.012, 0.014], source: ['hp', 0] }],
          [{ scaling: 'atk', coef: [0.014, 0.016], source: ['hp', 0] }],
          [{ scaling: 'atk', coef: [0.016, 0.018], source: ['hp', 0] }]
        ]
      }
    ],
    effect:
      "HP increased by {0}. Additionally, provides an ATK Bonus based on {1} of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK Bonus is increased by an additional {2} of Max HP.",
    ref: [
      ['20%', '0.8%', '1%'],
      ['25%', '1%', '1.2%'],
      ['30%', '1.2%', '1.4%'],
      ['35%', '1.4%', '1.6%'],
      ['40%', '1.6%', '1.8%']
    ]
  },
  {
    uid: 13511,
    name: 'staffofthescarletsands',
    fullName: 'Staff of the Scarlet Sands',
    rating: 5,
    type: 'polearm',
    specialized: 'critrate',
    effectname: "Heat Haze at Horizon's End",
    action: [
      {
        actionType: 'passive',
        sourceStats: ['em'],
        values: [
          [{ scaling: 'atk', coef: 0.52, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.65, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.78, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.91, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 1.04, source: ['em', 0] }]
        ]
      },
      {
        actionType: 'stack',
        sourceStats: ['em'],
        values: [
          [{ scaling: 'atk', coef: [0.28, 0.28, 0.28], source: ['em', 0] }],
          [{ scaling: 'atk', coef: [0.35, 0.35, 0.35], source: ['em', 0] }],
          [{ scaling: 'atk', coef: [0.42, 0.42, 0.42], source: ['em', 0] }],
          [{ scaling: 'atk', coef: [0.49, 0.49, 0.49], source: ['em', 0] }],
          [{ scaling: 'atk', coef: [0.56, 0.56, 0.56], source: ['em', 0] }]
        ]
      }
    ],
    effect:
      'The equipping character gains {0} of their Elemental Mastery as bonus ATK. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain {1} of their Elemental Mastery as bonus ATK. Max 3 stacks.',
    ref: [
      ['52%', '28%'],
      ['65%', '35%'],
      ['78%', '42%'],
      ['91%', '49%'],
      ['104%', '56%']
    ]
  },
  {
    uid: 13415,
    name: 'thecatch',
    fullName: '"The Catch"',
    rating: 4,
    type: 'polearm',
    specialized: 'energy',
    effectname: 'Shanty',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'burst', coef: 0.16 },
            { scaling: 'burstCritRate', coef: 0.06 }
          ],
          [
            { scaling: 'burst', coef: 0.2 },
            { scaling: 'burstCritRate', coef: 0.075 }
          ],
          [
            { scaling: 'burst', coef: 0.24 },
            { scaling: 'burstCritRate', coef: 0.09 }
          ],
          [
            { scaling: 'burst', coef: 0.28 },
            { scaling: 'burstCritRate', coef: 0.105 }
          ],
          [
            { scaling: 'burst', coef: 0.32 },
            { scaling: 'burstCritRate', coef: 0.12 }
          ]
        ]
      }
    ],
    effect: 'Increases Elemental Burst DMG by {0} and Elemental Burst CRIT Rate by {1}.',
    ref: [
      ['16%', '6%'],
      ['20%', '7.5%'],
      ['24%', '9%'],
      ['28%', '10.5%'],
      ['32%', '12%']
    ]
  },
  {
    uid: 13424,
    name: 'balladofthefjords',
    fullName: 'Ballad of the Fjords',
    rating: 4,
    type: 'polearm',
    specialized: 'critrate',
    effectname: 'Tales of the Tundra',
    action: [
      {
        actionType: 'visionMatch',
        visionCondition: 'different',
        values: [
          [{ scaling: 'em', coef: [0, 0, 120] }],
          [{ scaling: 'em', coef: [0, 0, 150] }],
          [{ scaling: 'em', coef: [0, 0, 180] }],
          [{ scaling: 'em', coef: [0, 0, 210] }],
          [{ scaling: 'em', coef: [0, 0, 240] }]
        ]
      }
    ],
    effect:
      'When there are at least 3 different Elemental Types in your party, Elemental Mastery will be increased by {0}',
    ref: [['120.'], ['150.'], ['180.'], ['210.'], ['240.']]
  },
  {
    uid: 13504,
    name: 'vortexvanquisher',
    fullName: 'Vortex Vanquisher',
    rating: 5,
    type: 'polearm',
    specialized: 'atk%',
    effectname: 'Golden Majesty',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'shieldStrength', coef: 0.2 }],
          [{ scaling: 'shieldStrength', coef: 0.25 }],
          [{ scaling: 'shieldStrength', coef: 0.3 }],
          [{ scaling: 'shieldStrength', coef: 0.35 }],
          [{ scaling: 'shieldStrength', coef: 0.4 }]
        ]
      },
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'atk%', coef: [0.04, 0.04, 0.04, 0.04, 0.04] }],
          [{ scaling: 'atk%', coef: [0.05, 0.05, 0.05, 0.05, 0.05] }],
          [{ scaling: 'atk%', coef: [0.06, 0.06, 0.06, 0.06, 0.06] }],
          [{ scaling: 'atk%', coef: [0.07, 0.07, 0.07, 0.07, 0.07] }],
          [{ scaling: 'atk%', coef: [0.08, 0.08, 0.08, 0.08, 0.08] }]
        ]
      }
    ],
    effect:
      'Increases Shield Strength by {0}. Scoring hits on opponents increases ATK by {1} for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.',
    ref: [
      ['20%', '4%'],
      ['25%', '5%'],
      ['30%', '6%'],
      ['35%', '7%'],
      ['40%', '8%']
    ]
  },
  {
    uid: 13416,
    name: 'wavebreakersfin',
    fullName: "Wavebreaker's Fin",
    rating: 4,
    type: 'polearm',
    specialized: 'atk%',
    effectname: 'Watatsumi Wavewalker',
    action: [
      {
        actionType: 'passive',
        sourceStats: ['partyBurstCost'],
        values: [
          [{ scaling: 'burst', coef: 0.0012, source: ['partyBurstCost', 0, 333] }],
          [{ scaling: 'burst', coef: 0.0015, source: ['partyBurstCost', 0, 333] }],
          [{ scaling: 'burst', coef: 0.0018, source: ['partyBurstCost', 0, 333] }],
          [{ scaling: 'burst', coef: 0.0021, source: ['partyBurstCost', 0, 333] }],
          [{ scaling: 'burst', coef: 0.0024, source: ['partyBurstCost', 0, 333] }]
        ]
      }
    ],
    effect:
      "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by {0}. A maximum of {1} increased Elemental Burst DMG can be achieved this way.",
    ref: [
      ['0.12%', '40%'],
      ['0.15%', '50%'],
      ['0.18%', '60%'],
      ['0.21%', '70%'],
      ['0.24%', '80%']
    ]
  },
  {
    uid: 13301,
    name: 'whitetassel',
    fullName: 'White Tassel',
    rating: 3,
    type: 'polearm',
    specialized: 'critrate',
    effectname: 'Sharp',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'normal', coef: 0.24 }],
          [{ scaling: 'normal', coef: 0.3 }],
          [{ scaling: 'normal', coef: 0.36 }],
          [{ scaling: 'normal', coef: 0.42 }],
          [{ scaling: 'normal', coef: 0.48 }]
        ]
      }
    ],
    effect: 'Increases Normal Attack DMG by {0}.',
    ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
  }
];
