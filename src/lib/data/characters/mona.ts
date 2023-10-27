import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000041,
  id: 'mona',
  name: 'mona',
  fullName: 'Mona',
  url: 'UI_AvatarIcon_Mona',
  rating: 5,
  weapon: 'catalyst',
  region: 'mondstat',
  vision: 'hydro',
  specialized: 'energy',
  c3: 'burst',
  c5: 'skill',
  burstCost: 60,
  talentNames: {
    normal: 'Ripple of Fate',
    skill: 'Mirror Reflection of Doom',
    burst: 'Stellaris Phantasm'
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
      name: 'DoT',
      tag: 'EC',
      damageBonus: 'skill',
      url: 'Skill_S_Mona_01',
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
      name: 'Explosion DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Mona_01',
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
      name: 'Bubble Explosion DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Mona_01',
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
      name: 'Omen',
      url: 'Skill_E_Mona_01',
      description: 'During its duration, increases DMG taken by opponents',
      target: 'party',
      actionType: 'toggle',
      hasLevels: 'burst',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: 'param10'
        }
      ]
    },
    {
      name: 'Waterborne Destiny',
      url: 'UI_Talent_S_Mona_06',
      description:
        "Increases Mona's Hydro DMG Bonus by a degree equivalent to 20% of her Energy Recharge rate.",
      level: 8,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['energy'],
      values: [
        {
          scaling: 'hydro',
          coef: 0.2,
          source: ['energy', 0]
        }
      ]
    },
    {
      name: 'Prophecy of Submersion',
      url: 'UI_Talent_S_Mona_01',
      description:
        'When any of your own party members hits an opponent affected by an Omen, the effects of Hydro-related Elemental Reactions are enhanced for 8s:\n·Electro-Charged DMG increases by 15%.\n·Vaporize DMG increases by 15%.\n·Hydro Swirl DMG increases by 15%.\n·Frozen duration is extended by 15%.',
      constellation: 1,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'electrocharged',
          coef: 0.15
        },
        {
          scaling: 'vaporize',
          coef: 0.15
        },
        {
          scaling: 'hydroSwirl',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Prophecy of Oblivion',
      url: 'UI_Talent_S_Mona_03',
      description:
        'When any party member attacks an opponent affected by an Omen, their CRIT Rate is increased by 15%.',
      constellation: 4,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'critrate',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Rhetorics of Calamitas',
      url: 'UI_Talent_S_Mona_04',
      description:
        'Upon entering **Illusory Torrent**, Mona gains a 60% increase to the DMG of her next Charged Attack per second of movement.\nA maximum DMG Bonus of 180% can be achieved in this manner. The effect lasts for no more than 8s.',
      constellation: 6,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'charged',
          coef: [0.6, 0.6, 0.6]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
