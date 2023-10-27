import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000029,
  id: 'klee',
  name: 'klee',
  fullName: 'Klee',
  rating: 5,
  weapon: 'catalyst',
  region: 'mondstat',
  vision: 'pyro',
  url: 'UI_AvatarIcon_Klee',
  specialized: 'pyro',
  c3: 'skill',
  c5: 'burst',
  burstCost: 60,
  talentNames: {
    normal: 'Kaboom!',
    skill: 'Jumpy Dumpty',
    burst: "Sparks 'n' Splash"
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
            param: 'param4'
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
      name: 'Jumpy Dumpty DMG',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Klee_01',
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
      name: 'Mine DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Klee_01',
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
  burst: [
    {
      name: "Sparks 'n' Splash DMG",
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_S_Klee_01',
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
      name: 'Chained Reactions Sparks',
      tag: 'X1',
      constellation: 1,
      damageBonus: 'burst',
      url: 'Skill_S_Klee_01',
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
      name: 'Sparkly Explosion',
      tag: 'X4',
      constellation: 4,
      damageBonus: 'burst',
      url: 'UI_Talent_S_Klee_03',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 5.55
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Pounding Surprise',
      url: 'UI_Talent_S_Klee_05',
      description:
        'When **Jumpy Dumpty** and Normal Attacks deal DMG, Klee has a 50% chance to obtain an Explosive Spark.\nThis Explosive Spark is consumed by the next Charged Attack, which costs no Stamina and deals 50% increased DMG.',
      level: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'charged',
          coef: 0.5
        }
      ]
    },
    {
      name: 'Explosive Frags',
      url: 'UI_Talent_S_Klee_02',
      description:
        "Being hit by **Jumpy Dumpty**'s mines decreases opponents' DEF by 23% for 10s.",
      constellation: 2,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'def%',
          coef: 0.23
        }
      ]
    },
    {
      name: 'Uprising Whirlwind',
      url: 'UI_Talent_S_PlayerWind_02',
      description:
        "When **Sparks 'n' Splash** is used, all party members will gain a 10% Pyro DMG Bonus for 25s.",
      constellation: 6,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'pyro',
          coef: 0.1
        }
      ]
    }
  ],
  offField: []
};

export default charName;
