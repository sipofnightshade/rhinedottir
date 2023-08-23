import type { All_Stats } from '$lib/data/Stats';

type Stats = Record<All_Stats, number>;

export function getStatsWithActions(totalStats: Stats, action: Partial<Stats>) {
  for (const stat in action) {
    totalStats[stat as All_Stats] += action[stat as All_Stats] || 0;
  }
  return totalStats;
}
