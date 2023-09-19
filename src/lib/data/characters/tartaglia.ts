import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'tartaglia',
  fullName: 'Tartaglia',
  rating: 5,
  weapon: 'bow',
  region: 'snezhnaya',
  vision: 'hydro',
  specialized: 'hydro',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Cutting Torrent',
    skill: 'Foul Legacy: Raging Tide',
    burst: 'Havoc: Obliteration'
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
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: '6 - Hit DMG',
      tag: 'N6',
      damageBonus: 'normal',
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
      name: 'Riptide Burst',
      tag: 'Rb',
      damageBonus: 'none',
      hasOwnDMGType: 'hydro',
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
  charged: [
    {
      name: 'Aimed Shot',
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
    },
    {
      name: 'Fully-Charged Aimed Shot',
      tag: 'C1',
      hasOwnDMGType: 'hydro',
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
      name: 'Riptide Flash',
      tag: 'Rf',
      hasOwnDMGType: 'hydro',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param9'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param9'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param9'
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
            param: 'param11'
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
            param: 'param12'
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
            param: 'param13'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Stance Change DMG',
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
      name: '1 - Hit DMG',
      tag: 'E1',
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
      name: '2 - Hit DMG',
      tag: 'E2',
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
      name: '3 - Hit DMG',
      tag: 'E3',
      damageBonus: 'normal',
      damage: [
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
      tag: 'E4',
      damageBonus: 'normal',
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
      name: '5 - Hit DMG',
      tag: 'E5',
      damageBonus: 'normal',
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
      name: '6 - Hit DMG',
      tag: 'E6',
      damageBonus: 'normal',
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
        ]
      ]
    },
    {
      name: 'Charged Attack DMG',
      tag: 'EC',
      damageBonus: 'normal',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param9'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param10'
          }
        ]
      ]
    },
    {
      name: 'Riptide Slash',
      tag: 'RS',
      damageBonus: 'skill',
      icd: 0,
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
  burst: [
    {
      name: 'Burst DMG: Melee',
      tag: 'QM',
      damageBonus: 'burst',
      icd: 0,
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
      name: 'Burst DMG: Ranged',
      tag: 'QR',
      damageBonus: 'burst',
      icd: 0,
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
      name: 'Riptide Blast DMG',
      tag: 'RB',
      damageBonus: 'burst',
      icd: 0,
      damage: [
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
      name: 'Master of Weaponry',
      url: 'UI_Talent_S_Tartaglia_07',
      description: "Increases your own party members' **Normal Attack** Level by 1.",
      target: 'party',
      actionType: 'passive',
      values: [
        {
          scaling: 'normalLevel',
          coef: 1
        }
      ]
    }
  ],
  offField: []
};

export default charName;
