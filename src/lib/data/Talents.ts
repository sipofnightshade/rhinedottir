import type { TalentRecords } from '../types/talents';

export const Talents: TalentRecords = {
  traveleranemo: {
    normal: {
      name: 'Foreign Ironwind',
      hits: [
        {
          name: '1 - Hit DMG',
          tag: 'N1',
          damageBonus: 'normal',
          damage: [{ scaling: 'atk', param: 'param1' }]
        },
        {
          name: '2 - Hit DMG',
          tag: 'N2',
          damageBonus: 'normal',
          damage: [{ scaling: 'atk', param: 'param2' }]
        },
        {
          name: '3 - Hit DMG',
          tag: 'N3',
          damageBonus: 'normal',
          damage: [{ scaling: 'atk', param: 'param3' }]
        },
        {
          name: '4 - Hit DMG',
          tag: 'N4',
          damageBonus: 'normal',
          damage: [{ scaling: 'atk', param: 'param4' }]
        },
        {
          name: '5 - Hit DMG',
          tag: 'N5',
          damageBonus: 'normal',
          damage: [{ scaling: 'atk', param: 'param5' }]
        },
        {
          name: 'Slitting DMG',
          tag: 'A1',
          damageBonus: 'normal',
          elemental: 'anemo',
          damage: [{ scaling: 'atk', param: 'param8' }]
        },
        {
          name: 'Charged Attack',
          tag: 'CA',
          damageBonus: 'charged',
          damage: [
            { scaling: 'atk', param: 'param6' },
            { scaling: 'atk', param: 'param7' }
          ]
        },
        {
          name: '1 - Hit DMG',
          damageBonus: 'charged',
          showOnly: true,
          damage: [{ scaling: 'atk', param: 'param6' }]
        },
        {
          name: '2 - Hit DMG',
          damageBonus: 'charged',
          showOnly: true,
          damage: [{ scaling: 'atk', param: 'param7' }]
        },
        {
          name: 'Plunge DMG',
          tag: 'PD',
          damageBonus: 'plunge',
          damage: [{ scaling: 'atk', param: 'param9', icd: 0 }]
        },
        {
          name: 'Low Plunge',
          tag: 'PL',
          damageBonus: 'plunge',
          damage: [{ scaling: 'atk', param: 'param10', icd: 0 }]
        },
        {
          name: 'High Plunge',
          tag: 'PH',
          damageBonus: 'plunge',
          damage: [{ scaling: 'atk', param: 'param11', icd: 0 }]
        }
      ]
    },
    skill: {
      name: 'Palm Vortex',
      hits: [
        {
          name: 'Press DMG',
          tag: 'EP',
          damageBonus: 'skill',
          damage: [{ scaling: 'atk', param: 'param3', icd: 0 }]
        },
        {
          name: 'Hold DMG - Total',
          tag: 'EH',
          damageBonus: 'skill',
          damage: [
            { scaling: 'atk', param: 'param4', icd: 0 },
            { scaling: 'atk', param: 'param1' },
            { scaling: 'atk', param: 'param1' },
            { scaling: 'atk', param: 'param1' },
            { scaling: 'atk', param: 'param2' },
            { scaling: 'atk', param: 'param2' },
            { scaling: 'atk', param: 'param2' }
          ]
        },
        {
          name: 'Max Storm Damage',
          showOnly: true,
          damageBonus: 'skill',
          damage: [{ scaling: 'atk', param: 'param4' }]
        },
        {
          name: 'Initial Cutting DMG x3',
          showOnly: true,
          damageBonus: 'skill',
          damage: [{ scaling: 'atk', param: 'param1' }]
        },
        {
          name: 'Max Cutting DMG x3',
          showOnly: true,
          damageBonus: 'skill',
          damage: [{ scaling: 'atk', param: 'param2' }]
        }
      ]
    },
    burst: {
      name: 'Gust Surge',
      cost: 60, // checkthis
      hits: [
        {
          name: 'Tornado DMG',
          tag: 'Q1',
          multiHit: 9,
          damageBonus: 'burst',
          damage: [{ scaling: 'atk', param: 'param1' }]
        },
        {
          name: 'Additional Elemental DMG',
          multiHit: 9,
          tag: 'Q2',
          damageBonus: 'burst',
          damage: [{ scaling: 'atk', param: 'param2' }]
        }
      ]
    },
    actions: [
      {
        name: 'Uprising Whirlwind',
        url: 'UI_Talent_S_PlayerWind_02',
        description:
          'Guiding the path of the wind currents, you summon a forward-moving tornado that pulls objects and opponents towards itself, dealing continuous Anemo DMG.\n\n**Elemental Absorption**\nIf the tornado comes into contact with Hydro/Pyro/Cryo/Electro, it will deal additional elemental DMG of that type.\nElemental Absorption may only occur once per use.',
        level: 1,
        constellation: 2,
        target: 'self',
        actionType: 'passive',
        values: [{ scaling: 'energy', coef: 0.16 }]
      },
      {
        name: 'Intertwined Winds',
        url: 'UI_Talent_S_PlayerWind_04',
        description:
          'Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%. If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
        level: 1,
        constellation: 6,
        target: 'enemy',
        actionType: 'toggle',
        values: [{ scaling: 'anemoRes', coef: -0.2 }]
      },
      // {
      //   name: 'Intertwined Winds - Elemental Absorption',
      //   url: 'UI_Talent_S_PlayerWind_04',
      //   description:
      //     'If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
      //   level: 1,
      //   constellation: 6,
      //   target: 'enemy',
      //   actionType: 'multiSelect',
      //   values: [
      //     { scaling: 'pyroRes', coef: -0.2 },
      //     { scaling: 'hydroRes', coef: -0.2 },
      //     { scaling: 'electroRes', coef: -0.2 },
      //     { scaling: 'cryoRes', coef: -0.2 }
      //   ]
      // },
      {
        name: 'Testing',
        url: 'UI_Talent_S_PlayerWind_04',
        description:
          'If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
        level: 1,
        constellation: 6,
        target: 'enemy',
        actionType: 'stack',
        values: [
          { scaling: 'anemo', coef: 1.5 },
          { scaling: 'anemo', coef: 0.5 },
          { scaling: 'anemo', coef: 0.5 },
          { scaling: 'anemo', coef: 0.5 }
        ]
      },
      {
        name: 'Testing2',
        url: 'UI_Talent_S_PlayerWind_04',
        description:
          'If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
        level: 1,
        constellation: 6,
        target: 'enemy',
        actionType: 'select',
        values: [
          { scaling: 'electro', coef: 1.5 },
          { scaling: 'pyro', coef: 0.5 },
          { scaling: 'hydro', coef: 1.5 },
          { scaling: 'cryo', coef: 0.5 }
        ]
      }
    ],
    offField: []
    // take into account co-ordinated attacks like fischl E and C6,
    // raiden E, xingqui Q, xiangling burst where some are timed,
    // some proc'd on attacks,reactions or at specific intervals etc.
    // would have to list out reactions, and not just say "reaction",
    // since eg. Fischl A4 is only on ELECTRO reactions
  }
  // travelergeo: {},
  // travelerelectro: {},
  // travelerdendro: {},
  // albedo: {},
  // aloy: {},
  // amber: {},
  // aratakiitto: {},
  // barbara: {},
  // beidou: {},
  // bennett: {},
  // candace: {},
  // chongyun: {},
  // collei: {},
  // cyno: {},
  // diluc: {},
  // diona: {},
  // dori: {},
  // eula: {},
  // faruzan: {},
  // fischl: {},
  // gorou: {},
  // hutao: {},
  // jean: {},
  // kaedarakazuha: {},
  // kaeya: {},
  // kamisatoayaka: {},
  // kamisatoayato: {},
  // keqing: {},
  // klee: {},
  // kujousara: {},
  // kukishinobu: {},
  // layla: {},
  // mona: {},
  // lisa: {},
  // nahida: {},
  // nilou: {},
  // ningguang: {},
  // noelle: {},
  // qiqi: {},
  // raidenshogun: {},
  // sangonomiyakokomi: {},
  // sayu: {},
  // shenhe: {},
  // shikanoinheizou: {},
  // sucrose: {},
  // tartaglia: {},
  // thoma: {},
  // tighnari: {},
  // venti: {},
  // wanderer: {},
  // xiangling: {},
  // xiao: {},
  // xingqiu: {},
  // xinyan: {},
  // yaemiko: {},
  // yanfei: {},
  // yelan: {},
  // yoimiya: {},
  // yunjin: {},
  // zhongli: {},
};
