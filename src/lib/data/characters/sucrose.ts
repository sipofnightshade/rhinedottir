import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'sucrose',
  name: 'sucrose',
  fullName: 'Sucrose',
  rating: 5,
  weapon: 'catalyst',
  region: 'mondstat',
  vision: 'anemo',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'Wind Spirit Creation',
    skill: 'Astable Anemohypostasis Creation - 6308',
    burst: 'Forbidden Creation - Isomer 75 / Type II'
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
      name: 'Charged Attack',
      tag: 'CA',
      damageBonus: 'charged',
      hasOwnDMGType: 'anemo',
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
  plunge: [
    {
      name: 'Plunge DMG',
      tag: 'PD',
      damageBonus: 'plunge',
      hasOwnDMGType: 'anemo',
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
      hasOwnDMGType: 'anemo',
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
      hasOwnDMGType: 'anemo',
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
      url: 'Skill_S_Sucrose_01',
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
      name: 'Burst DoT',
      tag: 'Q1',
      url: 'Skill_E_Sucrose_01',
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
      name: 'Infusion DMG',
      tag: 'Q2',
      hasOwnDMGType: 'hydro',
      url: 'Skill_E_Sucrose_01',
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
      name: 'Infusion DMG',
      tag: 'Q2',
      hasOwnDMGType: 'pyro',
      url: 'Skill_E_Sucrose_01',
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
      name: 'Infusion DMG',
      tag: 'Q2',
      hasOwnDMGType: 'cryo',
      url: 'Skill_E_Sucrose_01',
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
      name: 'Infusion DMG',
      tag: 'Q2',
      hasOwnDMGType: 'electro',
      url: 'Skill_E_Sucrose_01',
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
      name: 'Catalyst Conversion',
      url: 'UI_Talent_S_Sucrose_05',
      description:
        'When Sucrose triggers a Swirl reaction, all characters in the party with the matching element (excluding Sucrose) have their Elemental Mastery increased by 50 for 8s.',
      level: 2,
      target: 'nearby',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 50
        }
      ]
    },
    {
      name: 'Mollis Favonius',
      url: 'UI_Talent_S_Sucrose_06',
      description:
        "When **Astable Anemohypostasis Creation - 6308** or **Forbidden Creation - Isomer 75 / Type II** hits an opponent, increases all party members' (excluding Sucrose) Elemental Mastery by an amount equal to 20% of Sucrose's Elemental Mastery for 8s.",
      level: 8,
      target: 'nearby',
      actionType: 'toggle',
      sourceStats: ['em'],
      values: [
        {
          scaling: 'em',
          coef: 0.2,
          source: ['em', 0]
        }
      ]
    },
    {
      name: 'Chaotic Entropy',
      url: 'UI_Talent_S_Sucrose_04',
      description:
        'If **Forbidden Creation - Isomer 75 / Type II** triggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for the corresponding absorbed element during its duration.',
      constellation: 6,
      target: 'party',
      actionType: 'select',
      values: [
        {
          scaling: 'hydro',
          coef: 0.2
        },
        {
          scaling: 'pyro',
          coef: 0.2
        },
        {
          scaling: 'cryo',
          coef: 0.2
        },
        {
          scaling: 'electro',
          coef: 0.2
        }
      ]
    }
  ],
  offField: []
};

export default charName;
