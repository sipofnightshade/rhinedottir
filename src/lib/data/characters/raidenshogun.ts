import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'raidenshogun',
  name: 'raidenshogun',
  fullName: 'Raiden Shogun',
  rating: 5,
  weapon: 'polearm',
  region: 'inazuma',
  vision: 'electro',
  specialized: 'energy',
  c3: 'burst',
  c5: 'skill',
  burstCost: 90,
  talentNames: {
    normal: 'Origin',
    skill: 'Transcendence: Baleful Omen',
    burst: 'Secret Art: Musou Shinsetsu'
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
        ],
        [
          {
            scaling: 'atk',
            param: 'param5'
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
            param: 'param6'
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
      url: 'Skill_S_Shougun_01',
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
      name: 'Coordinated ATK DMG',
      tag: 'EC',
      damageBonus: 'skill',
      url: 'Skill_S_Shougun_01',
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
      name: 'Musou no Hitotachi DMG',
      tag: 'Q',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
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
      name: '1-Hit DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
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
      name: '2-Hit DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
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
      name: '3-Hit DMG',
      tag: 'Q3',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
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
      name: '4-Hit DMG',
      tag: 'Q4',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param8'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param9'
          }
        ]
      ]
    },
    {
      name: '5-Hit DMG',
      tag: 'Q5',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
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
      name: 'Charged Attack DMG',
      tag: 'QC',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param11'
          }
        ],
        [
          {
            scaling: 'atk',
            param: 'param12'
          }
        ]
      ]
    },
    {
      name: 'Plunge DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param14'
          }
        ]
      ]
    },
    {
      name: 'Low Plunge DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param15'
          }
        ]
      ]
    },
    {
      name: 'High Plunge DMG',
      damageBonus: 'burst',
      url: 'Skill_E_Shougun_01',
      damage: [
        [
          {
            scaling: 'atk',
            param: 'param16'
          }
        ]
      ]
    }
  ],
  actions: [
    {
      name: 'Eye of Stormy Judgment',
      url: 'Skill_S_Shougun_01',
      description:
        "Characters who gain the Eye of Stormy Judgment will have their Elemental Burst DMG increased based on the Energy Cost of the Elemental Burst during the Eye's duration\n**MODIFIED**\nUses the average party burst costs for calculations",
      target: 'party',
      actionType: 'toggle',
      hasLevels: 'skill',
      sourceStats: ['partyAvgBurstCost'],
      values: [
        {
          scaling: 'burst',
          coef: 'param4',
          source: ['partyAvgBurstCost', 0]
        }
      ]
    },
    {
      name: 'Chakra Desiderata',
      url: 'Skill_E_Shougun_01',
      description:
        'When nearby party members (excluding the Raiden Shogun herself) use their Elemental Bursts, the Raiden Shogun will build up Resolve stacks based on the Energy Cost of these Elemental Bursts. The maximum number of Resolve stacks is 60.',
      target: 'self',
      actionType: 'stack',
      hasLevels: 'burst',
      values: [
        {
          scaling: 'burst',
          coef: [
            'param2',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3',
            'param3'
          ]
        }
      ]
    },
    {
      name: 'Enlightened One',
      url: 'UI_Talent_S_Shougun_06',
      description:
        'Each 1% above 100% Energy Recharge that the Raiden Shogun possesses grants her:\n·0.6% greater Energy restoration from **Musou Isshin**\n·0.4% Electro DMG Bonus.',
      level: 8,
      target: 'self',
      actionType: 'passive',
      sourceStats: ['energy'],
      values: [
        {
          scaling: 'electro',
          coef: 0.4,
          source: ['energy', 1]
        }
      ]
    },
    {
      name: 'Steelbreaker',
      url: 'UI_Talent_S_Shougun_03',
      description:
        "While using Musou no Hitotachi and in the Musou Isshin state applied by **Secret Art: Musou Shinsetsu**, the Raiden Shogun's attacks ignore 60% of opponents' DEF.",
      constellation: 2,
      target: 'self',
      actionType: 'toggle',
      values: [
        {
          scaling: 'burstDefIgnore',
          coef: 0.6
        }
      ]
    },
    {
      name: 'Pledge of Propriety',
      url: 'UI_Talent_S_Shougun_02',
      description:
        'When the **Musou Isshin** state applied by **Secret Art: Musou Shinsetsu** expires, all nearby party members (excluding the Raiden Shogun) gain 30% bonus ATK for 10s.',
      constellation: 4,
      target: 'nearby',
      actionType: 'toggle',
      values: [
        {
          scaling: 'atk%',
          coef: 0.3
        }
      ]
    }
  ]
};

export default charName;
