import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'chongyun',
  name: 'chongyun',
  fullName: 'Chongyun',
  rating: 4,
  weapon: 'claymore',
  region: 'liyue',
  vision: 'cryo',
  specialized: 'atk%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 40,
  talentNames: {
    normal: 'Demonbane',
    skill: "Spirit Blade: Chonghua's Layered Frost",
    burst: 'Spirit Blade: Cloud-Parting Star'
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
      name: 'Ice Unleashed',
      tag: 'X1',
      hasOwnDMGType: 'cryo',
      damageBonus: 'normal',
      constellation: 1,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.5
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.5
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.5
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
      name: 'Skill DMG',
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Chongyun_01',
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
      name: 'Burst DMG - 1 Sword',
      damageBonus: 'burst',
      url: 'Skill_E_Chongyun_01',
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
      name: 'Burst DMG - 3 Swords',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Chongyun_01',
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
        ]
      ]
    },
    {
      name: 'Burst DMG - 4 Swords',
      tag: 'QX',
      constellation: 6,
      damageBonus: 'burst',
      url: 'UI_Talent_S_Chongyun_04',
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
        ]
      ]
    }
  ],
  actions: [
    {
      name: "Chonghua's Layered Frost + Steady Breathing",
      url: 'Skill_S_Chongyun_01',
      description:
        "After a short delay, the cold air created by the Cryo explosion will coalesce into a Chonghua Frost Field, within which all Sword, Claymore and Polearm-wielding characters' weapons will be infused with Cryo.",
      target: 'active',
      weapons: ['sword', 'claymore', 'polearm'],
      infusion: 'cryo',
      level: 2,
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.08
        }
      ]
    },
    {
      name: 'Rimechaser Blade',
      url: 'UI_Talent_S_Chongyun_06',
      description:
        "When the field created by **Spirit Blade: Chonghua's Layered Frost** disappears, another spirit blade will be summoned to strike nearby opponents, dealing 100% of Chonghua's Layered Frost's Skill DMG as AoE Cryo DMG. Opponents hit by this blade will have their Cryo RES decreased by 10% for 8s.",
      level: 8,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'cryoRes',
          coef: 0.1
        }
      ]
    },
    {
      name: 'Rally of Four Blades',
      url: 'UI_Talent_S_Chongyun_04',
      description:
        '**Spirit Blade: Cloud-Parting Star** deals 15% more DMG to opponents with a lower percentage of their Max HP remaining than Chongyun.',
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'burst',
          coef: 0.15
        }
      ]
    }
  ],
  offField: []
};

export default charName;
