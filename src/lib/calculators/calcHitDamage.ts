export function calcHitDamage(damage, $stats, values, talentLvl) {
  return damage.reduce((hitTotal, scalingOption) => {
    const scalingValue = scalingOption.coef
      ? $stats[scalingOption.scaling] * scalingOption.coef
      : $stats[scalingOption.scaling] *
        values[scalingOption.param as keyof typeof values][talentLvl];
    return hitTotal + scalingValue;
  }, 0);
}
