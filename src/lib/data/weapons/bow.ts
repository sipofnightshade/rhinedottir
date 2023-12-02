import type { SelectedWeapon } from '$lib/types/global';

type Bows = SelectedWeapon & {
  type: 'bow';
};

export const bow: Bows[] = [
  {
    uid: 15410,
    name: 'alleyhunter',
    fullName: 'Alley Hunter',
    url: 'UI_EquipIcon_Bow_Outlaw_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: 'Oppidan Ambush',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            {
              scaling: 'dmgIncrease',
              coef: [0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02]
            }
          ],
          [
            {
              scaling: 'dmgIncrease',
              coef: [0.025, 0.025, 0.025, 0.025, 0.025, 0.025, 0.025, 0.025, 0.025, 0.025]
            }
          ],
          [
            {
              scaling: 'dmgIncrease',
              coef: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03]
            }
          ],
          [
            {
              scaling: 'dmgIncrease',
              coef: [0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035]
            }
          ],
          [
            {
              scaling: 'dmgIncrease',
              coef: [0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04]
            }
          ]
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
    uid: 15502,
    name: 'amosbow',
    fullName: "Amos' Bow",
    url: 'UI_EquipIcon_Bow_Amos_Awaken',
    rating: 5,
    type: 'bow',
    specialized: 'atk%',
    effectname: 'Strong-Willed',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'normal', coef: 0.12 },
            { scaling: 'charged', coef: 0.12 }
          ],
          [
            { scaling: 'normal', coef: 0.15 },
            { scaling: 'charged', coef: 0.15 }
          ],
          [
            { scaling: 'normal', coef: 0.18 },
            { scaling: 'charged', coef: 0.18 }
          ],
          [
            { scaling: 'normal', coef: 0.21 },
            { scaling: 'charged', coef: 0.21 }
          ],
          [
            { scaling: 'normal', coef: 0.24 },
            { scaling: 'charged', coef: 0.24 }
          ]
        ]
      },
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'atk', coef: [0.08, 0.08, 0.08, 0.08, 0.08] }],
          [{ scaling: 'atk', coef: [0.1, 0.1, 0.1, 0.1, 0.1] }],
          [{ scaling: 'atk', coef: [0.12, 0.12, 0.12, 0.12, 0.12] }],
          [{ scaling: 'atk', coef: [0.14, 0.14, 0.14, 0.14, 0.14] }],
          [{ scaling: 'atk', coef: [0.16, 0.16, 0.16, 0.16, 0.16] }]
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
    uid: 15508,
    name: 'aquasimulacra',
    fullName: 'Aqua Simulacra',
    url: 'UI_EquipIcon_Bow_Kirin_Awaken',
    rating: 5,
    type: 'bow',
    specialized: 'critdmg',
    effectname: 'The Cleansing Form',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'hp%', coef: 0.16 }],
          [{ scaling: 'hp%', coef: 0.2 }],
          [{ scaling: 'hp%', coef: 0.24 }],
          [{ scaling: 'hp%', coef: 0.28 }],
          [{ scaling: 'hp%', coef: 0.32 }]
        ]
      },
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'dmgIncrease', coef: 0.2 }],
          [{ scaling: 'dmgIncrease', coef: 0.25 }],
          [{ scaling: 'dmgIncrease', coef: 0.3 }],
          [{ scaling: 'dmgIncrease', coef: 0.35 }],
          [{ scaling: 'dmgIncrease', coef: 0.4 }]
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
    uid: 15408,
    name: 'blackcliffwarbow',
    fullName: 'Blackcliff Warbow',
    url: 'UI_EquipIcon_Bow_Blackrock_Awaken',
    rating: 4,
    type: 'bow',
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
    uid: 15407,
    name: 'compoundbow',
    fullName: 'Compound Bow',
    url: 'UI_EquipIcon_Bow_Exotic_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'physical',
    effectname: 'Infusion Arrow',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'atk%', coef: [0.04, 0.04, 0.04, 0.04] },
            { scaling: 'normalATKSpd', coef: [0.012, 0.012, 0.012, 0.012] }
          ],
          [
            { scaling: 'atk%', coef: [0.05, 0.05, 0.05, 0.05] },
            { scaling: 'normalATKSpd', coef: [0.015, 0.015, 0.015, 0.015] }
          ],
          [
            { scaling: 'atk%', coef: [0.06, 0.06, 0.06, 0.06] },
            { scaling: 'normalATKSpd', coef: [0.018, 0.018, 0.018, 0.018] }
          ],
          [
            { scaling: 'atk%', coef: [0.07, 0.07, 0.07, 0.07] },
            { scaling: 'normalATKSpd', coef: [0.021, 0.021, 0.021, 0.021] }
          ],
          [
            { scaling: 'atk%', coef: [0.08, 0.08, 0.08, 0.08] },
            { scaling: 'normalATKSpd', coef: [0.024, 0.024, 0.024, 0.024] }
          ]
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
    uid: 15503,
    name: 'elegyfortheend',
    fullName: 'Elegy for the End',
    url: 'UI_EquipIcon_Bow_Widsith_Awaken',
    rating: 5,
    type: 'bow',
    specialized: 'energy',
    effectname: 'The Parting Refrain',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'em', coef: 60 }],
          [{ scaling: 'em', coef: 75 }],
          [{ scaling: 'em', coef: 90 }],
          [{ scaling: 'em', coef: 105 }],
          [{ scaling: 'em', coef: 120 }]
        ]
      },
      {
        actionType: 'toggle',
        target: 'party',
        values: [
          [
            { scaling: 'atk%', coef: 0.2 },
            { scaling: 'em', coef: 100 }
          ],
          [
            { scaling: 'atk%', coef: 0.25 },
            { scaling: 'em', coef: 125 }
          ],
          [
            { scaling: 'atk%', coef: 0.3 },
            { scaling: 'em', coef: 150 }
          ],
          [
            { scaling: 'atk%', coef: 0.35 },
            { scaling: 'em', coef: 175 }
          ],
          [
            { scaling: 'atk%', coef: 0.4 },
            { scaling: 'em', coef: 200 }
          ]
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
    uid: 15418,
    name: 'endoftheline',
    fullName: 'End of the Line',
    url: 'UI_EquipIcon_Bow_Fin_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'energy',
    effectname: 'Net Snapper',
    effect:
      'Triggers the Flowrider effect after using an Elemental Skill, dealing {0} ATK as AoE DMG upon hitting an opponent with an attack. Flowrider will be removed after 15s or after causing 3 instances of AoE DMG. Only 1 instance of AoE DMG can be caused every 2s in this way. Flowrider can be triggered once every 12s.',
    ref: [['80%'], ['100%'], ['120%'], ['140%'], ['160%']]
  },
  {
    uid: 15411,
    name: 'fadingtwilight',
    fullName: 'Fading Twilight',
    url: 'UI_EquipIcon_Bow_Fallensun_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'energy',
    effectname: 'Radiance of the Deeps',
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'dmgIncrease', coef: [0.06, 0.04, 0.04] }],
          [{ scaling: 'dmgIncrease', coef: [0.075, 0.05, 0.05] }],
          [{ scaling: 'dmgIncrease', coef: [0.09, 0.06, 0.06] }],
          [{ scaling: 'dmgIncrease', coef: [0.105, 0.07, 0.07] }],
          [{ scaling: 'dmgIncrease', coef: [0.12, 0.08, 0.08] }]
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
    uid: 15401,
    name: 'favoniuswarbow',
    fullName: 'Favonius Warbow',
    url: 'UI_EquipIcon_Bow_Zephyrus_Awaken',
    rating: 4,
    type: 'bow',
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
    uid: 15414,
    name: 'hamayumi',
    fullName: 'Hamayumi',
    url: 'UI_EquipIcon_Bow_Bakufu_Awaken',
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
    uid: 15511,
    name: 'hunterspath',
    fullName: "Hunter's Path",
    url: 'UI_EquipIcon_Bow_Ayus_Awaken',
    rating: 5,
    type: 'bow',
    specialized: 'critrate',
    effectname: 'At the End of the Beast-Paths',
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
        actionType: 'toggle',
        sourceStats: ['em'],
        values: [
          [{ scaling: 'chargedFlatDMG', coef: 1.6, source: ['em', 0] }],
          [{ scaling: 'chargedFlatDMG', coef: 2, source: ['em', 0] }],
          [{ scaling: 'chargedFlatDMG', coef: 2.4, source: ['em', 0] }],
          [{ scaling: 'chargedFlatDMG', coef: 2.8, source: ['em', 0] }],
          [{ scaling: 'chargedFlatDMG', coef: 3.2, source: ['em', 0] }]
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
    uid: 15419,
    name: 'ibispiercer',
    fullName: 'Ibis Piercer',
    url: 'UI_EquipIcon_Bow_Ibis_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: "Secret Wisdom's Favor",
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'em', coef: [40, 40] }],
          [{ scaling: 'em', coef: [50, 50] }],
          [{ scaling: 'em', coef: [60, 60] }],
          [{ scaling: 'em', coef: [70, 70] }],
          [{ scaling: 'em', coef: [80, 80] }]
        ]
      }
    ],
    effect:
      "The character's Elemental Mastery will increase by {0} within 6s after Charged Attacks hit opponents. Max 2 stacks. This effect can be triggered once every 0.5s.",
    ref: [['40'], ['50'], ['60'], ['70'], ['80']]
  },
  {
    uid: 15417,
    name: 'kingssquire',
    fullName: "King's Squire",
    url: 'UI_EquipIcon_Bow_Arakalari_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: "Labyrinth Lord's Instruction",
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'em', coef: 60 }],
          [{ scaling: 'em', coef: 80 }],
          [{ scaling: 'em', coef: 100 }],
          [{ scaling: 'em', coef: 120 }],
          [{ scaling: 'em', coef: 140 }]
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
    uid: 15305,
    name: 'messenger',
    fullName: 'Messenger',
    url: 'UI_EquipIcon_Bow_Msg_Awaken',
    rating: 3,
    type: 'bow',
    specialized: 'critdmg',
    effectname: "Archer's Message",
    effect:
      'Charged Attack hits on weak points deal an additional {0} ATK DMG as CRIT DMG. Can only occur once every 10s.',
    ref: [['100%'], ['125%'], ['150%'], ['175%'], ['200%']]
  },
  {
    uid: 15412,
    name: 'mitternachtswaltz',
    fullName: 'Mitternachts Waltz',
    url: 'UI_EquipIcon_Bow_Nachtblind_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'physical',
    effectname: 'Evernight Duet',
    action: [
      {
        actionType: 'toggle',
        values: [
          [
            { scaling: 'skill', coef: 0.2 },
            { scaling: 'normal', coef: 0.2 }
          ],
          [
            { scaling: 'skill', coef: 0.25 },
            { scaling: 'normal', coef: 0.25 }
          ],
          [
            { scaling: 'skill', coef: 0.3 },
            { scaling: 'normal', coef: 0.3 }
          ],
          [
            { scaling: 'skill', coef: 0.35 },
            { scaling: 'normal', coef: 0.35 }
          ],
          [
            { scaling: 'skill', coef: 0.4 },
            { scaling: 'normal', coef: 0.4 }
          ]
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
    uid: 15416,
    name: 'mouunsmoon',
    fullName: "Mouun's Moon",
    url: 'UI_EquipIcon_Bow_Maria_Awaken',
    rating: 4,
    type: 'bow',
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
    uid: 15507,
    name: 'polarstar',
    fullName: 'Polar Star',
    url: 'UI_EquipIcon_Bow_Worldbane_Awaken',
    rating: 5,
    type: 'bow',
    specialized: 'critrate',
    effectname: "Daylight's Augury",
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'skill', coef: 0.12 },
            { scaling: 'burst', coef: 0.12 }
          ],
          [
            { scaling: 'skill', coef: 0.15 },
            { scaling: 'burst', coef: 0.15 }
          ],
          [
            { scaling: 'skill', coef: 0.18 },
            { scaling: 'burst', coef: 0.18 }
          ],
          [
            { scaling: 'skill', coef: 0.21 },
            { scaling: 'burst', coef: 0.21 }
          ],
          [
            { scaling: 'skill', coef: 0.24 },
            { scaling: 'burst', coef: 0.24 }
          ]
        ]
      },
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'atk%', coef: [0.1, 0.1, 0.1, 0.18] }],
          [{ scaling: 'atk%', coef: [0.125, 0.125, 0.125, 0.225] }],
          [{ scaling: 'atk%', coef: [0.15, 0.15, 0.15, 0.27] }],
          [{ scaling: 'atk%', coef: [0.175, 0.175, 0.175, 0.315] }],
          [{ scaling: 'atk%', coef: [0.2, 0.2, 0.2, 0.36] }]
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
    uid: 15415,
    name: 'predator',
    fullName: 'Predator',
    url: 'UI_EquipIcon_Bow_Predator_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: 'Strong Strike',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'normal', coef: [0.1, 0.1] },
            { scaling: 'charged', coef: [0.1, 0.1] }
          ],
          [
            { scaling: 'normal', coef: [0.1, 0.1] },
            { scaling: 'charged', coef: [0.1, 0.1] }
          ],
          [
            { scaling: 'normal', coef: [0.1, 0.1] },
            { scaling: 'charged', coef: [0.1, 0.1] }
          ],
          [
            { scaling: 'normal', coef: [0.1, 0.1] },
            { scaling: 'charged', coef: [0.1, 0.1] }
          ],
          [
            { scaling: 'normal', coef: [0.1, 0.1] },
            { scaling: 'charged', coef: [0.1, 0.1] }
          ]
        ]
      }
    ],
    effect:
      'Effective only on the following platform: \n"PlayStation Network"\nDealing Cryo DMG to opponents increases this character\'s Normal and Charged Attack DMG by 10% for 6s. This effect can have a maximum of 2 stacks. Additionally, when Aloy equips Predator, ATK is increased by 66.',
    ref: [[], [], [], [], []]
  },
  {
    uid: 15406,
    name: 'prototypecrescent',
    fullName: 'Prototype Crescent',
    url: 'UI_EquipIcon_Bow_Proto_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: 'Unreturning',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'atk%', coef: 0.36 }],
          [{ scaling: 'atk%', coef: 0.45 }],
          [{ scaling: 'atk%', coef: 0.54 }],
          [{ scaling: 'atk%', coef: 0.63 }],
          [{ scaling: 'atk%', coef: 0.72 }]
        ]
      }
    ],
    effect:
      'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by {0} for 10s.',
    ref: [['36%'], ['45%'], ['54%'], ['63%'], ['72%']]
  },
  {
    uid: 15301,
    name: 'ravenbow',
    fullName: 'Raven Bow',
    url: 'UI_EquipIcon_Bow_Crowfeather_Awaken',
    rating: 3,
    type: 'bow',
    specialized: 'em',
    effectname: 'Bane of Flame and Water',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'pyro', coef: 0.12 },
            { scaling: 'hydro', coef: 0.12 }
          ],
          [
            { scaling: 'pyro', coef: 0.15 },
            { scaling: 'hydro', coef: 0.15 }
          ],
          [
            { scaling: 'pyro', coef: 0.18 },
            { scaling: 'hydro', coef: 0.18 }
          ],
          [
            { scaling: 'pyro', coef: 0.21 },
            { scaling: 'hydro', coef: 0.21 }
          ],
          [
            { scaling: 'pyro', coef: 0.24 },
            { scaling: 'hydro', coef: 0.24 }
          ]
        ]
      }
    ],
    effect: 'Increases DMG against opponents affected by Hydro or Pyro by {0}.',
    ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
  },
  {
    uid: 15303,
    name: 'recurvebow',
    fullName: 'Recurve Bow',
    url: 'UI_EquipIcon_Bow_Curve_Awaken',
    rating: 3,
    type: 'bow',
    specialized: 'hp%',
    effectname: 'Cull the Weak',
    effect: 'Defeating an opponent restores {0} HP.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  {
    uid: 15404,
    name: 'royalbow',
    fullName: 'Royal Bow',
    url: 'UI_EquipIcon_Bow_Theocrat_Awaken',
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
    uid: 15427,
    name: 'rangegauge',
    fullName: 'Range Gauge',
    url: 'UI_EquipIcon_Bow_Mechanic_Awaken',
    rating: 4,
    type: 'bow',
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
    uid: 15405,
    name: 'rust',
    fullName: 'Rust',
    url: 'UI_EquipIcon_Bow_Recluse_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: 'Rapid Firing',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'normal', coef: 0.4 },
            { scaling: 'charged', coef: -0.1 }
          ],
          [
            { scaling: 'normal', coef: 0.5 },
            { scaling: 'charged', coef: -0.1 }
          ],
          [
            { scaling: 'normal', coef: 0.6 },
            { scaling: 'charged', coef: -0.1 }
          ],
          [
            { scaling: 'normal', coef: 0.7 },
            { scaling: 'charged', coef: -0.1 }
          ],
          [
            { scaling: 'normal', coef: 0.8 },
            { scaling: 'charged', coef: -0.1 }
          ]
        ]
      }
    ],
    effect: 'Increases Normal Attack DMG by {0} but decreases Charged Attack DMG by 10%.',
    ref: [['40%'], ['50%'], ['60%'], ['70%'], ['80%']]
  },
  {
    uid: 15403,
    name: 'sacrificialbow',
    fullName: 'Sacrificial Bow',
    url: 'UI_EquipIcon_Bow_Fossil_Awaken',
    rating: 4,
    type: 'bow',
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
    uid: 15302,
    name: 'sharpshootersoath',
    fullName: "Sharpshooter's Oath",
    url: 'UI_EquipIcon_Bow_Arjuna_Awaken',
    rating: 3,
    type: 'bow',
    specialized: 'critdmg',
    effectname: 'Precise',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'dmgIncrease', coef: 0.24 }],
          [{ scaling: 'dmgIncrease', coef: 0.3 }],
          [{ scaling: 'dmgIncrease', coef: 0.36 }],
          [{ scaling: 'dmgIncrease', coef: 0.42 }],
          [{ scaling: 'dmgIncrease', coef: 0.48 }]
        ]
      }
    ],
    effect: 'Increases DMG against weak spots by {0}.',
    ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
  },
  {
    uid: 15501,
    name: 'skywardharp',
    fullName: 'Skyward Harp',
    url: 'UI_EquipIcon_Bow_Dvalin_Awaken',
    rating: 5,
    type: 'bow',
    specialized: 'critrate',
    effectname: 'Echoing Ballad',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'critdmg', coef: 0.2 }],
          [{ scaling: 'critdmg', coef: 0.25 }],
          [{ scaling: 'critdmg', coef: 0.3 }],
          [{ scaling: 'critdmg', coef: 0.35 }],
          [{ scaling: 'critdmg', coef: 0.4 }]
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
    uid: 15304,
    name: 'slingshot',
    fullName: 'Slingshot',
    url: 'UI_EquipIcon_Bow_Sling_Awaken',
    rating: 3,
    type: 'bow',
    specialized: 'critrate',
    effectname: 'Slingshot',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'dmgIncrease', coef: 0.36 }],
          [{ scaling: 'dmgIncrease', coef: 0.42 }],
          [{ scaling: 'dmgIncrease', coef: 0.48 }],
          [{ scaling: 'dmgIncrease', coef: 0.54 }],
          [{ scaling: 'dmgIncrease', coef: 0.6 }]
        ]
      }
    ],
    effect:
      'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by {0}. Otherwise, decreases DMG by 10%.',
    ref: [['36%'], ['42%'], ['48%'], ['54%'], ['60%']]
  },
  {
    uid: 15424,
    name: 'scionoftheblazingsun',
    fullName: 'Scion of the Blazing Sun',
    url: 'UI_EquipIcon_Bow_Gurabad_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'critrate',
    effectname: 'The Way of Sunfire',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'charged', coef: 0.28 }],
          [{ scaling: 'charged', coef: 0.35 }],
          [{ scaling: 'charged', coef: 0.42 }],
          [{ scaling: 'charged', coef: 0.49 }],
          [{ scaling: 'charged', coef: 0.56 }]
        ]
      }
    ],
    effect:
      'After a Charged Attack hits an opponent, a Sunfire Arrow will descend upon the opponent hit, dealing {0} ATK as DMG, and applying the Heartsearer effect to the opponent damaged by said Arrow for 10s. Opponents affected by Heartsearer take {1} more Charged Attack DMG from the wielder. A Sunfire Arrow can be triggered once every 10s.',
    ref: [
      ['60%', '28%'],
      ['75%', '35%'],
      ['90%', '42%'],
      ['105%', '49%'],
      ['120%', '56%']
    ]
  },
  {
    uid: 15425,
    name: 'songofstillness',
    fullName: 'Song of Stillness',
    url: 'UI_EquipIcon_Bow_Vorpal_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: 'Benthic Pulse',
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
      'After the wielder is healed, they will deal {0} more DMG for 8s. This can be triggered even when the character is not on the field.',
    ref: [['16%'], ['20%'], ['24%'], ['28%'], ['32%']]
  },
  {
    uid: 15402,
    name: 'thestringless',
    fullName: 'The Stringless',
    url: 'UI_EquipIcon_Bow_Troupe_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'em',
    effectname: 'Arrowless Song',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'skill', coef: 0.24 },
            { scaling: 'burst', coef: 0.24 }
          ],
          [
            { scaling: 'skill', coef: 0.3 },
            { scaling: 'burst', coef: 0.3 }
          ],
          [
            { scaling: 'skill', coef: 0.36 },
            { scaling: 'burst', coef: 0.36 }
          ],
          [
            { scaling: 'skill', coef: 0.42 },
            { scaling: 'burst', coef: 0.42 }
          ],
          [
            { scaling: 'skill', coef: 0.48 },
            { scaling: 'burst', coef: 0.48 }
          ]
        ]
      }
    ],
    effect: 'Increases Elemental Skill and Elemental Burst DMG by {0}.',
    ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
  },
  {
    uid: 15409,
    name: 'theviridescenthunt',
    fullName: 'The Viridescent Hunt',
    url: 'UI_EquipIcon_Bow_Viridescent_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'critrate',
    effectname: 'Verdant Wind',
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
    uid: 15509,
    name: 'thunderingpulse',
    fullName: 'Thundering Pulse',
    url: 'UI_EquipIcon_Bow_Narukami_Awaken',
    rating: 5,
    type: 'bow',
    specialized: 'critdmg',
    effectname: 'Rule by Thunder',
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
        actionType: 'stack',
        values: [
          [{ scaling: 'normal', coef: [0.12, 0.24, 0.4] }],
          [{ scaling: 'normal', coef: [0.15, 0.3, 0.5] }],
          [{ scaling: 'normal', coef: [0.18, 0.36, 0.6] }],
          [{ scaling: 'normal', coef: [0.21, 0.42, 0.7] }],
          [{ scaling: 'normal', coef: [0.24, 0.48, 0.8] }]
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
    uid: 15512,
    name: 'thefirstgreatmagic',
    fullName: 'The First Great Magic',
    url: 'UI_EquipIcon_Bow_Pledge_Awaken',
    rating: 5,
    type: 'bow',
    specialized: 'critdmg',
    effectname: 'Parsifal the Great',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'charged', coef: 0.16 }],
          [{ scaling: 'charged', coef: 0.2 }],
          [{ scaling: 'charged', coef: 0.24 }],
          [{ scaling: 'charged', coef: 0.28 }],
          [{ scaling: 'charged', coef: 0.32 }]
        ]
      },
      {
        actionType: 'visionMatch',
        visionCondition: 'same',
        values: [
          [{ scaling: 'atk%', coef: [0.16, 0.32, 0.48] }],
          [{ scaling: 'atk%', coef: [0.2, 0.4, 0.6] }],
          [{ scaling: 'atk%', coef: [0.24, 0.48, 0.72] }],
          [{ scaling: 'atk%', coef: [0.28, 0.56, 0.84] }],
          [{ scaling: 'atk%', coef: [0.32, 0.64, 0.96] }]
        ]
      },
      {
        actionType: 'visionMatch',
        visionCondition: 'different',
        values: [
          [{ scaling: 'moveSpd', coef: [0.04, 0.07, 0.1] }],
          [{ scaling: 'moveSpd', coef: [0.06, 0.09, 0.12] }],
          [{ scaling: 'moveSpd', coef: [0.08, 0.11, 0.14] }],
          [{ scaling: 'moveSpd', coef: [0.1, 0.13, 0.16] }],
          [{ scaling: 'moveSpd', coef: [0.12, 0.15, 0.18] }]
        ]
      }
    ],
    effect:
      'DMG dealt by Charged Attacks increased by {0}. For every party member with the same Elemental Type as the wielder (including the wielder themselves), gain 1 Gimmick stack. For every party member with a different Elemental Type from the wielder, gain 1 Theatrics stack. When the wielder has 1/2/3 or more Gimmick stacks, ATK will be increased by {1}. When the wielder has 1/2/3 or more Theatrics stacks, Movement SPD will be increased by {2}.',
    ref: [
      ['16%', '16%/32%/48%', '4%/7%/10%'],
      ['20%', '20%/40%/60%', '6%/9%/12%'],
      ['24%', '24%/48%/72%', '8%/11%/14%'],
      ['28%', '28%/56%/84%', '10%/13%/16%'],
      ['32%', '32%/64%/96%', '12%/15%/18%']
    ]
  },
  {
    uid: 15413,
    name: 'windblumeode',
    fullName: 'Windblume Ode',
    url: 'UI_EquipIcon_Bow_Fleurfair_Awaken',
    rating: 4,
    type: 'bow',
    specialized: 'em',
    effectname: 'Windblume Wish',
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
      'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by {0} for 6s.',
    ref: [['16%'], ['20%'], ['24%'], ['28%'], ['32%']]
  }
];
