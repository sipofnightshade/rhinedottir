import type { SelectedArtifact } from '$lib/types/artifacts';

// change into object
export const ArtifactData: SelectedArtifact[] = [
  {
    uid: 0,
    url: 'none',
    name: 'none',
    fullName: 'None',
    rating: [],
    twoPiece: [{ values: [{ scaling: 'atk', coef: 0 }] }],
    fourPiece: [
      {
        description: 'No artifact selected',
        values: [{ scaling: 'normal', coef: 0 }]
      }
    ]
  },
  {
    uid: 15001,
    url: 'UI_RelicIcon_15001',
    name: 'gladiators',
    fullName: "Gladiator's Finale",
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'atk%', coef: 0.18 }] }],
    fourPiece: [
      {
        description:
          'If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.',
        weapons: ['sword', 'polearm', 'claymore'],
        values: [{ scaling: 'normal', coef: 0.35 }]
      }
    ]
  },
  {
    uid: 15003,
    url: 'UI_RelicIcon_15003',
    name: 'wanderers',
    fullName: "Wanderer's Troupe",
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'em', coef: 80 }] }],
    fourPiece: [
      {
        description:
          'Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.',
        weapons: ['catalyst', 'bow'],
        values: [{ scaling: 'charged', coef: 0.35 }]
      }
    ]
  },
  {
    uid: 15007,
    url: 'UI_RelicIcon_15007',
    name: 'noblesseoblige',
    fullName: 'Noblesse Oblige',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'burst', coef: 0.2 }] }],
    fourPiece: [
      {
        description:
          'Using an Elemental Burst increases all party members ATK by 20% for 12s. This effect cannot stack.',
        target: 'party',
        unique: true,
        actionType: 'toggle',
        values: [{ scaling: 'atk%', coef: 0.2 }]
      }
    ]
  },
  {
    uid: 15008,
    url: 'UI_RelicIcon_15008',
    name: 'bloodstained',
    fullName: 'Bloodstained Chivalry',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'physical', coef: 0.25 }] }],
    fourPiece: [
      {
        description:
          'After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.',
        actionType: 'toggle',
        values: [{ scaling: 'charged', coef: 0.5 }]
      }
    ]
  },
  {
    uid: 14004,
    url: 'UI_RelicIcon_14004',
    name: 'maidenbeloved',
    fullName: 'Maiden Beloved',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'healing', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.',
        target: 'party',
        actionType: 'toggle',
        values: [{ scaling: 'healingIncoming', coef: 0.2 }]
      }
    ]
  },
  {
    uid: 15002,
    url: 'UI_RelicIcon_15002',
    name: 'viridescent',
    fullName: 'Viridescent Venerer',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'anemo', coef: 0.15 }] }],
    fourPiece: [
      {
        description: 'Increases Swirl DMG by 60%. ',
        values: [{ scaling: 'swirl', coef: 0.6 }]
      },
      {
        description:
          'Decreases opponents Elemental RES to the element infused in the Swirl by 40% for 10s.',
        target: 'enemy',
        unique: true,
        actionType: 'multiSelect',
        values: [
          { scaling: 'cryoRes', coef: 0.4 },
          { scaling: 'electroRes', coef: 0.4 },
          { scaling: 'hydroRes', coef: 0.4 },
          { scaling: 'pyroRes', coef: 0.4 }
        ]
      }
    ]
  },
  {
    uid: 15014,
    url: 'UI_RelicIcon_15014',
    name: 'archaicpetra',
    fullName: 'Archaic Petra',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'geo', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time',
        target: 'party',
        unique: true,
        actionType: 'select',
        values: [
          { scaling: 'cryo', coef: 0.35 },
          { scaling: 'electro', coef: 0.35 },
          { scaling: 'hydro', coef: 0.35 },
          { scaling: 'pyro', coef: 0.35 }
        ]
      }
    ]
  },
  {
    uid: 15015,
    url: 'UI_RelicIcon_15015',
    name: 'retracingbolide',
    fullName: 'Retracing Bolide',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'shieldStrength', coef: 0.35 }] }],
    fourPiece: [
      {
        description:
          'While protected by a shield, gain an additional 40% Normal and Charged Attack DMG.',
        actionType: 'toggle',
        shielded: true,
        values: [
          { scaling: 'normal', coef: 0.4 },
          { scaling: 'charged', coef: 0.4 }
        ]
      }
    ]
  },
  {
    uid: 14002,
    url: 'UI_RelicIcon_14002',
    name: 'thundersoother',
    fullName: 'Thundersoother',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'electroRes', coef: 0.4 }] }],
    fourPiece: [
      {
        description: 'Increases DMG against opponents affected by Electro by 35%.',
        values: [{ scaling: 'electro', coef: 0.35 }]
      }
    ]
  },
  {
    uid: 15005,
    url: 'UI_RelicIcon_15005',
    name: 'thunderingfury',
    fullName: 'Thundering Fury',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'electro', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.',
        values: [
          { scaling: 'overloaded', coef: 0.4 },
          { scaling: 'electrocharged', coef: 0.4 },
          { scaling: 'superconduct', coef: 0.4 },
          { scaling: 'hyperbloom', coef: 0.4 },
          { scaling: 'aggravate', coef: 0.2 }
        ]
      }
    ]
  },
  {
    uid: 14003,
    url: 'UI_RelicIcon_14003',
    name: 'lavawalker',
    fullName: 'Lavawalker',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'pyroRes', coef: 0.4 }] }],
    fourPiece: [
      {
        description: 'Increases DMG against opponents affected by Pyro by 35%.',
        values: [{ scaling: 'pyro', coef: 0.35 }]
      }
    ]
  },
  {
    uid: 15006,
    url: 'UI_RelicIcon_15006',
    name: 'crimsonwitch',
    fullName: 'Crimson Witch of Flames',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'pyro', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'Increases Overloaded and Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%.',
        values: [
          { scaling: 'overloaded', coef: 0.4 },
          { scaling: 'burning', coef: 0.4 },
          { scaling: 'burgeon', coef: 0.4 },
          { scaling: 'vaporize', coef: 0.2 },
          { scaling: 'melt', coef: 0.2 }
        ]
      },
      {
        description:
          'Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.',
        actionType: 'stack',
        values: [{ scaling: 'pyro', coef: [0.075, 0.075, 0.075] }]
      }
    ]
  },
  {
    uid: 14001,
    url: 'UI_RelicIcon_14001',
    name: 'blizzardstrayer',
    fullName: 'Blizzard Strayer',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'cryo', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.',
        actionType: 'stack',
        values: [{ scaling: 'critrate', coef: [0.2, 0.2] }]
      }
    ]
  },
  {
    uid: 15016,
    url: 'UI_RelicIcon_15016',
    name: 'heartofdepth',
    fullName: 'Heart of Depth',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'hydro', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'After using an Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.',
        actionType: 'toggle',
        values: [
          { scaling: 'normal', coef: 0.3 },
          { scaling: 'charged', coef: 0.3 }
        ]
      }
    ]
  },
  {
    uid: 15017,
    url: 'UI_RelicIcon_15017',
    name: 'tenacityofmillelith',
    fullName: 'Tenacity of the Millelith',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'hp%', coef: 0.2 }] }],
    fourPiece: [
      {
        description:
          'When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.',
        target: 'party',
        actionType: 'toggle',
        values: [
          { scaling: 'atk%', coef: 0.2 },
          { scaling: 'shieldStrength', coef: 0.3 }
        ]
      }
    ]
  },
  {
    uid: 15018,
    url: 'UI_RelicIcon_15018',
    name: 'paleflame',
    fullName: 'Pale Flame',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'physical', coef: 0.25 }] }],
    fourPiece: [
      {
        description:
          'When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.',
        actionType: 'stack',
        values: [
          { scaling: 'atk%', coef: [0.09, 0.09] },
          { scaling: 'physical', coef: [0, 0.25] }
        ]
      }
    ]
  },
  {
    uid: 15019,
    url: 'UI_RelicIcon_15019',
    name: 'shimenawa',
    fullName: "Shimenawa's Reminiscence",
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'atk%', coef: 0.18 }] }],
    fourPiece: [
      {
        description:
          'When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration.',
        actionType: 'toggle',
        values: [
          { scaling: 'normal', coef: 0.5 },
          { scaling: 'charged', coef: 0.5 },
          { scaling: 'plunge', coef: 0.5 }
        ]
      }
    ]
  },
  {
    uid: 15020,
    url: 'UI_RelicIcon_15020',
    name: 'emblemofseveredfate',
    fullName: 'Emblem of Severed Fate',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'energy', coef: 0.2 }] }],
    fourPiece: [
      {
        description:
          'Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.',
        values: [
          {
            scaling: 'burst',
            coef: 0.25, // increases burst by 0.25 of the source
            source: ['energy', 0, 0.75] // which is now energy recharge
          }
        ]
      }
    ]
  },
  {
    uid: 15021,
    url: 'UI_RelicIcon_15021',
    name: 'huskofopulentdreams',
    fullName: 'Husk of Opulent Dreams',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'def%', coef: 0.3 }] }],
    fourPiece: [
      {
        description:
          'A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.',
        actionType: 'stack',
        values: [
          { scaling: 'def%', coef: [0.06, 0.06, 0.06, 0.06] },
          { scaling: 'geo', coef: [0.06, 0.06, 0.06, 0.06] }
        ]
      }
    ]
  },
  {
    uid: 15022,
    url: 'UI_RelicIcon_15022',
    name: 'oceanhued',
    fullName: 'Ocean-Hued Clam',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'healing', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing. (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but it is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses). Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time. This effect can still be triggered even when the character who is using this artifact set is not on the field.',
        values: [{ scaling: 'atk%', coef: 0 }]
      }
    ]
  },
  {
    uid: 15023,
    url: 'UI_RelicIcon_15023',
    name: 'vermillionhereafter',
    fullName: 'Vermillion Hereafter',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'atk%', coef: 0.18 }] }],
    fourPiece: [
      {
        description:
          'After using an Elemental Burst. this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the characters HP decreases, their ATK will further increase by 10%. This increase can occur this way maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled.',
        actionType: 'stack',
        values: [{ scaling: 'atk%', coef: [0.08, 0.1, 0.1, 0.1, 0.1] }]
      }
    ]
  },
  {
    uid: 15024,
    url: 'UI_RelicIcon_15024',
    name: 'echoesofanoffering',
    fullName: 'Echoes of an Offering',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'atk%', coef: 0.18 }] }],
    fourPiece: [
      {
        description:
          'When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%. This trigger can occur once every 0.2s.',
        values: [{ scaling: 'normal', coef: 0.432 }] // may need revision
      }
    ]
  },
  {
    uid: 15025,
    url: 'UI_RelicIcon_15025',
    name: 'deepwoodmemories',
    fullName: 'Deepwood Memories',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'dendro', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'After Elemental Skills or Bursts hit opponents, the targets Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field.',
        target: 'enemy',
        actionType: 'toggle',
        values: [{ scaling: 'dendroRes', coef: 0.3 }]
      }
    ]
  },
  {
    uid: 15026,
    url: 'UI_RelicIcon_15026',
    name: 'gildeddreams',
    fullName: 'Gilded Dreams',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'em', coef: 80 }] }],
    fourPiece: [
      {
        description:
          'Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members. ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.',
        actionType: 'visionMatch',
        values: [
          { scaling: 'atk%', coef: [0.14, 0.14, 0.14] }, // same element is first
          { scaling: 'em', coef: [50, 50, 50] } // different element is second
        ]
      }
    ]
  },
  {
    uid: 15027,
    url: 'UI_RelicIcon_15027',
    name: 'desertpavilionchronicle',
    fullName: 'Desert Pavilion Chronicle',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'anemo', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'When Charged Attacks hit opponents, the equipping characters Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s.',
        actionType: 'toggle',
        values: [
          { scaling: 'normalATKSpd', coef: 0.1 },
          { scaling: 'normal', coef: 0.4 },
          { scaling: 'charged', coef: 0.4 },
          { scaling: 'plunge', coef: 0.4 }
        ]
      }
    ]
  },
  {
    uid: 15028,
    url: 'UI_RelicIcon_15028',
    name: 'flowerofparadiselost',
    fullName: 'Flower of Paradise Lost',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'em', coef: 80 }] }],
    fourPiece: [
      {
        description:
          "The equipping character's Bloom, Hyperbloom, and Burgeon reaction DMG are increased by 40%.",
        values: [
          { scaling: 'bloom', coef: 0.4 },
          { scaling: 'hyperbloom', coef: 0.4 },
          { scaling: 'burgeon', coef: 0.4 }
        ]
      },
      {
        description:
          'After the equipping character triggers Bloom, Hyperbloom, or Burgeon, they will gain another 25% bonus to the effect mentioned prior. Each stack of this lasts 10s. Max 4 stacks simultaneously. This effect can only be triggered once per second. The character who equips this can still trigger its effects when not on the field.',
        actionType: 'stack',
        values: [
          { scaling: 'bloom', coef: [0.1, 0.1, 0.1, 0.1] },
          { scaling: 'hyperbloom', coef: [0.1, 0.1, 0.1, 0.1] },
          { scaling: 'burgeon', coef: [0.1, 0.1, 0.1, 0.1] }
        ]
      }
    ]
  },
  {
    uid: 15029,
    url: 'UI_RelicIcon_15029',
    name: 'nymphsdream',
    fullName: "Nymph's Dream",
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'hydro', coef: 0.15 }] }],
    fourPiece: [
      {
        description:
          'After Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts hit opponents. 1 stack of Mirrored Nymph will triggered, lasting 8s. When under the effect of 1, 2, or 3 or more Mirrored Nymph stacks, ATK will be increased by 7%/16%/25%, and Hydro DMG will be increased by 4%/9%/15% Mirrored Nymph created by Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts exist independently.',
        actionType: 'stack',
        values: [
          { scaling: 'atk%', coef: [0.07, 0.16, 0.25] },
          { scaling: 'hydro', coef: [0.04, 0.09, 0.15] }
        ]
      }
    ]
  },
  {
    uid: 15030,
    url: 'UI_RelicIcon_15030',
    name: 'vourukashasglow',
    fullName: "Vourukasha's Glow",
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'atk%', coef: 0.18 }] }],
    fourPiece: [
      {
        description: 'Elemental Skill and Elemental Burst DMG will be increased by 10%.',
        values: [
          { scaling: 'skill', coef: 0.1 },
          { scaling: 'burst', coef: 0.1 }
        ]
      },
      {
        description:
          'After the equipping character takes DMG, the aforementioned DMG Bonus is increased by 80% for 5s. This effect increase can have 5 stacks. The duration of each stack is counted independently. These effects can be triggered even when the equipping character is not on the field.',
        actionType: 'stack',
        values: [
          { scaling: 'skill', coef: [0.08, 0.08, 0.08, 0.08, 0.08] },
          { scaling: 'burst', coef: [0.08, 0.08, 0.08, 0.08, 0.08] }
        ]
      }
    ]
  },
  {
    uid: 15031,
    url: 'UI_RelicIcon_15031',
    name: 'marechausseehunter',
    fullName: 'Marechaussee Hunter',
    rating: [4, 5],
    twoPiece: [
      {
        values: [
          { scaling: 'normal', coef: 0.15 },
          { scaling: 'charged', coef: 0.15 }
        ]
      }
    ],
    fourPiece: [
      {
        description:
          'When current HP increases or decreases, CRIT Rate will be increased by 12% for 5s. Max 3 stacks.',
        actionType: 'stack',
        values: [{ scaling: 'critrate', coef: [0.12, 0.12, 0.12] }]
      }
    ]
  },
  {
    uid: 15032,
    url: 'UI_RelicIcon_15032',
    name: 'goldentroupe',
    fullName: 'Golden Troupe',
    rating: [4, 5],
    twoPiece: [{ values: [{ scaling: 'skill', coef: 0.2 }] }],
    fourPiece: [
      {
        description:
          'Increases Elemental Skill DMG by 25%. Additionally, when not on the field, Elemental Skill DMG will be further increased by 25%. This effect will be cleared 2s after taking the field',
        actionType: 'stack',
        values: [{ scaling: 'skill', coef: [0.25, 0.25] }]
      }
    ]
  },
  {
    uid: 10001,
    url: 'UI_RelicIcon_10001',
    name: 'sojourner',
    fullName: 'Resolution of Sojourner',
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'atk%', coef: 0.18 }] }],
    fourPiece: [
      {
        description: 'Increases Charged Attack CRIT Rate by 30%.',
        values: [{ scaling: 'chargedCritRate', coef: 0.3 }]
      }
    ]
  },
  {
    uid: 10004,
    url: 'UI_RelicIcon_10004',
    name: 'tinymiracle',
    fullName: 'Tiny Miracle',
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'hp', coef: 1000 }] }],
    fourPiece: [
      {
        description:
          'Incoming Elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.',
        actionType: 'select',
        values: [
          { scaling: 'anemo', coef: 0.3 },
          { scaling: 'cryo', coef: 0.3 },
          { scaling: 'dendro', coef: 0.3 },
          { scaling: 'electro', coef: 0.3 },
          { scaling: 'hydro', coef: 0.3 },
          { scaling: 'geo', coef: 0.3 },
          { scaling: 'pyro', coef: 0.3 }
        ]
      }
    ]
  },
  {
    uid: 10005,
    url: 'UI_RelicIcon_10005',
    name: 'berserker',
    fullName: 'Berserker',
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'critrate', coef: 0.12 }] }],
    fourPiece: [
      {
        description: 'When HP is below 70%, CRIT Rate increases by an additional 24%',
        actionType: 'toggle',
        values: [{ scaling: 'critrate', coef: 0.24 }]
      }
    ]
  },
  {
    uid: 10007,
    url: 'UI_RelicIcon_10007',
    name: 'instructor',
    fullName: 'Instructor',
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'em', coef: 80 }] }],
    fourPiece: [
      {
        description:
          "Upon triggering an Elemental Reaction, increases all party members' Elemental Mastery by 120 for 8s.",
        target: 'party',
        actionType: 'toggle',
        values: [{ scaling: 'em', coef: 120 }]
      }
    ]
  },
  {
    uid: 10009,
    url: 'UI_RelicIcon_10009',
    name: 'theexile',
    fullName: 'The Exile',
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'energy', coef: 0.2 }] }],
    fourPiece: [
      {
        description:
          'Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack. NOT IMPLEMENTED!',
        values: [{ scaling: 'energy', coef: 0 }]
      }
    ]
  },
  {
    uid: 10003,
    url: 'UI_RelicIcon_10003',
    name: 'defenderswill',
    fullName: "Defender's Will",
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'def%', coef: 0.3 }] }],
    fourPiece: [
      {
        description:
          "For each different element present in your own party, the wearer's Elemental RES to that corresponding element is increased by 30%. NOT IMPLEMENTED!",
        values: [{ scaling: 'def', coef: 0 }]
      }
    ]
  },
  {
    uid: 10002,
    url: 'UI_RelicIcon_10002',
    name: 'braveheart',
    fullName: 'Brave Heart',
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'atk%', coef: 0.18 }] }],
    fourPiece: [
      {
        description:
          'Increases DMG by 30% against opponents with more than 50% HP. NOT IMPLEMENTED!',
        values: [{ scaling: 'atk%', coef: 0 }]
      }
    ]
  },
  {
    uid: 10006,
    url: 'UI_RelicIcon_10006',
    name: 'martialartist',
    fullName: 'Martial Artist',
    rating: [4],
    twoPiece: [
      {
        values: [
          { scaling: 'normal', coef: 0.15 },
          { scaling: 'charged', coef: 0.15 }
        ]
      }
    ],
    fourPiece: [
      {
        description:
          'Defeating an opponent has 100% chance to remove Elemental Skill CD. Can only occur once every 15s.',
        actionType: 'toggle',
        values: [
          { scaling: 'normal', coef: 0.25 },
          { scaling: 'charged', coef: 0.25 }
        ]
      }
    ]
  },
  {
    uid: 10008,
    url: 'UI_RelicIcon_10008',
    name: 'gambler',
    fullName: 'Gambler',
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'skill', coef: 0.2 }] }],
    fourPiece: [
      {
        description:
          'Defeating an opponent has 100% chance to remove Elemental Skill CD. Can only occur once every 15s. NOT IMPLEMENTED!',
        values: [{ scaling: 'atk%', coef: 0 }]
      }
    ]
  },
  {
    uid: 10012,
    url: 'UI_RelicIcon_10012',
    name: 'scholar',
    fullName: 'Scholar',
    rating: [4],
    twoPiece: [{ values: [{ scaling: 'energy', coef: 0.2 }] }],
    fourPiece: [
      {
        description:
          'Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.',
        values: [{ scaling: 'energy', coef: 0 }]
      }
    ]
  }
];
