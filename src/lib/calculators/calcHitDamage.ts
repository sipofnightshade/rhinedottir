export function singleScalingDMG(damage, $stats, values, talentLvl) {
  const scalingValue = damage.coef
    ? $stats[damage.scaling] * damage.coef
    : $stats[damage.scaling] * values[damage.param as keyof typeof values][talentLvl];
  return scalingValue;
}

export function multiScalingDMG(damage, $stats, values, talentLvl) {
  return damage.reduce((hitTotal: number, scalingOption) => {
    return hitTotal + singleScalingDMG(scalingOption, $stats, values, talentLvl);
  }, 0);
}
