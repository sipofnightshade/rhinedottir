/**
 * Get the flat stats from the artifacts.
 *
 * @param artifacts - Artifact entire store data.
 * @returns An array of flat stats.
 */

import type { ArtifactState } from '$lib/stores/artifactStore';
import type { ArtifactStats } from '$lib/types/artifacts';

type Substat = {
  stat: ArtifactStats;
  value: number;
};

export function getFlatStats(artifacts: ArtifactState) {
  return Object.values(artifacts)
    .map((artifact) => {
      const mainStat = artifact.mainStat || {};
      const substats = artifact.substats || [];

      const filteredSubstats = substats.filter(
        (item: Substat) => item.stat && item.value !== 0
      );

      return [mainStat, ...filteredSubstats];
    })
    .flat(1)
    .filter((item) => item && item.stat && item.value !== 0)
    .map((item) => {
      if (['em', 'atk', 'def', 'hp'].includes(item.stat)) {
        return item;
      }
      return { ...item, value: item.value / 100 };
    });
}
