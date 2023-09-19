import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'collei',
  fullName: 'Collei',
  rating: 4,
  weapon: 'bow',
  region: 'sumeru',
  vision: 'dendro',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: "Supplicant's Bowmanship",
    skill: 'Floral Brush',
    burst: 'Trump-Card Kitty'
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
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Fully-Charged Aimed Shot',
      tag: 'C1',
      hasOwnDMGType: 'dendro',
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
            param: 'param7'
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
            param: 'param8'
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
            param: 'param9'
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
      name: 'Explosion DMG',
      tag: 'Q1',
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
      name: 'Leap DMG',
      tag: 'Q2',
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
      name: 'Total Burst DMG',
      tag: 'QT',
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          },
          {
            scaling: 'atk',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Cuilein-Anbar',
      tag: 'X6',
      damageBonus: 'burst',
      constellation: 6,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param2',
            coef: 2.0
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Deepwood Patrol',
      url: 'UI_Talent_S_Collei_01',
      description:
        "When in the party and not on the field, Collei's Energy Recharge is increased by 20%.",
      constellation: 1,
      target: 'notactive',
      actionType: 'passive',
      values: [
        {
          scaling: 'energy',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Gift of the Woods',
      url: 'UI_Talent_S_Collei_03',
      description:
        "When in the party and not on the field, Collei's Energy Recharge is increased by 20%.",
      constellation: 1,
      target: 'nearby',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 60
        }
      ]
    }
  ],
  offField: []
};

export default charName;
