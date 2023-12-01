import type { SavedArtifactItem } from '$lib/types/loadout';

export function generateArtifactKey(artifact: SavedArtifactItem): string {
  const { selected, lvl, mainStat, substats } = artifact;

  const main = `${mainStat.stat}${mainStat.value}`;
  const subs = substats.map((substat) => `${substat.stat}${substat.value}`).join('-');

  return `${selected}-${lvl}-${main}-${subs}`;
}
