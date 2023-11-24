import type { SelectedWeapon } from '$lib/types/global';

type Claymores = SelectedWeapon & {
  type: 'claymore';
};

export const claymore: Claymores[] = [
  {
    uid: 12416,
    name: 'akuoumaru',
    fullName: 'Akuoumaru',
    url: 'UI_EquipIcon_Claymore_Maria',
    rating: 4,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'Watatsumi Wavewalker',
    action: [
      {
        actionType: 'passive',
        sourceStats: ['partyBurstCost'],
        values: [
          // So, 0.0012 * partyBurstCost.
          // minimum partyBurstCost is 0
          // maximum burst increase is 0.4%
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
    uid: 12511,
    name: 'beaconofthereedsea',
    fullName: 'Beacon of the Reed Sea',
    url: 'UI_EquipIcon_Claymore_Deshret',
    rating: 5,
    type: 'claymore',
    specialized: 'critrate',
    effectname: 'Desert Watch',
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'atk%', coef: [0.2, 0.2] }],
          [{ scaling: 'atk%', coef: [0.25, 0.25] }],
          [{ scaling: 'atk%', coef: [0.3, 0.3] }],
          [{ scaling: 'atk%', coef: [0.35, 0.35] }],
          [{ scaling: 'atk%', coef: [0.4, 0.4] }]
        ]
      },
      {
        actionType: 'toggle',
        shielded: true,
        values: [
          [{ scaling: 'hp%', coef: 0.32 }],
          [{ scaling: 'hp%', coef: 0.4 }],
          [{ scaling: 'hp%', coef: 0.48 }],
          [{ scaling: 'hp%', coef: 0.56 }],
          [{ scaling: 'hp%', coef: 0.64 }]
        ]
      }
    ],
    effect:
      "After the character's Elemental Skill hits an opponent, their ATK will be increased by {0} for 8s. After the character takes DMG, their ATK will be increased by {1} for 8s. The 2 aforementioned effects can be triggered even when the character is not on the field. Additionally, when not protected by a shield, the character's Max HP will be increased by {2}.",

    ref: [
      ['20%', '20%', '32%'],
      ['25%', '25%', '40%'],
      ['30%', '30%', '48%'],
      ['35%', '35%', '56%'],
      ['40%', '40%', '64%']
    ]
  },
  {
    uid: 12408,
    name: 'blackcliffslasher',
    fullName: 'Blackcliff Slasher',
    url: 'UI_EquipIcon_Claymore_Blackrock',
    rating: 4,
    type: 'claymore',
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
    uid: 12302,
    name: 'bloodtaintedgreatsword',
    fullName: 'Bloodtainted Greatsword',
    url: 'UI_EquipIcon_Claymore_Siegfry',
    rating: 3,
    type: 'claymore',
    specialized: 'em',
    effectname: 'Bane of Fire and Thunder',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'pyro', coef: 0.12 },
            { scaling: 'electro', coef: 0.12 }
          ],
          [
            { scaling: 'pyro', coef: 0.15 },
            { scaling: 'electro', coef: 0.15 }
          ],
          [
            { scaling: 'pyro', coef: 0.18 },
            { scaling: 'electro', coef: 0.18 }
          ],
          [
            { scaling: 'pyro', coef: 0.21 },
            { scaling: 'electro', coef: 0.21 }
          ],
          [
            { scaling: 'pyro', coef: 0.24 },
            { scaling: 'electro', coef: 0.24 }
          ]
        ]
      }
    ],
    effect: 'Increases DMG against opponents affected by Pyro or Electro by {0}.',
    ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
  },
  {
    uid: 12305,
    name: 'debateclub',
    fullName: 'Debate Club',
    url: 'UI_EquipIcon_Claymore_Reasoning',
    rating: 3,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'Blunt Conclusion',
    effect:
      'After using an Elemental Skill, on hit, Normal and Charged Attacks deal additional DMG equal to {0} of ATK in a small AoE. Effect lasts 15s. DMG can only occur once every 3s.',
    ref: [['60%'], ['75%'], ['90%'], ['105%'], ['120%']]
  },
  {
    uid: 12401,
    name: 'favoniusgreatsword',
    fullName: 'Favonius Greatsword',
    url: 'UI_EquipIcon_Claymore_Zephyrus',
    rating: 4,
    type: 'claymore',
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
    uid: 12301,
    name: 'ferrousshadow',
    fullName: 'Ferrous Shadow',
    url: 'UI_EquipIcon_Claymore_Glaive',
    rating: 3,
    type: 'claymore',
    specialized: 'hp%',
    effectname: 'Unbending',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'charged', coef: 0.3 }],
          [{ scaling: 'charged', coef: 0.35 }],
          [{ scaling: 'charged', coef: 0.4 }],
          [{ scaling: 'charged', coef: 0.45 }],
          [{ scaling: 'charged', coef: 0.5 }]
        ]
      }
    ],
    effect:
      'When HP falls below {0}, increases Charged Attack DMG by {1} and Charged Attacks become harder to interrupt.',
    ref: [
      ['70%', '30%'],
      ['75%', '35%'],
      ['80%', '40%'],
      ['85%', '45%'],
      ['90%', '50%']
    ]
  },
  {
    uid: 12417,
    name: 'forestregalia',
    fullName: 'Forest Regalia',
    url: 'UI_EquipIcon_Claymore_Arakalari',
    rating: 4,
    type: 'claymore',
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
    uid: 12414,
    name: 'katsuragikirinagamasa',
    fullName: 'Katsuragikiri Nagamasa',
    url: 'UI_EquipIcon_Claymore_Bakufu',
    rating: 4,
    type: 'claymore',
    specialized: 'energy',
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
    uid: 12410,
    name: 'lithicblade',
    fullName: 'Lithic Blade',
    url: 'UI_EquipIcon_Claymore_Lapis',
    rating: 4,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'Lithic Axiom: Unity',
    action: [
      {
        actionType: 'region',
        regionCondition: 'liyue',
        values: [
          [
            { scaling: 'atk%', coef: [0.07, 0.14, 0.21, 0.28] },
            { scaling: 'critrate', coef: [0.03, 0.06, 0.09, 0.12] }
          ],
          [
            { scaling: 'atk%', coef: [0.08, 0.16, 0.24, 0.32] },
            { scaling: 'critrate', coef: [0.04, 0.08, 0.12, 0.16] }
          ],
          [
            { scaling: 'atk%', coef: [0.09, 0.18, 0.27, 0.36] },
            { scaling: 'critrate', coef: [0.05, 0.1, 0.15, 0.2] }
          ],
          [
            { scaling: 'atk%', coef: [0.1, 0.2, 0.3, 0.4] },
            { scaling: 'critrate', coef: [0.06, 0.12, 0.18, 0.24] }
          ],
          [
            { scaling: 'atk%', coef: [0.11, 0.22, 0.33, 0.44] },
            { scaling: 'critrate', coef: [0.07, 0.14, 0.21, 0.28] }
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
    uid: 12412,
    name: 'luxurioussealord',
    fullName: 'Luxurious Sea-Lord',
    url: 'UI_EquipIcon_Claymore_MillenniaTuna',
    rating: 4,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'Oceanic Victory',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'burst', coef: 0.12 }],
          [{ scaling: 'burst', coef: 0.15 }],
          [{ scaling: 'burst', coef: 0.18 }],
          [{ scaling: 'burst', coef: 0.21 }],
          [{ scaling: 'burst', coef: 0.24 }]
        ]
      }
    ],
    effect:
      'Increases Elemental Burst DMG by {0}. When Elemental Burst hits opponents, there is a 100% chance of summoning a huge onrush of tuna that deals {1} ATK as AoE DMG. This effect can occur once every 15s.',
    ref: [
      ['12%', '100%'],
      ['15%', '125%'],
      ['18%', '150%'],
      ['21%', '175%'],
      ['24%', '200%']
    ]
  },
  {
    uid: 12418,
    name: 'mailedflower',
    fullName: 'Mailed Flower',
    url: 'UI_EquipIcon_Claymore_Fleurfair',
    rating: 4,
    type: 'claymore',
    specialized: 'em',
    effectname: 'Whispers of Wind and Flower',
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
      "Within 8s after the character's Elemental Skill hits an opponent or the character triggers an Elemental Reaction, their ATK and Elemental Mastery will be increased by {0} and {1} respectively.",
    ref: [
      ['12%', '48'],
      ['15%', '60'],
      ['18%', '72'],
      ['21%', '84'],
      ['24%', '96']
    ]
  },
  {
    uid: 12415,
    name: 'makhairaaquamarine',
    fullName: 'Makhaira Aquamarine',
    url: 'UI_EquipIcon_Claymore_Pleroma',
    rating: 4,
    type: 'claymore',
    specialized: 'em',
    effectname: 'Desert Pavilion',
    action: [
      {
        actionType: 'passive',
        // flat bonus atk = 0.24 * EM
        sourceStats: ['em'],
        values: [
          [{ scaling: 'atk', coef: 0.24, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.3, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.36, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.42, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.48, source: ['em', 0] }]
        ]
      },
      {
        actionType: 'passive',
        sourceStats: ['em'],
        // flat bonus atk = 0.072 * EM
        target: 'nearby',
        values: [
          [{ scaling: 'atk', coef: 0.072, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.09, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.108, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.126, source: ['em', 0] }],
          [{ scaling: 'atk', coef: 0.144, source: ['em', 0] }]
        ]
      }
    ],
    effect:
      'The following effect will trigger every 10s: The equipping character will gain {0} of their Elemental Mastery as bonus ATK for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
    ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
  },
  {
    uid: 12427,
    name: 'portablepowersaw',
    fullName: 'Portable Power Saw',
    url: 'UI_EquipIcon_Claymore_Mechanic',
    rating: 4,
    type: 'claymore',
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
    uid: 12406,
    name: 'prototypearchaic',
    fullName: 'Prototype Archaic',
    url: 'UI_EquipIcon_Claymore_Proto',
    rating: 4,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'Crush',
    effect:
      'On hit, Normal or Charged Attacks have a 50% chance to deal an additional {0} ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
    ref: [['240%'], ['300%'], ['360%'], ['420%'], ['480%']]
  },
  {
    uid: 12405,
    name: 'rainslasher',
    fullName: 'Rainslasher',
    url: 'UI_EquipIcon_Claymore_Perdue',
    rating: 4,
    type: 'claymore',
    specialized: 'em',
    effectname: 'Bane of Storm and Tide',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'hydro', coef: 0.2 },
            { scaling: 'electro', coef: 0.2 }
          ],
          [
            { scaling: 'hydro', coef: 0.24 },
            { scaling: 'electro', coef: 0.24 }
          ],
          [
            { scaling: 'hydro', coef: 0.28 },
            { scaling: 'electro', coef: 0.28 }
          ],
          [
            { scaling: 'hydro', coef: 0.32 },
            { scaling: 'electro', coef: 0.32 }
          ],
          [
            { scaling: 'hydro', coef: 0.36 },
            { scaling: 'electro', coef: 0.36 }
          ]
        ]
      }
    ],
    effect: 'Increases DMG against opponents affected by Hydro or Electro by {0}.',
    ref: [['20%'], ['24%'], ['28%'], ['32%'], ['36%']]
  },
  {
    uid: 12510,
    name: 'redhornstonethresher',
    fullName: 'Redhorn Stonethresher',
    url: 'UI_EquipIcon_Claymore_Itadorimaru',
    rating: 5,
    type: 'claymore',
    specialized: 'critdmg',
    effectname: 'Gokadaiou Otogibanashi',
    action: [
      {
        actionType: 'passive',
        sourceStats: ['def'],
        values: [
          [
            { scaling: 'def%', coef: 0.28 },
            // normalFlatDMG = 0.4 * $stats.def
            { scaling: 'normalFlatDMG', coef: 0.4, source: ['def', 0] },
            { scaling: 'chargedFlatDMG', coef: 0.4, source: ['def', 0] }
          ],
          [
            { scaling: 'def%', coef: 0.35 },
            { scaling: 'normalFlatDMG', coef: 0.5, source: ['def', 0] },
            { scaling: 'chargedFlatDMG', coef: 0.5, source: ['def', 0] }
          ],
          [
            { scaling: 'def%', coef: 0.42 },
            { scaling: 'normalFlatDMG', coef: 0.6, source: ['def', 0] },
            { scaling: 'chargedFlatDMG', coef: 0.6, source: ['def', 0] }
          ],
          [
            { scaling: 'def%', coef: 0.49 },
            { scaling: 'normalFlatDMG', coef: 0.7, source: ['def', 0] },
            { scaling: 'chargedFlatDMG', coef: 0.7, source: ['def', 0] }
          ],
          [
            { scaling: 'def%', coef: 0.56 },
            { scaling: 'normalFlatDMG', coef: 0.8, source: ['def', 0] },
            { scaling: 'chargedFlatDMG', coef: 0.8, source: ['def', 0] }
          ]
        ]
      }
    ],
    effect:
      'DEF is increased by {0}. Normal and Charged Attack DMG is increased by {1} of DEF.',
    ref: [
      ['28%', '40%'],
      ['35%', '50%'],
      ['42%', '60%'],
      ['49%', '70%'],
      ['56%', '80%']
    ]
  },
  {
    uid: 12404,
    name: 'royalgreatsword',
    fullName: 'Royal Greatsword',
    url: 'UI_EquipIcon_Claymore_Theocrat',
    rating: 4,
    type: 'claymore',
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
    uid: 12403,
    name: 'sacrificialgreatsword',
    fullName: 'Sacrificial Greatsword',
    url: 'UI_EquipIcon_Claymore_Fossil',
    rating: 4,
    type: 'claymore',
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
    uid: 12409,
    name: 'serpentspine',
    fullName: 'Serpent Spine',
    url: 'UI_EquipIcon_Claymore_Kione',
    rating: 4,
    type: 'claymore',
    specialized: 'critrate',
    effectname: 'Wavesplitter',
    action: [
      {
        actionType: 'stack',
        values: [
          // damage should be increased enemy damage
          [{ scaling: 'dmgIncrease', coef: [0.06, 0.06, 0.06, 0.06, 0.06] }],
          [{ scaling: 'dmgIncrease', coef: [0.07, 0.07, 0.07, 0.07, 0.07] }],
          [{ scaling: 'dmgIncrease', coef: [0.08, 0.08, 0.08, 0.08, 0.08] }],
          [{ scaling: 'dmgIncrease', coef: [0.09, 0.09, 0.09, 0.09, 0.09] }],
          [{ scaling: 'dmgIncrease', coef: [0.1, 0.1, 0.1, 0.1, 0.1] }]
        ]
      }
    ],
    effect:
      'Every 4s a character is on the field, they will deal {0} more DMG and take {1} more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.',
    ref: [
      ['6%', '3%'],
      ['7%', '2.7%'],
      ['8%', '2.4%'],
      ['9%', '2.2%'],
      ['10%', '2%']
    ]
  },
  {
    uid: 12306,
    name: 'skyridergreatsword',
    fullName: 'Skyrider Greatsword',
    url: 'UI_EquipIcon_Claymore_Mitsurugi',
    rating: 3,
    type: 'claymore',
    specialized: 'physical',
    effectname: 'Courage',
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'atk%', coef: [0.06, 0.06, 0.06, 0.06] }],
          [{ scaling: 'atk%', coef: [0.07, 0.07, 0.07, 0.07] }],
          [{ scaling: 'atk%', coef: [0.08, 0.08, 0.08, 0.08] }],
          [{ scaling: 'atk%', coef: [0.09, 0.09, 0.09, 0.09] }],
          [{ scaling: 'atk%', coef: [0.1, 0.1, 0.1, 0.1] }]
        ]
      }
    ],
    effect:
      'On hit, Normal or Charged Attacks increase ATK by {0} for 6s. Max 4 stacks. Can occur once every 0.5s.',
    ref: [['6%'], ['7%'], ['8%'], ['9%'], ['10%']]
  },
  {
    uid: 12501,
    name: 'skywardpride',
    fullName: 'Skyward Pride',
    url: 'UI_EquipIcon_Claymore_Dvalin',
    rating: 5,
    type: 'claymore',
    specialized: 'energy',
    effectname: 'Sky-ripping Dragon Spine',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'dmgIncrease', coef: 0.08 }],
          [{ scaling: 'dmgIncrease', coef: 0.1 }],
          [{ scaling: 'dmgIncrease', coef: 0.12 }],
          [{ scaling: 'dmgIncrease', coef: 0.14 }],
          [{ scaling: 'dmgIncrease', coef: 0.16 }]
        ]
      }
    ],
    effect:
      'Increases all DMG by {0}. After using an Elemental Burst, a vacuum blade that does {1} of ATK as DMG to opponents along its path will be created when Normal or Charged Attacks hit. Lasts for 20s or 8 vacuum blades.',
    ref: [
      ['8%', '80%'],
      ['10%', '100%'],
      ['12%', '120%'],
      ['14%', '140%'],
      ['16%', '160%']
    ]
  },
  {
    uid: 12411,
    name: 'snowtombedstarsilver',
    fullName: 'Snow-Tombed Starsilver',
    url: 'UI_EquipIcon_Claymore_Dragonfell',
    rating: 4,
    type: 'claymore',
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
    uid: 12503,
    name: 'songofbrokenpines',
    fullName: 'Song of Broken Pines',
    url: 'UI_EquipIcon_Claymore_Widsith',
    rating: 5,
    type: 'claymore',
    specialized: 'physical',
    effectname: "Rebel's Banner-Hymn",
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'atk%', coef: 0.16 }],
          [{ scaling: 'atk%', coef: 0.2 }],
          [{ scaling: 'atk%', coef: 0.24 }],
          [{ scaling: 'atk%', coef: 0.28 }],
          [{ scaling: 'atk%', coef: 0.32 }]
        ]
      },
      {
        actionType: 'toggle',
        target: 'party',
        values: [
          [
            { scaling: 'atk%', coef: 0.2 },
            { scaling: 'normalATKSpd', coef: 0.12 }
          ],
          [
            { scaling: 'atk%', coef: 0.25 },
            { scaling: 'normalATKSpd', coef: 0.15 }
          ],
          [
            { scaling: 'atk%', coef: 0.3 },
            { scaling: 'normalATKSpd', coef: 0.18 }
          ],
          [
            { scaling: 'atk%', coef: 0.35 },
            { scaling: 'normalATKSpd', coef: 0.21 }
          ],
          [
            { scaling: 'atk%', coef: 0.4 },
            { scaling: 'normalATKSpd', coef: 0.24 }
          ]
        ]
      }
    ],
    effect:
      'A part of the "Millennial Movement" that wanders amidst the winds. Increases ATK by {0}, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess 4 Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Banner-Hymn" effect for 12s. "Millennial Movement: Banner-Hymn" increases Normal ATK SPD by {1} and increases ATK by {2}. Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
    ref: [
      ['16%', '12%', '20%'],
      ['20%', '15%', '25%'],
      ['24%', '18%', '30%'],
      ['28%', '21%', '35%'],
      ['32%', '24%', '40%']
    ]
  },
  {
    uid: 12424,
    name: 'talkingstick',
    fullName: 'Talking Stick',
    url: 'UI_EquipIcon_Claymore_BeastTamer',
    rating: 4,
    type: 'claymore',
    specialized: 'critrate',
    effectname: '"The Silver Tongue"',
    action: [
      {
        actionType: 'select',
        values: [
          [
            { scaling: 'atk%', coef: 0.16 },
            { scaling: 'dmgIncreaseElemental', coef: 0.12 }
          ],
          [
            { scaling: 'atk%', coef: 0.2 },
            { scaling: 'dmgIncreaseElemental', coef: 0.15 }
          ],
          [
            { scaling: 'atk%', coef: 0.24 },
            { scaling: 'dmgIncreaseElemental', coef: 0.18 }
          ],
          [
            { scaling: 'atk%', coef: 0.28 },
            { scaling: 'dmgIncreaseElemental', coef: 0.21 }
          ],
          [
            { scaling: 'atk%', coef: 0.32 },
            { scaling: 'dmgIncreaseElemental', coef: 0.24 }
          ]
        ]
      }
    ],
    effect:
      'ATK will be increased by {0} for 15s after being affected by Pyro. This effect can be triggered once every 12s. All Elemental DMG Bonus will be increased by {1} for 15s after being affected by Hydro, Cryo, Electro, or Dendro. This effect can be triggered once every 12s.',
    ref: [
      ['16%', '12%'],
      ['20%', '15%'],
      ['24%', '18%'],
      ['28%', '21%'],
      ['32%', '24%']
    ]
  },
  {
    uid: 12402,
    name: 'thebell',
    fullName: 'The Bell',
    url: 'UI_EquipIcon_Claymore_Troupe',
    rating: 4,
    type: 'claymore',
    specialized: 'hp%',
    effectname: 'Rebellious Guardian',
    action: [
      {
        actionType: 'passive',
        shielded: true,
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
      'Taking DMG generates a shield which absorbs DMG up to {0} of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every {1}. While protected by a shield, the character gains {2} increased DMG.',
    ref: [
      ['20%', '45s', '12%'],
      ['23%', '45s', '15%'],
      ['26%', '45s', '18%'],
      ['29%', '45s', '21%'],
      ['32%', '45s', '24%']
    ]
  },
  {
    uid: 12504,
    name: 'theunforged',
    fullName: 'The Unforged',
    url: 'UI_EquipIcon_Claymore_Kunwu',
    rating: 5,
    type: 'claymore',
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
    uid: 12425,
    name: 'tidalshadow',
    fullName: 'Tidal Shadow',
    url: 'UI_EquipIcon_Claymore_Vorpal',
    rating: 4,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'White Cruising Wave',
    action: [
      {
        actionType: 'toggle',
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
      'After the wielder is healed, ATK will be increased by {0} for 8s. This can be triggered even when the character is not on the field.',
    ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
  },
  {
    uid: 12407,
    name: 'whiteblind',
    fullName: 'Whiteblind',
    url: 'UI_EquipIcon_Claymore_Exotic',
    rating: 4,
    type: 'claymore',
    specialized: 'def%',
    effectname: 'Infusion Blade',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'atk%', coef: [0.06, 0.06, 0.06, 0.06] },
            { scaling: 'def%', coef: [0.06, 0.06, 0.06, 0.06] }
          ],
          [
            { scaling: 'atk%', coef: [0.075, 0.075, 0.075, 0.075] },
            { scaling: 'def%', coef: [0.075, 0.075, 0.075, 0.075] }
          ],
          [
            { scaling: 'atk%', coef: [0.09, 0.09, 0.09, 0.09] },
            { scaling: 'def%', coef: [0.09, 0.09, 0.09, 0.09] }
          ],
          [
            { scaling: 'atk%', coef: [0.105, 0.105, 0.105, 0.105] },
            { scaling: 'def%', coef: [0.105, 0.105, 0.105, 0.105] }
          ],
          [
            { scaling: 'atk%', coef: [0.12, 0.12, 0.12, 0.12] },
            { scaling: 'def%', coef: [0.12, 0.12, 0.12, 0.12] }
          ]
        ]
      }
    ],
    effect:
      'On hit, Normal or Charged Attacks increase ATK and DEF by {0} for 6s. Max 4 stacks. This effect can only occur once every 0.5s.',
    ref: [['6%'], ['7.5%'], ['9%'], ['10.5%'], ['12%']]
  },
  {
    uid: 12303,
    name: 'whiteirongreatsword',
    fullName: 'White Iron Greatsword',
    url: 'UI_EquipIcon_Claymore_Tin',
    rating: 3,
    type: 'claymore',
    specialized: 'def%',
    effectname: 'Cull the Weak',
    effect: 'Defeating an opponent restores {0} HP.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  {
    uid: 12502,
    name: 'wolfsgravestone',
    fullName: "Wolf's Gravestone",
    url: 'UI_EquipIcon_Claymore_Wolfmound',
    rating: 5,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'Wolfish Tracker',
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
      },
      {
        actionType: 'toggle',
        target: 'party',
        values: [
          [{ scaling: 'atk%', coef: 0.4 }],
          [{ scaling: 'atk%', coef: 0.5 }],
          [{ scaling: 'atk%', coef: 0.6 }],
          [{ scaling: 'atk%', coef: 0.7 }],
          [{ scaling: 'atk%', coef: 0.8 }]
        ]
      }
    ],
    effect:
      "Increases ATK by {0}. On hit, attacks against opponents with less than 30% HP increase all party members' ATK by {1} for 12s. Can only occur once every 30s.",
    ref: [
      ['20%', '40%'],
      ['25%', '50%'],
      ['30%', '60%'],
      ['35%', '70%'],
      ['40%', '80%']
    ]
  }
];
