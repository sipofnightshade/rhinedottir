import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'nilou',
  fullName: 'Nilou',
  rating: 5,
  weapon: 'sword',
  region: 'sumeru',
  vision: 'hydro',
  specialized: 'hp%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 70,
  talentNames: {
    normal: 'Dance of Samser',
    skill: 'Dance of Haftkarsvar',
    burst: 'Dance of Abzendegi'
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
        ],
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
      name: 'Skill DMG',
      tag: 'E',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: 'Sword Dance 1-Hit DMG',
      tag: 'E1',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param6'
          }
        ]
      ]
    },
    {
      name: 'Sword Dance 2-Hit DMG',
      tag: 'E2',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param7'
          }
        ]
      ]
    },
    {
      name: 'Luminous Illusion DMG',
      tag: 'E3',
      damageBonus: 'skill',
      hasOwnBonusDMG: 'luminousIllusion',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param4'
          }
        ]
      ]
    },
    {
      name: 'Whirling Steps 1-Hit DMG',
      tag: 'E1',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Whirling Steps 2-Hit DMG',
      tag: 'E2',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param3'
          }
        ]
      ]
    },
    {
      name: 'Whirling Steps 1-Hit DMG',
      tag: 'E3',
      damageBonus: 'skill',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5'
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
      icd: 0,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          }
        ]
      ]
    },
    {
      name: 'Lingering Aeon DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      icd: 0,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param2'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Court of Dancing Petals',
      url: 'UI_Talent_S_Nilou_05',
      description:
        "When all characters in the party are all Dendro or Hydro, and there are at least one Dendro character and one Hydro character:\nThe completion of the third dance step of Nilou's **Dance of Haftkarsvar** will grant all nearby characters the Golden Chalice's Bounty for 30s.\nCharacters under the effect of Golden Chalice's Bounty will increase the Elemental Mastery of all nearby characters by 100 for 10s whenever they are hit by Dendro attacks. Also, triggering the Bloom reaction will create Bountiful Cores instead of Dendro Cores.\nSuch Cores will burst very quickly after being created, and they have larger AoEs.\nBountiful Cores cannot trigger Hyperbloom or Burgeon, and they share an upper numerical limit with Dendro Cores. Bountiful Core DMG is considered DMG dealt by Dendro Cores produced by Bloom.\nShould the party not meet the conditions for this Passive Talent, any existing Golden Chalice's Bounty effects will be canceled.",
      level: 2,
      target: 'party',
      actionType: 'toggle',
      hasVisionRequirement: ['dendro', 'hydro'],
      values: [
        {
          scaling: 'em',
          coef: 100
        }
      ]
    },
    {
      name: 'Dreamy Dance of Aeons',
      url: 'UI_Talent_S_Nilou_06',
      description:
        "Every 1,000 points of Nilou's Max HP above 30,000 will cause the DMG dealt by Bountiful Cores created by characters affected by Golden Chalice's Bounty to increase by 9%.\nThe maximum increase in Bountiful Core DMG that can be achieved this way is 400%.",
      level: 8,
      target: 'party',
      actionType: 'passive',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'bloom',
          coef: 0.09,
          source: ['hp', 30000, 74444, 1000]
        }
      ]
    },
    {
      name: 'Dance of the Waning Moon',
      url: 'UI_Talent_S_Nilou_01',
      description:
        "**Dance of Haftkarsvar** will be enhanced as follows:\n·Luminous Illusion DMG is increased by 65%.\n·The Tranquility Aura's duration is extended by 6s.",
      constellation: 1,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'luminousIllusion',
          coef: 0.65
        }
      ]
    },
    {
      name: 'The Starry Skies Their Flowers Rain',
      url: 'UI_Talent_S_Nilou_02',
      description:
        'After characters affected by the Golden Chalice\'s Bounty deal Hydro DMG to an opponent, that opponent\'s Hydro RES will be decreased by 35% for 10s. After a triggered Bloom reaction deals DMG to opponents, their Dendro RES will be decreased by 35% for 10s.\nYou need to have unlocked the "Court of Dancing Petals" Talent.',
      constellation: 2,
      target: 'enemy',
      actionType: 'multiSelect',
      values: [
        {
          scaling: 'hydroRes',
          coef: 0.35
        },
        {
          scaling: 'dendroRes',
          coef: 0.35
        }
      ]
    },
    {
      name: 'Fricative Pulse',
      url: 'UI_Talent_S_Nilou_03',
      description:
        "After the third dance step of **Dance of Haftkarsvar**'s Pirouette hits opponents, Nilou will gain 15 Elemental Energy, and DMG from her **Dance of Abzendegi: Distant Dreams, Listening Spring** will be increased by 50% for 8s.",
      constellation: 4,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'burst',
          coef: 0.5
        }
      ]
    },
    {
      name: "Frostbreaker's Melody",
      url: 'UI_Talent_S_Nilou_04',
      description:
        "For every 1,000 points of Max HP, Nilou's CRIT Rate and CRIT DMG will increase by 0.6% and 1.2% respectively.\nThe maximum increase in CRIT Rate and CRIT DMG via this method is 30% and 60% respectively.",
      constellation: 6,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'critrate',
          coef: 0.006,
          source: ['hp', 0, 50000, 1000]
        },
        {
          scaling: 'critdmg',
          coef: 0.012,
          source: ['hp', 0, 50000, 1000]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
