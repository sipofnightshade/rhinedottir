import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'dori',
  fullName: 'Dori',
  rating: 4,
  weapon: 'claymore',
  region: 'sumeru',
  vision: 'electro',
  specialized: 'hp%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Marvelous Sword-Dance (Modified)',
    skill: 'Spirit-Warding Lamp: Troubleshooter Cannon',
    burst: "Alcazarzaray's Exactitude"
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param3'
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
            param: 'param4'
          }
        ]
      ]
    }
  ],
  charged: [
    {
      name: 'Charged Attack Spinning DMG',
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
      name: 'Troubleshooter Shot DMG',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Dori_01',
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
      name: 'After-Sales Service Round DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Dori_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param2'
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
      name: '1x After-Sales Service Round DMG',
      damageBonus: 'skill',
      url: 'Skill_S_Dori_01',
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
      name: 'Sprinkling Weight',
      damageBonus: 'skill',
      isHealing: true,
      constellation: 6,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2',
            coef: 0.04
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Connector DMG',
      tag: 'Q',
      url: 'Skill_E_Dori_01',
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
      name: 'Continuous Healing',
      damageBonus: 'burst',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          },
          {
            scaling: 'flatValue',
            param: 'param3'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Discretionary Supplement',
      url: 'UI_Talent_S_Dori_03',
      description:
        'The character connected to the **Jinni** will obtain the following buffs based on their current HP and Energy:\n·When their HP is lower than 50%, they gain 50% Incoming Healing Bonus.\n·When their Energy is less than 50%, they gain 30% Energy Recharge.',
      constellation: 4,
      target: 'active',
      actionType: 'multiSelect',
      values: [
        {
          scaling: 'healingIncoming',
          coef: 0.5
        },
        {
          scaling: 'energy',
          coef: 0.3
        }
      ]
    },
    {
      name: 'Sprinkling Weight',
      url: 'UI_Talent_S_Dori_04',
      description:
        "Dori gains the following effects for 3s after using **Spirit-Warding Lamp: Troubleshooter Cannon**:\n·Electro Infusion.\n·When Normal Attacks hit opponents, all nearby party members will heal HP equivalent to 4% of Dori's Max HP. This type of healing can occur once every 0.1s.",
      level: 2,
      constellation: 6,
      infusion: 'electro',
      target: 'self',
      actionType: 'passive',
      values: []
    }
  ],
  offField: []
};

export default charName;
