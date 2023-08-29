import type { Index_Stats } from '$lib/data/Stats';

export function getStatsWithActions(totalStats: Index_Stats, action: Index_Stats) {
  for (const stat in action) {
    if (!totalStats[stat]) totalStats[stat] = 0;
    totalStats[stat] += action[stat];
  }
  return totalStats;
}
