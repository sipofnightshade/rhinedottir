export interface Hit {
  name: string;
  tag?: string;
  damageBonus: "normal" | "charged" | "plunge" | "special" | "skill" | "burst";
  // normal default = physical, skill & burst default is character element
  elemental?:
    | "anemo"
    | "cryo"
    | "dendro"
    | "electro"
    | "geo"
    | "hydro"
    | "pyro"
    | "physical";
  multiHit?: number; // for some skills with repeated hits of same damage (up to my judgement)
  quadratic?: boolean;
  showOnly?: boolean; // special multiplier
  damage: {
    scaling: "atk" | "def" | "hp" | "em" | "energy" | "healing";
    param:
      | "param1"
      | "param2"
      | "param3"
      | "param4"
      | "param5"
      | "param6"
      | "param7"
      | "param8"
      | "param9"
      | "param10"
      | "param11"
      | "param12"
      | "param13"
      | "param14"
      | "param15"
      | "param16"
      | "param17"
      | "param18"
      | "param19"
      | "param20";

    icd?: number;
  }[];
}

export type Scale =
  | "atk"
  | "def"
  | "hp"
  | "em"
  | "critrate"
  | "critdmg"
  | "energy"
  | "healing"
  | "anemo"
  | "cryo"
  | "dendro"
  | "electro"
  | "geo"
  | "hydro"
  | "pyro"
  | "anemoRes"
  | "cryoRes"
  | "dendroRes"
  | "electroRes"
  | "geoRes"
  | "hydroRes"
  | "pyroRes"
  | "normal"
  | "charged"
  | "plunge"
  | "skill"
  | "burst";

interface Action {
  name: string;
  url: string;
  description: string;
  level: number;
  constellation: number;
  target: "self" | "enemy" | "party" | "all"; // re-evaluate this
  damageBonus?: "normal" | "charged" | "plunge" | "special" | "skill" | "burst";
  actionType:
    | "stack"
    | "toggle"
    | "select"
    | "multiSelect"
    | "input"
    | "passive";

  values: {
    scaling: Scale;
    coef: number;
    threshold?: number; // for skills like nahida burst EM
  }[];
}

interface OffField {
  name: string;
  tag: string;
  damageBonus: "normal" | "charged" | "plunge" | "special" | "skill" | "burst";
  elemental?: boolean;
  multiHit: boolean;
  damage: {
    scaling: "atk" | "def" | "hp" | "em" | "energy" | "healing";
    param: string | number;
  };
}

interface Talents {
  normal: {
    name: string;
    hits: Hit[];
  };
  skill: {
    name: string;
    hits: Hit[];
  };
  burst: {
    name: string;
    cost: number;
    hits: Hit[];
  };
  actions: Action[];
  offField?: OffField[];
}

/**🚀🚀🚀 This is the exported type */
export interface TalentRecords {
  [P: string]: Talents;
}
