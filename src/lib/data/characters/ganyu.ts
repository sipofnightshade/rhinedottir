
import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  "name": "ganyu",
  "fullName": "Ganyu",
  "rating": 5,
  "weapon": "bow",
  "region": "mondstat",
  "vision": "cryo",
  "specialized": "critdmg",
  "c3": "skill",
  "c5": "burst",
  "burstCost": 80,
  "talentNames": {
    "normal": "normalName",
    "skill": "skillName",
    "burst": "burstName"
  },
  "normal": [
    {
      "name": "1 - Hit DMG",
      "tag": "N1",
      "damageBonus": "normal",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param1"
          }
        ]
      ]
    },
    {
      "name": "2 - Hit DMG",
      "tag": "N2",
      "damageBonus": "normal",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param2"
          }
        ]
      ]
    },
    {
      "name": "3 - Hit DMG",
      "tag": "N3",
      "damageBonus": "normal",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param3"
          }
        ]
      ]
    },
    {
      "name": "4 - Hit DMG",
      "tag": "N4",
      "damageBonus": "normal",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param4"
          }
        ]
      ]
    },
    {
      "name": "5 - Hit DMG",
      "tag": "N5",
      "damageBonus": "normal",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param5"
          }
        ]
      ]
    }
  ],
  "charged": [
    {
      "name": "Charged Attack",
      "tag": "CA",
      "damageBonus": "charged",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param6"
          }
        ]
      ]
    }
  ],
  "plunge": [
    {
      "name": "Plunge DMG",
      "tag": "PD",
      "damageBonus": "plunge",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param9"
          }
        ]
      ]
    },
    {
      "name": "Low Plunge",
      "tag": "PL",
      "damageBonus": "plunge",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param10"
          }
        ]
      ]
    },
    {
      "name": "High Plunge",
      "tag": "PH",
      "damageBonus": "plunge",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param11"
          }
        ]
      ]
    }
  ],
  "skill": [
    {
      "name": "Skill DMG",
      "tag": "EP",
      "damageBonus": "skill",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param3"
          }
        ]
      ]
    }
  ],
  "burst": [
    {
      "name": "Burst DMG",
      "tag": "Q1",
      "multiHit": 9,
      "damageBonus": "burst",
      "damage": [
        [
          {
            "scaling": "atk",
            "param": "param1"
          }
        ]
      ]
    }
  ],
  "actions": [
    {
      "name": "Uprising Whirlwind",
      "url": "UI_Talent_S_PlayerWind_02",
      "description": "description",
      "level": 1,
      "constellation": 2,
      "target": "self",
      "actionType": "passive",
      "values": [
        {
          "scaling": "energy",
          "coef": 0
        }
      ]
    }
  ],
  "offField": []
};

export default charName;
