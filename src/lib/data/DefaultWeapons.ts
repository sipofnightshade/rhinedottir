export const DefaultWeapons = {
  sword: {
    name: 'prototyperancour',
    fullName: 'Prototype Rancour',
    rating: 4,
    type: 'sword',
    specialized: 'physical',
    effectname: 'Smashed Stone',
    effect:
      'On hit, Normal or Charged Attacks increase ATK and DEF by {0} for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
    ref: [['4%'], ['5%'], ['6%'], ['7%'], ['8%']]
  },
  claymore: {
    name: 'prototypearchaic',
    fullName: 'Prototype Archaic',
    rating: 4,
    type: 'claymore',
    specialized: 'atk%',
    effectname: 'Crush',
    effect:
      'On hit, Normal or Charged Attacks have a 50% chance to deal an additional {0} ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
    ref: [['240%'], ['300%'], ['360%'], ['420%'], ['480%']]
  },
  bow: {
    name: 'prototypecrescent',
    fullName: 'Prototype Crescent',
    rating: 4,
    type: 'bow',
    specialized: 'atk%',
    effectname: 'Unreturning',
    effect:
      'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by {0} for 10s.',
    ref: [['36%'], ['45%'], ['54%'], ['63%'], ['72%']]
  },
  polearm: {
    name: 'prototypestarglitter',
    fullName: 'Prototype Starglitter',
    rating: 4,
    type: 'polearm',
    specialized: 'energy',
    effectname: 'Magic Affinity',
    effect:
      'After using an Elemental Skill, increases Normal and Charged Attack DMG by {0} for 12s. Max 2 stacks.',
    ref: [['8%'], ['10%'], ['12%'], ['14%'], ['16%']]
  },
  catalyst: {
    name: 'prototypeamber',
    fullName: 'Prototype Amber',
    rating: 4,
    type: 'catalyst',
    specialized: 'hp%',
    effectname: 'Gilding',
    effect:
      'Using an Elemental Burst regenerates {0} Energy every 2s for 6s. All party members will regenerate {1} HP every 2s for this duration.',
    ref: [
      [4, '4%'],
      ['4.5', '4.5%'],
      [5, '5%'],
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
