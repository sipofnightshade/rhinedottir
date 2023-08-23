import type { All_Stats } from '$lib/stores/actionStore';
import type { CoefSource } from '$lib/types/actions';

export function calcCoefficient(
  coef: number,
  $stats: Record<All_Stats, number>,
  source?: CoefSource
): number {
  if (source === undefined) {
    return coef;
  }

  if (Number.isNaN(coef)) {
    throw new Error(`Incorrent coef value was passed - coef: ${coef}`);
  }

  const [statType, threshold, max] = source;

  if ($stats && statType in $stats) {
    const statValue = $stats[statType];

    if (statValue >= threshold) {
      const multipliedValue = coef * (statValue - threshold);
      if (max !== undefined && multipliedValue > max) {
        return max;
      }
      return multipliedValue;
    }
  }

  return coef;
}
