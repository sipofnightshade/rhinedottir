import type { Index_Stats } from '$lib/data/Stats';
import type { HitDMG } from '$lib/types/talents';

export function calcHitDamage(
  damage: HitDMG,
  $stats: Index_Stats,
  values: { [x: string]: number[] },
  talentLvl: number
) {
  return damage.reduce((hitTotal, scalingOption) => {
    const scalingValue = scalingOption.coef
      ? $stats[scalingOption.scaling] * scalingOption.coef
      : $stats[scalingOption.scaling] *
        values[scalingOption.param as keyof typeof values][talentLvl];
    return hitTotal + scalingValue;
  }, 0);
}
