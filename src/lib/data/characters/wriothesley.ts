import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'wriothesley',
  fullName: 'Wriothesley',
  region: 'fontaine',
  rating: 5,
  weapon: 'catalyst',
  vision: 'cryo',
  specialized: 'critdmg',
  c3: 'atk',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Forceful Fists of Frost',
    skill: 'Icefang Rush',
    burst: 'Darkgold Wolfbite'
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
      name: 'Rebuke: Vaulting Fist',
      tag: 'VF',
      hasOwnBonusDMG: 'graciousRebuke',
      hasOwnCritRate: 'vaultingFistCritRate',
      hasOwnCritDMG: 'vaultingFistCritDMG',
      url: 'UI_Talent_S_Wriothesley_05',
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
      name: 'C6 Total Vaulting Fist DMG',
      tag: 'X6',
      constellation: 6,
      icd: 0,
      hasOwnBonusDMG: 'graciousRebuke',
      hasOwnCritRate: 'vaultingFistCritRate',
      hasOwnCritDMG: 'vaultingFistCritDMG',
      url: 'UI_Talent_S_Wriothesley_04',
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
            param: 'param7'
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
  skill: [],
  burst: [
    {
      name: 'Total Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Wriothesley_01',
      hasOwnBonusDMG: 'wolfbite',
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
        ]
      ]
    },
    {
      name: 'Burst DMG x1 Hit',
      damageBonus: 'burst',
      url: 'Skill_E_Wriothesley_01',
      hasOwnBonusDMG: 'wolfbite',
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
      tag: 'OU',
      damageBonus: 'burst',
      url: 'Skill_E_Wriothesley_01',
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
      name: 'Chilling Penalty',
      url: 'Skill_S_Wriothesley_01',
      description:
        "**Chilling Penalty**\n·Increases Wriothesley's interruption resistance\n·When his HP is above 50%, it will enhance the Repelling Fists of **Normal Attack: Forceful Fists of Frost** and increase its DMG. When such an attack hits, it will consume a fixed amount of Wriothesley's HP. HP can be lost this way once every 0.1s.\nThis effect will be canceled should Wriothesley leave the field.",
      target: 'self',
      actionType: 'toggle',
      hasLevels: 'skill',
      values: [
        {
          scaling: 'normalSpecialMultiplier',
          coef: 'param1'
        }
      ]
    },
    {
      name: 'There Shall Be a Plea for Justice',
      url: 'UI_Talent_S_Wriothesley_05',
      description:
        "When Wriothesley's HP is less than 60%, he will obtain a Gracious Rebuke. The next Charged Attack of his **Normal Attack: Forceful Fists of Frost** will be enhanced to become Rebuke: Vaulting Fist. It will not consume Stamina, will deal 50% increased DMG, and after hitting will restore HP for Wriothesley equal to 30% of his Max HP.\nYou can gain a Gracious Rebuke this way once every 5s.",
      level: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'graciousRebuke',
          coef: 0.5
        }
      ]
    },
    {
      name: 'There Shall Be a Reckoning for Sin',
      url: 'UI_Talent_S_Wriothesley_06',
      description:
        "When Wriothesley's current HP increases or decreases, if he is in the Chilling Penalty state conferred by **Icefang Rush**, Chilling Penalty will gain one stack of Prosecution Edict. Max 5 stacks. Each stack will increase Wriothesley's ATK by 6%.",
      level: 8,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'atk%',
          coef: [0.06, 0.06, 0.06, 0.06, 0.06]
        }
      ]
    },
    {
      name: 'Terror for the Evildoers',
      url: 'UI_Talent_S_Wriothesley_01',
      description:
        'The Gracious Rebuke from the Passive Talent "There Shall Be a Plea for Justice" is changed to this:\nWhen Wriothesley\'s HP is less than 60% or while he is in the Chilling Penalty state caused by **Icefang Rush**, when the fifth attack of Repelling Fists hits, it will create a Gracious Rebuke. 1 Gracious Rebuke effect can be obtained every 2.5s.\n\nAdditionally, Rebuke: Vaulting Fist will obtain the following enhancement:\n·The DMG Bonus gained will be further increased to 200%.\n·When it hits while Wriothesley is in the Chilling Penalty state, that state\'s duration is extended by 4s. 1 such extension can occur per 1 Chilling Penalty duration.',
      constellation: 1,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'graciousRebuke',
          coef: 1.5
        }
      ]
    },
    {
      name: 'Shackles for the Arrogant',
      url: 'UI_Talent_S_Wriothesley_02',
      description:
        'When using **Darkgold Wolfbite**, each Prosecution Edict stack from the Passive Talent "There Shall Be a Reckoning for Sin" will increase said ability\'s DMG dealt by 40%.',
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'wolfbite',
          coef: [0.4, 0.4, 0.4, 0.4, 0.4]
        }
      ]
    },
    {
      name: 'Redemption for the Suffering',
      url: 'UI_Talent_S_Wriothesley_03',
      description:
        'The HP restored to Wriothesley through Rebuke: Vaulting Fist will be increased to 50% of his Max HP. You must first unlock the Passive Talent "There Shall Be a Plea for Justice."\nAdditionally, when Wriothesley is healed, if the amount of healing overflows, the following effects will occur depending on whether he is on the field or not. If he is on the field, his ATK SPD will be increased by 20% for 4s.',
      constellation: 4,
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
      name: 'Esteem for the Innocent',
      url: 'UI_Talent_S_Wriothesley_04',
      description:
        'The CRIT Rate of Rebuke: Vaulting Fist will be increased by 10%, and its CRIT DMG by 80%. When unleashed, it will also create an additional icicle that deals 100% of Rebuke: Vaulting Fist\'s Base DMG as Cryo DMG. DMG dealt this way is regarded as Charged Attack DMG.\nYou must first unlock the Passive Talent "There Shall Be a Plea for Justice."',
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'vaultingFistCritRate',
          coef: 0.1
        },
        {
          scaling: 'vaultingFistCritDMG',
          coef: 0.8
        }
      ]
    }
  ]
};

export default charName;
