import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'lisa',
  fullName: 'Lisa',
  rating: 4,
  weapon: 'catalyst',
  region: 'mondstat',
  vision: 'electro',
  specialized: 'em',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Lightning Touch',
    skill: 'Violet Arc',
    burst: 'Lightning Rose'
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
      name: 'Press DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Lisa_01',
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
      name: 'Non-Conductive Hold DMG',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Lisa_01',
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
      name: 'Stack 1 Conductive Hold DMG',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Lisa_01',
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
      name: 'Stack 2 Conductive Hold DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Lisa_01',
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
      name: 'Stack 3 Conductive Hold DMG',
      tag: 'E3',
      damageBonus: 'skill',
      url: 'Skill_S_Lisa_01',
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
  burst: [
    {
      name: 'Discharge DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Lisa_01',
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
  actions: [
    {
      name: 'Static Electricity Field',
      url: 'UI_Talent_S_Lisa_06',
      description:
        'Opponents hit by **Lightning Rose** have their DEF decreased by 15% for 10s.',
      level: 8,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Electromagnetic Field',
      url: 'UI_Talent_S_Lisa_02',
      description:
        "Holding **Violet Arc** has the following effects:\n·Increases DEF by 25%.\n·Increases Lisa's resistance to interruption.",
      constellation: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'def%',
          coef: 0.25
        }
      ]
    }
  ],
  offField: []
};

export default charName;
