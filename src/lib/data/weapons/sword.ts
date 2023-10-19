import type { SelectedWeapon } from '$lib/types/global';

type Swords = SelectedWeapon & {
  type: 'sword';
};

export const sword: Swords[] = [
  {
    uid: 11414,
    name: 'amenomakageuchi',
    fullName: 'Amenoma Kageuchi',
    rating: 4,
    type: 'sword',
    specialized: 'atk%',
    effectname: 'Iwakura Succession',
    effect:
      'After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates {0} Energy for each seed consumed.',
    ref: [['6'], ['7.5'], ['9'], ['10.5'], ['12']]
  },
  {
    uid: 11501,
    name: 'aquilafavonia',
    fullName: 'Aquila Favonia',
    rating: 5,
    type: 'sword',
    specialized: 'physical',
    effectname: "Falcon's Defiance",
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'atk%', coef: 0.2 }],
          [{ scaling: 'atk%', coef: 0.25 }],
          [{ scaling: 'atk%', coef: 0.3 }],
          [{ scaling: 'atk%', coef: 0.35 }],
          [{ scaling: 'atk%', coef: 0.4 }]
        ]
      }
    ],
    effect:
      'ATK is increased by {0}. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of resistance aloft, regenerating HP equal to {1} of ATK and dealing {2} of ATK as DMG to surrounding opponents. This effect can only occur once every 15s.',
    ref: [
      ['20%', '100%', '200%'],
      ['25%', '115%', '230%'],
      ['30%', '130%', '260%'],
      ['35%', '145%', '290%'],
      ['40%', '160%', '320%']
    ]
  },
  {
    uid: 11408,
    name: 'blackclifflongsword',
    fullName: 'Blackcliff Longsword',
    rating: 4,
    type: 'sword',
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
      'After defeating an opponent, ATK is increased by {0} for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
    ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
  },
  {
    uid: 11415,
    name: 'cinnabarspindle',
    fullName: 'Cinnabar Spindle',
    rating: 4,
    type: 'sword',
    specialized: 'def%',
    effectname: 'Spotless Heart',
    action: [
      {
        actionType: 'passive',
        sourceStats: ['def'],
        values: [
          [{ scaling: 'skillFlatDMG', coef: 0.4, source: ['def', 0] }],
          [{ scaling: 'skillFlatDMG', coef: 0.5, source: ['def', 0] }],
          [{ scaling: 'skillFlatDMG', coef: 0.6, source: ['def', 0] }],
          [{ scaling: 'skillFlatDMG', coef: 0.7, source: ['def', 0] }],
          [{ scaling: 'skillFlatDMG', coef: 0.8, source: ['def', 0] }]
        ]
      }
    ],
    effect:
      'Elemental Skill DMG is increased by {0} of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.',
    ref: [['40%'], ['50%'], ['60%'], ['70%'], ['80%']]
  },
  {
    uid: 11301,
    name: 'coolsteel',
    fullName: 'Cool Steel',
    rating: 3,
    type: 'sword',
    specialized: 'atk%',
    effectname: 'Bane of Water and Ice',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'cryo', coef: 0.12 },
            { scaling: 'hydro', coef: 0.12 }
          ],
          [
            { scaling: 'cryo', coef: 0.15 },
            { scaling: 'hydro', coef: 0.15 }
          ],
          [
            { scaling: 'cryo', coef: 0.18 },
            { scaling: 'hydro', coef: 0.18 }
          ],
          [
            { scaling: 'cryo', coef: 0.21 },
            { scaling: 'hydro', coef: 0.21 }
          ],
          [
            { scaling: 'cryo', coef: 0.24 },
            { scaling: 'hydro', coef: 0.24 }
          ]
        ]
      }
    ],
    effect: 'Increases DMG against opponents affected by Hydro or Cryo by {0}.',
    ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
  },
  {
    uid: 11304,
    name: 'darkironsword',
    fullName: 'Dark Iron Sword',
    rating: 3,
    type: 'sword',
    specialized: 'em',
    effectname: 'Overloaded',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'atk%', coef: 0.2 }],
          [{ scaling: 'atk%', coef: 0.25 }],
          [{ scaling: 'atk%', coef: 0.3 }],
          [{ scaling: 'atk%', coef: 0.35 }],
          [{ scaling: 'atk%', coef: 0.4 }]
        ]
      }
    ],
    effect:
      'Upon causing an Overloaded, Superconduct, Electro-Charged, Quicken, Aggravate, Hyperbloom, or Electro-infused Swirl reaction, ATK is increased by {0} for 12s.',
    ref: [['20%'], ['25%'], ['30%'], ['35%'], ['40%']]
  },
  {
    uid: 11401,
    name: 'favoniussword',
    fullName: 'Favonius Sword',
    rating: 4,
    type: 'sword',
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
    uid: 11413,
    name: 'festeringdesire',
    fullName: 'Festering Desire',
    rating: 4,
    type: 'sword',
    specialized: 'energy',
    effectname: 'Undying Admiration',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'skill', coef: 0.16 },
            { scaling: 'skillCritRate', coef: 0.06 }
          ],
          [
            { scaling: 'skill', coef: 0.2 },
            { scaling: 'skillCritRate', coef: 0.075 }
          ],
          [
            { scaling: 'skill', coef: 0.24 },
            { scaling: 'skillCritRate', coef: 0.09 }
          ],
          [
            { scaling: 'skill', coef: 0.28 },
            { scaling: 'skillCritRate', coef: 0.105 }
          ],
          [
            { scaling: 'skill', coef: 0.32 },
            { scaling: 'skillCritRate', coef: 0.12 }
          ]
        ]
      }
    ],
    effect: 'Increases Elemental Skill DMG by {0} and Elemental Skill CRIT Rate by {1}.',
    ref: [
      ['16%', '6%'],
      ['20%', '7.5%'],
      ['24%', '9%'],
      ['28%', '10.5%'],
      ['32%', '12%']
    ]
  },
  {
    uid: 11425,
    name: 'finaleofthedeep',
    fullName: 'Finale of the Deep',
    rating: 4,
    type: 'sword',
    specialized: 'atk%',
    effectname: 'An End Sublime',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'atk%', coef: 0.12 }],
          [{ scaling: 'atk%', coef: 0.15 }],
          [{ scaling: 'atk%', coef: 0.18 }],
          [{ scaling: 'atk%', coef: 0.21 }],
          [{ scaling: 'atk%', coef: 0.24 }]
        ]
      },
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'atk', coef: 0.006, source: ['hp', 0, 25000] }],
          [{ scaling: 'atk', coef: 0.0075, source: ['hp', 0, 25000] }],
          [{ scaling: 'atk', coef: 0.009, source: ['hp', 0, 25000] }],
          [{ scaling: 'atk', coef: 0.0105, source: ['hp', 0, 25000] }],
          [{ scaling: 'atk', coef: 0.012, source: ['hp', 0, 25000] }]
        ]
      }
    ],
    effect:
      'When using an Elemental Skill, ATK will be increased by {0} for 15s, and a Bond of Life worth 25% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, a maximum of {1} ATK will be gained based on {2} of the total amount of the Life Bond cleared, lasting for 15s.',
    ref: [
      ['12%', '150', '2.4%'],
      ['15%', '187.5', '3%'],
      ['18%', '225', '3.6%'],
      ['21%', '262.5', '4.2%'],
      ['24%', '300', '4.8%']
    ]
  },
  {
    uid: 11426,
    name: 'fleuvecendreferryman',
    fullName: 'Fleuve Cendre Ferryman',
    rating: 4,
    type: 'sword',
    specialized: 'energy',
    effectname: 'Ironbone',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'skillCritRate', coef: 0.08 }],
          [{ scaling: 'skillCritRate', coef: 0.1 }],
          [{ scaling: 'skillCritRate', coef: 0.12 }],
          [{ scaling: 'skillCritRate', coef: 0.14 }],
          [{ scaling: 'skillCritRate', coef: 0.16 }]
        ]
      },
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'energy', coef: 0.16 }],
          [{ scaling: 'energy', coef: 0.2 }],
          [{ scaling: 'energy', coef: 0.24 }],
          [{ scaling: 'energy', coef: 0.28 }],
          [{ scaling: 'energy', coef: 0.32 }]
        ]
      }
    ],
    effect:
      'Increases Elemental Skill CRIT Rate by {0}. Additionally, increases Energy Recharge by {1} for 5s after using an Elemental Skill.',
    ref: [
      ['8%', '16%'],
      ['10%', '20%'],
      ['12%', '24%'],
      ['14%', '28%'],
      ['16%', '32%']
    ]
  },
  {
    uid: 11305,
    name: 'filletblade',
    fullName: 'Fillet Blade',
    rating: 3,
    type: 'sword',
    specialized: 'atk%',
    effectname: 'Gash',
    effect:
      'On hit, has a 50% chance to deal {0} ATK DMG to a single target. Can only occur once every {1}.',
    ref: [
      ['240%', '15s'],
      ['280%', '14s'],
      ['320%', '13s'],
      ['360%', '12s'],
      ['400%', '11s']
    ]
  },
  {
    uid: 11503,
    name: 'freedomsworn',
    fullName: 'Freedom-Sworn',
    rating: 5,
    type: 'sword',
    specialized: 'em',
    effectname: 'Revolutionary Chorale',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'dmgIncrease', coef: 0.1 }],
          [{ scaling: 'dmgIncrease', coef: 0.125 }],
          [{ scaling: 'dmgIncrease', coef: 0.15 }],
          [{ scaling: 'dmgIncrease', coef: 0.175 }],
          [{ scaling: 'dmgIncrease', coef: 0.2 }]
        ]
      },
      {
        actionType: 'toggle',
        target: 'party',
        values: [
          [
            { scaling: 'normal', coef: 0.16 },
            { scaling: 'charged', coef: 0.16 },
            { scaling: 'plunge', coef: 0.16 },
            { scaling: 'atk%', coef: 0.2 }
          ],
          [
            { scaling: 'normal', coef: 0.2 },
            { scaling: 'charged', coef: 0.2 },
            { scaling: 'plunge', coef: 0.2 },
            { scaling: 'atk%', coef: 0.25 }
          ],
          [
            { scaling: 'normal', coef: 0.24 },
            { scaling: 'charged', coef: 0.24 },
            { scaling: 'plunge', coef: 0.24 },
            { scaling: 'atk%', coef: 0.3 }
          ],
          [
            { scaling: 'normal', coef: 0.28 },
            { scaling: 'charged', coef: 0.28 },
            { scaling: 'plunge', coef: 0.28 },
            { scaling: 'atk%', coef: 0.35 }
          ],
          [
            { scaling: 'normal', coef: 0.32 },
            { scaling: 'charged', coef: 0.32 },
            { scaling: 'plunge', coef: 0.32 },
            { scaling: 'atk%', coef: 0.4 }
          ]
        ]
      }
    ],
    effect:
      'A part of the "Millennial Movement" that wanders amidst the winds. Increases DMG by {0}. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by {1} and increases ATK by {2}. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
    ref: [
      ['10%', '16%', '20%'],
      ['12.5%', '20%', '25%'],
      ['15%', '24%', '30%'],
      ['17.5%', '28%', '35%'],
      ['20%', '32%', '40%']
    ]
  },
  {
    uid: 11510,
    name: 'harangeppakufutsu',
    fullName: 'Haran Geppaku Futsu',
    rating: 5,
    type: 'sword',
    specialized: 'critrate',
    effectname: 'Honed Flow',
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
          [{ scaling: 'normal', coef: [0.2, 0.2] }],
          [{ scaling: 'normal', coef: [0.25, 0.25] }],
          [{ scaling: 'normal', coef: [0.3, 0.3] }],
          [{ scaling: 'normal', coef: [0.35, 0.35] }],
          [{ scaling: 'normal', coef: [0.4, 0.4] }]
        ]
      }
    ],
    effect:
      'Obtain {0} All Elemental DMG Bonus. When other nearby party members use Elemental Skills, the character equipping this weapon will gain 1 Wavespike stack. Max 2 stacks. This effect can be triggered once every 0.3s. When the character equipping this weapon uses an Elemental Skill, all stacks of Wavespike will be consumed to gain Rippling Upheaval: each stack of Wavespike consumed will increase Normal Attack DMG by {1} for 8s.',
    ref: [
      ['12%', '20%'],
      ['15%', '25%'],
      ['18%', '30%'],
      ['21%', '35%'],
      ['24%', '40%']
    ]
  },
  {
    uid: 11302,
    name: 'harbingerofdawn',
    fullName: 'Harbinger of Dawn',
    rating: 3,
    type: 'sword',
    specialized: 'critdmg',
    effectname: 'Vigorous',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'critrate', coef: 0.14 }],
          [{ scaling: 'critrate', coef: 0.175 }],
          [{ scaling: 'critrate', coef: 0.21 }],
          [{ scaling: 'critrate', coef: 0.245 }],
          [{ scaling: 'critrate', coef: 0.28 }]
        ]
      }
    ],
    effect: 'When HP is above 90%, increases CRIT Rate by {0}.',
    ref: [['14%'], ['17.5%'], ['21%'], ['24.5%'], ['28%']]
  },
  {
    uid: 11407,
    name: 'ironsting',
    fullName: 'Iron Sting',
    rating: 4,
    type: 'sword',
    specialized: 'em',
    effectname: 'Infusion Stinger',
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'dmgIncrease', coef: [0.06, 0.06] }],
          [{ scaling: 'dmgIncrease', coef: [0.075, 0.075] }],
          [{ scaling: 'dmgIncrease', coef: [0.09, 0.09] }],
          [{ scaling: 'dmgIncrease', coef: [0.105, 0.105] }],
          [{ scaling: 'dmgIncrease', coef: [0.12, 0.12] }]
        ]
      }
    ],
    effect:
      'Dealing Elemental DMG increases all DMG by {0} for 6s. Max 2 stacks. Can occur once every 1s.',
    ref: [['6%'], ['7.5%'], ['9%'], ['10.5%'], ['12%']]
  },
  {
    uid: 11416,
    name: 'kagotsurubeisshin',
    fullName: 'Kagotsurube Isshin',
    rating: 4,
    type: 'sword',
    specialized: 'atk%',
    effectname: 'Isshin Art Clarity',
    effect:
      'When a Normal, Charged, or Plunging Attack hits an opponent, it will whip up a Hewing Gale, dealing AoE DMG equal to 180% of ATK and increasing ATK by 15% for 8s. This effect can be triggered once every 8s.',
    ref: [[], [], [], [], []]
  },
  {
    uid: 11511,
    name: 'keyofkhajnisut',
    fullName: 'Key of Khaj-Nisut',
    rating: 5,
    type: 'sword',
    specialized: 'hp%',
    effectname: 'Sunken Song of the Sands',
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
          [{ scaling: 'em', coef: [0.0012, 0.0012, 0.0012], source: ['hp', 0] }],
          [{ scaling: 'em', coef: [0.0015, 0.0015, 0.0015], source: ['hp', 0] }],
          [{ scaling: 'em', coef: [0.0018, 0.0018, 0.0018], source: ['hp', 0] }],
          [{ scaling: 'em', coef: [0.0021, 0.0021, 0.0021], source: ['hp', 0] }],
          [{ scaling: 'em', coef: [0.0024, 0.0024, 0.0024], source: ['hp', 0] }]
        ]
      },
      {
        actionType: 'toggle',
        sourceStats: ['hp'],
        target: 'nearby',
        values: [
          [{ scaling: 'em', coef: 0.002, source: ['hp', 0] }],
          [{ scaling: 'em', coef: 0.0025, source: ['hp', 0] }],
          [{ scaling: 'em', coef: 0.003, source: ['hp', 0] }],
          [{ scaling: 'em', coef: 0.0035, source: ['hp', 0] }],
          [{ scaling: 'em', coef: 0.004, source: ['hp', 0] }]
        ]
      }
    ],
    effect:
      "HP increased by {0}. When an Elemental Skill hits opponents, you gain the Grand Hymn effect for 20s. This effect increases the equipping character's Elemental Mastery by {1} of their Max HP. This effect can trigger once every 0.3s. Max 3 stacks. When this effect gains 3 stacks, or when the third stack's duration is refreshed, the Elemental Mastery of all nearby party members will be increased by {2} of the equipping character's max HP for 20s.",
    ref: [
      ['20%', '0.12%', '0.2%'],
      ['25%', '0.15%', '0.25%'],
      ['30%', '0.18%', '0.3%'],
      ['35%', '0.21%', '0.35%'],
      ['40%', '0.24%', '0.4%']
    ]
  },
  {
    uid: 11512,
    name: 'lightoffoliarincision',
    fullName: 'Light of Foliar Incision',
    rating: 5,
    type: 'sword',
    specialized: 'critdmg',
    effectname: 'Whitemoon Bristle',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'critrate', coef: 0.04 }],
          [{ scaling: 'critrate', coef: 0.05 }],
          [{ scaling: 'critrate', coef: 0.06 }],
          [{ scaling: 'critrate', coef: 0.07 }],
          [{ scaling: 'critrate', coef: 0.08 }]
        ]
      },
      {
        actionType: 'toggle',
        sourceStats: ['em'],
        values: [
          [
            { scaling: 'normalFlatDMG', coef: 1.2, source: ['em', 0] },
            { scaling: 'skillFlatDMG', coef: 1.2, source: ['em', 0] }
          ],
          [
            { scaling: 'normalFlatDMG', coef: 1.5, source: ['em', 0] },
            { scaling: 'skillFlatDMG', coef: 1.5, source: ['em', 0] }
          ],
          [
            { scaling: 'normalFlatDMG', coef: 1.8, source: ['em', 0] },
            { scaling: 'skillFlatDMG', coef: 1.8, source: ['em', 0] }
          ],
          [
            { scaling: 'normalFlatDMG', coef: 2.1, source: ['em', 0] },
            { scaling: 'skillFlatDMG', coef: 2.1, source: ['em', 0] }
          ],
          [
            { scaling: 'normalFlatDMG', coef: 2.4, source: ['em', 0] },
            { scaling: 'skillFlatDMG', coef: 2.4, source: ['em', 0] }
          ]
        ]
      }
    ],
    effect:
      'CRIT Rate is increased by {0}. After Normal Attacks deal Elemental DMG, the Foliar Incision effect will be obtained, increasing DMG dealt by Normal Attacks and Elemental Skills by {1} of Elemental Mastery. This effect will disappear after 28 DMG instances or 12s. You can obtain Foliar Incision once every 12s.',
    ref: [
      ['4%', '120%'],
      ['5%', '150%'],
      ['6%', '180%'],
      ['7%', '210%'],
      ['8%', '240%']
    ]
  },
  {
    uid: 11405,
    name: 'lionsroar',
    fullName: "Lion's Roar",
    rating: 4,
    type: 'sword',
    specialized: 'atk%',
    effectname: 'Bane of Fire and Thunder',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'pyro', coef: 0.2 },
            { scaling: 'electro', coef: 0.2 }
          ],
          [
            { scaling: 'pyro', coef: 0.24 },
            { scaling: 'electro', coef: 0.24 }
          ],
          [
            { scaling: 'pyro', coef: 0.28 },
            { scaling: 'electro', coef: 0.28 }
          ],
          [
            { scaling: 'pyro', coef: 0.32 },
            { scaling: 'electro', coef: 0.32 }
          ],
          [
            { scaling: 'pyro', coef: 0.36 },
            { scaling: 'electro', coef: 0.36 }
          ]
        ]
      }
    ],
    effect: 'Increases DMG against opponents affected by Pyro or Electro by {0}.',
    ref: [['20%'], ['24%'], ['28%'], ['32%'], ['36%']]
  },
  {
    uid: 11509,
    name: 'mistsplitterreforged',
    fullName: 'Mistsplitter Reforged',
    rating: 5,
    type: 'sword',
    specialized: 'critdmg',
    effectname: "Mistsplitter's Edge",
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
          [{ scaling: 'dmgIncreaseElemental', coef: [0.08, 0.08, 0.12] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.1, 0.1, 0.15] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.12, 0.12, 0.18] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.14, 0.14, 0.21] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.16, 0.16, 0.24] }]
        ]
      }
    ],
    effect:
      "Gain a {0} Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, the Mistsplitter's Emblem provides a {1} Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of the Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
    ref: [
      ['12%', '8/16/28%'],
      ['15%', '10/20/35%'],
      ['18%', '12/24/42%'],
      ['21%', '14/28/49%'],
      ['24%', '16/32/56%']
    ]
  },
  {
    uid: 11505,
    name: 'primordialjadecutter',
    fullName: 'Primordial Jade Cutter',
    rating: 5,
    type: 'sword',
    specialized: 'critrate',
    effectname: "Protector's Virtue",
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
        actionType: 'passive',
        sourceStats: ['hp'],
        values: [
          [{ scaling: 'atk', coef: 0.012, source: ['hp', 0] }],
          [{ scaling: 'atk', coef: 0.015, source: ['hp', 0] }],
          [{ scaling: 'atk', coef: 0.018, source: ['hp', 0] }],
          [{ scaling: 'atk', coef: 0.021, source: ['hp', 0] }],
          [{ scaling: 'atk', coef: 0.024, source: ['hp', 0] }]
        ]
      }
    ],
    effect:
      "HP increased by {0}. Additionally, provides an ATK Bonus based on {1} of the wielder's Max HP.",
    ref: [
      ['20%', '1.2%'],
      ['25%', '1.5%'],
      ['30%', '1.8%'],
      ['35%', '2.1%'],
      ['40%', '2.4%']
    ]
  },
  {
    uid: 11406,
    name: 'prototyperancour',
    fullName: 'Prototype Rancour',
    rating: 4,
    type: 'sword',
    specialized: 'physical',
    effectname: 'Smashed Stone',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'atk%', coef: [0.04, 0.04, 0.04, 0.04] },
            { scaling: 'def%', coef: [0.04, 0.04, 0.04, 0.04] }
          ],
          [
            { scaling: 'atk%', coef: [0.05, 0.05, 0.05, 0.05] },
            { scaling: 'def%', coef: [0.05, 0.05, 0.05, 0.05] }
          ],
          [
            { scaling: 'atk%', coef: [0.06, 0.06, 0.06, 0.06] },
            { scaling: 'def%', coef: [0.06, 0.06, 0.06, 0.06] }
          ],
          [
            { scaling: 'atk%', coef: [0.07, 0.07, 0.07, 0.07] },
            { scaling: 'def%', coef: [0.07, 0.07, 0.07, 0.07] }
          ],
          [
            { scaling: 'atk%', coef: [0.08, 0.08, 0.08, 0.08] },
            { scaling: 'def%', coef: [0.08, 0.08, 0.08, 0.08] }
          ]
        ]
      }
    ],
    effect:
      'On hit, Normal or Charged Attacks increase ATK and DEF by {0} for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
    ref: [['4%'], ['5%'], ['6%'], ['7%'], ['8%']]
  },
  {
    uid: 11404,
    name: 'royallongsword',
    fullName: 'Royal Longsword',
    rating: 4,
    type: 'sword',
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
    uid: 11403,
    name: 'sacrificialsword',
    fullName: 'Sacrificial Sword',
    rating: 4,
    type: 'sword',
    specialized: 'energy',
    effectname: 'Composed',
    effect:
      'After damaging an opponent with an Elemental Skill, the skill has a {0} chance to end its own CD. Can only occur once every {1}.',
    ref: [
      ['40%', '30s'],
      ['50%', '26s'],
      ['60%', '22s'],
      ['70%', '19s'],
      ['80%', '16s']
    ]
  },
  {
    uid: 11417,
    name: 'sapwoodblade',
    fullName: 'Sapwood Blade',
    rating: 4,
    type: 'sword',
    specialized: 'energy',
    effectname: 'Forest Sanctuary',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'em', coef: 60 }],
          [{ scaling: 'em', coef: 75 }],
          [{ scaling: 'em', coef: 90 }],
          [{ scaling: 'em', coef: 105 }],
          [{ scaling: 'em', coef: 120 }]
        ]
      }
    ],
    effect:
      "After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Consciousness will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character {0} Elemental Mastery for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field. The Leaf of Consciousness' effect cannot stack.",
    ref: [['60'], ['75'], ['90'], ['105'], ['120']]
  },
  {
    uid: 11306,
    name: 'skyridersword',
    fullName: 'Skyrider Sword',
    rating: 3,
    type: 'sword',
    specialized: 'energy',
    effectname: 'Determination',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'atk%', coef: 0.12 }],
          [{ scaling: 'atk%', coef: 0.15 }],
          [{ scaling: 'atk%', coef: 0.18 }],
          [{ scaling: 'atk%', coef: 0.21 }],
          [{ scaling: 'atk%', coef: 0.24 }]
        ]
      }
    ],
    effect:
      'Using an Elemental Burst grants a {0} increase in ATK and Movement SPD for 15s.',
    ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
  },
  {
    uid: 11502,
    name: 'skywardblade',
    fullName: 'Skyward Blade',
    rating: 5,
    type: 'sword',
    specialized: 'energy',
    effectname: 'Sky-Piercing Fang',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'critrate', coef: 0.04 }],
          [{ scaling: 'critrate', coef: 0.05 }],
          [{ scaling: 'critrate', coef: 0.06 }],
          [{ scaling: 'critrate', coef: 0.07 }],
          [{ scaling: 'critrate', coef: 0.08 }]
        ]
      }
    ],
    effect:
      'CRIT Rate increased by {0}. Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by {1}, increases ATK SPD by {2}, and Normal and Charged hits deal additional DMG equal to {3} of atk%. Skypiercing Might lasts for 12s.',
    ref: [
      ['4%', '10%', '10%', '20%'],
      ['5%', '10%', '10%', '25%'],
      ['6%', '10%', '10%', '30%'],
      ['7%', '10%', '10%', '35%'],
      ['8%', '10%', '10%', '40%']
    ]
  },
  {
    uid: 11504,
    name: 'summitshaper',
    fullName: 'Summit Shaper',
    rating: 5,
    type: 'sword',
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
    uid: 11412,
    name: 'swordofdescension',
    fullName: 'Sword of Descension',
    rating: 4,
    type: 'sword',
    specialized: 'atk%',
    effectname: 'Descension',
    effect:
      'Effective only on the following platform: \n"PlayStation Network"\nHitting opponents with Normal and Charged Attacks grants a {0} chance to deal {1} ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by {2}.',
    ref: [['50%', '200%', '66'], [], [], [], []]
  },
  {
    uid: 11410,
    name: 'thealleyflash',
    fullName: 'The Alley Flash',
    rating: 4,
    type: 'sword',
    specialized: 'em',
    effectname: 'Itinerant Hero',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'dmgIncrease', coef: 0.12 }],
          [{ scaling: 'dmgIncrease', coef: 0.15 }],
          [{ scaling: 'dmgIncrease', coef: 0.18 }],
          [{ scaling: 'dmgIncrease', coef: 0.21 }],
          [{ scaling: 'dmgIncrease', coef: 0.24 }]
        ]
      }
    ],
    effect:
      'Increases DMG dealt by the character equipping this weapon by {0}. Taking DMG disables this effect for 5s.',
    ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
  },
  {
    uid: 11409,
    name: 'theblacksword',
    fullName: 'The Black Sword',
    rating: 4,
    type: 'sword',
    specialized: 'critrate',
    effectname: 'Justice',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'normal', coef: 0.2 },
            { scaling: 'charged', coef: 0.2 }
          ],
          [
            { scaling: 'normal', coef: 0.25 },
            { scaling: 'charged', coef: 0.25 }
          ],
          [
            { scaling: 'normal', coef: 0.3 },
            { scaling: 'charged', coef: 0.3 }
          ],
          [
            { scaling: 'normal', coef: 0.35 },
            { scaling: 'charged', coef: 0.35 }
          ],
          [
            { scaling: 'normal', coef: 0.4 },
            { scaling: 'charged', coef: 0.4 }
          ]
        ]
      }
    ],
    effect:
      'Increases DMG dealt by Normal and Charged Attacks by {0}. Additionally, regenerates {1} of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.',
    ref: [
      ['20%', '60%'],
      ['25%', '70%'],
      ['30%', '80%'],
      ['35%', '90%'],
      ['40%', '100%']
    ]
  },
  {
    uid: 11427,
    name: 'thedockhandsassistant',
    fullName: "The Dockhand's Assistant",
    rating: 4,
    type: 'sword',
    specialized: 'hp%',
    effectname: 'Sea Shanty',
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'em', coef: [40, 40, 40] }],
          [{ scaling: 'em', coef: [50, 50, 50] }],
          [{ scaling: 'em', coef: [60, 60, 60] }],
          [{ scaling: 'em', coef: [70, 70, 70] }],
          [{ scaling: 'em', coef: [80, 80, 80] }]
        ]
      }
    ],
    effect:
      "When the wielder is healed or heals others, they will gain a Stoic's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Roused effect will be granted for 10s. For each Symbol consumed, gain {0} Elemental Mastery, and 2s after the effect occurs, {1} Energy per Symbol consumed will be restored for said character. The Roused effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
    ref: [
      ['40', '2'],
      ['50', '2.5'],
      ['60', '3'],
      ['70', '3.5'],
      ['80', '4']
    ]
  },
  {
    uid: 11402,
    name: 'theflute',
    fullName: 'The Flute',
    rating: 4,
    type: 'sword',
    specialized: 'atk%',
    effectname: 'Chord',
    effect:
      'Normal or Charged Attacks grant a Harmonic on hits. Gaining 5 Harmonics triggers the power of music and deals {0} ATK DMG to surrounding opponents. Harmonics last up to 30s, and a maximum of 1 can be gained every 0.5s.',
    ref: [['100%'], ['125%'], ['150%'], ['175%'], ['200%']]
  },
  {
    uid: 11422,
    name: 'toukaboushigure',
    fullName: 'Toukabou Shigure',
    rating: 4,
    type: 'sword',
    specialized: 'em',
    effectname: 'Kaidan: Rainfall Earthbinder',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'dmgIncrease', coef: 0.16 }],
          [{ scaling: 'dmgIncrease', coef: 0.2 }],
          [{ scaling: 'dmgIncrease', coef: 0.24 }],
          [{ scaling: 'dmgIncrease', coef: 0.28 }],
          [{ scaling: 'dmgIncrease', coef: 0.32 }]
        ]
      }
    ],
    effect:
      "After an attack hits opponents, it will inflict an instance of Cursed Parasol upon one of them for 10s. This effect can be triggered once every 15s. If this opponent is defeated during Cursed Parasol's duration, Cursed Parasol's CD will be refreshed immediately. The character wielding this weapon will deal {0} more DMG to the opponent affected by Cursed Parasol.",
    ref: [['16%'], ['20%'], ['24%'], ['28%'], ['32%']]
  },
  {
    uid: 11424,
    name: 'wolffang',
    fullName: 'Wolf-Fang',
    rating: 4,
    type: 'sword',
    specialized: 'critrate',
    effectname: 'Northwind Wolf',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'skill', coef: 0.16 },
            { scaling: 'burst', coef: 0.16 }
          ],
          [
            { scaling: 'skill', coef: 0.2 },
            { scaling: 'burst', coef: 0.2 }
          ],
          [
            { scaling: 'skill', coef: 0.24 },
            { scaling: 'burst', coef: 0.24 }
          ],
          [
            { scaling: 'skill', coef: 0.28 },
            { scaling: 'burst', coef: 0.28 }
          ],
          [
            { scaling: 'skill', coef: 0.32 },
            { scaling: 'burst', coef: 0.32 }
          ]
        ]
      },
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'skillCritRate', coef: [0.02, 0.02, 0.02, 0.02] }],
          [{ scaling: 'skillCritRate', coef: [0.025, 0.025, 0.025, 0.025] }],
          [{ scaling: 'skillCritRate', coef: [0.03, 0.03, 0.03, 0.03] }],
          [{ scaling: 'skillCritRate', coef: [0.035, 0.035, 0.035, 0.035] }],
          [{ scaling: 'skillCritRate', coef: [0.04, 0.04, 0.04, 0.04] }]
        ]
      },
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'burstCritRate', coef: [0.02, 0.02, 0.02, 0.02] }],
          [{ scaling: 'burstCritRate', coef: [0.025, 0.025, 0.025, 0.025] }],
          [{ scaling: 'burstCritRate', coef: [0.03, 0.03, 0.03, 0.03] }],
          [{ scaling: 'burstCritRate', coef: [0.035, 0.035, 0.035, 0.035] }],
          [{ scaling: 'burstCritRate', coef: [0.04, 0.04, 0.04, 0.04] }]
        ]
      }
    ],
    effect:
      'DMG dealt by Elemental Skill and Elemental Burst is increased by {0}. When an Elemental Skill hits an opponent, its CRIT Rate will be increased by {1}. When an Elemental Burst hits an opponent, its CRIT Rate will be increased by {2}. Both of these effects last 10s separately, have 4 max stacks, and can be triggered once every 0.1s.',
    ref: [
      ['16%', '2%', '2%'],
      ['20%', '2.5%', '2.5%'],
      ['24%', '3%', '3%'],
      ['28%', '3.5%', '3.5%'],
      ['32%', '4%', '4%']
    ]
  },
  {
    uid: 11303,
    name: 'travelershandysword',
    fullName: "Traveler's Handy Sword",
    rating: 3,
    type: 'sword',
    specialized: 'def%',
    effectname: 'Journey',
    effect: 'Each Elemental Orb or Particle collected restores {0} HP.',
    ref: [['1%'], ['1.25%'], ['1.5%'], ['1.75%'], ['2%']]
  },
  {
    uid: 11418,
    name: 'xiphosmoonlight',
    fullName: "Xiphos' Moonlight",
    rating: 4,
    type: 'sword',
    specialized: 'em',
    effectname: "Jinni's Whisper",
    action: [
      {
        actionType: 'passive',
        sourceStats: ['em'],
        values: [
          [{ scaling: 'atk', coef: 0.00036, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.00045, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.00054, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.00063, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.00072, source: ['em', 0] }]
        ]
      },
      {
        actionType: 'passive',
        sourceStats: ['em'],
        target: 'nearby',
        values: [
          [{ scaling: 'atk', coef: 0.000108, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.000135, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.000162, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.000189, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.000216, source: ['em', 0] }]
        ]
      }
    ],
    effect:
      'The following effect will trigger every 10s: The equipping character will gain {0} Energy Recharge for each point of Elemental Mastery they possess for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
    ref: [['0.036%'], ['0.045%'], ['0.054%'], ['0.063%'], ['0.072%']]
  }
];
