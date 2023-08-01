import type { ALL_STATS, StatObject } from '$lib/types/talents';

/**
 * Calculate the total stats.
 *
 * @param baseStats - The base stats.
 * @param combinedStats - The combined stats.
 * @param action - The action stats.
 * @returns The total stats.
 */
type ActionStats = Record<ALL_STATS, number>;

export function getTotalStats(combinedStats: StatObject, action: ActionStats) {
  const res = combinedStats.reduce(
    (acc, { stat, value }) => {
      return {
        ...acc,
        [stat as ALL_STATS]: acc[stat as ALL_STATS] + value
      };
    },
    { ...action }
  );

  return res;
}
