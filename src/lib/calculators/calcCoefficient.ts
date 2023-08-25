import type { All_Stats } from '$lib/data/Stats';
import type { CoefSource } from '$lib/types/actions';

export function calcCoefficient(
  coef: number,
  $stats: Record<All_Stats, number>,
  source: CoefSource | undefined
): number {
  if (source === undefined) {
    return coef;
  }

  if (Number.isNaN(coef)) {
    throw new Error(`Incorrent coef value was passed - coef: ${coef}`);
  }

  const [statType, threshold, max, forEvery] = source;

  if ($stats && statType in $stats) {
    const statValue = $stats[statType];
    const cappedStatValue = max ? Math.min(statValue, max) : statValue;

    if (cappedStatValue >= threshold) {
      let calculatedValue;

      if (forEvery !== undefined && forEvery !== 0) {
        calculatedValue = (cappedStatValue / forEvery) * coef;
      } else {
        calculatedValue = cappedStatValue * coef;
      }

      return calculatedValue;
    }
  }

  return coef;
}
