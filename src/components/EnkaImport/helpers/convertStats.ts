import type { ArtifactStats } from '$lib/types/artifacts';

export const convertStat = (appendPropId: string): ArtifactStats => {
  switch (appendPropId) {
    case 'FIGHT_PROP_HP':
      return 'hp';
    case 'FIGHT_PROP_ATTACK':
      return 'atk';
    case 'FIGHT_PROP_DEFENSE':
      return 'def';
    case 'FIGHT_PROP_HP_PERCENT':
      return 'hp%';
    case 'FIGHT_PROP_ATTACK_PERCENT':
      return 'atk%';
    case 'FIGHT_PROP_DEFENSE_PERCENT':
      return 'def%';
    case 'FIGHT_PROP_CRITICAL':
      return 'critrate';
    case 'FIGHT_PROP_CRITICAL_HURT':
      return 'critdmg';
    case 'FIGHT_PROP_CHARGE_EFFICIENCY':
      return 'energy';
    case 'FIGHT_PROP_HEAL_ADD':
      return 'healing';
    case 'FIGHT_PROP_ELEMENT_MASTERY':
      return 'em';
    case 'FIGHT_PROP_PHYSICAL_ADD_HURT':
      return 'physical';
    case 'FIGHT_PROP_FIRE_ADD_HURT':
      return 'pyro';
    case 'FIGHT_PROP_ELEC_ADD_HURT':
      return 'electro';
    case 'FIGHT_PROP_WATER_ADD_HURT':
      return 'hydro';
    case 'FIGHT_PROP_WIND_ADD_HURT':
      return 'anemo';
    case 'FIGHT_PROP_ICE_ADD_HURT':
      return 'cryo';
    case 'FIGHT_PROP_ROCK_ADD_HURT':
      return 'geo';
    case 'FIGHT_PROP_GRASS_ADD_HURT':
      return 'dendro';
    default:
      return '';
  }
};

