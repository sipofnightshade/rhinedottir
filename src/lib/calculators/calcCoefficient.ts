import type { Index_Stats } from '$lib/data/Stats';
import type { CoefSource } from '$lib/types/actions';

export function calcCoefficient(
  coef: number,
  $stats: Index_Stats,
  source: CoefSource | undefined
): number {
  if (!source) return coef;

  if (Number.isNaN(coef)) {
    throw new Error(`Incorrent coef value was passed - coef: ${coef}`);
  }

  const [statType, threshold, max, forEvery] = source;

  const calculatedMax = typeof max === 'function' ? max($stats) : undefined;

  if ($stats && statType in $stats) {
    const statValue = $stats[statType];

    const cappedStatValue = calculatedMax
      ? statValue
      : max !== undefined
      ? Math.min(statValue, max as number)
      : statValue;

    if (cappedStatValue > threshold) {
      let calculatedValue;

      if (forEvery !== undefined && forEvery !== 0) {
        calculatedValue = ((cappedStatValue - threshold) / forEvery) * coef;
      } else {
        calculatedValue = (cappedStatValue - threshold) * coef;
      }

      if (calculatedMax && calculatedValue > calculatedMax) {
        return calculatedMax;
      }

      return calculatedValue;
    } else {
      return 0;
    }
  }
  return coef;
}
