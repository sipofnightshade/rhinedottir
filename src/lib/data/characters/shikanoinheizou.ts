import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'shikanoinheizou',
  name: 'shikanoinheizou',
  fullName: 'Shikanoin Heizou',
  rating: 4,
  weapon: 'catalyst',
  region: 'inazuma',
  vision: 'anemo',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 40,
  talentNames: {
    normal: 'Fudou Style Martial Arts',
    skill: 'Heartstopper Strike',
    burst: 'Windmuster Kick'
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
            param: 'param5'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param6'
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
      tag: 'E0',
      damageBonus: 'skill',
      url: 'Skill_S_Heizo_01',
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
      name: 'Declension DMG Bonus/stack',
      damageBonus: 'skill',
      url: 'Skill_S_Heizo_01',
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
      name: 'Conviction DMG Bonus',
      damageBonus: 'skill',
      url: 'Skill_S_Heizo_01',
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
      name: 'Full Stacks DMG',
      tag: 'E4',
      hasOwnCritDMG: 'convictionCitDMG',
      hasOwnCritRate: 'convictionCritRate',
      damageBonus: 'skill',
      url: 'Skill_S_Heizo_01',
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
            param: 'param3'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Fudou Style Vacuum Slugger DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Heizo_01',
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
      name: 'Windmuster Iris DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Heizo_01',
      hasOwnDMGType: 'hydro',
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
      name: 'Windmuster Iris DMG',
      tag: 'Q2',
      url: 'Skill_E_Heizo_01',
      damageBonus: 'burst',
      hasOwnDMGType: 'pyro',
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
      name: 'Windmuster Iris DMG',
      tag: 'Q2',
      url: 'Skill_E_Heizo_01',
      damageBonus: 'burst',
      hasOwnDMGType: 'electro',
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
      name: 'Windmuster Iris DMG',
      tag: 'Q2',
      url: 'Skill_E_Heizo_01',
      damageBonus: 'burst',
      hasOwnDMGType: 'cryo',
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
      name: 'Penetrative Reasoning',
      url: 'UI_Talent_S_Heizo_06',
      description:
        "After Shikanoin Heizou's **Heartstopper Strike** hits an opponent, increases all party members' (excluding Shikanoin Heizou) Elemental Mastery by 80 for 10s.",
      level: 8,
      target: 'nearby',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 80
        }
      ]
    },
    {
      name: 'Named Juvenile Casebook',
      url: 'UI_Talent_S_Heizo_01',
      description:
        'For 5s after Shikanoin Heizou takes the field, his Normal Attack SPD is increased by 15%. He also gains 1 Declension stack for **Heartstopper Strike**. This effect can be triggered once every 10s.',
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Curious Casefiles',
      url: 'UI_Talent_S_Heizo_04',
      description:
        "Each Declension stack will increase the CRIT Rate of the **Heartstopper Strike** unleashed by 4%. When Heizou possesses Conviction, this Heartstopper Strike's CRIT DMG is increased by 32%.",
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'convictionCritRate',
          coef: 0.16
        },
        {
          scaling: 'convictionCritDMG',
          coef: 0.32
        }
      ]
    }
  ],
  offField: []
};

export default charName;
