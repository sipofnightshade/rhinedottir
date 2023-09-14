import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'lyney',
  fullName: 'Lyney',
  rating: 5,
  weapon: 'bow',
  region: 'fontaine',
  vision: 'pyro',
  specialized: 'critrate',
  c3: 'atk',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Card Force Translocation',
    skill: 'Bewildering Lights',
    burst: 'Wondrous Trick: Miracle Parade'
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
      name: 'Aimed Shot',
      tag: 'C1',
      damageBonus: 'charged',
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
      name: 'Aimed Shot Charge Level 1',
      hasOwnDMGType: 'pyro',
      tag: 'C2',
      damageBonus: 'charged',
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
      name: 'Prop Arrow DMG',
      hasOwnDMGType: 'pyro',
      tag: 'C3',
      damageBonus: 'charged',
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
      name: 'Pyrotechnic Strike DMG',
      tag: 'CX',
      hasOwnBonusFlatDMG: 'grinMalkin',
      hasOwnDMGType: 'pyro',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param15'
          }
        ]
      ]
    },
    {
      name: 'Pyrotechnic Strike: Reprised DMG',
      tag: 'X6',
      constellation: 6,
      hasOwnBonusFlatDMG: 'grinMalkin',
      hasOwnDMGType: 'pyro',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param18' // uses modified talentValues
          }
        ]
      ]
    },
    {
      name: 'Spiritbreath Thorn DMG',
      hasOwnDMGType: 'pyro',
      tag: 'PN',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param16'
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
            param: 'param6'
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
            param: 'param7'
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
            param: 'param8'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Skill DMG',
      tag: 'E',
      hasOwnBonusFlatDMG: 'propSurplus',
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
      name: 'Burst DMG',
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
      name: 'Explosive Firework DMG',
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
    }
  ],
  actions: [
    {
      name: 'Prop Surplus Stacks',
      url: 'Skill_S_Liney_01',
      description:
        'Clear all current Prop Surplus stacks and deal AoE Pyro DMG to opponents. DMG will be increased according to the stacks cleared.',
      target: 'self',
      hasLevels: 'skill',
      actionType: 'stack',
      sourceStats: ['atk', 'atk%', 'baseATK'],
      values: [
        {
          scaling: 'propSurplus',
          coef: ['param2', 'param2', 'param2', 'param2', 'param2'],
          source: ['atk', 0]
        }
      ]
    },
    {
      name: 'Perilous Performance',
      url: 'UI_Talent_S_Liney_05',
      description:
        'If Lyney consumes HP when firing off a **Prop Arrow**, the Grin-Malkin hat summoned by the arrow will, upon hitting an opponent, restore 3 Energy to Lyney and increase DMG dealt by 80% of his ATK.',
      level: 2,
      target: 'self',
      sourceStats: ['atk', 'atk%', 'baseATK'],
      actionType: 'toggle',
      values: [
        {
          scaling: 'grinMalkin',
          coef: 0.8,
          source: ['atk', 0]
        }
      ]
    },
    {
      name: 'Conclusive Ovation - 1',
      url: 'UI_Talent_S_Liney_06',
      description:
        'The DMG Lyney deals to opponents affected by Pyro will receive the following buff:\n·Increases the DMG dealt by 60%.',
      level: 8,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: 0.6
        }
      ]
    },
    {
      name: 'Conclusive Ovation - 2',
      url: 'UI_Talent_S_Liney_06',
      description:
        'The DMG Lyney deals to opponents affected by Pyro will receive the following buff:\n·Each Pyro party member other than Lyney will cause the DMG dealt to increase by an additional 20%.\nLyney can deal up to an additional 40% increased DMG to opponents affected by Pyro in this way.',
      level: 8,
      target: 'self',
      actionType: 'visionMatchToggle',
      visionCondition: 'pyro',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: [0, 0.2, 0.4]
        }
      ]
    },
    {
      name: 'Loquacious Cajoling',
      url: 'UI_Talent_S_Liney_03',
      description:
        'When Lyney is on the field, he will gain a stack of Crisp Focus every 2s. Each stack will increase his CRIT DMG by 20%. Max 3 stacks. This effect will be canceled when Lyney leaves the field.',
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'critdmg',
          coef: [0.2, 0.2, 0.2]
        }
      ]
    },
    {
      name: 'Well-Versed, Well-Rehearsed',
      url: 'UI_Talent_S_Liney_02',
      description:
        "After an opponent is hit by Lyney's Pyro Charged Attack, this opponent's Pyro RES will be decreased by 20% for 6s.",
      constellation: 4,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'pyroRes',
          coef: 0.2
        }
      ]
    }
  ]
};

export default charName;
