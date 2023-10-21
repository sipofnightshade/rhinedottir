export const convertStat = (appendPropId: string) => {
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
    }
  ],
  ttl: 42,
  uid: '613006926'
};
