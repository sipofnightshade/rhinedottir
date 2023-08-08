import type { SelectedWeapon } from '$lib/types/global';

type Data = {
  claymore: SelectedWeapon[];
  sword: SelectedWeapon[];
  bow: SelectedWeapon[];
  catalyst: SelectedWeapon[];
  polearm: SelectedWeapon[];
};

export const WeaponData: Data = {
  claymore: [
    {
      name: 'akuoumaru',
      fullName: 'Akuoumaru',
      rating: 4,
      type: 'claymore',
      specialized: 'atk%',
      effectname: 'Watatsumi Wavewalker',
      action: [
        {
          actionType: 'passive',
          values: [
            // So, 0.0012 * partyBurstCost.
            // minimum partyBurstCost is 0
            // maximum burst increase is 0.4%
            [{ scaling: 'burst', coef: 0.0012, source: ['partyBurstCost', 0, 0.4] }],
            [{ scaling: 'burst', coef: 0.0015, source: ['partyBurstCost', 0, 0.5] }],
            [{ scaling: 'burst', coef: 0.0018, source: ['partyBurstCost', 0, 0.6] }],
            [{ scaling: 'burst', coef: 0.0021, source: ['partyBurstCost', 0, 0.7] }],
            [{ scaling: 'burst', coef: 0.0024, source: ['partyBurstCost', 0, 0.8] }]
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
      name: 'beaconofthereedsea',
      fullName: 'Beacon of the Reed Sea',
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
          actionType: 'passive',
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
      name: 'blackcliffslasher',
      fullName: 'Blackcliff Slasher',
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
      name: 'bloodtaintedgreatsword',
      fullName: 'Bloodtainted Greatsword',
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
      name: 'debateclub',
      fullName: 'Debate Club',
      rating: 3,
      type: 'claymore',
      specialized: 'atk%',
      effectname: 'Blunt Conclusion',
      effect:
        'After using an Elemental Skill, on hit, Normal and Charged Attacks deal additional DMG equal to {0} of ATK in a small AoE. Effect lasts 15s. DMG can only occur once every 3s.',
      ref: [['60%'], ['75%'], ['90%'], ['105%'], ['120%']]
    },
    {
      name: 'favoniusgreatsword',
      fullName: 'Favonius Greatsword',
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
      name: 'ferrousshadow',
      fullName: 'Ferrous Shadow',
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
      name: 'forestregalia',
      fullName: 'Forest Regalia',
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
      name: 'katsuragikirinagamasa',
      fullName: 'Katsuragikiri Nagamasa',
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
      name: 'lithicblade',
      fullName: 'Lithic Blade',
      rating: 4,
      type: 'claymore',
      specialized: 'atk%',
      effectname: 'Lithic Axiom: Unity',
      action: [
        {
          actionType: 'region',
          regions: ['Liyue'],
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
        'For every character in the party who hails from Liyue, the character who equips this weapon gains a {0} ATK increase and a {1} CRIT Rate increase. This effect stacks up to 4 times.',
      ref: [
        ['7%', '3%'],
        ['8%', '4%'],
        ['9%', '5%'],
        ['10%', '6%'],
        ['11%', '7%']
      ]
    },
    {
      name: 'luxurioussealord',
      fullName: 'Luxurious Sea-Lord',
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
      name: 'mailedflower',
      fullName: 'Mailed Flower',
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
      name: 'makhairaaquamarine',
      fullName: 'Makhaira Aquamarine',
      rating: 4,
      type: 'claymore',
      specialized: 'em',
      effectname: 'Desert Pavilion',
      action: [
        {
          actionType: 'passive',
          // flat bonus atk = 0.24 * EM
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
          // flat bonus atk = 0.072 * EM
          target: 'party',
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
      name: 'prototypearchaic',
      fullName: 'Prototype Archaic',
      rating: 4,
      type: 'claymore',
      specialized: 'atk%',
      effectname: 'Crush',
      effect:
        'On hit, Normal or Charged Attacks have a 50% chance to deal an additional {0} ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
      ref: [['240%'], ['300%'], ['360%'], ['420%'], ['480%']]
    },
    {
      name: 'rainslasher',
      fullName: 'Rainslasher',
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
      name: 'redhornstonethresher',
      fullName: 'Redhorn Stonethresher',
      rating: 5,
      type: 'claymore',
      specialized: 'critdmg',
      effectname: 'Gokadaiou Otogibanashi',
      action: [
        {
          actionType: 'passive',
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
      name: 'royalgreatsword',
      fullName: 'Royal Greatsword',
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
      name: 'sacrificialgreatsword',
      fullName: 'Sacrificial Greatsword',
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
      name: 'serpentspine',
      fullName: 'Serpent Spine',
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
      name: 'skyridergreatsword',
      fullName: 'Skyrider Greatsword',
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
      name: 'skywardpride',
      fullName: 'Skyward Pride',
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
      name: 'snowtombedstarsilver',
      fullName: 'Snow-Tombed Starsilver',
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
      name: 'songofbrokenpines',
      fullName: 'Song of Broken Pines',
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
      name: 'thebell',
      fullName: 'The Bell',
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
      name: 'theunforged',
      fullName: 'The Unforged',
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
      name: 'whiteblind',
      fullName: 'Whiteblind',
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
      name: 'whiteirongreatsword',
      fullName: 'White Iron Greatsword',
      rating: 3,
      type: 'claymore',
      specialized: 'def%',
      effectname: 'Cull the Weak',
      effect: 'Defeating an opponent restores {0} HP.',
      ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
    },
    {
      name: 'wolfsgravestone',
      fullName: "Wolf's Gravestone",
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
  ],
  bow: [
    {
      name: 'alleyhunter',
      fullName: 'Alley Hunter',
      rating: 4,
      type: 'bow',
      specialized: 'atk%',
      effectname: 'Oppidan Ambush',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'While the character equipped with this weapon is in the party but not on the field, their DMG increases by {0} every second up to a max of {1}. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by {2} per second until it reaches 0%.',
      ref: [
        ['2%', '20%', '4%'],
        ['2.5%', '25%', '5%'],
        ['3%', '30%', '6%'],
        ['3.5%', '35%', '7%'],
        ['4%', '40%', '8%']
      ]
    },
    {
      name: 'amosbow',
      fullName: "Amos' Bow",
      rating: 5,
      type: 'bow',
      specialized: 'atk%',
      effectname: 'Strong-Willed',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases Normal and Charged Attack DMG by {0}. After a Normal or Charged Attack is fired, DMG dealt increases by a further {1} every 0.1s the arrow is in the air for up to 5 times.',
      ref: [
        ['12%', '8%'],
        ['15%', '10%'],
        ['18%', '12%'],
        ['21%', '14%'],
        ['24%', '16%']
      ]
    },
    {
      name: 'aquasimulacra',
      fullName: 'Aqua Simulacra',
      rating: 5,
      type: 'bow',
      specialized: 'critdmg',
      effectname: 'The Cleansing Form',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'HP is increased by {0}. When there are opponents nearby, the DMG dealt by the wielder of this weapon is increased by {1}. This will take effect whether the character is on-field or not.',
      ref: [
        ['16%', '20%'],
        ['20%', '25%'],
        ['24%', '30%'],
        ['28%', '35%'],
        ['32%', '40%']
      ]
    },
    {
      name: 'blackcliffwarbow',
      fullName: 'Blackcliff Warbow',
      rating: 4,
      type: 'bow',
      specialized: 'critdmg',
      effectname: 'Press the Advantage',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After defeating an enemy, ATK is increased by {0} for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
      name: 'compoundbow',
      fullName: 'Compound Bow',
      rating: 4,
      type: 'bow',
      specialized: 'physical',
      effectname: 'Infusion Arrow',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Normal Attack and Charged Attack hits increase ATK by {0} and Normal ATK SPD by {1} for 6s. Max 4 stacks. Can only occur once every 0.3s.',
      ref: [
        ['4%', '1.2%'],
        ['5%', '1.5%'],
        ['6%', '1.8%'],
        ['7%', '2.1%'],
        ['8%', '2.4%']
      ]
    },
    {
      name: 'elegyfortheend',
      fullName: 'Elegy for the End',
      rating: 5,
      type: 'bow',
      specialized: 'energy',
      effectname: 'The Parting Refrain',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'A part of the "Millennial Movement" that wanders amidst the winds. Increases Elemental Mastery by {0}. When the Elemental Skills or Elemental Bursts of the character wielding this weapon hit opponents, that character gains a Sigil of Remembrance. This effect can be triggered once every 0.2s and can be triggered even if said character is not on the field. When you possess 4 Sigils of Remembrance, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Farewell Song" effect for 12s. "Millennial Movement: Farewell Song" increases Elemental Mastery by {1} and increases ATK by {2}. Once this effect is triggered, you will not gain Sigils of Remembrance for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
      ref: [
        ['60', '100', '20%'],
        ['75', '125', '25%'],
        ['90', '150', '30%'],
        ['105', '175', '35%'],
        ['120', '200', '40%']
      ]
    },
    {
      name: 'endoftheline',
      fullName: 'End of the Line',
      rating: 4,
      type: 'bow',
      specialized: 'energy',
      effectname: 'Net Snapper',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Triggers the Flowrider effect after using an Elemental Skill, dealing {0} ATK as AoE DMG upon hitting an opponent with an attack. Flowrider will be removed after 15s or after causing 3 instances of AoE DMG. Only 1 instance of AoE DMG can be caused every 2s in this way. Flowrider can be triggered once every 12s.',
      ref: [['80%'], ['100%'], ['120%'], ['140%'], ['160%']]
    },
    {
      name: 'fadingtwilight',
      fullName: 'Fading Twilight',
      rating: 4,
      type: 'bow',
      specialized: 'energy',
      effectname: 'Radiance of the Deeps',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Has three states, Evengleam, Afterglow, and Dawnblaze, which increase DMG dealt by {0} respectively. When attacks hit opponents, this weapon will switch to the next state. This weapon can change states once every 7s. The character equipping this weapon can still trigger the state switch while not on the field.',
      ref: [
        ['6%/10%/14%'],
        ['7.5%/12.5%/17.5%'],
        ['9%/15%/21%'],
        ['10.5%/17.5%/24.5%'],
        ['12%/20%/28%']
      ]
    },
    {
      name: 'favoniuswarbow',
      fullName: 'Favonius Warbow',
      rating: 4,
      type: 'bow',
      specialized: 'energy',
      effectname: 'Windfall',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }]
          ]
        }
      ],
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
      name: 'hamayumi',
      fullName: 'Hamayumi',
      rating: 4,
      type: 'bow',
      specialized: 'atk%',
      effectname: 'Full Draw',
      action: [
        {
          actionType: 'passive',
          values: [
            [
              { scaling: 'normal', coef: 0.16 },
              { scaling: 'charged', coef: 0.12 }
            ],
            [
              { scaling: 'normal', coef: 0.2 },
              { scaling: 'charged', coef: 0.15 }
            ],
            [
              { scaling: 'normal', coef: 0.24 },
              { scaling: 'charged', coef: 0.18 }
            ],
            [
              { scaling: 'normal', coef: 0.28 },
              { scaling: 'charged', coef: 0.21 }
            ],
            [
              { scaling: 'normal', coef: 0.32 },
              { scaling: 'charged', coef: 0.24 }
            ]
          ]
        },
        {
          actionType: 'toggle',
          values: [
            [
              { scaling: 'normal', coef: 0.16 },
              { scaling: 'charged', coef: 0.12 }
            ],
            [
              { scaling: 'normal', coef: 0.2 },
              { scaling: 'charged', coef: 0.15 }
            ],
            [
              { scaling: 'normal', coef: 0.24 },
              { scaling: 'charged', coef: 0.18 }
            ],
            [
              { scaling: 'normal', coef: 0.28 },
              { scaling: 'charged', coef: 0.21 }
            ],
            [
              { scaling: 'normal', coef: 0.32 },
              { scaling: 'charged', coef: 0.24 }
            ]
          ]
        }
      ],
      effect:
        "Increases Normal Attack DMG by {0} and Charged Attack DMG by {1}. When the equipping character's Energy reaches 100%, this effect is increased by 100%.",
      ref: [
        ['16%', '12%'],
        ['20%', '15%'],
        ['24%', '18%'],
        ['28%', '21%'],
        ['32%', '24%']
      ]
    },
    {
      name: 'hunterspath',
      fullName: "Hunter's Path",
      rating: 5,
      type: 'bow',
      specialized: 'critrate',
      effectname: 'At the End of the Beast-Paths',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Gain {0} All Elemental DMG Bonus. Obtain the Tireless Hunt effect after hitting an opponent with a Charged Attack. This effect increases Charged Attack DMG by {1} of Elemental Mastery. This effect will be removed after 12 Charged Attacks or 10s. Only 1 instance of Tireless Hunt can be gained every 12s.',
      ref: [
        ['12%', '160%'],
        ['15%', '200%'],
        ['18%', '240%'],
        ['21%', '280%'],
        ['24%', '320%']
      ]
    },
    {
      name: 'ibispiercer',
      fullName: 'Ibis Piercer',
      rating: 4,
      type: 'bow',
      specialized: 'atk%',
      effectname: "Secret Wisdom's Favor",
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        "The character's Elemental Mastery will increase by {0} within 6s after Charged Attacks hit opponents. Max 2 stacks. This effect can be triggered once every 0.5s.",
      ref: [['40'], ['50'], ['60'], ['70'], ['80']]
    },
    {
      name: 'kingssquire',
      fullName: "King's Squire",
      rating: 4,
      type: 'bow',
      specialized: 'atk%',
      effectname: "Labyrinth Lord's Instruction",
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Obtain the Teachings of the Forest effect when unleashing Elemental Skills and Bursts, increasing Elemental Mastery by {0} for 12s. This effect will be removed when switching characters. When the Teachings of the Forest effect ends or is removed, it will deal {1} of ATK as DMG to 1 nearby opponent. The Teachings of the Forest effect can be triggered once every 20s.',
      ref: [
        ['60', '100%'],
        ['80', '120%'],
        ['100', '140%'],
        ['120', '160%'],
        ['140', '180%']
      ]
    },
    {
      name: 'messenger',
      fullName: 'Messenger',
      rating: 3,
      type: 'bow',
      specialized: 'critdmg',
      effectname: "Archer's Message",
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Charged Attack hits on weak points deal an additional {0} ATK DMG as CRIT DMG. Can only occur once every 10s.',
      ref: [['100%'], ['125%'], ['150%'], ['175%'], ['200%']]
    },
    {
      name: 'mitternachtswaltz',
      fullName: 'Mitternachts Waltz',
      rating: 4,
      type: 'bow',
      specialized: 'physical',
      effectname: 'Evernight Duet',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Normal Attack hits on opponents increase Elemental Skill DMG by {0} for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by {1} for 5s.',
      ref: [
        ['20%', '20%'],
        ['25%', '25%'],
        ['30%', '30%'],
        ['35%', '35%'],
        ['40%', '40%']
      ]
    },
    {
      name: 'mouunsmoon',
      fullName: "Mouun's Moon",
      rating: 4,
      type: 'bow',
      specialized: 'atk%',
      effectname: 'Watatsumi Wavewalker',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'polarstar',
      fullName: 'Polar Star',
      rating: 5,
      type: 'bow',
      specialized: 'critrate',
      effectname: "Daylight's Augury",
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Elemental Skill and Elemental Burst DMG increased by {0}. After a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst hits an opponent, 1 stack of Ashen Nightstar will be gained for 12s. When 1/2/3/4 stacks of Ashen Nightstar are present, ATK is increased by {1}. The stack of Ashen Nightstar created by the Normal Attack, Charged Attack, Elemental Skill or Elemental Burst will be counted independently of the others.',
      ref: [
        ['12%', '10/20/30/48%'],
        ['15%', '12.5/25/37.5/60%'],
        ['18%', '15/30/45/72%'],
        ['21%', '17.5/35/52.5/84%'],
        ['24%', '20/40/60/96%']
      ]
    },
    {
      name: 'predator',
      fullName: 'Predator',
      rating: 4,
      type: 'bow',
      specialized: 'atk%',
      effectname: 'Strong Strike',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Effective only on the following platform: \n"PlayStation Network"\nDealing Cryo DMG to opponents increases this character\'s Normal and Charged Attack DMG by 10% for 6s. This effect can have a maximum of 2 stacks. Additionally, when Aloy equips Predator, ATK is increased by 66.',
      ref: [[], [], [], [], []]
    },
    {
      name: 'prototypecrescent',
      fullName: 'Prototype Crescent',
      rating: 4,
      type: 'bow',
      specialized: 'atk%',
      effectname: 'Unreturning',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by {0} for 10s.',
      ref: [['36%'], ['45%'], ['54%'], ['63%'], ['72%']]
    },
    {
      name: 'ravenbow',
      fullName: 'Raven Bow',
      rating: 3,
      type: 'bow',
      specialized: 'em',
      effectname: 'Bane of Flame and Water',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases DMG against opponents affected by Hydro or Pyro by {0}.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
      name: 'recurvebow',
      fullName: 'Recurve Bow',
      rating: 3,
      type: 'bow',
      specialized: 'hp%',
      effectname: 'Cull the Weak',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Defeating an opponent restores {0} HP.',
      ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
    },
    {
      name: 'royalbow',
      fullName: 'Royal Bow',
      rating: 4,
      type: 'bow',
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
      name: 'rust',
      fullName: 'Rust',
      rating: 4,
      type: 'bow',
      specialized: 'atk%',
      effectname: 'Rapid Firing',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases Normal Attack DMG by {0} but decreases Charged Attack DMG by 10%.',
      ref: [['40%'], ['50%'], ['60%'], ['70%'], ['80%']]
    },
    {
      name: 'sacrificialbow',
      fullName: 'Sacrificial Bow',
      rating: 4,
      type: 'bow',
      specialized: 'energy',
      effectname: 'Composed',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
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
      name: 'sharpshootersoath',
      fullName: "Sharpshooter's Oath",
      rating: 3,
      type: 'bow',
      specialized: 'critdmg',
      effectname: 'Precise',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases DMG against weak spots by {0}.',
      ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
    },
    {
      name: 'skywardharp',
      fullName: 'Skyward Harp',
      rating: 5,
      type: 'bow',
      specialized: 'critrate',
      effectname: 'Echoing Ballad',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases CRIT DMG by {0}. Hits have a {1} chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every {2}.',
      ref: [
        ['20%', '60%', '4s'],
        ['25%', '70%', '3.5s'],
        ['30%', '80%', '3s'],
        ['35%', '90%', '2.5s'],
        ['40%', '100%', '2s']
      ]
    },
    {
      name: 'slingshot',
      fullName: 'Slingshot',
      rating: 3,
      type: 'bow',
      specialized: 'critrate',
      effectname: 'Slingshot',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by {0}. Otherwise, decreases DMG by 10%.',
      ref: [['36%'], ['42%'], ['48%'], ['54%'], ['60%']]
    },
    {
      name: 'thestringless',
      fullName: 'The Stringless',
      rating: 4,
      type: 'bow',
      specialized: 'em',
      effectname: 'Arrowless Song',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases Elemental Skill and Elemental Burst DMG by {0}.',
      ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
    },
    {
      name: 'theviridescenthunt',
      fullName: 'The Viridescent Hunt',
      rating: 4,
      type: 'bow',
      specialized: 'critrate',
      effectname: 'Verdant Wind',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Upon hit, Normal and Charged Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing {0} of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every {1}.',
      ref: [
        ['40%', '14s'],
        ['50%', '13s'],
        ['60%', '12s'],
        ['70%', '11s'],
        ['80%', '10s']
      ]
    },
    {
      name: 'thunderingpulse',
      fullName: 'Thundering Pulse',
      rating: 5,
      type: 'bow',
      specialized: 'critdmg',
      effectname: 'Rule by Thunder',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        "Increases ATK by {0} and grants the might of the Thunder Emblem. At stack levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by {1}. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG (stack lasts 5s), casting Elemental Skill (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
      ref: [
        ['20%', '12/24/40%'],
        ['25%', '15/30/50%'],
        ['30%', '18/36/60%'],
        ['35%', '21/42/70%'],
        ['40%', '24/48/80%']
      ]
    },
    {
      name: 'windblumeode',
      fullName: 'Windblume Ode',
      rating: 4,
      type: 'bow',
      specialized: 'em',
      effectname: 'Windblume Wish',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by {0} for 6s.',
      ref: [['16%'], ['20%'], ['24%'], ['28%'], ['32%']]
    }
  ],
  sword: [
    {
      name: 'amenomakageuchi',
      fullName: 'Amenoma Kageuchi',
      rating: 4,
      type: 'sword',
      specialized: 'atk%',
      effectname: 'Iwakura Succession',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates {0} Energy for each seed consumed.',
      ref: [['6'], ['7.5'], ['9'], ['10.5'], ['12']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'blackclifflongsword',
      fullName: 'Blackcliff Longsword',
      rating: 4,
      type: 'sword',
      specialized: 'critdmg',
      effectname: 'Press the Advantage',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After defeating an opponent, ATK is increased by {0} for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
      name: 'cinnabarspindle',
      fullName: 'Cinnabar Spindle',
      rating: 4,
      type: 'sword',
      specialized: 'def%',
      effectname: 'Spotless Heart',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Elemental Skill DMG is increased by {0} of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.',
      ref: [['40%'], ['50%'], ['60%'], ['70%'], ['80%']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases DMG against opponents affected by Hydro or Cryo by {0}.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
      name: 'darkironsword',
      fullName: 'Dark Iron Sword',
      rating: 3,
      type: 'sword',
      specialized: 'em',
      effectname: 'Overloaded',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Upon causing an Overloaded, Superconduct, Electro-Charged, Quicken, Aggravate, Hyperbloom, or Electro-infused Swirl reaction, ATK is increased by {0} for 12s.',
      ref: [['20%'], ['25%'], ['30%'], ['35%'], ['40%']]
    },
    {
      name: 'favoniussword',
      fullName: 'Favonius Sword',
      rating: 4,
      type: 'sword',
      specialized: 'energy',
      effectname: 'Windfall',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }]
          ]
        }
      ],
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases Elemental Skill DMG by {0} and Elemental Skill CRIT Rate by {1}.',
      ref: [
        ['16%', '6%'],
        ['20%', '7.5%'],
        ['24%', '9%'],
        ['28%', '10.5%'],
        ['32%', '12%']
      ]
    },
    {
      name: 'filletblade',
      fullName: 'Fillet Blade',
      rating: 3,
      type: 'sword',
      specialized: 'atk%',
      effectname: 'Gash',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'harbingerofdawn',
      fullName: 'Harbinger of Dawn',
      rating: 3,
      type: 'sword',
      specialized: 'critdmg',
      effectname: 'Vigorous',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'When HP is above 90%, increases CRIT Rate by {0}.',
      ref: [['14%'], ['17.5%'], ['21%'], ['24.5%'], ['28%']]
    },
    {
      name: 'ironsting',
      fullName: 'Iron Sting',
      rating: 4,
      type: 'sword',
      specialized: 'em',
      effectname: 'Infusion Stinger',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Dealing Elemental DMG increases all DMG by {0} for 6s. Max 2 stacks. Can occur once every 1s.',
      ref: [['6%'], ['7.5%'], ['9%'], ['10.5%'], ['12%']]
    },
    {
      name: 'kagotsurubeisshin',
      fullName: 'Kagotsurube Isshin',
      rating: 4,
      type: 'sword',
      specialized: 'atk%',
      effectname: 'Isshin Art Clarity',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'When a Normal, Charged, or Plunging Attack hits an opponent, it will whip up a Hewing Gale, dealing AoE DMG equal to 180% of ATK and increasing ATK by 15% for 8s. This effect can be triggered once every 8s.',
      ref: [[], [], [], [], []]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases DMG against opponents affected by Pyro or Electro by {0}.',
      ref: [['20%'], ['24%'], ['28%'], ['32%'], ['36%']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'prototyperancour',
      fullName: 'Prototype Rancour',
      rating: 4,
      type: 'sword',
      specialized: 'physical',
      effectname: 'Smashed Stone',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'On hit, Normal or Charged Attacks increase ATK and DEF by {0} for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
      ref: [['4%'], ['5%'], ['6%'], ['7%'], ['8%']]
    },
    {
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
      name: 'sacrificialsword',
      fullName: 'Sacrificial Sword',
      rating: 4,
      type: 'sword',
      specialized: 'energy',
      effectname: 'Composed',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
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
      name: 'sapwoodblade',
      fullName: 'Sapwood Blade',
      rating: 4,
      type: 'sword',
      specialized: 'energy',
      effectname: 'Forest Sanctuary',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        "After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Consciousness will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character {0} Elemental Mastery for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field. The Leaf of Consciousness' effect cannot stack.",
      ref: [['60'], ['75'], ['90'], ['105'], ['120']]
    },
    {
      name: 'skyridersword',
      fullName: 'Skyrider Sword',
      rating: 3,
      type: 'sword',
      specialized: 'energy',
      effectname: 'Determination',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Using an Elemental Burst grants a {0} increase in ATK and Movement SPD for 15s.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'swordofdescension',
      fullName: 'Sword of Descension',
      rating: 4,
      type: 'sword',
      specialized: 'atk%',
      effectname: 'Descension',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Effective only on the following platform: \n"PlayStation Network"\nHitting opponents with Normal and Charged Attacks grants a {0} chance to deal {1} ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by {2}.',
      ref: [['50%', '200%', '66'], [], [], [], []]
    },
    {
      name: 'thealleyflash',
      fullName: 'The Alley Flash',
      rating: 4,
      type: 'sword',
      specialized: 'em',
      effectname: 'Itinerant Hero',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases DMG dealt by the character equipping this weapon by {0}. Taking DMG disables this effect for 5s.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'theflute',
      fullName: 'The Flute',
      rating: 4,
      type: 'sword',
      specialized: 'atk%',
      effectname: 'Chord',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Normal or Charged Attacks grant a Harmonic on hits. Gaining 5 Harmonics triggers the power of music and deals {0} ATK DMG to surrounding opponents. Harmonics last up to 30s, and a maximum of 1 can be gained every 0.5s.',
      ref: [['100%'], ['125%'], ['150%'], ['175%'], ['200%']]
    },
    {
      name: 'toukaboushigure',
      fullName: 'Toukabou Shigure',
      rating: 4,
      type: 'sword',
      specialized: 'em',
      effectname: 'Kaidan: Rainfall Earthbinder',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        "After an attack hits opponents, it will inflict an instance of Cursed Parasol upon one of them for 10s. This effect can be triggered once every 15s. If this opponent is defeated during Cursed Parasol's duration, Cursed Parasol's CD will be refreshed immediately. The character wielding this weapon will deal {0} more DMG to the opponent affected by Cursed Parasol.",
      ref: [['16%'], ['20%'], ['24%'], ['28%'], ['32%']]
    },
    {
      name: 'travelershandysword',
      fullName: "Traveler's Handy Sword",
      rating: 3,
      type: 'sword',
      specialized: 'def%',
      effectname: 'Journey',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Each Elemental Orb or Particle collected restores {0} HP.',
      ref: [['1%'], ['1.25%'], ['1.5%'], ['1.75%'], ['2%']]
    },
    {
      name: 'xiphosmoonlight',
      fullName: "Xiphos' Moonlight",
      rating: 4,
      type: 'sword',
      specialized: 'em',
      effectname: "Jinni's Whisper",
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'The following effect will trigger every 10s: The equipping character will gain {0} Energy Recharge for each point of Elemental Mastery they possess for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
      ref: [['0.036%'], ['0.045%'], ['0.054%'], ['0.063%'], ['0.072%']]
    }
  ],
  catalyst: [
    {
      name: 'athousandfloatingdreams',
      fullName: 'A Thousand Floating Dreams',
      rating: 5,
      type: 'catalyst',
      specialized: 'em',
      effectname: "A Thousand Nights' Dawnsong",
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by {0}. If not, increase the equipping character's DMG Bonus from their Elemental Type by {1}. The aforementioned effects can have 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by {2}. Multiple such effects from multiple such weapons can stack.",
      ref: [
        ['32', '10%', '40'],
        ['40', '14%', '42'],
        ['48', '18%', '44'],
        ['56', '22%', '46'],
        ['64', '26%', '48']
      ]
    },
    {
      name: 'blackcliffagate',
      fullName: 'Blackcliff Agate',
      rating: 4,
      type: 'catalyst',
      specialized: 'critdmg',
      effectname: 'Press the Advantage',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After defeating an enemy, ATK is increased by {0} for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
      name: 'dodocotales',
      fullName: 'Dodoco Tales',
      rating: 4,
      type: 'catalyst',
      specialized: 'atk%',
      effectname: 'Dodoventure!',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Normal Attack hits on opponents increase Charged Attack DMG by {0} for 6s. Charged Attack hits on opponents increase ATK by {1} for 6s.',
      ref: [
        ['16%', '8%'],
        ['20%', '10%'],
        ['24%', '12%'],
        ['28%', '14%'],
        ['32%', '16%']
      ]
    },
    {
      name: 'emeraldorb',
      fullName: 'Emerald Orb',
      rating: 3,
      type: 'catalyst',
      specialized: 'em',
      effectname: 'Rapids',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Upon causing a Vaporize, Electro-Charged, Frozen, Bloom, or a Hydro-infused Swirl reaction, increases ATK by {0} for 12s.',
      ref: [['20%'], ['25%'], ['30%'], ['35%'], ['40%']]
    },
    {
      name: 'everlastingmoonglow',
      fullName: 'Everlasting Moonglow',
      rating: 5,
      type: 'catalyst',
      specialized: 'hp%',
      effectname: 'Byakuya Kougetsu',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Healing Bonus increased by {0}, Normal Attack DMG is increased by {1} of the Max HP of the character equipping this weapon. For 12s after using an Elemental Burst, Normal Attacks that hit opponents will restore 0.6 Energy. Energy can be restored this way once every 0.1s.',
      ref: [
        ['10%', '1%'],
        ['12.5%', '1.5%'],
        ['15%', '2%'],
        ['17.5%', '2.5%'],
        ['20%', '3%']
      ]
    },
    {
      name: 'eyeofperception',
      fullName: 'Eye of Perception',
      rating: 4,
      type: 'catalyst',
      specialized: 'atk%',
      effectname: 'Echo',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing {0} ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every {1}.',
      ref: [
        ['240%', '12s'],
        ['270%', '11s'],
        ['300%', '10s'],
        ['330%', '9s'],
        ['360%', '8s']
      ]
    },
    {
      name: 'favoniuscodex',
      fullName: 'Favonius Codex',
      rating: 4,
      type: 'catalyst',
      specialized: 'energy',
      effectname: 'Windfall',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }]
          ]
        }
      ],
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
      name: 'frostbearer',
      fullName: 'Frostbearer',
      rating: 4,
      type: 'catalyst',
      specialized: 'atk%',
      effectname: 'Frost Burial',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
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
      name: 'fruitoffulfillment',
      fullName: 'Fruit of Fulfillment',
      rating: 4,
      type: 'catalyst',
      specialized: 'energy',
      effectname: 'Full Circle',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Obtain the "Wax and Wane" effect after an Elemental Reaction is triggered, gaining {0} Elemental Mastery while losing 5% atk%. For every 0.3s, 1 stack of Wax and Wane can be gained. Max 5 stacks. For every 6s that go by without an Elemental Reaction being triggered, 1 stack will be lost. This effect can be triggered even when the character is off-field.',
      ref: [['24'], ['27'], ['30'], ['33'], ['36']]
    },
    {
      name: 'hakushinring',
      fullName: 'Hakushin Ring',
      rating: 4,
      type: 'catalyst',
      specialized: 'energy',
      effectname: 'Sakura Saiguu',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a {0} Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.',
      ref: [['10%'], ['12.5%'], ['15%'], ['17.5%'], ['20%']]
    },
    {
      name: 'jadefallssplendor',
      fullName: "Jadefall's Splendor",
      rating: 5,
      type: 'catalyst',
      specialized: 'hp%',
      effectname: 'Primordial Jade Regalia',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'For 3s after using an Elemental Burst or creating a shield, the equipping character can gain the Primordial Jade Regalia effect: Restore {0} Energy every 2.5s, and gain {1} Elemental DMG Bonus for their corresponding Elemental Type for every 1,000 Max HP they possess, up to {2}. Primordial Jade Regalia will still take effect even if the equipping character is not on the field.',
      ref: [
        ['4.5', '0.3%', '12%'],
        ['5', '0.5%', '20%'],
        ['5.5', '0.7%', '28%'],
        ['6', '0.9%', '36%'],
        ['6.5', '1.1%', '44%']
      ]
    },
    {
      name: 'kagurasverity',
      fullName: "Kagura's Verity",
      rating: 5,
      type: 'catalyst',
      specialized: 'critdmg',
      effectname: 'Kagura Dance of the Sacred Sakura',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Gains the Kagura Dance effect when using an Elemental Skill, causing the Elemental Skill DMG of the character wielding this weapon to increase by {0} for 16s. Max 3 stacks. This character will gain {1} All Elemental DMG Bonus when they possess 3 stacks.',
      ref: [
        ['12%', '12%'],
        ['15%', '15%'],
        ['18%', '18%'],
        ['21%', '21%'],
        ['24%', '24%']
      ]
    },
    {
      name: 'lostprayertothesacredwinds',
      fullName: 'Lost Prayer to the Sacred Winds',
      rating: 5,
      type: 'catalyst',
      specialized: 'critrate',
      effectname: 'Boundless Blessing',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases Movement SPD by 10%. When in battle, gain a {0} Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
      ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
    },
    {
      name: 'magicguide',
      fullName: 'Magic Guide',
      rating: 3,
      type: 'catalyst',
      specialized: 'em',
      effectname: 'Bane of Storm and Tide',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases DMG against opponents affected by Hydro or Electro by {0}.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
      name: 'mappamare',
      fullName: 'Mappa Mare',
      rating: 4,
      type: 'catalyst',
      specialized: 'em',
      effectname: 'Infusion Scroll',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Triggering an Elemental reaction grants a {0} Elemental DMG Bonus for 10s. Max 2 stacks.',
      ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
    },
    {
      name: 'memoryofdust',
      fullName: 'Memory of Dust',
      rating: 5,
      type: 'catalyst',
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
      name: 'oathsworneye',
      fullName: 'Oathsworn Eye',
      rating: 4,
      type: 'catalyst',
      specialized: 'atk%',
      effectname: 'People of the Faltering Light',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases Energy Recharge by {0} for 10s after using an Elemental Skill.',
      ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
    },
    {
      name: 'otherworldlystory',
      fullName: 'Otherworldly Story',
      rating: 3,
      type: 'catalyst',
      specialized: 'energy',
      effectname: 'Energy Shower',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Each Elemental Orb or Particle collected restores {0} HP.',
      ref: [['1%'], ['1.25%'], ['1.5%'], ['1.75%'], ['2%']]
    },
    {
      name: 'prototypeamber',
      fullName: 'Prototype Amber',
      rating: 4,
      type: 'catalyst',
      specialized: 'hp%',
      effectname: 'Gilding',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Using an Elemental Burst regenerates {0} Energy every 2s for 6s. All party members will regenerate {1} HP every 2s for this duration.',
      ref: [
        ['4', '4%'],
        ['4.5', '4.5%'],
        ['5', '5%'],
        ['5.5', '5.5%'],
        ['6', '6%']
      ]
    },
    {
      name: 'royalgrimoire',
      fullName: 'Royal Grimoire',
      rating: 4,
      type: 'catalyst',
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
      name: 'sacrificialfragments',
      fullName: 'Sacrificial Fragments',
      rating: 4,
      type: 'catalyst',
      specialized: 'em',
      effectname: 'Composed',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
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
      name: 'skywardatlas',
      fullName: 'Skyward Atlas',
      rating: 5,
      type: 'catalyst',
      specialized: 'atk%',
      effectname: 'Wandering Clouds',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases Elemental DMG Bonus by {0}. Normal Attack hits have a 50% chance to earn the favor of the clouds, which actively seek out nearby opponents to attack for 15s, dealing {1} ATK DMG. Can only occur once every 30s.',
      ref: [
        ['12%', '160%'],
        ['15%', '200%'],
        ['18%', '240%'],
        ['21%', '280%'],
        ['24%', '320%']
      ]
    },
    {
      name: 'solarpearl',
      fullName: 'Solar Pearl',
      rating: 4,
      type: 'catalyst',
      specialized: 'critrate',
      effectname: 'Solar Shine',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Normal Attack hits increase Elemental Skill and Elemental Burst DMG by {0} for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by {1} for 6s.',
      ref: [
        ['20%', '20%'],
        ['25%', '25%'],
        ['30%', '30%'],
        ['35%', '35%'],
        ['40%', '40%']
      ]
    },
    {
      name: 'thewidsith',
      fullName: 'The Widsith',
      rating: 4,
      type: 'catalyst',
      specialized: 'critdmg',
      effectname: 'Debut',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'When the character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s. Recitative: ATK is increased by {0}. Aria: Increases all Elemental DMG by {1}. Interlude: Elemental Mastery is increased by {2}.',
      ref: [
        ['60%', '48%', '240'],
        ['75%', '60%', '300'],
        ['90%', '72%', '360'],
        ['105%', '84%', '420'],
        ['120%', '96%', '480']
      ]
    },
    {
      name: 'thrillingtalesofdragonslayers',
      fullName: 'Thrilling Tales of Dragon Slayers',
      rating: 3,
      type: 'catalyst',
      specialized: 'hp%',
      effectname: 'Heritage',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'When switching characters, the new character taking the field has their ATK increased by {0} for 10s. This effect can only occur once every 20s.',
      ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
    },
    {
      name: 'tulaytullahsremembrance',
      fullName: "Tulaytullah's Remembrance",
      rating: 5,
      type: 'catalyst',
      specialized: 'critdmg',
      effectname: 'Bygone Azure Teardrop',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Normal Attack SPD is increased by {0}. After the wielder unleashes an Elemental Skill, Normal Attack DMG will increase by {1} every second for 14s. After hitting an opponent with a Normal Attack during this duration, Normal Attack DMG will be increased by {2}. This increase can be triggered once every 0.3s. The maximum Normal Attack DMG increase per single duration of the overall effect is {3}. The effect will be removed when the wielder leaves the field, and using the Elemental Skill again will reset all DMG buffs.',
      ref: [
        ['10%', '4.8%', '9.6%', '48%'],
        ['12.5%', '6%', '12%', '60%'],
        ['15%', '7.2%', '14.4%', '72%'],
        ['17.5%', '8.4%', '16.8%', '84%'],
        ['20%', '9.6%', '19.2%', '96%']
      ]
    },
    {
      name: 'twinnephrite',
      fullName: 'Twin Nephrite',
      rating: 3,
      type: 'catalyst',
      specialized: 'critrate',
      effectname: 'Guerilla Tactics',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Defeating an opponent increases Movement SPD and ATK by {0} for 15s.',
      ref: [['12%'], ['14%'], ['16%'], ['18%'], ['20%']]
    },
    {
      name: 'wanderingevenstar',
      fullName: 'Wandering Evenstar',
      rating: 4,
      type: 'catalyst',
      specialized: 'em',
      effectname: 'Wildling Nightstar',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'The following effect will trigger every 10s: The equipping character will gain {0} of their Elemental Mastery as bonus ATK for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
      ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
    },
    {
      name: 'wineandsong',
      fullName: 'Wine and Song',
      rating: 4,
      type: 'catalyst',
      specialized: 'energy',
      effectname: 'Ever-Changing',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by {0} for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by {1} for 5s.',
      ref: [
        ['14%', '20%'],
        ['16%', '25%'],
        ['18%', '30%'],
        ['20%', '35%'],
        ['22%', '40%']
      ]
    }
  ],
  polearm: [
    {
      name: 'blackcliffpole',
      fullName: 'Blackcliff Pole',
      rating: 4,
      type: 'polearm',
      specialized: 'critdmg',
      effectname: 'Press the Advantage',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After defeating an enemy, ATK is increased by {0} for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
      ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
    },
    {
      name: 'blacktassel',
      fullName: 'Black Tassel',
      rating: 3,
      type: 'polearm',
      specialized: 'hp%',
      effectname: 'Bane of the Soft',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases DMG against slimes by {0}.',
      ref: [['40%'], ['50%'], ['60%'], ['70%'], ['80%']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'crescentpike',
      fullName: 'Crescent Pike',
      rating: 4,
      type: 'polearm',
      specialized: 'physical',
      effectname: 'Infusion Needle',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to {0} of ATK for 5s.',
      ref: [['20%'], ['25%'], ['30%'], ['35%'], ['40%']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'If there are at least 2 opponents nearby, ATK is increased by {0} and DEF is increased by {1}. If there are fewer than 2 opponents nearby, ATK is increased by {2}.',
      ref: [
        ['16%', '16%', '24%'],
        ['20%', '20%', '30%'],
        ['24%', '24%', '36%'],
        ['28%', '28%', '42%'],
        ['32%', '32%', '48%']
      ]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases DMG against opponents affected by Hydro or Pyro by {0}.',
      ref: [['20%'], ['24%'], ['28%'], ['32%'], ['36%']]
    },
    {
      name: 'dragonspinespear',
      fullName: 'Dragonspine Spear',
      rating: 4,
      type: 'polearm',
      specialized: 'physical',
      effectname: 'Frost Burial',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
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
      name: 'engulfinglightning',
      fullName: 'Engulfing Lightning',
      rating: 5,
      type: 'polearm',
      specialized: 'energy',
      effectname: 'Timeless Dream: Eternal Stove',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'favoniuslance',
      fullName: 'Favonius Lance',
      rating: 4,
      type: 'polearm',
      specialized: 'energy',
      effectname: 'Windfall',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }],
            [{ scaling: 'energy', coef: 0 }]
          ]
        }
      ],
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
      name: 'halberd',
      fullName: 'Halberd',
      rating: 3,
      type: 'polearm',
      specialized: 'atk%',
      effectname: 'Heavy',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Normal Attacks deal an additional {0} ATK as DMG. This effect can only occur once every 10s.',
      ref: [['160%'], ['200%'], ['240%'], ['280%'], ['320%']]
    },
    {
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
      name: 'lithicspear',
      fullName: 'Lithic Spear',
      rating: 4,
      type: 'polearm',
      specialized: 'atk%',
      effectname: 'Lithic Axiom: Unity',
      action: [
        {
          actionType: 'region',
          regions: ['Liyue'],
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
        'For every character in the party who hails from Liyue, the character who equips this weapon gains a {0} ATK increase and a {1} CRIT Rate increase. This effect stacks up to 4 times.',
      ref: [
        ['7%', '3%'],
        ['8%', '4%'],
        ['9%', '5%'],
        ['10%', '6%'],
        ['11%', '7%']
      ]
    },
    {
      name: 'missivewindspear',
      fullName: 'Missive Windspear',
      rating: 4,
      type: 'polearm',
      specialized: 'atk%',
      effectname: 'The Wind Unattained',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'moonpiercer',
      fullName: 'Moonpiercer',
      rating: 4,
      type: 'polearm',
      specialized: 'em',
      effectname: 'Stillwood Moonshadow',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Revival will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character {0} ATK for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field.',
      ref: [['16%'], ['20%'], ['24%'], ['28%'], ['32%']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'prototypestarglitter',
      fullName: 'Prototype Starglitter',
      rating: 4,
      type: 'polearm',
      specialized: 'energy',
      effectname: 'Magic Affinity',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'After using an Elemental Skill, increases Normal and Charged Attack DMG by {0} for 12s. Max 2 stacks.',
      ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases CRIT Rate by {0} and increases Normal ATK SPD by {1}. Additionally, Normal and Charged Attacks hits on opponents have a {2} chance to trigger a vacuum blade that deals {3} of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
      ref: [
        ['8%', '12%', '50%', '40%'],
        ['10%', '12%', '50%', '55%'],
        ['12%', '12%', '50%', '70%'],
        ['14%', '12%', '50%', '85%'],
        ['16%', '12%', '50%', '100%']
      ]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
      name: 'staffofthescarletsands',
      fullName: 'Staff of the Scarlet Sands',
      rating: 5,
      type: 'polearm',
      specialized: 'critrate',
      effectname: "Heat Haze at Horizon's End",
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'The equipping character gains {0} of their Elemental Mastery as bonus atk%. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain {1} of their Elemental Mastery as bonus atk%. Max 3 stacks.',
      ref: [
        ['52%', '28%'],
        ['65%', '35%'],
        ['78%', '42%'],
        ['91%', '49%'],
        ['104%', '56%']
      ]
    },
    {
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect:
        'Increases Elemental Burst DMG by {0} and Elemental Burst CRIT Rate by {1}.',
      ref: [
        ['16%', '6%'],
        ['20%', '7.5%'],
        ['24%', '9%'],
        ['28%', '10.5%'],
        ['32%', '12%']
      ]
    },
    {
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
      name: 'wavebreakersfin',
      fullName: "Wavebreaker's Fin",
      rating: 4,
      type: 'polearm',
      specialized: 'atk%',
      effectname: 'Watatsumi Wavewalker',
      action: [
        {
          actionType: 'passive',
          values: [
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
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
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }],
            [{ scaling: 'atk', coef: 0 }]
          ]
        }
      ],
      effect: 'Increases Normal Attack DMG by {0}.',
      ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
    }
  ]
};
