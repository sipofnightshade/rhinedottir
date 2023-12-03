import { ArtifactMainStats } from '$lib/data/ArtifactStats';
import type { ArtifactStats } from '$lib/types/artifacts';

export function getArtifactStat(isFiveStar: boolean, stat: ArtifactStats, lvl: number) {
  if (isFiveStar) {
    // @ts-ignore
    return ArtifactMainStats.five[stat][lvl];
  }
  // @ts-ignore
  return ArtifactMainStats.four[stat][lvl];
}
