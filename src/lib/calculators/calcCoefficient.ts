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

  const [statType, threshold, max] = source;
  console.log('statType', statType);
  console.log('threshold', threshold);
  console.log('max', max);

  if ($stats && statType in $stats) {
    const statValue = $stats[statType];

    if (statValue >= threshold) {
      console.log('statValue', statValue);
      const multipliedValue = coef * (statValue - threshold);
      if (max !== undefined && multipliedValue > max) {
        console.log('value has exceeded max:', max);
        return max;
      }
      console.log('multiplied value', multipliedValue);
      return multipliedValue;
    }
  }

  return coef;
}
