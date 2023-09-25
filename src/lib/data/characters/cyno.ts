import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'cyno',
  fullName: 'Cyno',
  rating: 5,
  weapon: 'polearm',
  region: 'sumeru',
  vision: 'electro',
  specialized: 'critdmg',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: "Invoker's Spear",
    skill: 'Chasmic Soulfarer',
    burst: "Wolf's Swiftness"
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
            param: 'param4'
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
            param: 'param5'
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
            param: 'param8'
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
            param: 'param9'
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
            param: 'param10'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Skill DMG',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Cyno_01',
      hasOwnBonusDMG: 'mortuaryRite',
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
      name: 'Mortuary Rite DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Cyno_02',
      hasOwnBonusDMG: 'mortuaryRite',
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
      name: '1x Duststalker Bolt',
      damageBonus: 'skill',
      url: 'UI_Talent_S_Cyno_05',
      hasOwnBonusFlatDMG: 'duststalkerBolt',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param2',
            coef: 1.0
          }
        ]
      ]
    },
    {
      name: '3x Dustalker Bolts',
      tag: 'A1',
      damageBonus: 'skill',
      url: 'UI_Talent_S_Cyno_05',
      hasOwnBonusFlatDMG: 'duststalkerBolt',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param2',
            coef: 1.0
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2',
            coef: 1.0
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2',
            coef: 1.0
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: '1-Hit DMG',
      tag: 'Q1',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'pactsworn',
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
      name: '2-Hit DMG',
      tag: 'Q2',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'pactsworn',
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
      name: '3-Hit DMG',
      tag: 'Q3',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'pactsworn',
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
      name: '4-Hit DMG',
      tag: 'Q4',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'pactsworn',
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
      name: '5-Hit DMG',
      tag: 'Q5',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'pactsworn',
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
      name: 'Charged Attack DMG',
      tag: 'QC',
      damageBonus: 'charged',
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
      name: 'Plunge DMG',
      tag: 'QP',
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
      name: 'Low Plunge DMG',
      tag: 'QL',
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
      name: 'High Plunge DMG',
      tag: 'QH',
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
  actions: [
    {
      name: 'Pactsworn Pathclearer',
      url: 'Skill_E_Cyno_01',
      description:
        "Cyno's Normal, Charged, and Plunging Attacks will be converted to Electro DMG that cannot be overridden.\n·Cyno's Elemental Mastery and resistance to interruption will increase, and he gains immunity to Electro-Charged DMG. This effect will be canceled when Cyno leaves the field and lasts a maximum of 18s.",
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 100
        }
      ]
    },
    {
      name: 'Featherfall Judgment',
      url: 'UI_Talent_S_Cyno_05',
      description:
        "When Cyno is in the Pactsworn Pathclearer state activated by **Sacred Rite: Wolf's Swiftness**, Cyno will enter the Endseer stance at intervals. If he activates **Secret Rite: Chasmic Soulfarer** while affected by this stance, he will activate the Judication effect, increasing the DMG of this Secret Rite: Chasmic Soulfarer by 35%, and firing off 3 Duststalker Bolts that deal 100% of Cyno's ATK as Electro DMG.\nDuststalker Bolt DMG is considered Elemental Skill DMG.",
      level: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'mortuaryRite',
          coef: 0.35
        }
      ]
    },
    {
      name: 'Authority Over the Nine Bows',
      url: 'UI_Talent_S_Cyno_06',
      description:
        "Cyno's DMG values will be increased based on his Elemental Mastery as follows:\n·Pactsworn Pathclearer's Normal Attack DMG is increased by 150% of his Elemental Mastery.\n·Duststalker Bolt DMG from his Passive Talent Featherfall Judgment is increased by 250% of his Elemental Mastery.",
      level: 8,
      target: 'self',
      actionType: 'toggle',
      sourceStats: ['em'],
      values: [
        {
          scaling: 'duststalkerBolt',
          coef: 2.5,
          source: ['em', 0]
        },
        {
          scaling: 'pactsworn',
          coef: 1.5,
          source: ['em', 0]
        }
      ]
    },
    {
      name: 'Ordinance: Unceasing Vigil',
      url: 'UI_Talent_S_Cyno_01',
      description:
        "After using **Sacred Rite: Wolf's Swiftness**, Cyno's Normal Attack SPD will be increased by 20% for 10s. If the Judication effect of his Passive Talent Featherfall Judgment is triggered during **Secret Rite: Chasmic Soulfarer**, the duration of this increase will be refreshed.",
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Ceremony: Homecoming of Spirits',
      url: 'UI_Talent_S_Cyno_02',
      description:
        "When Cyno's Normal Attacks hit opponents, his Electro DMG Bonus will increase by 10% for 4s. This effect can be triggered once every 0.1s. Max 5 stacks.",
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'electro',
          coef: [0.1, 0.1, 0.1, 0.1, 0.1]
        }
      ]
    }
  ]
};

export default charName;
