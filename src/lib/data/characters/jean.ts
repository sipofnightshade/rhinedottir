import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'jean',
  fullName: 'Jean',
  rating: 5,
  weapon: 'sword',
  region: 'mondstat',
  vision: 'anemo',
  specialized: 'healing',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Favonius Bladework',
    skill: 'Gale Blade',
    burst: 'Dandelion Breeze'
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
    },
    {
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
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
      name: 'Wind Companion Healing',
      damageBonus: 'normal',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param5',
            coef: 0.15
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
      name: 'Skill DMG',
      tag: 'E',
      hasOwnBonusDMG: 'spiralingTempest',
      url: 'Skill_S_Qin_01',
      damageBonus: 'skill',
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
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Qin_01',
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
      name: 'Field Entering/Exiting DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Qin_01',
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
      name: 'Field Activation Healing',
      damageBonus: 'burst',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'atk',
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
      name: 'Continuous Regeneration/s',
      damageBonus: 'burst',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'atk',
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
      name: 'Spiraling Tempest',
      url: 'UI_Talent_S_Qin_01',
      description:
        'Increases the pulling speed of **Gale Blade** after holding for more than 1s, and increases the DMG dealt by 40%.',
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'spiralingTempest',
          coef: 0.4
        }
      ]
    },
    {
      name: "People's Aegis",
      url: 'UI_Talent_S_Qin_02',
      description:
        'When Jean picks up an Elemental Orb/Particle, all party members have their Movement SPD and ATK SPD increased by 15% for 15s.',
      constellation: 2,
      target: 'party',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.15
        },
        {
          scaling: 'moveSpd',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Lands of Dandelion',
      url: 'UI_Talent_S_Qin_03',
      description:
        'Within the Field created by **Dandelion Breeze**, all opponents have their Anemo RES decreased by 40%.',
      constellation: 4,
      target: 'enemy',
      actionType: 'toggle',
      values: [
        {
          scaling: 'anemoRes',
          coef: 0.4
        }
      ]
    }
  ],
  offField: []
};

export default charName;
