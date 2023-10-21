interface ReliquarySubStat {
  appendPropId: string;
  statValue: number;
}

interface Stats {
  stat: string;
  value: number;
}

interface ArtifactData {
  name: string;
  lvl: number;
  isFiveStar: boolean;
  mainStat: Stats;
  substats: Stats[];
}

import { extractIdNumber } from './extractIDNumber';
import { ArtifactData } from '$lib/data/Artifacts';
import { convertStat } from './convertStats';

export function createArtifact(data: any) {
  // get artifact name
  const artifactID = extractIdNumber(data.flat.icon);
  const artifact = ArtifactData.find((artifact) => {
    artifact.uid === artifactID;
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
  return {
    name: artifact?.name ?? 'none',
    lvl: data.reliquary.level - 1,
    isFiveStar: data.flat.rankLevel === 5,
    mainStat: mainStat,
    substats: substats
  };
}
