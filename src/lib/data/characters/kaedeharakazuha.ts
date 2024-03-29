import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000047,
  id: 'kaedeharakazuha',
  name: 'kaedeharakazuha',
  fullName: 'Kaedehara Kazuha',
  rating: 5,
  weapon: 'sword',
  region: 'inazuma',
  url: 'UI_AvatarIcon_Kazuha',
  vision: 'anemo',
  specialized: 'em',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Garyuu Bladework',
    skill: 'Chihayaburu',
    burst: 'Kazuha Slash'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      hasOwnBonusDMG: 'crimsonMomiji',
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
      hasOwnBonusDMG: 'crimsonMomiji',
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
      hasOwnBonusDMG: 'crimsonMomiji',
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
      hasOwnBonusDMG: 'crimsonMomiji',
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
      tag: 'N5',
      damageBonus: 'normal',
      hasOwnBonusDMG: 'crimsonMomiji',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param6'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param6'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param6'
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
      hasOwnBonusDMG: 'crimsonMomiji',
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
    }
  ],
  plunge: [
    {
      name: 'Plunge DMG',
      // tag: 'PD',
      damageBonus: 'plunge',
      hasOwnBonusDMG: 'crimsonMomiji',
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
      name: 'Low Plunge',
      // tag: 'PH',
      damageBonus: 'plunge',
      hasOwnBonusDMG: 'crimsonMomiji',
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
      name: 'High Plunge',
      // tag: 'PH',
      damageBonus: 'plunge',
      hasOwnBonusDMG: 'crimsonMomiji',
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
      name: 'Midare Ranzan',
      tag: 'PD',
      damageBonus: 'plunge',
      hasOwnDMGType: 'anemo',
      hasOwnBonusDMG: 'crimsonMomiji',
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
      name: 'Low - Midare Ranzan',
      tag: 'PL',
      damageBonus: 'plunge',
      hasOwnDMGType: 'anemo',
      hasOwnBonusDMG: 'crimsonMomiji',
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
      name: 'High - Midare Ranzan',
      tag: 'PH',
      damageBonus: 'plunge',
      hasOwnDMGType: 'anemo',
      hasOwnBonusDMG: 'crimsonMomiji',
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
      name: 'Midare Ranzan',
      tag: 'P2',
      damageBonus: 'plunge',
      hasOwnDMGType: 'electro',
      hasOwnBonusDMG: 'crimsonMomiji',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param12',
            coef: 2
          }
        ]
      ]
    },
    {
      name: 'Midare Ranzan',
      tag: 'P2',
      damageBonus: 'plunge',
      hasOwnDMGType: 'pyro',
      hasOwnBonusDMG: 'crimsonMomiji',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param12',
            coef: 2
          }
        ]
      ]
    },
    {
      name: 'Midare Ranzan',
      tag: 'P2',
      damageBonus: 'plunge',
      hasOwnDMGType: 'cryo',
      hasOwnBonusDMG: 'crimsonMomiji',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param12',
            coef: 2
          }
        ]
      ]
    },
    {
      name: 'Midare Ranzan',
      tag: 'P2',
      damageBonus: 'plunge',
      hasOwnDMGType: 'hydro',
      hasOwnBonusDMG: 'crimsonMomiji',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param12',
            coef: 2
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Press Skill DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Kazuha_01',
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
      name: 'Hold Skill DMG',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Kazuha_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Slashing DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Kazuha_01',
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
      name: 'DoT',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Kazuha_01',
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
      name: 'Additional Elemental DMG',
      tag: 'Qx',
      damageBonus: 'burst',
      url: 'Skill_E_Kazuha_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Poetics of Fuubutsu',
      url: 'UI_Talent_S_Kazuha_06',
      description:
        'Upon triggering a Swirl reaction, Kaedehara Kazuha will grant all party members a 0.04% Elemental DMG Bonus to the element absorbed by Swirl for every point of Elemental Mastery he has for 8s. Bonuses for different elements obtained through this method can co-exist.',
      level: 8,
      target: 'party',
      sourceStats: ['em'],
      actionType: 'multiSelect',
      values: [
        {
          scaling: 'cryo',
          coef: 0.0004,
          source: ['em', 0]
        },
        {
          scaling: 'electro',
          coef: 0.0004,
          source: ['em', 0]
        },
        {
          scaling: 'hydro',
          coef: 0.0004,
          source: ['em', 0]
        },
        {
          scaling: 'pyro',
          coef: 0.0004,
          source: ['em', 0]
        }
      ]
    },
    {
      name: 'Yamaarashi Tailwind',
      url: 'UI_Talent_S_PlayerWind_02',
      description:
        "The Autumn Whirlwind field created by **Kazuha Slash** has the following effects:\n· Increases Kaedehara Kazuha's own Elemental Mastery by 200 for its duration.\n· Increases the Elemental Mastery of characters within the field by 200.\n\nThe Elemental Mastery-increasing effects of this Constellation do not stack.",
      constellation: 2,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 200
        }
      ]
    },
    {
      name: 'Crimson Momiji',
      url: 'UI_Talent_S_Kazuha_04',
      description:
        "After using **Chihayaburu** or **Kazuha Slash**, Kaedehara Kazuha gains an Anemo Infusion for 5s. Additionally, each point of Elemental Mastery will increase the DMG dealt by Kaedehara Kazuha's Normal, Charged, and Plunging Attacks by 0.2%.",
      level: 2,
      constellation: 2,
      infusion: 'anemo',
      target: 'self',
      actionType: 'toggle',
      sourceStats: ['em'],
      values: [
        {
          scaling: 'crimsonMomiji',
          coef: 0.002,
          source: ['em', 0]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
