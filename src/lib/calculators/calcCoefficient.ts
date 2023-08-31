import type { Index_Stats } from '$lib/data/Stats';
import type { CoefSource } from '$lib/types/actions';

export function calcCoefficient(
  coef: number,
  $stats: Index_Stats,
  source: CoefSource | undefined
): number {
  if (source === undefined) {
    return coef;
  }

  if (Number.isNaN(coef)) {
    throw new Error(`Incorrent coef value was passed - coef: ${coef}`);
  }

  const [statType, threshold, max, forEvery, calcMax] = source;

  // for characters like Hutao where they have 'baseATK*4'
  const calculatedMax = calcMax ? strEval(calcMax, $stats) : undefined;

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

      if (calculatedMax && calculatedValue > calculatedMax) {
        return calculatedMax;
      }

      return calculatedValue;
    }
  }

  return coef;
}

function strEval(input: string, stats: Index_Stats) {
  const pattern = /(\D+)\*(-?\d+)/; // Updated regex pattern to include optional negative sign
  const matches = input.match(pattern);

  if (matches) {
    const key = matches[1]; // Extract the first part of the string (e.g., 'baseATK')
    const multiplier = parseInt(matches[2]); // Extract the number at the end of the string

    if (stats[key]) {
      return stats[key] * multiplier;
    }
  }

  return undefined; // Return undefined if the input format is not recognized or the key doesn't exist in the stats object
}
