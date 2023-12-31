import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000091,
  url: 'UI_AvatarIcon_Navia',
  id: 'navia',
  name: 'navia',
  fullName: 'Navia',
  region: 'fontaine',
  rating: 5,
  weapon: 'claymore',
  vision: 'geo',
  specialized: 'critdmg',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Blunt Refusal',
    skill: 'Ceremonial Crystalshot',
    burst: "As the Sunlit Sky's Singing Salute"
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
      name: 'Charged Attack Cyclic DMG',
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
      name: 'Rosula Shardshot DMG',
      tag: 'E',
      damageBonus: 'skill',
      hasOwnSpecialMultiplier: 'Crystal Sharapnel',
      url: 'Skill_S_Navia_01',
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
      name: 'Surging Blade DMG',
      damageBonus: 'skill',
      url: 'Skill_S_Navia_01',
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
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Navia_01',
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
      name: 'Cannon Fire Support DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Navia_01',
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
      name: 'Total Cannon Fire Support DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Navia_01',
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
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ],
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
      name: 'Shots Landed.',
      url: 'Skill_S_Navia_01',
      description: 'Boosts base skill damage when all shots land.',
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'skillSpecialMultiplier',
          coef: [1.0, 0.05, 0.05, 0.05, 0.05, 0.16, 0.04, 0.2, 0.066, 0.234, 0.1]
        }
      ]
    },
    {
      name: 'Crystal Shrapnel',
      url: 'Skill_S_Navia_01',
      hideAtConstellation: 6,
      description:
        'When more than 3 stacks of Crystal Shrapnel are consumed, every stack consumed beyond those 3 will increase the DMG dealt by this Gunbrella attack by an additional 15%.',
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'skill',
          coef: [0.15, 0.15, 0.15]
        }
      ]
    },
    {
      name: "The Flexible Finesse of the Spina's President",
      url: 'Skill_S_Navia_01',
      constellation: 6,
      description:
        '**MODIFIED:** Crystal Shrapnel Buff + C6.\n\nWhen more than 3 stacks of Crystal Shrapnel are consumed, every stack consumed beyond those 3 will increase the DMG dealt by this Gunbrella attack by an additional 15%.\nEach stack consumed also increases the CRIT DMG of that Ceremonial Crystalshot by 45%, and any stacks consumed beyond the first 3 are returned to Navia.',
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'skill',
          coef: [0.15, 0.15, 0.15]
        },
        {
          scaling: 'skillCritDMG',
          coef: [0.45, 0.45, 0.45]
        }
      ]
    },
    {
      name: 'Undisclosed Distribution Channels',
      url: 'UI_Talent_S_Navia_05',
      description:
        "For 4s after using **Ceremonial Crystalshot**, the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be converted into Geo DMG which cannot be overridden by other Elemental infusions, and the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be increased by 40%.",
      level: 2,
      target: 'self',
      infusion: 'geo',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normal',
          coef: 0.4
        },
        {
          scaling: 'charged',
          coef: 0.4
        },
        {
          scaling: 'plunge',
          coef: 0.4
        }
      ]
    },
    {
      name: 'Mutual Assistance Network',
      url: 'UI_Talent_S_Navia_06',
      description:
        'For each Pyro/Electro/Cryo/Hydro party member, Navia gains 20% increased ATK. This effect can stack up to 2 times.',
      level: 8,
      target: 'self',
      hasVisionRequirement: ['hydro', 'pyro', 'cryo', 'electro'],
      actionType: 'visionMatch',
      values: [
        {
          scaling: 'transientBlossoms',
          coef: [0.2, 0.2]
        }
      ]
    },
    {
      name: "The President's Pursuit of Victory",
      url: 'UI_Talent_S_Navia_02',
      description:
        "Each stack of Crystal Shrapnel consumed will increase the CRIT Rate of this **Ceremonial Crystalshot** instance by 12%. CRIT Rate can be increased by up to 36% in this way.\nIn addition, when Ceremonial Crystalshot hits an opponent, one Cannon Fire Support shot from **As the Sunlit Sky's Singing Salute** will strike near the location of the hit. Up to one instance of Cannon Fire Support can be triggered each time Ceremonial Crystalshot is used, and DMG dealt by said Cannon Fire Support this way is considered Elemental Burst DMG.",
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'skillCritRate',
          coef: [0.12, 0.12, 0.12]
        }
      ]
    },
    {
      name: 'The Oathsworn Never Capitulate',
      url: 'UI_Talent_S_Navia_03',
      description:
        "When **As the Sunlit Sky's Singing Salute** hits an opponent, that opponent's Geo RES will be decreased by 20% for 8s.",
      constellation: 4,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'geoRes',
          coef: 0.2
        }
      ]
    }
  ]
};

export default charName;
