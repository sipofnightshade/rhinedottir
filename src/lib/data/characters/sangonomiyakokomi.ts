import type { CharacterRecord } from '$lib/types/global';

/**
 * @info C2 and C4 not implemented
 */

const charName: CharacterRecord = {
  uid: 10000054,
  id: 'sangonomiyakokomi',
  url: 'UI_AvatarIcon_Kokomi',
  name: 'sangonomiyakokomi',
  fullName: 'Sangonomiya Kokomi',
  rating: 5,
  weapon: 'catalyst',
  region: 'inazuma',
  vision: 'hydro',
  specialized: 'hydro',
  c3: 'burst',
  c5: 'skill',
  burstCost: 70,
  talentNames: {
    normal: 'The Shape of Water',
    skill: "Kurage's Oath",
    burst: "Nereid's Ascension"
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      hasOwnDMGType: 'hydro',
      hasOwnBonusFlatDMG: 'ceremonialNormalDMG',
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
      hasOwnDMGType: 'hydro',
      hasOwnBonusFlatDMG: 'ceremonialNormalDMG',
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
      hasOwnDMGType: 'hydro',
      hasOwnBonusFlatDMG: 'ceremonialNormalDMG',
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
      name: "At Water's Edge",
      tag: 'X1',
      constellation: 1,
      damageBonus: 'none',
      hasOwnDMGType: 'hydro',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param3',
            coef: 0.3
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
      hasOwnDMGType: 'hydro',
      hasOwnBonusFlatDMG: 'ceremonialChargedDMG',
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
      hasOwnDMGType: 'hydro',
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
      hasOwnDMGType: 'hydro',
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
      hasOwnDMGType: 'hydro',
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
      name: 'Regeneration',
      isHealing: true,
      damageBonus: 'skill',
      url: 'Skill_S_Kokomi_01',
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
      name: 'Ripple DMG',
      tag: 'E',
      damageBonus: 'skill',
      url: 'Skill_S_Kokomi_01',
      hasOwnBonusFlatDMG: 'bakeKurageDMG',
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
  burst: [
    {
      name: 'Skill DMG',
      tag: 'Q',
      url: 'Skill_E_Kokomi_01',
      damageBonus: 'burst',
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
      name: 'HP Regeneration Per Hit',
      isHealing: true,
      damageBonus: 'burst',
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
      name: 'Ceremonial Garment',
      url: 'Skill_E_Kokomi_01',
      description:
        "Sangonomiya Kokomi's Normal Attack, Charged Attack and Bake-Kurage DMG are increased based on her Max HP.",
      target: 'self',
      sourceStats: ['hp'],
      actionType: 'toggle',
      hasLevels: 'burst',
      values: [
        {
          scaling: 'ceremonialNormalDMG',
          coef: 'param4',
          source: ['hp', 0]
        },
        {
          scaling: 'ceremonialChargedDMG',
          coef: 'param5',
          source: ['hp', 0]
        },
        {
          scaling: 'bakeKurageDMG',
          coef: 'param9',
          source: ['hp', 0]
        }
      ]
    },
    {
      name: 'Song of Pearls',
      url: 'UI_Talent_S_Kokomi_06',
      description:
        "While donning the Ceremonial Garment created by **Nereid's Ascension**, the Normal and Charged Attack DMG Bonus Sangonomiya Kokomi gains based on her Max HP will receive a further increase based on 15% of her Healing Bonus.\n**MODIFIED***\nAdd 1 stack for every 10% Healing Bonus.",
      level: 8,
      target: 'self',
      sourceStats: ['hp'],
      actionType: 'stack',
      values: [
        {
          scaling: 'ceremonialNormalDMG',
          coef: [
            0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015,
            0.015
          ],
          source: ['hp', 0]
        },
        {
          scaling: 'ceremonialChargedDMG',
          coef: [
            0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015,
            0.015
          ],
          source: ['hp', 0]
        }
      ]
    },
    {
      name: 'Flawless Strategy',
      url: 'UI_Talent_S_Kokomi_07',
      description:
        'Sangonomiya Kokomi has a 25% Healing Bonus, but a 100% decrease in CRIT Rate.',
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'healing',
          coef: 0.25
        },
        {
          scaling: 'critrate',
          coef: -1.0
        }
      ]
    },
    {
      name: 'Sango Isshin',
      url: 'UI_Talent_S_Kokomi_04',
      description: 'description',
      constellation: 6,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'hydro',
          coef: 0.4
        }
      ]
    }
  ],
  offField: []
};

export default charName;
