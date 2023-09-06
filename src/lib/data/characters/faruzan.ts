import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'faruzan',
  fullName: 'Faruzan',
  rating: 4,
  weapon: 'bow',
  region: 'sumeru',
  vision: 'anemo',
  specialized: 'atk%',
  c3: 'skill',
  c5: 'burst',
  burstCost: 80,
  talentNames: {
    normal: 'normalName',
    skill: 'skillName',
    burst: 'burstName'
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
      name: 'Aimed Shot',
      tag: 'C1',
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
      name: 'Fully-Charged Aimed Shot',
      tag: 'C2',
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
      name: 'Skill DMG',
      tag: 'E1',
      damageBonus: 'skill',
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
      name: 'Pressurized Collapse Vortex DMG',
      tag: 'E2',
      damageBonus: 'skill',
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
      name: 'Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
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
      name: "Perfidious Wind's Bale",
      url: 'Skill_E_Faruzan_01',
      description: 'description',
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'anemoRes',
          coef: 0.3
        }
      ]
    },
    {
      name: "Prayerful Wind's Benefit",
      url: 'Skill_E_Faruzan_01',
      description:
        "The Whirlwind Pulse will also apply Prayerful Wind's Benefit to all nearby party members when it is unleashed, granting them an Anemo DMG Bonus.",
      target: 'party',
      actionType: 'toggle',
      hasLevels: 'burst',
      values: [
        {
          scaling: 'anemo',
          coef: 'param2'
        }
      ]
    },
    // {
    //   name: "Lost Wisdom of the Seven Caverns",
    //   url: 'UI_Talent_S_Faruzan_06',
    //   description: "When characters affected by **The Wind's Secret Ways**' Prayerful Wind's Benefit deal Anemo DMG using Normal, Charged, Plunging Attacks, Elemental Skills, or Elemental Bursts to opponents, they will gain the Hurricane Guard effect: This DMG will be increased based on 32% of Faruzan's Base ATK. 1 instance of Hurricane Guard can occur once every 0.8s. This DMG Bonus will be cleared after Prayerful Wind's Benefit expires or after the effect is triggered once.",
    //   level: 8,
    //   target: 'self',
    //   actionType: 'passive',
    //   values: [
    //     {
    //       scaling: 'anemo',
    //       coef: 0
    //     }
    //   ]
    // },
    {
      name: 'The Wondrous Path of Truth',
      url: 'UI_Talent_S_Faruzan_04',
      description:
        "Characters affected by **The Wind's Secret Ways**' Prayerful Wind's Benefit have 40% increased CRIT DMG when they deal Anemo DMG. When the active character deals DMG while affected by Prayerful Wind's Benefit, they will apply Pressurized Collapse to the opponent damaged. This effect can be triggered once every 3s. This CD is shared between all party members.",
      constellation: 6,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'anemoCritDMG',
          coef: 0.4
        }
      ]
    }
  ],
  offField: []
};

export default charName;
