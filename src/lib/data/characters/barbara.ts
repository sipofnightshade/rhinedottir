import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'barbara',
  fullName: 'Barbara',
  rating: 4,
  weapon: 'catalyst',
  region: 'mondstat',
  vision: 'hydro',
  specialized: 'hp%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Whisper of Water',
    skill: 'Let the Show Begin♪',
    burst: 'Shining Miracle♪'
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
      name: 'Droplet DMG',
      damageBonus: 'skill',
      url: 'Skill_S_Barbara_01',
      tag: 'E',
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
      name: 'HP Regeneration Per Hit',
      damageBonus: 'skill',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param3'
          },
          {
            scaling: 'flatValue',
            param: 'param4'
          }
        ]
      ]
    },
    {
      name: 'Continuous Regeneration',
      damageBonus: 'skill',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          },
          {
            scaling: 'flatValue',
            param: 'param2'
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Regeneration',
      damageBonus: 'burst',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          },
          {
            scaling: 'flatValue',
            param: 'param2'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Vitality Burst',
      url: 'UI_Talent_S_Barbara_02',
      description:
        "Decreases the CD of **Let the Show Begin♪** by 15%.\nDuring the ability's duration, your active character gains a 15% Hydro DMG Bonus.",
      constellation: 2,
      target: 'active',
      actionType: 'toggle',
      values: [
        {
          scaling: 'hydro',
          coef: 0.15
        }
      ]
    }
  ]
};

export default charName;
