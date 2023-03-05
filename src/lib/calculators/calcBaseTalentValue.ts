interface Params {
  fullStats: {
    hp: number;
    atk: number;
    def: number;
    em: number;
    elemental: number;
    physical: number;
    energy: number;
    critrate: number;
    critdmg: number;
    healing: number;
  };
  scaling:
    | "hp"
    | "atk"
    | "def"
    | "em"
    | "physical"
    | "energy"
    | "critrate"
    | "critdmg"
    | "healing";
  params: number;
}

export function calcBaseTalentValue({
  fullStats,
  scaling,
  params,
}: Params): number {
  return fullStats[scaling] * params;
}
