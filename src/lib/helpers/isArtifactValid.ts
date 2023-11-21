import type { ArtifactStats } from '$lib/types/artifacts';

interface STATS {
  stat: ArtifactStats;
  value: number;
}

export function isArtifactValid(mainStat: STATS, substats: STATS[]): boolean {
  if (mainStat.stat === undefined || mainStat.value === 0) {
    return false;
  }

  for (const substat of substats) {
    if (substat.stat === undefined || substat.value === 0) {
      return false;
    }
  }

  return true;
}
