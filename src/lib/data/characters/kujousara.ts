import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'kujousara',
  fullName: 'Kujou Sara',
  rating: 4,
  weapon: 'bow',
  region: 'inazuma',
  vision: 'electro',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Tengu Bowmanship',
    skill: 'Tengu Stormcall',
    burst: 'Subjugation: Koukou Sendou'
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
            param: 'param6'
          }
        ]
      ]
    },
    {
      name: 'Fully-Charged Aimed Shot',
      hasOwnDMGType: 'electro',
      tag: 'C1',
      damageBonus: 'charged',
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
      name: 'Tengu Juurai: Ambush DMG',
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Sara_01',
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
      name: 'Dark Wings',
      tag: 'X2',
      damageBonus: 'skill',
      url: 'Skill_S_Sara_01',
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
  burst: [
    {
      name: 'Tengu Juurai: Titanbreaker DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Sara_01',
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
      name: 'Tengu Juurai: Stormcluster DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Sara_01',
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
      name: 'Tengu Juurai',
      url: 'Skill_S_Sara_01',
      description:
        "Crowfeathers will trigger Tengu Juurai: Ambush after a short time, dealing Electro DMG and granting the active character within its AoE an ATK Bonus based on Kujou Sara's Base ATK.",
      target: 'active',
      actionType: 'toggle',
      hasLevels: 'skill',
      values: [
        {
          scaling: 'atk',
          coef: 'param2',
          source: ['baseATK', 0]
        }
      ]
    },
    {
      name: 'Sin of Pride',
      url: 'UI_Talent_S_Sara_04',
      description:
        'The Electro DMG of characters who have had their ATK increased by Tengu Juurai has its Crit DMG increased by 60%.',
      constellation: 6,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'electroCritDMG',
          coef: 0.6
        }
      ]
    }
  ],
  offField: []
};

export default charName;
