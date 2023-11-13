export const DefaultWeapons = {
  sword: {
    uid: 11406,
    name: 'prototyperancour',
    fullName: 'Prototype Rancour',
    url: 'UI_EquipIcon_Sword_Proto',
    rating: 4,
    type: 'sword',
    specialized: 'physical',
    effectname: 'Smashed Stone',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'atk%', coef: [0.04, 0.04, 0.04, 0.04] },
            { scaling: 'def%', coef: [0.04, 0.04, 0.04, 0.04] }
          ],
          [
            { scaling: 'atk%', coef: [0.05, 0.05, 0.05, 0.05] },
            { scaling: 'def%', coef: [0.05, 0.05, 0.05, 0.05] }
          ],
          [
            { scaling: 'atk%', coef: [0.06, 0.06, 0.06, 0.06] },
            { scaling: 'def%', coef: [0.06, 0.06, 0.06, 0.06] }
          ],
          [
            { scaling: 'atk%', coef: [0.07, 0.07, 0.07, 0.07] },
            { scaling: 'def%', coef: [0.07, 0.07, 0.07, 0.07] }
          ],
          [
            { scaling: 'atk%', coef: [0.08, 0.08, 0.08, 0.08] },
            { scaling: 'def%', coef: [0.08, 0.08, 0.08, 0.08] }
          ]
        ]
      }
    ],
    effect:
      'On hit, Normal or Charged Attacks increase ATK and DEF by {0} for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
    ref: [['4%'], ['5%'], ['6%'], ['7%'], ['8%']]
  },
  claymore: {
    uid: 12406,
    name: 'prototypearchaic',
    fullName: 'Prototype Archaic',
    url: 'UI_EquipIcon_Claymore_Proto',
    rating: 4,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'Crush',
    effect:
      'On hit, Normal or Charged Attacks have a 50% chance to deal an additional {0} ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
    ref: [['240%'], ['300%'], ['360%'], ['420%'], ['480%']]
  },
  bow: {
    uid: 15406,
    name: 'prototypecrescent',
    fullName: 'Prototype Crescent',
    url: 'UI_EquipIcon_Bow_Proto',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: 'Unreturning',
    action: [
      {
        actionType: 'toggle',
        values: [
          [{ scaling: 'atk%', coef: 0.36 }],
          [{ scaling: 'atk%', coef: 0.45 }],
          [{ scaling: 'atk%', coef: 0.54 }],
          [{ scaling: 'atk%', coef: 0.63 }],
          [{ scaling: 'atk%', coef: 0.72 }]
        ]
      }
    ],
    effect:
      'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by {0} for 10s.',
    ref: [['36%'], ['45%'], ['54%'], ['63%'], ['72%']]
  },
  polearm: {
    uid: 13402,
    name: 'prototypestarglitter',
    fullName: 'Prototype Starglitter',
    url: 'UI_EquipIcon_Polearm_Proto',
    rating: 4,
    type: 'polearm',
    specialized: 'energy',
    effectname: 'Magic Affinity',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'normal', coef: [0.08, 0.08] },
            { scaling: 'charged', coef: [0.08, 0.08] }
          ],
          [
            { scaling: 'normal', coef: [0.1, 0.1] },
            { scaling: 'charged', coef: [0.1, 0.1] }
          ],
          [
            { scaling: 'normal', coef: [0.12, 0.12] },
            { scaling: 'charged', coef: [0.12, 0.12] }
          ],
          [
            { scaling: 'normal', coef: [0.14, 0.14] },
            { scaling: 'charged', coef: [0.14, 0.14] }
          ],
          [
            { scaling: 'normal', coef: [0.16, 0.16] },
            { scaling: 'charged', coef: [0.16, 0.16] }
          ]
        ]
      }
    ],
    effect:
      'After using an Elemental Skill, increases Normal and Charged Attack DMG by {0} for 12s. Max 2 stacks.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  catalyst: {
    uid: 14406,
    name: 'prototypeamber',
    fullName: 'Prototype Amber',
    url: 'UI_EquipIcon_Catalyst_Proto',
    rating: 4,
    type: 'catalyst',
    specialized: 'hp%',
    effectname: 'Gilding',
    effect:
      'Using an Elemental Burst regenerates {0} Energy every 2s for 6s. All party members will regenerate {1} HP every 2s for this duration.',
    ref: [
      ['4', '4%'],
      ['4.5', '4.5%'],
      ['5', '5%'],
      ['5.5', '5.5%'],
      ['6', '6%']
    ]
  }
};

export type DefaultTypes =
  | 'prototyperancour'
  | 'prototypearchaic'
  | 'prototypecrescent'
  | 'prototypestarglitter'
  | 'prototypeamber';
