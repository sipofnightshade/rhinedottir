import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  id: 'travelerhydro',
  name: 'aether',
  fullName: 'Aether',
  rating: 5,
  weapon: 'sword',
  region: 'other',
  vision: 'hydro',
  c3: 'skill',
  c5: 'burst',
  specialized: 'atk%',
  burstCost: 80,
  talentNames: {
    normal: 'Foreign Stream',
    skill: 'Aquacrest Saber',
    burst: 'Rising Waters'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: '2 - Hit DMG',
      tag: 'N2',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: '3 - Hit DMG',
      tag: 'N3',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param3' }]]
    },
    {
      name: '4 - Hit DMG',
      tag: 'N4',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param4' }]]
    },
    {
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param5' }]]
    },
    {
      name: 'Slitting DMG',
      tag: 'A1',
      damageBonus: 'normal',
      hasOwnDMGType: 'anemo',
      damage: [[{ scaling: 'atk', param: 'param1', coef: 0.6 }]]
    }
  ],
  charged: [
    {
      name: 'Charged Attack',
      tag: 'CA',
      damageBonus: 'charged',
      damage: [
        [{ scaling: 'atk', param: 'param6' }],
        [{ scaling: 'atk', param: 'param7' }]
      ]
    }
  ],
  plunge: [
    {
      name: 'Plunge DMG',
      tag: 'PD',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param9' }]]
    },
    {
      name: 'Low Plunge',
      tag: 'PL',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param10' }]]
    },
    {
      name: 'High Plunge',
      tag: 'PH',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param11' }]]
    }
  ],
  skill: [
    {
      name: 'Torrent Surge DMG',
      url: 'Skill_S_PlayerWater_01',
      tag: 'EP',
      damageBonus: 'skill',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: 'Dewdrop DMG',
      url: 'Skill_S_PlayerWater_01',
      tag: 'EC',
      hasOwnBonusFlatDMG: 'suffusion',
      damageBonus: 'skill',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: 'Hold Torrent Surge DMG',
      url: 'Skill_S_PlayerWater_01',
      tag: 'EH',
      hasOwnBonusFlatDMG: 'torrentSurge',
      damageBonus: 'skill',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: 'Spiritbreath Thorn DMG',
      url: 'Skill_S_PlayerWater_01',
      tag: 'PN',
      damageBonus: 'skill',
      damage: [[{ scaling: 'atk', param: 'param3' }]]
    }
  ],
  burst: [
    {
      name: 'Burst DMG',
      tag: 'Q',
      url: 'Skill_E_PlayerWater_01',
      damageBonus: 'burst',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    }
  ],
  actions: [
    {
      name: 'Suffusion',
      url: 'Skill_S_PlayerWater_01',
      description:
        "When using the Hold configuration of this skill, if the Traveler's HP is higher than 50%, the DMG dealt by Dewdrops will increase based on the Traveler's Max HP, and the Traveler will lose a fixed amount of HP every second.",
      target: 'self',
      sourceStats: ['hp'],
      hasLevels: 'skill',
      actionType: 'toggle',
      values: [{ scaling: 'suffusion', coef: 'param6', source: ['hp', 0] }]
    },
    {
      name: 'Clear Waters',
      url: 'UI_Talent_S_PlayerWater_06',
      description:
        "If HP has been consumed via Suffusion while using the Hold Mode **Aquacrest Saber**, the Torrent Surge at the skill's end will deal Bonus DMG equal to 45% of the total HP the Traveler has consumed in this skill use via Suffusion.\nThe maximum DMG Bonus that can be gained this way is 5,000.\n**MODIFIED**\nAdds flat 5000 DMG Bonus to Torrent Surge at the end of Hold Mode **Aquacrest Saber**.",
      level: 8,
      target: 'self',
      actionType: 'passive',
      values: [{ scaling: 'torrentSurge', coef: 5000 }]
    }
  ]
};

export default charName;
