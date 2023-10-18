import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000002,
  id: 'kamisatoayaka',
  name: 'kamisatoayaka',
  fullName: 'Kamisato Ayaka',
  rating: 5,
  weapon: 'sword',
  region: 'inazuma',
  vision: 'cryo',
  specialized: 'critdmg',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Kamisato Art: Kabuki',
    skill: 'Kamisato Art: Hyouka',
    burst: 'Kamisato Art: Soumetsu'
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param4'
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
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param7'
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
      name: 'Usurahi Butou',
      hasOwnBonusDMG: 'usurahiButou',
      tag: 'X6',
      constellation: 6,
      damageBonus: 'charged',
      damage: [
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
            param: 'param10'
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
            param: 'param11'
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
            param: 'param12'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Skill DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Ayaka_01',
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
      name: 'Cutting DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Ayaka',
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
      name: 'Bloom DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Ayaka',
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
      url: 'Skill_E_Ayaka',
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
            param: 'param1'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Frostflake Seki no To DMG',
      tag: 'X2',
      damageBonus: 'burst',
      url: 'UI_Talent_S_Ayaka_02',
      constellation: 2,
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param7'
          }
        ],
        // second one
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param7'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Kamisato Art: Senho',
      url: 'Skill_S_Ayaka_02',
      description:
        "Ayaka unleashes frigid energy to apply Cryo on nearby opponents.\n·Coldness condenses around Ayaka's blade, infusing her attacks with Cryo for a brief period.",
      target: 'self',
      actionType: 'toggle',
      infusion: 'cryo',
      values: [
        {
          scaling: 'cryo',
          coef: 0
        }
      ]
    },
    {
      name: 'Amatsumi Kunitsumi Sanctification',
      url: 'UI_Talent_S_Ayaka_05',
      description:
        "After using **Kamisato Art: Hyouka**, Kamisato Ayaka's Normal and Charged Attacks deal 30% increased DMG for 6s.",
      level: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normal',
          coef: 0.3
        },
        {
          scaling: 'charged',
          coef: 0.3
        }
      ]
    },
    {
      name: 'Kanten Senmyou Blessing',
      url: 'UI_Talent_S_Ayaka_06',
      description:
        'When the Cryo application at the end of **Kamisato Art: Senho** hits an opponent, Kamisato Ayaka gains the following effects:\n·Restores 10 Stamina\n·Gains 18% Cryo DMG Bonus for 10s.',
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'cryo',
          coef: 0.18
        }
      ]
    },
    {
      name: 'Blizzard Blade Seki no To',
      url: 'UI_Talent_S_Ayaka_02',
      description:
        "When casting **Kamisato Art: Soumetsu**, unleashes 2 smaller additional Frostflake Seki no To, each dealing 20% of the original storm's DMG.",
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'FrostflakeSekiNoTo',
          coef: -0.2
        }
      ]
    },
    {
      name: 'Ebb and Flow',
      url: 'UI_Talent_S_Ayaka_03',
      description:
        "Opponents damaged by **Kamisato Art: Soumetsu**'s Frostflake Seki no To will have their DEF decreased by 30% for 6s.",
      constellation: 4,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 0.3
        }
      ]
    },
    {
      name: 'Dance of Suigetsu',
      url: 'UI_Talent_S_PlayerWind_02',
      description:
        "Kamisato Ayaka gains Usurahi Butou every 10s, increasing her Charged Attack DMG by 298%. This buff will be cleared 0.5s after Ayaka's Charged ATK hits an opponent, after which the timer for this ability will restart.",
      constellation: 6,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'usurahiButou',
          coef: 2.98
        }
      ]
    }
  ],
  offField: []
};

export default charName;