export const testData = {
  playerInfo: {
    nickname: 'Kite',
    level: 60,
    signature: 'Fly high.',
    worldLevel: 8,
    nameCardId: 210024,
    finishAchievementNum: 653,
    towerFloorIndex: 12,
    towerLevelIndex: 3,
    showAvatarInfoList: [
      {
        avatarId: 10000078,
        level: 90
      },
      {
        avatarId: 10000042,
        level: 90
      },
      {
        avatarId: 10000033,
        level: 90
      },
      {
        avatarId: 10000066,
        level: 90
      },
      {
        avatarId: 10000051,
        level: 90
      },
      {
        avatarId: 10000052,
        level: 90
      },
      {
        avatarId: 10000022,
        level: 90
      },
      {
        avatarId: 10000060,
        level: 90
      }
    ],
    showNameCardIdList: [
      210044, 210024, 210078, 210020, 210027, 210056, 210052, 210067, 210049
    ],
    profilePicture: {
      avatarId: 10000033
    }
  },
  avatarInfoList: [
    {
      avatarId: 10000078,
      propMap: {
        '1001': {
          type: 1001,
          ival: '0'
        },
        '1002': {
          type: 1002,
          ival: '6',
          val: '6'
        },
        '1003': {
          type: 1003,
          ival: '0'
        },
        '1004': {
          type: 1004,
          ival: '0'
        },
        '4001': {
          type: 4001,
          ival: '90',
          val: '90'
        },
        '10010': {
          type: 10010,
          ival: '24000',
          val: '24000'
        },
        '10049': {
          type: 10049,
          ival: '12000',
          val: '12000'
        }
      },
      fightPropMap: {
        '1': 13348.04296875,
        '2': 5078.75,
        '4': 822.9296875,
        '5': 311,
        '6': 0.3206000030040741,
        '7': 781.6198120117188,
        '8': 18.520000457763672,
        '20': 0.6798999905586243,
        '21': 0,
        '22': 1.385699987411499,
        '23': 1.3562999963760376,
        '26': 0,
        '27': 0,
        '28': 628.4439697265625,
        '29': 0,
        '30': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0.7539999485015869,
        '44': 0,
        '45': 0,
        '46': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '73': 70,
        '1003': 70,
        '1010': 14613.1328125,
        '2000': 18426.79296875,
        '2001': 1397.760986328125,
        '2002': 800.1398315429688,
        '2003': 0,
        '2004': 0,
        '2005': 0,
        '3006': 0,
        '3045': 0,
        '3046': 1
      },
      skillDepotId: 7801,
      inherentProudSkillList: [782101, 782201, 782301],
      skillLevelMap: {
        '10781': 9,
        '10782': 10,
        '10785': 10
      },
      equipList: [
        {
          itemId: 21543,
          reliquary: {
            level: 21,
            mainPropId: 14001,
            appendPropIdList: [
              501242, 501203, 501064, 501234, 501204, 501203, 501243, 501203
            ]
          },
          flat: {
            nameTextMapHash: '3960571484',
            setNameTextMapHash: '4145306051',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP',
              statValue: 4780
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 40
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 14.4
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 5.8
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 6.5
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15026_4',
            equipType: 'EQUIP_BRACER'
          }
        },
        {
          itemId: 21524,
          reliquary: {
            level: 21,
            mainPropId: 12001,
            appendPropIdList: [
              501222, 501234, 501063, 501243, 501224, 501241, 501224, 501242, 501224
            ]
          },
          flat: {
            nameTextMapHash: '2546063380',
            setNameTextMapHash: '4145306051',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK',
              statValue: 311
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 29.5
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 6.5
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 5.3
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 56
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15026_2',
            equipType: 'EQUIP_NECKLACE'
          }
        },
        {
          itemId: 77553,
          reliquary: {
            level: 21,
            mainPropId: 10008,
            appendPropIdList: [
              501204, 501232, 501224, 501064, 501203, 501233, 501223, 501234
            ]
          },
          flat: {
            nameTextMapHash: '3195328356',
            setNameTextMapHash: '147298547',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
              statValue: 187
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 7.4
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 17.5
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 14.8
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 5.8
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15003_5',
            equipType: 'EQUIP_SHOES'
          }
        },
        {
          itemId: 21513,
          reliquary: {
            level: 21,
            mainPropId: 15014,
            appendPropIdList: [
              501024, 501224, 501232, 501204, 501202, 501223, 501202, 501223
            ]
          },
          flat: {
            nameTextMapHash: '1058628732',
            setNameTextMapHash: '4145306051',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_GRASS_ADD_HURT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 299
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 21.8
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 5.2
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 10.1
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15026_1',
            equipType: 'EQUIP_RING'
          }
        },
        {
          itemId: 77533,
          reliquary: {
            level: 21,
            mainPropId: 13007,
            appendPropIdList: [
              501243, 501224, 501062, 501082, 501223, 501062, 501224, 501064
            ]
          },
          flat: {
            nameTextMapHash: '2641672172',
            setNameTextMapHash: '147298547',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_CRITICAL',
              statValue: 31.1
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 21
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 22.5
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 15.2
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 19
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15003_3',
            equipType: 'EQUIP_DRESS'
          }
        },
        {
          itemId: 11422,
          weapon: {
            level: 90,
            promoteLevel: 6,
            affixMap: {
              '111422': 4
            }
          },
          flat: {
            nameTextMapHash: '2448629019',
            rankLevel: 4,
            weaponStats: [
              {
                appendPropId: 'FIGHT_PROP_BASE_ATTACK',
                statValue: 510
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 165
              }
            ],
            itemType: 'ITEM_WEAPON',
            icon: 'UI_EquipIcon_Sword_Kasabouzu'
          }
        }
      ],
      fetterInfo: {
        expLevel: 10
      }
    },
    {
      avatarId: 10000042,
      propMap: {
        '1001': {
          type: 1001,
          ival: '0'
        },
        '1002': {
          type: 1002,
          ival: '6',
          val: '6'
        },
        '1003': {
          type: 1003,
          ival: '0'
        },
        '1004': {
          type: 1004,
          ival: '0'
        },
        '4001': {
          type: 4001,
          ival: '90',
          val: '90'
        },
        '10010': {
          type: 10010,
          ival: '24000',
          val: '24000'
        },
        '10049': {
          type: 10049,
          ival: '12000',
          val: '12000'
        }
      },
      talentIdList: [421, 422],
      fightPropMap: {
        '1': 13103.125,
        '2': 4989.1298828125,
        '3': 0.20989999175071716,
        '4': 832.4967651367188,
        '5': 311,
        '6': 0.535860002040863,
        '7': 799.2965698242188,
        '8': 18.520000457763672,
        '20': 0.6371000409126282,
        '21': 0,
        '22': 2.0034000873565674,
        '23': 1.0583000183105469,
        '26': 0,
        '27': 0,
        '28': 314.7099914550781,
        '29': 0,
        '30': 0,
        '40': 0,
        '41': 0.6159999966621399,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '71': 40,
        '81': 0,
        '1001': 40,
        '1010': 19380.712890625,
        '2000': 20842.6015625,
        '2001': 1589.5985107421875,
        '2002': 817.8165893554688,
        '2003': 0,
        '2004': 0,
        '2005': 0,
        '3002': 0,
        '3005': 0,
        '3023': 0,
        '3045': 0,
        '3046': 1
      },
      skillDepotId: 4201,
      inherentProudSkillList: [422101, 422201, 422301],
      skillLevelMap: {
        '10421': 10,
        '10422': 9,
        '10425': 10
      },
      equipList: [
        {
          itemId: 79543,
          reliquary: {
            level: 21,
            mainPropId: 14001,
            appendPropIdList: [
              501224, 501203, 501033, 501061, 501034, 501221, 501202, 501202
            ]
          },
          flat: {
            nameTextMapHash: '518099524',
            setNameTextMapHash: '2512309395',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP',
              statValue: 4780
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 13.2
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 9.7
              },
              {
                appendPropId: 'FIGHT_PROP_HP_PERCENT',
                statValue: 11.1
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 4.1
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15005_4',
            equipType: 'EQUIP_BRACER'
          }
        },
        {
          itemId: 79523,
          reliquary: {
            level: 21,
            mainPropId: 12001,
            appendPropIdList: [
              501242, 501221, 501204, 501021, 501204, 501204, 501221, 501244
            ]
          },
          flat: {
            nameTextMapHash: '3867531876',
            setNameTextMapHash: '2512309395',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK',
              statValue: 311
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 42
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 10.9
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 11.7
              },
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 209
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15005_2',
            equipType: 'EQUIP_NECKLACE'
          }
        },
        {
          itemId: 79554,
          reliquary: {
            level: 21,
            mainPropId: 10008,
            appendPropIdList: [
              501061, 501224, 501201, 501032, 501204, 501201, 501202, 501201, 501033
            ]
          },
          flat: {
            nameTextMapHash: '2319624836',
            setNameTextMapHash: '2512309395',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
              statValue: 187
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 4.1
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 7.8
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 15.2
              },
              {
                appendPropId: 'FIGHT_PROP_HP_PERCENT',
                statValue: 9.9
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15005_5',
            equipType: 'EQUIP_SHOES'
          }
        },
        {
          itemId: 20514,
          reliquary: {
            level: 21,
            mainPropId: 15009,
            appendPropIdList: [
              501202, 501242, 501222, 501082, 501221, 501201, 501222, 501203, 501204
            ]
          },
          flat: {
            nameTextMapHash: '3597766412',
            setNameTextMapHash: '1675079283',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ELEC_ADD_HURT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 13.2
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 19
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 17.9
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 19
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15025_1',
            equipType: 'EQUIP_RING'
          }
        },
        {
          itemId: 79533,
          reliquary: {
            level: 21,
            mainPropId: 13008,
            appendPropIdList: [
              501233, 501244, 501201, 501061, 501243, 501244, 501203, 501201
            ]
          },
          flat: {
            nameTextMapHash: '151455548',
            setNameTextMapHash: '2512309395',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_CRITICAL_HURT',
              statValue: 62.2
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 5.8
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 68
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 8.9
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 4.1
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15005_3',
            equipType: 'EQUIP_DRESS'
          }
        },
        {
          itemId: 11405,
          weapon: {
            level: 90,
            promoteLevel: 6,
            affixMap: {
              '111405': 4
            }
          },
          flat: {
            nameTextMapHash: '1321135667',
            rankLevel: 4,
            weaponStats: [
              {
                appendPropId: 'FIGHT_PROP_BASE_ATTACK',
                statValue: 510
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 41.3
              }
            ],
            itemType: 'ITEM_WEAPON',
            icon: 'UI_EquipIcon_Sword_Rockkiller'
          }
        }
      ],
      fetterInfo: {
        expLevel: 10
      }
    },
    {
      avatarId: 10000033,
      propMap: {
        '1001': {
          type: 1001,
          ival: '0'
        },
        '1002': {
          type: 1002,
          ival: '6',
          val: '6'
        },
        '1003': {
          type: 1003,
          ival: '0'
        },
        '1004': {
          type: 1004,
          ival: '0'
        },
        '4001': {
          type: 4001,
          ival: '90',
          val: '90'
        },
        '10010': {
          type: 10010,
          ival: '24000',
          val: '24000'
        },
        '10049': {
          type: 10049,
          ival: '12000',
          val: '12000'
        }
      },
      fightPropMap: {
        '1': 13103.125,
        '2': 5317.759765625,
        '3': 0.24740000069141388,
        '4': 843.194580078125,
        '5': 373.260009765625,
        '6': 0.9199000000953674,
        '7': 814.6676025390625,
        '20': 0.7498999834060669,
        '21': 0,
        '22': 2.1979479789733887,
        '23': 1.2137000560760498,
        '26': 0,
        '27': 0,
        '28': 142.94000244140625,
        '29': 0,
        '30': 0,
        '40': 0,
        '41': 0,
        '42': 0.7539999485015869,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '72': 60,
        '1002': 60,
        '1010': 21662.59765625,
        '2000': 21662.59765625,
        '2001': 1992.1092529296875,
        '2002': 814.6676025390625,
        '2003': 0,
        '2004': 0,
        '2005': 0,
        '3045': 0,
        '3046': 1
      },
      skillDepotId: 3301,
      inherentProudSkillList: [332101, 332201, 332301],
      skillLevelMap: {
        '10331': 8,
        '10332': 9,
        '10333': 10
      },
      proudSkillExtraLevelMap: {
        '3331': 1
      },
      equipList: [
        {
          itemId: 93544,
          reliquary: {
            level: 21,
            mainPropId: 14001,
            appendPropIdList: [
              501204, 501232, 501243, 501222, 501201, 501224, 501231, 501221, 501244
            ]
          },
          flat: {
            nameTextMapHash: '2293242820',
            setNameTextMapHash: '4144069251',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP',
              statValue: 4780
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 6.6
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 9.7
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 44
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 19.4
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15019_4',
            equipType: 'EQUIP_BRACER'
          }
        },
        {
          itemId: 21524,
          reliquary: {
            level: 21,
            mainPropId: 12001,
            appendPropIdList: [
              501222, 501061, 501203, 501031, 501061, 501224, 501204, 501032, 501201
            ]
          },
          flat: {
            nameTextMapHash: '2546063380',
            setNameTextMapHash: '4145306051',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK',
              statValue: 311
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 14
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 8.2
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 10.1
              },
              {
                appendPropId: 'FIGHT_PROP_HP_PERCENT',
                statValue: 8.7
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15026_2',
            equipType: 'EQUIP_NECKLACE'
          }
        },
        {
          itemId: 21554,
          reliquary: {
            level: 21,
            mainPropId: 10004,
            appendPropIdList: [
              501053, 501223, 501023, 501203, 501224, 501051, 501224, 501053, 501204
            ]
          },
          flat: {
            nameTextMapHash: '3029824956',
            setNameTextMapHash: '4145306051',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK_PERCENT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 49
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 22.5
              },
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 269
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 7.4
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15026_5',
            equipType: 'EQUIP_SHOES'
          }
        },
        {
          itemId: 93514,
          reliquary: {
            level: 21,
            mainPropId: 15011,
            appendPropIdList: [
              501204, 501232, 501062, 501051, 501202, 501062, 501204, 501204, 501234
            ]
          },
          flat: {
            nameTextMapHash: '2145970892',
            setNameTextMapHash: '4144069251',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_WATER_ADD_HURT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 14.8
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 11.7
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 9.3
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 14
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15019_1',
            equipType: 'EQUIP_RING'
          }
        },
        {
          itemId: 76533,
          reliquary: {
            level: 21,
            mainPropId: 13007,
            appendPropIdList: [
              501223, 501023, 501242, 501062, 501221, 501221, 501063, 501224
            ]
          },
          flat: {
            nameTextMapHash: '2442374844',
            setNameTextMapHash: '1562601179',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_CRITICAL',
              statValue: 31.1
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 25.6
              },
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 269
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 19
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 9.9
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15002_3',
            equipType: 'EQUIP_DRESS'
          }
        },
        {
          itemId: 15508,
          weapon: {
            level: 90,
            promoteLevel: 6,
            affixMap: {
              '115508': 0
            }
          },
          flat: {
            nameTextMapHash: '4230231107',
            rankLevel: 5,
            weaponStats: [
              {
                appendPropId: 'FIGHT_PROP_BASE_ATTACK',
                statValue: 542
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 88.2
              }
            ],
            itemType: 'ITEM_WEAPON',
            icon: 'UI_EquipIcon_Bow_Kirin'
          }
        }
      ],
      fetterInfo: {
        expLevel: 10
      }
    },
    {
      avatarId: 10000066,
      propMap: {
        '1001': {
          type: 1001,
          ival: '0'
        },
        '1002': {
          type: 1002,
          ival: '6',
          val: '6'
        },
        '1003': {
          type: 1003,
          ival: '0'
        },
        '1004': {
          type: 1004,
          ival: '0'
        },
        '4001': {
          type: 4001,
          ival: '90',
          val: '90'
        },
        '10010': {
          type: 10010,
          ival: '24000',
          val: '24000'
        },
        '10049': {
          type: 10049,
          ival: '12000',
          val: '12000'
        }
      },
      fightPropMap: {
        '1': 13715.419921875,
        '2': 5019,
        '3': 0.04659999907016754,
        '4': 808.5789184570312,
        '5': 324.6199951171875,
        '6': 0.9899999499320984,
        '7': 768.554443359375,
        '8': 83.33000183105469,
        '20': 0.7728399634361267,
        '21': 0,
        '22': 2.135200023651123,
        '23': 1.1684000492095947,
        '26': 0,
        '27': 0,
        '28': 79.25999450683594,
        '29': 0,
        '30': 0,
        '40': 0,
        '41': 0,
        '42': 0.4659999907016754,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '72': 80,
        '1002': 66.84951782226562,
        '1010': 19373.55859375,
        '2000': 19373.55859375,
        '2001': 1933.6920166015625,
        '2002': 851.8844604492188,
        '2003': 0,
        '2004': 0,
        '3045': 0,
        '3046': 1
      },
      skillDepotId: 6601,
      inherentProudSkillList: [662101, 662201, 662301],
      skillLevelMap: {
        '10661': 1,
        '10662': 10,
        '10665': 8
      },
      equipList: [
        {
          itemId: 75544,
          reliquary: {
            level: 21,
            mainPropId: 14001,
            appendPropIdList: [
              501243, 501223, 501204, 501063, 501223, 501201, 501203, 501063, 501243
            ]
          },
          flat: {
            nameTextMapHash: '955500468',
            setNameTextMapHash: '1212345779',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP',
              statValue: 4780
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 42
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 14
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 10.1
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 10.5
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15001_4',
            equipType: 'EQUIP_BRACER'
          }
        },
        {
          itemId: 75524,
          reliquary: {
            level: 21,
            mainPropId: 12001,
            appendPropIdList: [
              501223, 501022, 501234, 501204, 501202, 501231, 501204, 501223, 501233
            ]
          },
          flat: {
            nameTextMapHash: '1359349548',
            setNameTextMapHash: '1212345779',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK',
              statValue: 311
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 14
              },
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 239
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 16.8
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 10.9
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15001_2',
            equipType: 'EQUIP_NECKLACE'
          }
        },
        {
          itemId: 75553,
          reliquary: {
            level: 21,
            mainPropId: 10004,
            appendPropIdList: [
              501084, 501204, 501032, 501223, 501224, 501201, 501202, 501203
            ]
          },
          flat: {
            nameTextMapHash: '1493169484',
            setNameTextMapHash: '1212345779',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK_PERCENT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 23
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 13.2
              },
              {
                appendPropId: 'FIGHT_PROP_HP_PERCENT',
                statValue: 4.7
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 14.8
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15001_5',
            equipType: 'EQUIP_SHOES'
          }
        },
        {
          itemId: 21513,
          reliquary: {
            level: 21,
            mainPropId: 15011,
            appendPropIdList: [
              501223, 501243, 501061, 501083, 501221, 501224, 501064, 501241
            ]
          },
          flat: {
            nameTextMapHash: '1058628732',
            setNameTextMapHash: '4145306051',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_WATER_ADD_HURT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 20.2
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 37
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 9.9
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 21
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15026_1',
            equipType: 'EQUIP_RING'
          }
        },
        {
          itemId: 75534,
          reliquary: {
            level: 21,
            mainPropId: 13008,
            appendPropIdList: [
              501061, 501051, 501203, 501084, 501081, 501202, 501204, 501063, 501062
            ]
          },
          flat: {
            nameTextMapHash: '1855279292',
            setNameTextMapHash: '1212345779',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_CRITICAL_HURT',
              statValue: 62.2
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 14
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 14
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 10.5
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 39
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15001_3',
            equipType: 'EQUIP_DRESS'
          }
        },
        {
          itemId: 11409,
          weapon: {
            level: 90,
            promoteLevel: 6,
            affixMap: {
              '111409': 0
            }
          },
          flat: {
            nameTextMapHash: '3796905611',
            rankLevel: 4,
            weaponStats: [
              {
                appendPropId: 'FIGHT_PROP_BASE_ATTACK',
                statValue: 510
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 27.6
              }
            ],
            itemType: 'ITEM_WEAPON',
            icon: 'UI_EquipIcon_Sword_Bloodstained'
          }
        }
      ],
      fetterInfo: {
        expLevel: 10
      }
    },
    {
      avatarId: 10000051,
      propMap: {
        '1001': {
          type: 1001,
          ival: '0'
        },
        '1002': {
          type: 1002,
          ival: '6',
          val: '6'
        },
        '1003': {
          type: 1003,
          ival: '0'
        },
        '1004': {
          type: 1004,
          ival: '0'
        },
        '4001': {
          type: 4001,
          ival: '90',
          val: '90'
        },
        '10010': {
          type: 10010,
          ival: '24000',
          val: '24000'
        },
        '10049': {
          type: 10049,
          ival: '12000',
          val: '12000'
        }
      },
      talentIdList: [511],
      fightPropMap: {
        '1': 13225.583984375,
        '2': 5287.8798828125,
        '4': 950.0997314453125,
        '5': 347.9599914550781,
        '6': 1.278752088546753,
        '7': 750.8776245117188,
        '8': 81.02000427246094,
        '9': 0.2624000012874603,
        '20': 0.640999972820282,
        '21': 0,
        '22': 1.7855000495910645,
        '23': 1.1749000549316406,
        '26': 0,
        '27': 0,
        '28': 53.62000274658203,
        '29': 0,
        '30': 0.8330000042915344,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '75': 80,
        '1005': 20.97330093383789,
        '1010': 9584.337890625,
        '2000': 18513.46484375,
        '2001': 2513.001708984375,
        '2002': 1028.927978515625,
        '2003': 0,
        '2004': 0,
        '3045': 0,
        '3046': 1
      },
      skillDepotId: 5101,
      inherentProudSkillList: [512101, 512201, 512301],
      skillLevelMap: {
        '10511': 10,
        '10512': 8,
        '10515': 10
      },
      equipList: [
        {
          itemId: 92544,
          reliquary: {
            level: 21,
            mainPropId: 14001,
            appendPropIdList: [
              501221, 501202, 501081, 501094, 501082, 501224, 501222, 501222, 501204
            ]
          },
          flat: {
            nameTextMapHash: '3078252940',
            setNameTextMapHash: '862591315',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP',
              statValue: 4780
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 25.7
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 7
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 35
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE_PERCENT',
                statValue: 7.3
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15018_4',
            equipType: 'EQUIP_BRACER'
          }
        },
        {
          itemId: 92523,
          reliquary: {
            level: 21,
            mainPropId: 12001,
            appendPropIdList: [
              501093, 501084, 501204, 501222, 501224, 501202, 501223, 501091
            ]
          },
          flat: {
            nameTextMapHash: '679838340',
            setNameTextMapHash: '862591315',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK',
              statValue: 311
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_DEFENSE_PERCENT',
                statValue: 11.7
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 23
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 7
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 21
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15018_2',
            equipType: 'EQUIP_NECKLACE'
          }
        },
        {
          itemId: 92554,
          reliquary: {
            level: 21,
            mainPropId: 10004,
            appendPropIdList: [
              501204, 501242, 501094, 501221, 501201, 501221, 501241, 501242, 501221
            ]
          },
          flat: {
            nameTextMapHash: '334413740',
            setNameTextMapHash: '862591315',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK_PERCENT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 6.6
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 54
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE_PERCENT',
                statValue: 7.3
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 16.3
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15018_5',
            equipType: 'EQUIP_SHOES'
          }
        },
        {
          itemId: 92513,
          reliquary: {
            level: 21,
            mainPropId: 15015,
            appendPropIdList: [
              501084, 501221, 501022, 501204, 501222, 501023, 501224, 501203
            ]
          },
          flat: {
            nameTextMapHash: '3438055332',
            setNameTextMapHash: '862591315',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_PHYSICAL_ADD_HURT',
              statValue: 58.3
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 23
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 19.4
              },
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 508
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 7.4
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15018_1',
            equipType: 'EQUIP_RING'
          }
        },
        {
          itemId: 94533,
          reliquary: {
            level: 21,
            mainPropId: 13007,
            appendPropIdList: [
              501224, 501064, 501231, 501054, 501064, 501053, 501234, 501234
            ]
          },
          flat: {
            nameTextMapHash: '1804680132',
            setNameTextMapHash: '2276480763',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_CRITICAL',
              statValue: 31.1
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 7.8
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 11.7
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 17.5
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 37
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15020_3',
            equipType: 'EQUIP_DRESS'
          }
        },
        {
          itemId: 12502,
          weapon: {
            level: 90,
            promoteLevel: 6,
            affixMap: {
              '112502': 0
            }
          },
          flat: {
            nameTextMapHash: '3995710363',
            rankLevel: 5,
            weaponStats: [
              {
                appendPropId: 'FIGHT_PROP_BASE_ATTACK',
                statValue: 608
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 49.6
              }
            ],
            itemType: 'ITEM_WEAPON',
            icon: 'UI_EquipIcon_Claymore_Wolfmound'
          }
        }
      ],
      fetterInfo: {
        expLevel: 10
      }
    },
    {
      avatarId: 10000052,
      propMap: {
        '1001': {
          type: 1001,
          ival: '0'
        },
        '1002': {
          type: 1002,
          ival: '6',
          val: '6'
        },
        '1003': {
          type: 1003,
          ival: '0'
        },
        '1004': {
          type: 1004,
          ival: '0'
        },
        '4001': {
          type: 4001,
          ival: '90',
          val: '90'
        },
        '10010': {
          type: 10010,
          ival: '24000',
          val: '24000'
        },
        '10049': {
          type: 10049,
          ival: '12000',
          val: '12000'
        }
      },
      fightPropMap: {
        '1': 12907.1904296875,
        '2': 5317.75,
        '3': 0.16910000145435333,
        '4': 791.6046752929688,
        '5': 311,
        '6': 0.6233999729156494,
        '7': 789.305419921875,
        '8': 16.200000762939453,
        '9': 0.18950000405311584,
        '20': 0.5827000141143799,
        '21': 0,
        '22': 1.790299892425537,
        '23': 2.0379998683929443,
        '26': 0,
        '27': 0,
        '28': 304.4320068359375,
        '29': 0,
        '30': 0,
        '40': 0,
        '41': 0.4151999354362488,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '71': 90,
        '1001': 90,
        '1010': 20407.546875,
        '2000': 20407.546875,
        '2001': 1596.091064453125,
        '2002': 955.0787963867188,
        '2003': 0,
        '2004': 0,
        '3045': 0,
        '3046': 1
      },
      skillDepotId: 5201,
      inherentProudSkillList: [522101, 522201, 522301, 522501],
      skillLevelMap: {
        '10521': 4,
        '10522': 9,
        '10525': 10
      },
      equipList: [
        {
          itemId: 94543,
          reliquary: {
            level: 21,
            mainPropId: 14001,
            appendPropIdList: [
              501034, 501203, 501224, 501061, 501064, 501204, 501221, 501222
            ]
          },
          flat: {
            nameTextMapHash: '2246743908',
            setNameTextMapHash: '2276480763',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP',
              statValue: 4780
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_HP_PERCENT',
                statValue: 5.8
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 7.4
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 19.4
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 9.9
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15020_4',
            equipType: 'EQUIP_BRACER'
          }
        },
        {
          itemId: 94524,
          reliquary: {
            level: 21,
            mainPropId: 12001,
            appendPropIdList: [
              501204, 501093, 501242, 501221, 501243, 501202, 501222, 501203, 501224
            ]
          },
          flat: {
            nameTextMapHash: '481604708',
            setNameTextMapHash: '2276480763',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK',
              statValue: 311
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 10.5
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE_PERCENT',
                statValue: 6.6
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 40
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 19.4
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15020_2',
            equipType: 'EQUIP_NECKLACE'
          }
        },
        {
          itemId: 96553,
          reliquary: {
            level: 21,
            mainPropId: 10007,
            appendPropIdList: [
              501223, 501064, 501081, 501203, 501224, 501203, 501204, 501224
            ]
          },
          flat: {
            nameTextMapHash: '452268540',
            setNameTextMapHash: '1756609915',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
              statValue: 51.8
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 22.5
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 5.8
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 16
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 10.9
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15022_5',
            equipType: 'EQUIP_SHOES'
          }
        },
        {
          itemId: 94514,
          reliquary: {
            level: 21,
            mainPropId: 15004,
            appendPropIdList: [
              501201, 501243, 501221, 501034, 501201, 501033, 501203, 501203, 501201
            ]
          },
          flat: {
            nameTextMapHash: '14296500',
            setNameTextMapHash: '2276480763',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK_PERCENT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 15.2
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 21
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 5.4
              },
              {
                appendPropId: 'FIGHT_PROP_HP_PERCENT',
                statValue: 11.1
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15020_1',
            equipType: 'EQUIP_RING'
          }
        },
        {
          itemId: 94533,
          reliquary: {
            level: 21,
            mainPropId: 13008,
            appendPropIdList: [
              501022, 501244, 501094, 501202, 501202, 501202, 501091, 501024
            ]
          },
          flat: {
            nameTextMapHash: '1804680132',
            setNameTextMapHash: '2276480763',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_CRITICAL_HURT',
              statValue: 62.2
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 538
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 23
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE_PERCENT',
                statValue: 12.4
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 9.3
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15020_3',
            equipType: 'EQUIP_DRESS'
          }
        },
        {
          itemId: 13401,
          weapon: {
            level: 90,
            promoteLevel: 6,
            affixMap: {
              '113401': 4
            }
          },
          flat: {
            nameTextMapHash: '2664629131',
            rankLevel: 4,
            weaponStats: [
              {
                appendPropId: 'FIGHT_PROP_BASE_ATTACK',
                statValue: 454
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 221
              }
            ],
            itemType: 'ITEM_WEAPON',
            icon: 'UI_EquipIcon_Pole_Stardust'
          }
        }
      ],
      fetterInfo: {
        expLevel: 10
      }
    },
    {
      avatarId: 10000022,
      propMap: {
        '1001': {
          type: 1001,
          ival: '0'
        },
        '1002': {
          type: 1002,
          ival: '6',
          val: '6'
        },
        '1003': {
          type: 1003,
          ival: '0'
        },
        '1004': {
          type: 1004,
          ival: '0'
        },
        '4001': {
          type: 4001,
          ival: '90',
          val: '90'
        },
        '10010': {
          type: 10010,
          ival: '24000',
          val: '24000'
        },
        '10049': {
          type: 10049,
          ival: '12000',
          val: '12000'
        }
      },
      fightPropMap: {
        '1': 10531.4833984375,
        '2': 4504.759765625,
        '4': 650.7557373046875,
        '5': 443.2900085449219,
        '6': 0.10499999672174454,
        '7': 668.642333984375,
        '8': 152.77000427246094,
        '9': 0.23319999873638153,
        '20': 0.05000000074505806,
        '21': 0,
        '22': 0.6941999793052673,
        '23': 1.837999939918518,
        '26': 0,
        '27': 0,
        '28': 713.0560302734375,
        '29': 0,
        '30': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0.15000000596046448,
        '45': 0,
        '46': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '74': 60,
        '1004': 34.85040283203125,
        '1010': 15036.2431640625,
        '2000': 15036.2431640625,
        '2001': 1162.3751220703125,
        '2002': 977.3397216796875,
        '2003': 0,
        '2004': 0,
        '3045': 0,
        '3046': 1
      },
      skillDepotId: 2201,
      inherentProudSkillList: [222101, 222201, 222301],
      skillLevelMap: {
        '10221': 1,
        '10224': 1,
        '10225': 8
      },
      equipList: [
        {
          itemId: 76544,
          reliquary: {
            level: 17,
            mainPropId: 14001,
            appendPropIdList: [
              501241, 501231, 501223, 501053, 501051, 501231, 501234, 501053
            ]
          },
          flat: {
            nameTextMapHash: '2411209276',
            setNameTextMapHash: '1562601179',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP',
              statValue: 3967
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 16
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 15.5
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 7
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 49
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15002_4',
            equipType: 'EQUIP_BRACER'
          }
        },
        {
          itemId: 76523,
          reliquary: {
            level: 21,
            mainPropId: 12001,
            appendPropIdList: [
              501023, 501231, 501063, 501241, 501231, 501231, 501241, 501063
            ]
          },
          flat: {
            nameTextMapHash: '2718260116',
            setNameTextMapHash: '1562601179',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK',
              statValue: 311
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 269
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 13.6
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK_PERCENT',
                statValue: 10.5
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 33
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15002_2',
            equipType: 'EQUIP_NECKLACE'
          }
        },
        {
          itemId: 76554,
          reliquary: {
            level: 21,
            mainPropId: 10008,
            appendPropIdList: [
              501234, 501082, 501051, 501092, 501054, 501084, 501083, 501093, 501082
            ]
          },
          flat: {
            nameTextMapHash: '1653506492',
            setNameTextMapHash: '1562601179',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
              statValue: 187
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 6.5
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 81
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 33
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE_PERCENT',
                statValue: 12.4
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15002_5',
            equipType: 'EQUIP_SHOES'
          }
        },
        {
          itemId: 76513,
          reliquary: {
            level: 17,
            mainPropId: 15007,
            appendPropIdList: [501092, 501223, 501054, 501083, 501053, 501091, 501051]
          },
          flat: {
            nameTextMapHash: '2114829356',
            setNameTextMapHash: '1562601179',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
              statValue: 155
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_DEFENSE_PERCENT',
                statValue: 10.9
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 7
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 51
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 21
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15002_1',
            equipType: 'EQUIP_RING'
          }
        },
        {
          itemId: 77533,
          reliquary: {
            level: 21,
            mainPropId: 13010,
            appendPropIdList: [
              501221, 501023, 501082, 501232, 501081, 501233, 501081, 501232
            ]
          },
          flat: {
            nameTextMapHash: '2641672172',
            setNameTextMapHash: '147298547',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
              statValue: 187
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 5.4
              },
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 269
              },
              {
                appendPropId: 'FIGHT_PROP_DEFENSE',
                statValue: 51
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 16.2
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15003_3',
            equipType: 'EQUIP_DRESS'
          }
        },
        {
          itemId: 15402,
          weapon: {
            level: 70,
            promoteLevel: 4,
            affixMap: {
              '115402': 3
            }
          },
          flat: {
            nameTextMapHash: '2556914683',
            rankLevel: 4,
            weaponStats: [
              {
                appendPropId: 'FIGHT_PROP_BASE_ATTACK',
                statValue: 388
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 136
              }
            ],
            itemType: 'ITEM_WEAPON',
            icon: 'UI_EquipIcon_Bow_Troupe'
          }
        }
      ],
      fetterInfo: {
        expLevel: 2
      }
    },
    {
      avatarId: 10000060,
      propMap: {
        '1001': {
          type: 1001,
          ival: '0'
        },
        '1002': {
          type: 1002,
          ival: '6',
          val: '6'
        },
        '1003': {
          type: 1003,
          ival: '0'
        },
        '1004': {
          type: 1004,
          ival: '0'
        },
        '4001': {
          type: 4001,
          ival: '90',
          val: '90'
        },
        '10010': {
          type: 10010,
          ival: '24000',
          val: '24000'
        },
        '10049': {
          type: 10049,
          ival: '12000',
          val: '12000'
        }
      },
      fightPropMap: {
        '1': 14450.17578125,
        '2': 5347.6298828125,
        '3': 0.7067999839782715,
        '4': 740.685302734375,
        '5': 357.69000244140625,
        '7': 547.9793090820312,
        '9': 0.11659999936819077,
        '20': 0.7901999950408936,
        '21': 0,
        '22': 1.517899990081787,
        '23': 2.0168347358703613,
        '26': 0,
        '27': 0,
        '28': 81.58999633789062,
        '29': 0,
        '30': 0,
        '40': 0,
        '41': 0,
        '42': 0.4659999907016754,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '72': 70,
        '1002': 0,
        '1010': 30011.19140625,
        '2000': 30011.19140625,
        '2001': 1098.375244140625,
        '2002': 611.8737182617188,
        '2003': 0,
        '2004': 0,
        '2005': 0,
        '3006': 0,
        '3045': 0,
        '3046': 1
      },
      skillDepotId: 6001,
      inherentProudSkillList: [602101, 602201, 602301],
      skillLevelMap: {
        '10606': 4,
        '10607': 6,
        '10610': 10
      },
      equipList: [
        {
          itemId: 30544,
          reliquary: {
            level: 21,
            mainPropId: 14001,
            appendPropIdList: [
              501204, 501051, 501232, 501223, 501224, 501201, 501052, 501204, 501232
            ]
          },
          flat: {
            nameTextMapHash: '3883964132',
            setNameTextMapHash: '235897163',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP',
              statValue: 4780
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 10.5
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 29
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 10.4
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 14.8
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15030_4',
            equipType: 'EQUIP_BRACER'
          }
        },
        {
          itemId: 94524,
          reliquary: {
            level: 21,
            mainPropId: 12001,
            appendPropIdList: [
              501093, 501231, 501204, 501224, 501224, 501222, 501091, 501224, 501203
            ]
          },
          flat: {
            nameTextMapHash: '481604708',
            setNameTextMapHash: '2276480763',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_ATTACK',
              statValue: 311
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_DEFENSE_PERCENT',
                statValue: 11.7
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 4.5
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 7.4
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 29.5
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15020_2',
            equipType: 'EQUIP_NECKLACE'
          }
        },
        {
          itemId: 30554,
          reliquary: {
            level: 21,
            mainPropId: 10002,
            appendPropIdList: [
              501221, 501231, 501241, 501201, 501202, 501223, 501233, 501244, 501221
            ]
          },
          flat: {
            nameTextMapHash: '613773908',
            setNameTextMapHash: '235897163',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_HP_PERCENT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 17.9
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 10.4
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 40
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL',
                statValue: 5.8
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15030_5',
            equipType: 'EQUIP_SHOES'
          }
        },
        {
          itemId: 82514,
          reliquary: {
            level: 21,
            mainPropId: 15011,
            appendPropIdList: [
              501232, 501053, 501224, 501243, 501223, 501221, 501243, 501222, 501233
            ]
          },
          flat: {
            nameTextMapHash: '561833036',
            setNameTextMapHash: '1541919827',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_WATER_ADD_HURT',
              statValue: 46.6
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 11
              },
              {
                appendPropId: 'FIGHT_PROP_ATTACK',
                statValue: 18
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 26.4
              },
              {
                appendPropId: 'FIGHT_PROP_ELEMENT_MASTERY',
                statValue: 42
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15008_1',
            equipType: 'EQUIP_RING'
          }
        },
        {
          itemId: 94533,
          reliquary: {
            level: 21,
            mainPropId: 13007,
            appendPropIdList: [
              501031, 501023, 501223, 501234, 501231, 501024, 501234, 501222
            ]
          },
          flat: {
            nameTextMapHash: '1804680132',
            setNameTextMapHash: '2276480763',
            rankLevel: 5,
            reliquaryMainstat: {
              mainPropId: 'FIGHT_PROP_CRITICAL',
              statValue: 31.1
            },
            reliquarySubstats: [
              {
                appendPropId: 'FIGHT_PROP_HP_PERCENT',
                statValue: 4.1
              },
              {
                appendPropId: 'FIGHT_PROP_HP',
                statValue: 568
              },
              {
                appendPropId: 'FIGHT_PROP_CRITICAL_HURT',
                statValue: 13.2
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 17.5
              }
            ],
            itemType: 'ITEM_RELIQUARY',
            icon: 'UI_RelicIcon_15020_3',
            equipType: 'EQUIP_DRESS'
          }
        },
        {
          itemId: 15411,
          weapon: {
            level: 80,
            promoteLevel: 5,
            affixMap: {
              '115411': 4
            }
          },
          flat: {
            nameTextMapHash: '2425414923',
            rankLevel: 4,
            weaponStats: [
              {
                appendPropId: 'FIGHT_PROP_BASE_ATTACK',
                statValue: 497
              },
              {
                appendPropId: 'FIGHT_PROP_CHARGE_EFFICIENCY',
                statValue: 27.9
              }
            ],
            itemType: 'ITEM_WEAPON',
            icon: 'UI_EquipIcon_Bow_Fallensun'
          }
        }
      ],
      fetterInfo: {
        expLevel: 7
      }
    }
  ],
  ttl: 42,
  uid: '613006926'
};
