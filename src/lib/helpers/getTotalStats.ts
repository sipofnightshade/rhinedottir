import type { All_Stats } from '$lib/stores/actionStore';
import type { StatObject } from '$lib/types/talents';

/**
 * Calculate the total stats.
 *
 * @param baseStats - The base stats.
 * @param combinedStats - The combined stats.
 * @param action - The action stats.
 * @returns The total stats.
 */
type ActionStats = Record<All_Stats, number>;

export function getTotalStats(combinedStats: StatObject, action: ActionStats) {
  const res = combinedStats.reduce(
    (acc, { stat, value }) => {
      return {
        ...acc,
        [stat as All_Stats]: acc[stat as All_Stats] + value
      };
    },
    { ...action }
  );

  return res;
}
