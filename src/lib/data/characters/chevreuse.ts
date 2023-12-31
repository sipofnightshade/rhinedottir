import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000090,
  url: 'UI_AvatarIcon_Chevreuse',
  id: 'chevreuse',
  name: 'chevreuse',
  fullName: 'Chevreuse',
  region: 'fontaine',
  rating: 4,
  weapon: 'polearm',
  vision: 'pyro',
  specialized: 'hp%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Line Bayonet Thrust EX',
    skill: 'Short-Range Rapid Interdiction Fire',
    burst: 'Ring of Bursting Grenades'
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
      name: 'Charged Attack',
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
      name: 'Press DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Chevreuse_01',
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
      name: 'Hold DMG',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Chevreuse_01',
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
      name: 'Overcharged Ball DMG',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Chevreuse_01',
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
      name: 'Sniper Induced Explosion DMG',
      tag: 'X2',
      damageBonus: 'skill',
      constellation: 2,
      url: 'UI_Talent_S_Chevreuse_02',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3',
            coef: 1.2
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param3',
            coef: 1.2
          }
        ]
      ]
    },
    {
      name: 'HP Regeneration Over Time',
      damageBonus: 'skill',
      url: 'Skill_S_Chevreuse_01',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5'
          },
          {
            scaling: 'flatValue',
            param: 'param6'
          }
        ]
      ]
    },
    {
      name: 'In Pursuit of Ending Evil Healing',
      damageBonus: 'skill',
      url: 'Skill_S_Chevreuse_01',
      constellation: 6,
      isHealing: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5',
            coef: 0.1
          }
        ]
      ]
    },
    {
      name: 'Surging Blade DMG',
      damageBonus: 'skill',
      url: 'Skill_S_Chevreuse_01',
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
  burst: [
    {
      name: 'Explosion Grenade DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Chevreuse_01',
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
      name: 'Secondary Explosive Shell DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Chevreuse_01',
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
      name: "Vanguard's Coordinated Tactics",
      url: 'UI_Talent_S_Chevreuse_05',
      description:
        'When all party members are Pyro and Electro characters and there is at least one Pyro and one Electro character each in the party:\nChevreuse grants "Coordinated Tactics" to nearby party members: After a character triggers the Overloaded reaction, the Pyro and Electro RES of the opponent(s) affected by this Overloaded reaction will be decreased by 40% for 6s.\nThe "Coordinated Tactics" effect will be removed when the Elemental Types of the characters in the party do not meet the basic requirements for the Passive Talent.',
      target: 'enemy',
      actionType: 'toggle',
      hasVisionRequirement: ['pyro', 'electro'],
      level: 2,
      values: [
        {
          scaling: 'pyroRes',
          coef: 0.4
        },
        {
          scaling: 'electroRes',
          coef: 0.4
        }
      ]
    },
    {
      name: 'Vertical Force Coordination',
      url: 'UI_Talent_S_Chevreuse_06',
      description:
        'After Chevreuse fires an Overcharged Ball using **Short-Range Rapid Interdiction Fire**, nearby Pyro and Electro characters in the party gain 1% increased ATK for every 1,000 Max HP Chevreuse has for 30s. ATK can be increased by up to 40% in this way.',
      level: 8,
      target: 'party',
      actionType: 'toggle',
      hasVisionRequirement: ['pyro', 'electro'],
      values: [
        {
          scaling: 'atk%',
          coef: 0.01,
          source: ['hp', 0, 40000, 1000]
        }
      ]
    },
    {
      name: 'In Pursuit of Ending Evil',
      url: 'UI_Talent_S_Chevreuse_04',
      description:
        "After 12s of the healing effect from **Short-Range Rapid Interdiction Fire**, all nearby party members recover HP equivalent to 10% of Chevreuse's Max HP once.\nAfter a party member is healed by Short-Range Rapid Interdiction Fire, they gain a 20% Pyro DMG Bonus and Electro DMG Bonus for 8s. Max 3 stacks. Each stack's duration is counted independently.",
      constellation: 6,
      target: 'active',
      actionType: 'toggle',
      values: [
        {
          scaling: 'pyro',
          coef: [0.2, 0.2, 0.2]
        },
        {
          scaling: 'electro',
          coef: [0.2, 0.2, 0.2]
        }
      ]
    }
  ]
};

export default charName;
