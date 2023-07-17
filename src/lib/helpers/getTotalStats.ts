import type { ALL_STATS, StatObject } from '$lib/types/talents';

/**
 * Calculate the total stats.
 *
 * @param baseStats - The base stats.
 * @param combinedStats - The combined stats.
 * @param action - The action stats.
 * @returns The total stats.
 */

interface Base {
  atk: number;
  hp: number;
  def: number;
}

type ActionStats = Record<ALL_STATS, number>;

export function getTotalStats(
  BASE: Base,
  combinedStats: StatObject,
  action: ActionStats
) {
  return combinedStats.reduce(
    (acc, { stat, value }) => {
      const calculatedStat = calculateStatValues(BASE, stat, value);
      if (stat.includes('%')) {
        return {
          ...acc,
          [stat.slice(0, -1) as ALL_STATS]:
            acc[stat.slice(0, -1) as ALL_STATS] + calculatedStat
        };
      }

      return {
        ...acc,
        [stat as ALL_STATS]: acc[stat as ALL_STATS] + calculatedStat
      };
    },
    { ...action }
  );
}

/**
 * @description If the stat is a multiplier, then multiply it by
 * the base values. If not, then return the value
 */
function calculateStatValues(
  base: { atk: number; hp: number; def: number },
  stat: string,
  value: number
) {
  switch (stat) {
    case 'hp%':
      return base.hp * value;
    case 'atk%':
      return base.atk * value;
    case 'def%':
      return base.def * value;
    default:
      return value;
  }
}
