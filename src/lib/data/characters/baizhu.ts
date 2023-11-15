import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000082,
  id: 'baizhu',
  name: 'baizhu',
  fullName: 'Baizhu',
  url: 'UI_AvatarIcon_Baizhuer',
  rating: 5,
  weapon: 'catalyst',
  region: 'liyue',
  vision: 'dendro',
  specialized: 'hp%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'The Classics of Acupuncture',
    skill: 'Universal Diagnosis',
    burst: 'Holistic Revivification'
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
      name: 'Skill DMG',
      tag: 'E',
      url: 'Skill_S_Baizhuer_01',
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
      name: 'Healing',
      damageBonus: 'skill',
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
    },
    {
      name: 'Incisive Discernment',
      tag: 'X2',
      damageBonus: 'skill',
      url: 'UI_Talent_S_Baizhuer_02',
      constellation: 2,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 2.5
          }
        ]
      ]
    }
  ],
  burst: [
    {
      name: 'Spiritvein DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Baizhuer_01',
      hasOwnBonusFlatDMG: 'revivification',
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
      name: 'Seamless Shield DMG Absorption',
      damageBonus: 'skill',
      isShield: true,
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
    },
    {
      name: 'Seamless Shield Healing',
      damageBonus: 'skill',
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
    }
  ],
  actions: [
    {
      name: 'Five Fortunes Forever',
      url: 'UI_Talent_S_Baizhuer_05',
      description:
        'Baizhu gains different effects according to the current HP of your current active character:\n·When their HP is less than 50%, Baizhu gains 20% Healing Bonus.\n·When their HP is equal to or more than 50%, Baizhu gains 25% Dendro DMG Bonus.',
      level: 2,
      target: 'self',
      actionType: 'select',
      values: [
        {
          scaling: 'healing',
          coef: 0.2
        },
        {
          scaling: 'dendro',
          coef: 0.25
        }
      ]
    },
    {
      name: 'All Things Are of the Earth',
      url: 'UI_Talent_S_Baizhuer_06',
      description:
        'Characters who are healed by **Seamless Shields** will gain the Year of Verdant Favor effect: Each 1,000 Max HP that Baizhu possesses that does not exceed 50,000 will increase the Burning, Bloom, Hyperbloom, and Burgeon reaction DMG dealt by these characters by 2%, and will increase the DMG Bonus provided by Aggravate and Spread by 0.8%. This effect lasts 6s.',
      level: 8,
      target: 'party',
      actionType: 'toggle',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'burning',
          coef: 0.02,
          source: ['hp', 0, 50000, 1000]
        },
        {
          scaling: 'bloom',
          coef: 0.02,
          source: ['hp', 0, 50000, 1000]
        },
        {
          scaling: 'hyperbloom',
          coef: 0.02,
          source: ['hp', 0, 50000, 1000]
        },
        {
          scaling: 'burgeon',
          coef: 0.02,
          source: ['hp', 0, 50000, 1000]
        },
        {
          scaling: 'spread',
          coef: 0.008,
          source: ['hp', 0, 50000, 1000]
        },
        {
          scaling: 'aggravate',
          coef: 0.008,
          source: ['hp', 0, 50000, 1000]
        }
      ]
    },
    {
      name: 'Ancient Art of Perception',
      url: 'UI_Talent_S_Baizhuer_03',
      description:
        "For 15s after Holistic Revivification is used, Baizhu will increase all nearby party members' Elemental Mastery by 80.",
      constellation: 4,
      target: 'nearby',
      actionType: 'toggle',
      values: [
        {
          scaling: 'em',
          coef: 80
        }
      ]
    },
    {
      name: 'Elimination of Malicious Qi',
      url: 'UI_Talent_S_Baizhuer_04',
      description:
        "Increases the DMG dealt by **Holistic Revivification**'s Spiritveins by 8% of Baizhu's Max HP.\nAdditionally, when a **Gossamer Sprite** or Gossamer Sprite: Splice hits opponents, there is a 100% chance of generating one of **Holistic Revivification**'s Seamless Shields. This effect can only be triggered once by each Gossamer Sprite or Gossamer Sprite: Splice.",
      constellation: 6,
      target: 'nearby',
      actionType: 'toggle',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'revivification',
          coef: 0.08,
          source: ['hp', 0]
        }
      ]
    }
  ],
  offField: []
};

export default charName;
