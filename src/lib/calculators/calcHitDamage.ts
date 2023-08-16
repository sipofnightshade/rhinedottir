import type { All_Stats } from '$lib/stores/actionStore';
import type { HitDMG } from '$lib/types/talents';

type Stats = Record<All_Stats, number>;

export function calcHitDamage(
  damage: HitDMG,
  $stats: Stats,
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
