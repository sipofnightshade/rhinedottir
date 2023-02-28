export const DefaultWeapons = {
  sword: {
    name: 'prototyperancour',
    fullName: 'Prototype Rancour',
    rating: 4,
    type: 'sword',
    specialized: 'physical'
  },
  claymore: {
    name: 'prototypearchaic',
    fullName: 'Prototype Archaic',
    rating: 4,
    type: 'claymore',
    specialized: 'atk%'
  },
  bow: {
    name: 'prototypecrescent',
    fullName: 'Prototype Crescent',
    rating: 4,
    type: 'bow',
    specialized: 'atk%'
  },
  polearm: {
    name: 'prototypestarglitter',
    fullName: 'Prototype Starglitter',
    rating: 4,
    type: 'polearm',
    specialized: 'energy'
  },
  catalyst: {
    name: 'prototypeamber',
    fullName: 'Prototype Amber',
    rating: 4,
    type: 'catalyst',
    specialized: 'hp%'
  }
};

export type DefaultTypes =
  | 'prototyperancour'
  | 'prototypearchaic'
  | 'prototypecrescent'
  | 'prototypestarglitter'
  | 'prototypeamber';
