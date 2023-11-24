import { extractIdNumber } from './extractIDNumber';
import { ArtifactData } from '$lib/data/Artifacts';
import { convertStat } from './convertStats';
import type { ArtifactStats } from '$lib/types/artifacts';
import type { SavedArtifactItem } from '$lib/types/loadout';

interface ReliquarySubStat {
  appendPropId: string;
  statValue: number;
}

interface Stats {
  stat: ArtifactStats;
  value: number;
}

export function createArtifact(data: any): SavedArtifactItem | null {
  // get artifact name
  const artifactID = extractIdNumber(data.flat.icon);
  const artifact = ArtifactData.find((artifact) => {
    return artifact.uid === artifactID;
  });

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

  if (artifact) {
    return {
      selected: artifact.name,
      uid: artifact.uid,
      rating: artifact.rating,
      fullName: artifact.fullName,
      url: artifact.url,
      lvl: data.reliquary.level - 1,
      isFiveStar: data.flat.rankLevel === 5,
      mainStat,
      substats
    };
  } else return null;
}
