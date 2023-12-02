import { extractIdNumber } from './extractIDNumber';
import { ArtifactData } from '$lib/data/Artifacts';
import { convertStat } from './convertStats';
import type { ArtifactNames, ArtifactStats } from '$lib/types/artifacts';
import type { SavedArtifactItem } from '$lib/types/loadout';
import { generateArtifactKey } from './generateArtifactKey';

interface ReliquarySubStat {
  appendPropId: string;
  statValue: number;
}

interface Stats {
  stat: ArtifactStats;
  value: number;
}

// add storage ID and statsID here
export function createArtifact(data: any): SavedArtifactItem | null {
  // get artifact name
  const artifactID = extractIdNumber(data.flat.icon);
  const artifact = ArtifactData.find((artifact) => {
    return artifact.uid === artifactID;
  });

  if (!artifact) return null;

  // get artifact stats
  const mainStat: Stats = {
    stat: convertStat(data.flat.reliquaryMainstat.mainPropId),
    value: data.flat.reliquaryMainstat.statValue
  };
  const substats: Stats[] = data.flat.reliquarySubstats.map(
    (substat: ReliquarySubStat) => ({
      stat: convertStat(substat.appendPropId),
      value: substat.statValue
    })
  );

  const selected: ArtifactNames = artifact.name;
  const lvl = data.reliquary.level - 1;
  const isFiveStar = data.flat.rankLevel === 5;

  const statsID = generateArtifactKey(selected, mainStat, substats);

  return {
    selected,
    statsID,
    uid: artifact.uid,
    rating: artifact.rating,
    fullName: artifact.fullName,
    url: artifact.url,
    lvl,
    isFiveStar,
    mainStat,
    substats
  };
}
