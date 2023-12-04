import type { SelectedWeapon } from '$lib/types/global';

type Cayalysts = SelectedWeapon & {
  type: 'catalyst';
};

export const catalyst: Cayalysts[] = [
  {
    uid: 14511,
    name: 'athousandfloatingdreams',
    fullName: 'A Thousand Floating Dreams',
    url: 'UI_EquipIcon_Catalyst_Ayus_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'em',
    effectname: "A Thousand Nights' Dawnsong",
    action: [
      {
        actionType: 'visionMatch',
        visionCondition: 'same',
        values: [
          [{ scaling: 'em', coef: [0, 32, 64, 96] }],
          [{ scaling: 'em', coef: [0, 40, 80, 120] }],
          [{ scaling: 'em', coef: [0, 48, 96, 144] }],
          [{ scaling: 'em', coef: [0, 56, 112, 168] }],
          [{ scaling: 'em', coef: [0, 64, 128, 192] }]
        ]
      },
      {
        actionType: 'visionMatch',
        visionCondition: 'different',
        values: [
          [{ scaling: 'dmgIncreaseElemental', coef: [0, 0.1, 0.2, 0.3] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0, 0.14, 0.28, 0.42] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0, 0.18, 0.36, 0.54] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0, 0.22, 0.44, 0.66] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0, 0.26, 0.52, 0.78] }]
        ]
      },
      {
        actionType: 'passive',
        target: 'nearby',
        values: [
          [{ scaling: 'em', coef: 40 }],
          [{ scaling: 'em', coef: 42 }],
          [{ scaling: 'em', coef: 44 }],
          [{ scaling: 'em', coef: 46 }],
          [{ scaling: 'em', coef: 48 }]
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
    uid: 14426,
    name: 'balladoftheboundlessblue',
    fullName: 'Ballad of the Boundless Blue',
    url: 'UI_EquipIcon_Catalyst_DandelionPoem_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'energy',
    effectname: 'Azure Skies',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'normal', coef: [0.08, 0.08, 0.08] },
            { scaling: 'charged', coef: [0.06, 0.06, 0.06] }
          ],
          [
            { scaling: 'normal', coef: [0.1, 0.1, 0.1] },
            { scaling: 'charged', coef: [0.075, 0.075, 0.075] }
          ],
          [
            { scaling: 'normal', coef: [0.12, 0.12, 0.12] },
            { scaling: 'charged', coef: [0.09, 0.09, 0.09] }
          ],
          [
            { scaling: 'normal', coef: [0.14, 0.14, 0.14] },
            { scaling: 'charged', coef: [0.105, 0.105, 0.105] }
          ],
          [
            { scaling: 'normal', coef: [0.16, 0.16, 0.16] },
            { scaling: 'charged', coef: [0.12, 0.12, 0.12] }
          ]
        ]
      }
    ],
    effect:
      'Within 6s after Normal or Charged Attacks hit an opponent, Normal Attack DMG will be increased by {0} and Charged Attack DMG will be increased by {1}. Max 3 stacks. This effect can be triggered once every 0.3s.',
    ref: [
      ['8%', '6%'],
      ['10%', '7.5%'],
      ['12%', '9%'],
      ['14%', '10.5%'],
      ['16%', '12%']
    ]
  },
  {
    uid: 14408,
    name: 'blackcliffagate',
    fullName: 'Blackcliff Agate',
    url: 'UI_EquipIcon_Catalyst_Blackrock_Awaken',
    rating: 4,
    type: 'catalyst',
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
    uid: 14513,
    name: 'cashflowsupervision',
    fullName: 'Cashflow Supervision',
    url: 'UI_EquipIcon_Catalyst_Wheatley_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'critrate',
    effectname: 'Golden Blood-Tide',
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
        actionType: 'stack',
        values: [
          [
            { scaling: 'normal', coef: [0.16, 0.16, 0.16] },
            { scaling: 'charged', coef: [0.14, 0.14, 0.14] },
            { scaling: 'normalAtkSpd', coef: [0, 0, 0.08] }
          ],
          [
            { scaling: 'normal', coef: [0.2, 0.2, 0.2] },
            { scaling: 'charged', coef: [0.175, 0.175, 0.175] },
            { scaling: 'normalAtkSpd', coef: [0, 0, 0.1] }
          ],
          [
            { scaling: 'normal', coef: [0.24, 0.24, 0.24] },
            { scaling: 'charged', coef: [0.21, 0.21, 0.21] },
            { scaling: 'normalAtkSpd', coef: [0, 0, 0.12] }
          ],
          [
            { scaling: 'normal', coef: [0.28, 0.28, 0.28] },
            { scaling: 'charged', coef: [0.245, 0.245, 0.245] },
            { scaling: 'normalAtkSpd', coef: [0, 0, 0.14] }
          ],
          [
            { scaling: 'normal', coef: [0.32, 0.32, 0.32] },
            { scaling: 'charged', coef: [0.28, 0.28, 0.28] },
            { scaling: 'normalAtkSpd', coef: [0, 0, 0.16] }
          ]
        ]
      }
    ],
    effect:
      'ATK is increased by {0}. When current HP increases or decreases, Normal Attack DMG will be increased by {1} and Charged Attack DMG will be increased by {2} for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the wielder has 3 stacks, ATK SPD will be increased by {3}.',
    ref: [
      ['16%', '16%', '14%', '8%'],
      ['20%', '20%', '17.5%', '10%'],
      ['24%', '24%', '21%', '12%'],
      ['28%', '28%', '24.5%', '14%'],
      ['32%', '32%', '28%', '16%']
    ]
  },
  {
    uid: 14413,
    name: 'dodocotales',
    fullName: 'Dodoco Tales',
    url: 'UI_EquipIcon_Catalyst_Ludiharpastum_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'atk%',
    effectname: 'Dodoventure!',
    action: [
      {
        actionType: 'toggle',
        values: [
          [
            { scaling: 'charged', coef: 0.16 },
            { scaling: 'normal', coef: 0.08 }
          ],
          [
            { scaling: 'charged', coef: 0.2 },
            { scaling: 'normal', coef: 0.1 }
          ],
          [
            { scaling: 'charged', coef: 0.24 },
            { scaling: 'normal', coef: 0.12 }
          ],
          [
            { scaling: 'charged', coef: 0.28 },
            { scaling: 'normal', coef: 0.14 }
          ],
          [
            { scaling: 'charged', coef: 0.32 },
            { scaling: 'normal', coef: 0.16 }
          ]
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
    uid: 14304,
    name: 'emeraldorb',
    fullName: 'Emerald Orb',
    url: 'UI_EquipIcon_Catalyst_Jade_Awaken',
    rating: 3,
    type: 'catalyst',
    specialized: 'em',
    effectname: 'Rapids',
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
      'Upon causing a Vaporize, Electro-Charged, Frozen, Bloom, or a Hydro-infused Swirl reaction, increases ATK by {0} for 12s.',
    ref: [['20%'], ['25%'], ['30%'], ['35%'], ['40%']]
  },
  {
    uid: 14506,
    name: 'everlastingmoonglow',
    fullName: 'Everlasting Moonglow',
    url: 'UI_EquipIcon_Catalyst_Kaleido_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'hp%',
    effectname: 'Byakuya Kougetsu',
    action: [
      {
        actionType: 'passive',
        sourceStats: ['hp'],
        values: [
          [
            { scaling: 'healing', coef: 0.1 },
            { scaling: 'normal', coef: 0.01, source: ['hp', 0] }
          ],
          [
            { scaling: 'healing', coef: 0.125 },
            { scaling: 'normal', coef: 0.015, source: ['hp', 0] }
          ],
          [
            { scaling: 'healing', coef: 0.15 },
            { scaling: 'normal', coef: 0.02, source: ['hp', 0] }
          ],
          [
            { scaling: 'healing', coef: 0.175 },
            { scaling: 'normal', coef: 0.025, source: ['hp', 0] }
          ],
          [
            { scaling: 'healing', coef: 0.2 },
            { scaling: 'normal', coef: 0.03, source: ['hp', 0] }
          ]
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
    uid: 14409,
    name: 'eyeofperception',
    fullName: 'Eye of Perception',
    url: 'UI_EquipIcon_Catalyst_Truelens_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'atk%',
    effectname: 'Echo',
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
    uid: 14401,
    name: 'favoniuscodex',
    fullName: 'Favonius Codex',
    url: 'UI_EquipIcon_Catalyst_Zephyrus_Awaken',
    rating: 4,
    type: 'catalyst',
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
    uid: 14425,
    name: 'flowingpurity',
    fullName: 'Flowing Purity',
    url: 'UI_EquipIcon_Catalyst_Vorpal_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'atk%',
    effectname: 'Unfinished Masterpiece',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'dmgIncreaseElemental', coef: 0.08 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.1 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.12 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.14 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.16 }]
        ]
      },
      {
        actionType: 'toggle',
        values: [
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.0000048,
              source: ['hp', 0, 25000]
            }
          ],
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.000006,
              source: ['hp', 0, 25000]
            }
          ],
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.0000072,
              source: ['hp', 0, 25000]
            }
          ],
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.0000084,
              source: ['hp', 0, 25000]
            }
          ],
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.0000096,
              source: ['hp', 0, 25000]
            }
          ]
        ]
      }
    ],
    effect:
      'When using an Elemental Skill, All Elemental DMG Bonus will be increased by {0} for 15s, and a Bond of Life worth 24% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, every 1,000 HP cleared in the process will provide {1} All Elemental DMG Bonus, up to a maximum of {2}. This effect lasts 15s.',
    ref: [
      ['8%', '2%', '12%'],
      ['10%', '2.5%', '15%'],
      ['12%', '3%', '18%'],
      ['14%', '3.5%', '21%'],
      ['16%', '4%', '24%']
    ]
  },
  {
    uid: 14412,
    name: 'frostbearer',
    fullName: 'Frostbearer',
    url: 'UI_EquipIcon_Catalyst_Everfrost_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'atk%',
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
    uid: 14417,
    name: 'fruitoffulfillment',
    fullName: 'Fruit of Fulfillment',
    url: 'UI_EquipIcon_Catalyst_Arakalari_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'energy',
    effectname: 'Full Circle',
    action: [
      {
        actionType: 'toggle',
        values: [
          [
            { scaling: 'em', coef: 24 },
            { scaling: 'atk%', coef: -0.05 }
          ],
          [
            { scaling: 'em', coef: 27 },
            { scaling: 'atk%', coef: -0.05 }
          ],
          [
            { scaling: 'em', coef: 30 },
            { scaling: 'atk%', coef: -0.05 }
          ],
          [
            { scaling: 'em', coef: 33 },
            { scaling: 'atk%', coef: -0.05 }
          ],
          [
            { scaling: 'em', coef: 36 },
            { scaling: 'atk%', coef: -0.05 }
          ]
        ]
      }
    ],
    effect:
      'Obtain the "Wax and Wane" effect after an Elemental Reaction is triggered, gaining {0} Elemental Mastery while losing 5% atk%. For every 0.3s, 1 stack of Wax and Wane can be gained. Max 5 stacks. For every 6s that go by without an Elemental Reaction being triggered, 1 stack will be lost. This effect can be triggered even when the character is off-field.',
    ref: [['24'], ['27'], ['30'], ['33'], ['36']]
  },
  {
    uid: 14414,
    name: 'hakushinring',
    fullName: 'Hakushin Ring',
    url: 'UI_EquipIcon_Catalyst_Bakufu_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'energy',
    effectname: 'Sakura Saiguu',
    action: [
      {
        actionType: 'toggle',
        target: 'nearby',
        unique: true,
        values: [
          [{ scaling: 'dmgIncreaseElemental', coef: 0.1 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.125 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.15 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.175 }],
          [{ scaling: 'dmgIncreaseElemental', coef: 0.2 }]
        ]
      }
    ],
    effect:
      'After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a {0} Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.',
    ref: [['10%'], ['12.5%'], ['15%'], ['17.5%'], ['20%']]
  },
  {
    uid: 14505,
    name: 'jadefallssplendor',
    fullName: "Jadefall's Splendor",
    url: 'UI_EquipIcon_Catalyst_Morax_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'hp%',
    effectname: 'Primordial Jade Regalia',
    action: [
      {
        actionType: 'toggle',
        sourceStats: ['hp'],
        values: [
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.03,
              source: ['hp', 0, 40000, 1000]
            }
          ],
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.05,
              source: ['hp', 0, 40000, 1000]
            }
          ],
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.07,
              source: ['hp', 0, 40000, 1000]
            }
          ],
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.09,
              source: ['hp', 0, 40000, 1000]
            }
          ],
          [
            {
              scaling: 'dmgIncreaseElemental',
              coef: 0.11,
              source: ['hp', 0, 40000, 1000]
            }
          ]
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
    uid: 14509,
    name: 'kagurasverity',
    fullName: "Kagura's Verity",
    url: 'UI_EquipIcon_Catalyst_Narukami_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'critdmg',
    effectname: 'Kagura Dance of the Sacred Sakura',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'skill', coef: [0.12, 0.12, 0.12] },
            { scaling: 'dmgIncreaseElemental', coef: [0, 0, 0.12] }
          ],
          [
            { scaling: 'skill', coef: [0.15, 0.15, 0.15] },
            { scaling: 'dmgIncreaseElemental', coef: [0, 0, 0.15] }
          ],
          [
            { scaling: 'skill', coef: [0.18, 0.18, 0.18] },
            { scaling: 'dmgIncreaseElemental', coef: [0, 0, 0.18] }
          ],
          [
            { scaling: 'skill', coef: [0.21, 0.21, 0.21] },
            { scaling: 'dmgIncreaseElemental', coef: [0, 0, 0.21] }
          ],
          [
            { scaling: 'skill', coef: [0.24, 0.24, 0.24] },
            { scaling: 'dmgIncreaseElemental', coef: [0, 0, 0.24] }
          ]
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
    uid: 14502,
    name: 'lostprayertothesacredwinds',
    fullName: 'Lost Prayer to the Sacred Winds',
    url: 'UI_EquipIcon_Catalyst_Fourwinds_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'critrate',
    effectname: 'Boundless Blessing',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'moveSpd', coef: 0.1 }],
          [{ scaling: 'moveSpd', coef: 0.1 }],
          [{ scaling: 'moveSpd', coef: 0.1 }],
          [{ scaling: 'moveSpd', coef: 0.1 }],
          [{ scaling: 'moveSpd', coef: 0.1 }]
        ]
      },
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'dmgIncreaseElemental', coef: [0.08, 0.08, 0.08, 0.08] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.1, 0.1, 0.1, 0.1] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.12, 0.12, 0.12, 0.12] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.14, 0.14, 0.14, 0.14] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.16, 0.16, 0.16, 0.16] }]
        ]
      }
    ],
    effect:
      'Increases Movement SPD by 10%. When in battle, gain a {0} Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  {
    uid: 14301,
    name: 'magicguide',
    fullName: 'Magic Guide',
    url: 'UI_EquipIcon_Catalyst_Intro_Awaken',
    rating: 3,
    type: 'catalyst',
    specialized: 'em',
    effectname: 'Bane of Storm and Tide',
    action: [
      {
        actionType: 'passive',
        values: [
          [
            { scaling: 'hydro', coef: 0.12 },
            { scaling: 'electro', coef: 0.12 }
          ],
          [
            { scaling: 'hydro', coef: 0.15 },
            { scaling: 'electro', coef: 0.15 }
          ],
          [
            { scaling: 'hydro', coef: 0.18 },
            { scaling: 'electro', coef: 0.18 }
          ],
          [
            { scaling: 'hydro', coef: 0.21 },
            { scaling: 'electro', coef: 0.21 }
          ],
          [
            { scaling: 'hydro', coef: 0.24 },
            { scaling: 'electro', coef: 0.24 }
          ]
        ]
      }
    ],
    effect: 'Increases DMG against opponents affected by Hydro or Electro by {0}.',
    ref: [['12%'], ['15%'], ['18%'], ['21%'], ['24%']]
  },
  {
    uid: 14407,
    name: 'mappamare',
    fullName: 'Mappa Mare',
    url: 'UI_EquipIcon_Catalyst_Exotic_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'em',
    effectname: 'Infusion Scroll',
    action: [
      {
        actionType: 'stack',
        values: [
          [{ scaling: 'dmgIncreaseElemental', coef: [0.08, 0.08] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.1, 0.1] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.12, 0.12] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.14, 0.14] }],
          [{ scaling: 'dmgIncreaseElemental', coef: [0.16, 0.16] }]
        ]
      }
    ],
    effect:
      'Triggering an Elemental reaction grants a {0} Elemental DMG Bonus for 10s. Max 2 stacks.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  {
    uid: 14504,
    name: 'memoryofdust',
    fullName: 'Memory of Dust',
    url: 'UI_EquipIcon_Catalyst_Kunwu_Awaken',
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
    uid: 14415,
    name: 'oathsworneye',
    fullName: 'Oathsworn Eye',
    url: 'UI_EquipIcon_Catalyst_Jyanome_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'atk%',
    effectname: 'People of the Faltering Light',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'energy', coef: 0.24 }],
          [{ scaling: 'energy', coef: 0.3 }],
          [{ scaling: 'energy', coef: 0.36 }],
          [{ scaling: 'energy', coef: 0.42 }],
          [{ scaling: 'energy', coef: 0.48 }]
        ]
      }
    ],
    effect: 'Increases Energy Recharge by {0} for 10s after using an Elemental Skill.',
    ref: [['24%'], ['30%'], ['36%'], ['42%'], ['48%']]
  },
  {
    uid: 14303,
    name: 'otherworldlystory',
    fullName: 'Otherworldly Story',
    url: 'UI_EquipIcon_Catalyst_Lightnov_Awaken',
    rating: 3,
    type: 'catalyst',
    specialized: 'energy',
    effectname: 'Energy Shower',
    effect: 'Each Elemental Orb or Particle collected restores {0} HP.',
    ref: [['1%'], ['1.25%'], ['1.5%'], ['1.75%'], ['2%']]
  },
  {
    uid: 14406,
    name: 'prototypeamber',
    fullName: 'Prototype Amber',
    url: 'UI_EquipIcon_Catalyst_Proto_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'hp%',
    effectname: 'Gilding',
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
    uid: 14404,
    name: 'royalgrimoire',
    fullName: 'Royal Grimoire',
    url: 'UI_EquipIcon_Catalyst_Theocrat_Awaken',
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
    uid: 14403,
    name: 'sacrificialfragments',
    fullName: 'Sacrificial Fragments',
    url: 'UI_EquipIcon_Catalyst_Fossil_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'em',
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
    uid: 14424,
    name: 'sacrificialjade',
    fullName: 'Sacrificial Jade',
    url: 'UI_EquipIcon_Catalyst_Yue_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'critrate',
    effectname: 'Jade Circulation',
    effect:
      'When not on the field for more than 5s, Max HP will be increased by {0} and Elemental Mastery will be increased by {1}. These effects will be canceled after the wielder has been on the field for 10s.',
    ref: [
      ['32%', '40'],
      ['40%', '50'],
      ['48%', '60'],
      ['56%', '70'],
      ['64%', '80']
    ],
    action: [
      {
        actionType: 'toggle',
        values: [
          [
            { scaling: 'hp%', coef: 0.32 },
            { scaling: 'em', coef: 40 }
          ],
          [
            { scaling: 'hp%', coef: 0.4 },
            { scaling: 'em', coef: 50 }
          ],
          [
            { scaling: 'hp%', coef: 0.48 },
            { scaling: 'em', coef: 60 }
          ],
          [
            { scaling: 'hp%', coef: 0.56 },
            { scaling: 'em', coef: 70 }
          ],
          [
            { scaling: 'hp%', coef: 0.64 },
            { scaling: 'em', coef: 80 }
          ]
        ]
      }
    ]
  },
  {
    uid: 14501,
    name: 'skywardatlas',
    fullName: 'Skyward Atlas',
    url: 'UI_EquipIcon_Catalyst_Dvalin_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'atk%',
    effectname: 'Wandering Clouds',
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
    uid: 14405,
    name: 'solarpearl',
    fullName: 'Solar Pearl',
    url: 'UI_EquipIcon_Catalyst_Resurrection_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'critrate',
    effectname: 'Solar Shine',
    action: [
      {
        actionType: 'toggle',
        values: [
          [
            { scaling: 'skill', coef: 0.2 },
            { scaling: 'burst', coef: 0.2 },
            { scaling: 'normal', coef: 0.2 }
          ],
          [
            { scaling: 'skill', coef: 0.25 },
            { scaling: 'burst', coef: 0.25 },
            { scaling: 'normal', coef: 0.25 }
          ],
          [
            { scaling: 'skill', coef: 0.3 },
            { scaling: 'burst', coef: 0.3 },
            { scaling: 'normal', coef: 0.3 }
          ],
          [
            { scaling: 'skill', coef: 0.35 },
            { scaling: 'burst', coef: 0.35 },
            { scaling: 'normal', coef: 0.35 }
          ],
          [
            { scaling: 'skill', coef: 0.4 },
            { scaling: 'burst', coef: 0.4 },
            { scaling: 'normal', coef: 0.4 }
          ]
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
    uid: 14402,
    name: 'thewidsith',
    fullName: 'The Widsith',
    url: 'UI_EquipIcon_Catalyst_Troupe_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'critdmg',
    effectname: 'Debut',
    action: [
      {
        actionType: 'select',
        values: [
          [
            { scaling: 'atk%', coef: 0.6 },
            { scaling: 'dmgIncreaseElemental', coef: 0.48 },
            { scaling: 'em', coef: 240 }
          ],
          [
            { scaling: 'atk%', coef: 0.75 },
            { scaling: 'dmgIncreaseElemental', coef: 0.6 },
            { scaling: 'em', coef: 300 }
          ],
          [
            { scaling: 'atk%', coef: 0.9 },
            { scaling: 'dmgIncreaseElemental', coef: 0.72 },
            { scaling: 'em', coef: 360 }
          ],
          [
            { scaling: 'atk%', coef: 1.05 },
            { scaling: 'dmgIncreaseElemental', coef: 0.84 },
            { scaling: 'em', coef: 420 }
          ],
          [
            { scaling: 'atk%', coef: 1.2 },
            { scaling: 'dmgIncreaseElemental', coef: 0.96 },
            { scaling: 'em', coef: 480 }
          ]
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
    uid: 14302,
    name: 'thrillingtalesofdragonslayers',
    fullName: 'Thrilling Tales of Dragon Slayers',
    url: 'UI_EquipIcon_Catalyst_Pulpfic_Awaken',
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
    uid: 14514,
    name: 'tomeoftheeternalflow',
    fullName: 'Tome of the Eternal Flow',
    url: 'UI_EquipIcon_Catalyst_Iudex_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'critdmg',
    effectname: 'Aeon Wave',
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
        actionType: 'stack',
        values: [
          [{ scaling: 'charged', coef: [0.14, 0.14, 0.14] }],
          [{ scaling: 'charged', coef: [0.18, 0.18, 0.18] }],
          [{ scaling: 'charged', coef: [0.22, 0.22, 0.22] }],
          [{ scaling: 'charged', coef: [0.26, 0.26, 0.26] }],
          [{ scaling: 'charged', coef: [0.3, 0.3, 0.3] }]
        ]
      }
    ],
    effect:
      "HP is increased by {0}. When current HP increases or decreases, Charged Attack DMG will be increased by {1} for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the character has 3 stacks or a third stack's duration refreshes, {2} Energy will be restored. This Energy restoration effect can be triggered once every 12s.",
    ref: [
      ['16%', '14%', '8'],
      ['20%', '18%', '9'],
      ['24%', '22%', '10'],
      ['28%', '26%', '11'],
      ['32%', '30%', '12']
    ]
  },
  {
    uid: 14512,
    name: 'tulaytullahsremembrance',
    fullName: "Tulaytullah's Remembrance",
    url: 'UI_EquipIcon_Catalyst_Alaya_Awaken',
    rating: 5,
    type: 'catalyst',
    specialized: 'critdmg',
    effectname: 'Bygone Azure Teardrop',
    action: [
      {
        actionType: 'passive',
        values: [
          [{ scaling: 'normalATKSpd', coef: 0.1 }],
          [{ scaling: 'normalATKSpd', coef: 0.125 }],
          [{ scaling: 'normalATKSpd', coef: 0.15 }],
          [{ scaling: 'normalATKSpd', coef: 0.175 }],
          [{ scaling: 'normalATKSpd', coef: 0.2 }]
        ]
      },
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'normal', coef: [0.096, 0.096, 0.096, 0.096, 0.096] }],
          [{ scaling: 'normal', coef: [0.12, 0.12, 0.12, 0.12, 0.12] }],
          [{ scaling: 'normal', coef: [0.144, 0.144, 0.144, 0.144, 0.144] }],
          [{ scaling: 'normal', coef: [0.168, 0.168, 0.168, 0.168, 0.168] }],
          [{ scaling: 'normal', coef: [0.192, 0.192, 0.192, 0.192, 0.192] }]
        ]
      }
    ],
    effect:
      'Normal Attack SPD is increased by {0}. After the wielder unleashes an Elemental Skill, Normal Attack DMG will increase by {1} every second for 14s. After hitting an opponent with a Normal Attack during this duration, Normal Attack DMG will be increased by {2}. This increase can be triggered once every 0.3s. The maximum Normal Attack DMG increase per single duration of the overall effect is {3}. The effect will be removed when the wielder leaves the field, and using the Elemental Skill again will reset all DMG buffs. \nMODIFIED: Each stack increases Normal Attack DMG by {2}',
    ref: [
      ['10%', '4.8%', '9.6%', '48%'],
      ['12.5%', '6%', '12%', '60%'],
      ['15%', '7.2%', '14.4%', '72%'],
      ['17.5%', '8.4%', '16.8%', '84%'],
      ['20%', '9.6%', '19.2%', '96%']
    ]
  },
  {
    uid: 14305,
    name: 'twinnephrite',
    fullName: 'Twin Nephrite',
    url: 'UI_EquipIcon_Catalyst_Phoney_Awaken',
    rating: 3,
    type: 'catalyst',
    specialized: 'critrate',
    effectname: 'Guerilla Tactics',
    action: [
      {
        actionType: 'toggle',
        values: [
          [
            { scaling: 'atk%', coef: 0.12 },
            { scaling: 'moveSpd', coef: 0.12 }
          ],
          [
            { scaling: 'atk%', coef: 0.14 },
            { scaling: 'moveSpd', coef: 0.14 }
          ],
          [
            { scaling: 'atk%', coef: 0.16 },
            { scaling: 'moveSpd', coef: 0.16 }
          ],
          [
            { scaling: 'atk%', coef: 0.18 },
            { scaling: 'moveSpd', coef: 0.18 }
          ],
          [
            { scaling: 'atk%', coef: 0.2 },
            { scaling: 'moveSpd', coef: 0.2 }
          ]
        ]
      }
    ],
    effect: 'Defeating an opponent increases Movement SPD and ATK by {0} for 15s.',
    ref: [['12%'], ['14%'], ['16%'], ['18%'], ['20%']]
  },
  {
    uid: 14416,
    name: 'wanderingevenstar',
    fullName: 'Wandering Evenstar',
    url: 'UI_EquipIcon_Catalyst_Pleroma_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'em',
    effectname: 'Wildling Nightstar',
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
        // flat bonus atk = 0.072 * EM
        sourceStats: ['em'],
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
    uid: 14410,
    name: 'wineandsong',
    fullName: 'Wine and Song',
    url: 'UI_EquipIcon_Catalyst_Outlaw_Awaken',
    rating: 4,
    type: 'catalyst',
    specialized: 'energy',
    effectname: 'Ever-Changing',
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
      'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by {0} for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by {1} for 5s.',
    ref: [
      ['14%', '20%'],
      ['16%', '25%'],
      ['18%', '30%'],
      ['20%', '35%'],
      ['22%', '40%']
    ]
  }
];
