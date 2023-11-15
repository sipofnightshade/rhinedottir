import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  uid: 10000089,
  url: 'UI_AvatarIcon_Furina',
  id: 'furina',
  name: 'furina',
  fullName: 'Furina',
  region: 'fontaine',
  rating: 5,
  weapon: 'sword',
  vision: 'hydro',
  specialized: 'critrate',
  c3: 'burst',
  c5: 'skill',
  burstCost: 60,
  talentNames: {
    normal: "Soloist's Solicitation",
    skill: 'Salon Solitaire',
    burst: 'Let the People Rejoice'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      hasOwnBonusFlatDMG: 'centerOfAttention',
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
      hasOwnBonusFlatDMG: 'centerOfAttention',
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
      hasOwnBonusFlatDMG: 'centerOfAttention',
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
      hasOwnBonusFlatDMG: 'centerOfAttention',
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
      name: 'Spiritbreath Thorn/Surging Blade DMG',
      tag: 'OU',
      damageBonus: 'normal',
      hasOwnDMGType: 'hydro',
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
  charged: [
    {
      name: 'Charged Attack DMG',
      tag: 'CA',
      damageBonus: 'charged',
      hasOwnBonusFlatDMG: 'centerOfAttention',
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
      hasOwnBonusFlatDMG: 'centerOfAttention',
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
      hasOwnBonusFlatDMG: 'centerOfAttention',
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
      hasOwnBonusFlatDMG: 'centerOfAttention',
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
      name: 'Ousia Bubble DMG',
      tag: 'OU',
      icd: 0,
      damageBonus: 'skill',
      url: 'Skill_S_Furina_01',
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
      name: '"Gentilhomme Usher DMG',
      tag: 'E1',
      icd: 2,
      damageBonus: 'skill',
      hasOwnBonusDMG: 'salonMemberDMG',
      url: 'Skill_S_Furina_01',
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
      name: 'Surintendante Chevalmarin DMG',
      tag: 'E2',
      icd: 2,
      damageBonus: 'skill',
      hasOwnBonusDMG: 'salonMemberDMG',
      url: 'Skill_S_Furina_01',
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
      name: 'Mademoiselle Crabaletta DMG',
      tag: 'E3',
      damageBonus: 'skill',
      hasOwnBonusDMG: 'salonMemberDMG',
      url: 'Skill_S_Furina_01',
      icd: 0,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param5'
          }
        ]
      ]
    },
    {
      name: 'Singer of Many Waters Healing',
      damageBonus: 'skill',
      url: 'Skill_S_Furina_01',
      isHealing: true,
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param9'
          },
          {
            scaling: 'flatValue',
            param: 'param10'
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
      url: 'Skill_E_Furina_01',
      damage: [
        [
          {
            scaling: 'hp',
            param: 'param1'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'SalonSolitaire',
      url: 'Skill_S_Furina_01',
      description:
        "When **Salon Members** attack, if character(s) with more than 50% HP are nearby, the Members will increase their current attack's power based on the number of such characters, and consume said characters' HP. If the characters who meet these requirements are 1/2/3/4 (or more), the Members' attacks will deal 110%/120%/130%/140% of their original DMG.\n\nPneuma\nSummons the Singer of Many Waters, who will heal nearby active character(s) based on Max HP at intervals.\n\nThe Salon Members and Singer of Many Waters share a duration, and when Furina uses her Charged Attack to change the guest type, the new guests will inherit the initial duration.\nWhile the Salon Members and the Singer of Many Waters are on the field, Furina can move on the water's surface.",
      hasLevels: 'skill',
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'skillSpecialMultiplier',
          coef: [1.1, 0.1, 0.1, 0.1]
        }
      ]
    },
    {
      name: 'Universal Revelry State',
      url: 'Skill_E_Furina_01',
      description:
        "Party members enter the Universal Revelry state: During this time, when nearby party members' HP increases or decreases, 1 Fanfare point will be granted to Furina for each percentage point of their Max HP by which their HP changes.\nAt the same time, Furina will increase the DMG dealt by and Incoming Healing Bonus of all nearby party members based on the amount of Fanfare she has.\nWhen the duration ends, Furina's Fanfare points will be cleared.\n**MODIFIED**\nEach button stack counts as 50 Fanfare stacks.",
      target: 'party',
      hasLevels: 'burst',
      actionType: 'stack',
      hideAtConstelltion: 1,
      values: [
        {
          scaling: 'dmgIncrease',
          coef: ['param5', 'param5', 'param5', 'param5', 'param5', 'param5']
        },
        {
          scaling: 'healing',
          coef: ['param6', 'param6', 'param6', 'param6', 'param6', 'param6']
        }
      ]
    },
    {
      name: 'Unheard Confession',
      url: 'UI_Talent_S_Furina_06',
      description:
        "Every 1,000 points of Furina's Max HP can buff the different Arkhe-aligned **Salon Solitaire** in the following ways:\nWill increase Salon Member DMG dealt by 0.7%, up to a maximum of 28%.\nWill decrease active character healing interval of the Singer of Many Waters by 0.4%, up to a maximum of 16%.",
      level: 8,
      target: 'self',
      actionType: 'toggle',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'salonMemberDMG',
          coef: 0.007,
          source: ['hp', 0, 40000, 1000]
        }
      ]
    },
    {
      name: 'Universal Revelry State - C1',
      url: 'UI_Talent_S_Furina_01',
      description:
        "**Love Is a Rebellious Bird That None Can Tame**\n\nWhen using **Let the People Rejoice**, Furina will gain 150 Fanfare.\nAdditionally, Furina's Fanfare limit is increased by 100.",
      constellation: 1,
      target: 'party',
      hasLevels: 'burst',
      actionType: 'stack',
      values: [
        {
          scaling: 'dmgIncrease',
          coef: [
            'param5',
            'param5',
            'param5',
            'param5',
            'param5',
            'param5',
            'param5',
            'param5'
          ]
        },
        {
          scaling: 'healing',
          coef: [
            'param6',
            'param6',
            'param6',
            'param6',
            'param6',
            'param6',
            'param6',
            'param6'
          ]
        }
      ]
    },
    {
      name: 'A Woman Adapts Like Duckweed in Water',
      url: 'UI_Talent_S_Furina_04',
      description:
        "While **Let the People Rejoice** lasts, Furina's Fanfare gain from increases or decreases in nearby characters' HP is increased by 250%. Each point of Fanfare above the limit will increase Furina's Max HP by 0.35%. Her maximum Max HP increase is 140%.\n**MODIFIED**\nEach button stack counts as 50 Fanfare stacks.",
      constellation: 2,
      target: 'self',
      actionType: 'stack',
      values: [
        {
          scaling: 'hp%',
          coef: [0.175, 0.175, 0.175, 0.175, 0.175, 0.175, 0.175, 0.175]
        }
      ]
    },
    {
      name: 'Center of Attention',
      url: 'UI_Talent_S_Furina_02',
      description:
        'When using **Salon Solitaire**, Furina gains "Center of Attention" for 10s.\nThroughout the duration, Furina\'s Normal Attacks, Charged Attacks, and Plunging Attacks are converted into Hydro DMG which cannot be overridden by any other elemental infusion. DMG is also increased by an amount equivalent to 18% of Furina\'s max HP.\nThroughout the duration, Furina\'s Normal Attacks (not including Arkhe: Seats Sacred and Secular Attacks), Charged Attacks, and the impact of Plunging Attacks will cause different effects up to every 0.1s after hitting opponents depending on her current Arkhe alignment:\n\n**Arkhe: Ousia**\nEvery 1s, all nearby characters in the party will be healed by 4% of Furina\'s max HP, for a duration of 2.9s. Triggering this effect again will extend its duration.\n**Arkhe: Pneuma**\nThis Normal Attack (not including Arkhe: Seats Sacred and Secular Attacks), Charged Attack, or Plunging Attack ground impact DMG will be further increased by an amount equivalent to 25% of Furina\'s max HP. When any of the attacks mentioned previously hit an opponent, all nearby characters in the party will consume 1% of their current HP.\n\nDuring the duration of each instance of "Center of Attention," the above effects can be triggered up to 6 times. "Center of Attention" will end when its effects have triggered 6 times or when the duration expires.\n**MODIFIED**\nBase DMG increase is 1 stack. Pneuma DMG increase is 2 stacks.',
      constellation: 6,
      infusion: 'hydro',
      target: 'self',
      actionType: 'stack',
      sourceStats: ['hp'],
      values: [
        {
          scaling: 'centerOfAttention',
          coef: [0.18, 0.25],
          source: ['hp', 0]
        }
      ]
    }
  ]
};

export default charName;
