import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'kaveh',
  fullName: 'Kaveh',
  rating: 4,
  weapon: 'claymore',
  region: 'sumeru',
  vision: 'dendro',
  specialized: 'em',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Schematic Setup',
    skill: 'Artistic Ingenuity',
    burst: 'Painted Dome'
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
      name: 'Charged Attack Cyclic DMG',
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
    },
    {
      name: 'Charged Attack Final DMG',
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
            param: 'param9'
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
            param: 'param10'
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
            param: 'param11'
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
      url: 'Skill_S_Kaveh_01',
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
      url: 'Skill_E_Kaveh_01',
      damageBonus: 'burst',
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
      name: 'A4 Healing',
      isHealing: true,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'em',
            param: 'param1',
            coef: 3.0
          }
        ]
      ]
    },
    {
      name: "Pairidaeza's Light",
      constellation: 6,
      url: 'UI_Talent_S_Kaveh_04',
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param1',
            coef: 0.618
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Painted Dome',
      url: 'Skill_E_Kaveh_01',
      description:
        "Increases Kaveh's Normal, Charged, and Plunging Attack AoE, and converts his attack DMG to Dendro DMG that cannot be overridden.\n·All Dendro Cores created by all your own party members through Bloom reactions will deal additional DMG when they burst.\n·Increases Kaveh's resistance to interruption.",
      infusion: 'dendro',
      target: 'self',
      actionType: 'passive',
      hasLevels: 'burst',
      values: [
        {
          scaling: 'bloom',
          coef: 'param3'
        }
      ]
    },
    {
      name: "A Craftsman's Curious Conceptions",
      url: 'UI_Talent_S_Kaveh_06',
      description:
        "During **Painted Dome**, after Kaveh's Normal, Charged, or Plunging Attacks hit opponents, his Elemental Mastery will increase by 25. This effect can be triggered once every 0.1s. Max 4 stacks.\nThis effect will be canceled when Painted Dome's effects end.",
      level: 8,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'em',
          coef: [25, 25, 25, 25]
        }
      ]
    },
    {
      name: 'Sublime Salutations',
      url: 'UI_Talent_S_Kaveh_01',
      description:
        "Within 3s after using **Artistic Ingenuity**, Kaveh's Dendro RES and Incoming Healing Bonus will be increased by 50% and 25% respectively.",
      constellation: 1,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'healingIncoming',
          coef: 0.25
        },
        {
          scaling: 'dendroRes',
          coef: 0.5
        }
      ]
    },
    {
      name: 'Grace of Royal Roads',
      url: 'UI_Talent_S_Kaveh_02',
      description: "Kaveh's Normal Attack SPD increases by 15% during **Painted Dome**.",
      constellation: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'normalATKSpd',
          coef: 0.15
        }
      ]
    },
    {
      name: 'Feast of Apadana',
      url: 'UI_Talent_S_Kaveh_03',
      description:
        'Dendro Cores created from Bloom reactions Kaveh triggers will deal 60% more DMG when they burst.',
      constellation: 4,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'bloom',
          coef: 0.6
        }
      ]
    }
  ],
  offField: []
};

export default charName;
