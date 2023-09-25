import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'sayu',
  fullName: 'Sayu',
  rating: 4,
  weapon: 'claymore',
  region: 'inazuma',
  vision: 'anemo',
  specialized: 'em',
  c3: 'burst',
  c5: 'skill',
  burstCost: 80,
  talentNames: {
    normal: 'Shuumatsuban Ninja Blade',
    skill: 'Yoohoo Art: Fuuin Dash',
    burst: 'Yoohoo Art: Mujina Flurry'
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
      name: 'Charged Attack Spinning DMG',
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
    },
    {
      name: 'Charged Attack Final DMG',
      tag: 'CF',
      damageBonus: 'charged',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param7'
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
            param: 'param10'
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
            param: 'param11'
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
            param: 'param12'
          }
        ]
      ]
    }
  ],
  skill: [
    {
      name: 'Fuufuu Windwheel DMG',
      tag: 'EC',
      damageBonus: 'skill',
      url: 'Skill_S_Sayu_01',
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
      name: 'Fuufuu Windwheel Elemental DMG',
      tag: 'EC',
      damageBonus: 'skill',
      url: 'Skill_S_Sayu_01',
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
      name: 'Fuufuu Whirlwind Kick Press DMG',
      hasOwnBonusDMG: 'whirlwindKick',
      tag: 'E1',
      damageBonus: 'skill',
      url: 'Skill_S_Sayu_01',
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
      name: 'Fuufuu Whirlwind Kick Hold DMG',
      tag: 'E2',
      damageBonus: 'skill',
      url: 'Skill_S_Sayu_01',
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
      name: 'Fuufuu Whirlwind Kick Elemental DMG',
      tag: 'E3',
      damageBonus: 'skill',
      url: 'Skill_S_Sayu_01',
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
  burst: [
    {
      name: 'Burst Activation DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Sayu_01',
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
      name: 'Burst Activation Healing',
      isHealing: true,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param3'
          },
          {
            scaling: 'flatValue',
            param: 'param2'
          }
        ]
      ]
    },
    {
      name: 'Muji-Muji Daruma DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Sayu_01',
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
      name: 'Muji-Muji Daruma Healing',
      isHealing: true,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param6'
          },
          {
            scaling: 'flatValue',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Swirl Healing',
      isHealing: true,
      damageBonus: 'burst',
      damage: [
        [
          {
            scaling: 'em',
            param: 'param5',
            coef: 1.2
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Someone More Capable',
      url: 'UI_Talent_S_Sayu_05',
      description:
        'When Sayu triggers a Swirl reaction while active, she heals all your characters and nearby allies for 300 HP. She will also heal an additional 1.2 HP for every point of Elemental Mastery she has. This effect can be triggered once every 2s.',
      level: 2,
      target: 'self',
      actionType: 'passive',
      values: [
        {
          scaling: 'flatHealing',
          coef: 300
        }
      ]
    },
    {
      name: 'Egress Prep',
      url: 'UI_Talent_S_Sayu_02',
      description:
        '**Yoohoo Art: Fuuin Dash** gains the following effects:\n·DMG of Fuufuu Whirlwind Kick in Press Mode increased by 3.3%.\n·Every 0.5s in the Fuufuu Windwheel state will increase the DMG of this Fuufuu Whirlwind Kick by 3.3%. The maximum DMG increase possible through this method is 66%.',
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'whirlwindKick',
          coef: [
            0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033,
            0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033
          ]
        }
      ]
    }
    // {
    //   name: "Sleep O'Clock",
    //   url: 'UI_Talent_S_Sayu_04',
    //   description:"The Muji-Muji Daruma created by Sayu's **Yoohoo Art: Mujina Flurry** will now also benefit from her Elemental Mastery. Each point of Sayu's Elemental Mastery will produce the following effects:\n·Increases the damage dealt by the Muji-Muji Daruma's attacks by 0.2% ATK. A maximum DMG increase of 400% ATK can be gained via this method.\n·Increases the HP restored by the Muji-Muji Daruma by 3. A maximum of 6,000 additional HP can be restored in this manner.",
    //   constellation: 6,
    //   target: 'self',
    //   actionType: 'passive',
    //   values: [
    //     {
    //       scaling: 'mujimujiDmg',
    //       coef: 0,
    //       source:['em',0,2000]
    //     },
    //     {
    //       scaling: 'mujimujiHeal',
    //       coef: 0
    //     },
    //   ]
    // },
  ]
};

export default charName;
