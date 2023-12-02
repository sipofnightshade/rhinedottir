import type { ArtifactNames, ArtifactStats } from '$lib/types/artifacts';

type STAT = { stat: ArtifactStats; value: number };

export function generateArtifactKey(
  selected: ArtifactNames,
  mainStat: STAT,
  substats: STAT[]
): string {
  const main = `${mainStat.stat}${mainStat.value}`;
  const subs = substats.map((substat) => `${substat.stat}${substat.value}`).join('-');

  return `${selected}-${main}-${subs}`;
}
