import { ArtifactMainStats } from '$lib/data/ArtifactStats';
import type { ArtifactStats } from '$lib/types/global';

export function getArtifactStat(isFiveStar: boolean, stat: ArtifactStats, lvl: number) {
  if (isFiveStar) {
    return ArtifactMainStats.five[stat][lvl];
  }
  return ArtifactMainStats.four[stat][lvl];
}
