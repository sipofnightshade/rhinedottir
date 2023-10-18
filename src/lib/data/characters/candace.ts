import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000072,
  id: 'candace',
  name: 'candace',
  fullName: 'Candace',
  rating: 4,
  weapon: 'polearm',
  region: 'sumeru',
  vision: 'hydro',
  specialized: 'hp%',
  c3: 'burst',
  c5: 'skill',
  burstCost: 60,
  talentNames: {
    normal: 'Gleaming Spear - Guardian Stance',
    skill: "Sacred Rite: Heron's Sanctum",
    burst: "Sacred Rite: Wagtail's Tide"
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
      name: 'Shield DMG Absorption',
      damageBonus: 'skill',
      url: 'Skill_S_Candace_01',
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
      name: 'Base DMG',
      tag: 'EP',
      damageBonus: 'skill',
      url: 'Skill_S_Candace_01',
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
      name: 'Charged Up DMG',
      tag: 'EH',
      damageBonus: 'skill',
      url: 'Skill_S_Candace_01',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param4'
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
      url: 'Skill_E_Candace_01',
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
      name: 'Wave Impact DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Candace_01',
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
      name: 'The Overflow',
      info: "When characters (excluding Candace herself) affected by the Prayer of the Crimson Crown caused by Sacred Rite: Wagtail's Tide deal Elemental DMG to opponents using Normal Attacks, an attack wave will be unleashed that deals AoE Hydro DMG equal to 15% of Candace's Max HP. This effect can trigger once every 2.3s and is considered Elemental Burst DMG.",
      tag: 'X6',
      damageBonus: 'burst',
      url: 'UI_Talent_S_Candace_04',
      constellation: 6,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param4',
            coef: 0.15
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Prayer of the Crimson Crown',
      url: 'Skill_E_Candace_01',
      description:
        'Characters deal increased Elemental DMG with their Normal Attacks. Sword, Claymore, and Polearm-wielding characters under this effect will obtain a Hydro Infusion',
      target: 'active',
      infusion: 'hydro',
      actionType: 'toggle',
      values: [
        {
          scaling: 'dmgIncreaseElemental',
          coef: 0.2
        }
      ]
    },
    {
      name: 'Celestial Dome of Sand',
      url: 'UI_Talent_S_Candace_06',
      description:
        "Characters affected by the Prayer of the Crimson Crown caused by **Sacred Rite: Wagtail's Tide** will deal 0.5% increased DMG to opponents for every 1,000 points of Candace's Max HP when they deal Elemental DMG with their Normal Attacks.",
      target: 'active',
      level: 8,
      actionType: 'toggle',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'normal',
          coef: 0.005,
          source: ['hp', 0, 80000, 1000]
        }
      ]
    },
    {
      name: 'Moon-Piercing Brilliance',
      url: 'UI_Talent_S_Candace_02',
      description:
        "When **Sacred Rite: Heron's Sanctum** hits opponents, Candace's Max HP will be increased by 20% for 15s.",
      target: 'self',
      constellation: 2,
      actionType: 'toggle',
      values: [
        {
          scaling: 'hp',
          coef: 0.2
        }
      ]
    }
  ]
};

export default charName;
