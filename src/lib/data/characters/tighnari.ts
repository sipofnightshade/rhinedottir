import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'tighnari',
  fullName: 'Tighnari',
  rating: 5,
  weapon: 'bow',
  region: 'sumeru',
  vision: 'dendro',
  specialized: 'dendro',
  c3: 'skill',
  c5: 'burst',
  burstCost: 40,
  talentNames: {
    normal: 'Khanda Barrier-Buster',
    skill: 'Vijnana-Phala Mine',
    burst: "Fashioner's Tanglevine Shaft"
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
      name: 'Aimed Shot',
      tag: 'C1',
      hasOwnBonusDMG: 'tanglevine',
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
      name: 'Level 1 Aimed Shot',
      hasOwnBonusDMG: 'tanglevine',
      tag: 'C2',
      damageBonus: 'charged',
      hasOwnDMGType: 'dendro',
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
      name: 'Wreath Arrow Total DMG',
      hasOwnBonusDMG: 'tanglevine',
      hasOwnDMGType: 'dendro',
      tag: 'C3',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param7'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ]
      ]
    },
    {
      name: 'Wreath Arrow DMG',
      hasOwnBonusDMG: 'tanglevine',
      hasOwnDMGType: 'dendro',
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
      name: 'Clusterbloom Arrow x1 DMG',
      hasOwnBonusDMG: 'tanglevine',
      hasOwnDMGType: 'dendro',
      damageBonus: 'charged',
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
      name: 'C6 Wreath Arrow Total DMG',
      hasOwnBonusDMG: 'tanglevine',
      hasOwnDMGType: 'dendro',
      constellation: 6,
      tag: 'X6',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param7'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param8',
            coef: 1.5
          }
        ]
      ]
    },
    {
      name: 'C6 Clusterbloom Arrow DMG',
      hasOwnBonusDMG: 'tanglevine',
      constellation: 6,
      hasOwnDMGType: 'dendro',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param8',
            coef: 1.5
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
      tag: 'E',
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
  burst: [
    {
      name: 'Tanglevine Shaft DMG',
      hasOwnBonusDMG: 'tanglevine',
      damageBonus: 'burst',
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
      name: 'Secondary Tanglevine Shaft DMG',
      hasOwnBonusDMG: 'tanglevine',
      damageBonus: 'burst',
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
      name: 'Total Tanglevine Shaft DMG',
      tag: 'Q',
      damageBonus: 'burst',
      hasOwnBonusDMG: 'tanglevine',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1'
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
      name: 'Keen Sight',
      url: 'UI_Talent_S_Tighnari_05',
      description:
        'After Tighnari fires a **Wreath Arrow**, his Elemental Mastery is increased by 50 for 4s.',
      level: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 50
        }
      ]
    },
    {
      name: 'Scholarly Blade',
      url: 'UI_Talent_S_Tighnari_06',
      description:
        "For every point of Elemental Mastery Tighnari possesses, his Charged Attack and **Fashioner's Tanglevine Shaft** DMG are increased by 0.06%.\nThe maximum DMG Bonus obtainable this way is 60%.",
      level: 8,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['em'],
      values: [
        {
          scaling: 'tanglevine',
          coef: 0.0006,
          source: ['em', 0, 1000]
        }
      ]
    },
    {
      name: 'Beginnings Determined at the Roots',
      url: 'UI_Talent_S_Tighnari_01',
      description: "Tighnari's Charged Attack CRIT Rate is increased by 15%.",
      constellation: 1,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'critrate',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Origins Known From the Stem',
      url: 'UI_Talent_S_Tighnari_02',
      description:
        "When there are opponents within the Vijnana-Khanda Field created by **Vijnana-Phala Mine**, Tighnari gains 20% Dendro DMG Bonus.\nThe effect will last up to 6s if the field's duration ends or if it no longer has opponents within it.",
      constellation: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'dendro',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Withering Glimpsed in the Leaves',
      url: 'UI_Talent_S_Tighnari_03',
      description:
        "When **Fashioner's Tanglevine Shaft** is unleashed, all nearby party members gain 60 Elemental Mastery for 8s. If the Fashioner's Tanglevine Shaft triggers a Burning, Bloom, Quicken, or Spread reaction, their Elemental Mastery will be further increased by 60. This latter case will also refresh the buff state's duration.",
      constellation: 4,
      target: 'party',
      actionType: 'stack',
      values: [
        {
          scaling: 'em',
          coef: [60, 60]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
