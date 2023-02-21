export const DefaultWeapons = {
  sword: {
    name: "prototyperancour",
    rating: 4,
    type: "sword",
    specialName: "Physical DMG",
    special: "physical",
  },
  claymore: {
    name: "prototypearchaic",
    rating: 4,
    type: "claymore",
    specialName: "ATK",
    special: "atk%",
  },
  bow: {
    name: "prototypecrescent",
    rating: 4,
    type: "bow",
    specialName: "ATK",
    special: "atk%",
  },
  polearm: {
    name: "prototypestarglitter",
    rating: 4,
    type: "polearm",
    specialName: "Energy Recharge",
    special: "energy",
  },
  catalyst: {
    name: "prototypeamber",
    rating: 4,
    type: "catalyst",
    specialName: "HP",
    special: "hp%",
  },
} as const;
