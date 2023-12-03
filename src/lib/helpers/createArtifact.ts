import { extractIdNumber } from './extractIDNumber';
import { ArtifactData } from '$lib/data/Artifacts';
import { convertStat } from './convertStats';
import type { ArtifactNames, ArtifactStats, ArtifactType } from '$lib/types/artifacts';
import type { SavedArtifactItem } from '$lib/types/loadout';
import { generateArtifactKey } from './generateArtifactKey';
import { getArtifactStat } from './getArtifactStat';

interface EnkaSubStat {
  appendPropId: string;
  statValue: number;
}

interface Stats {
  stat: ArtifactStats;
  value: number;
}

type GOODSubStat = {
  key: string;
  value: number;
};

export type GOODArtifact = {
  setKey: string;
  rarity: number;
  level: number;
  slotKey: string;
  mainStatKey: string;
  substats: GOODSubStat[];
  location: string;
  lock: boolean;
  id: string;
};

// add storage ID and statsID here
export function createArtifactEnka(data: any): SavedArtifactItem | null {
  // get artifact name
  const artifactID = extractIdNumber(data.flat.icon);
  const artifact = ArtifactData.find((artifact) => {
    return artifact.uid === artifactID;
  });

  if (!artifact) return null;

  const selected: ArtifactNames = artifact.name;
  const lvl = data.reliquary.level - 1;
  const isFiveStar = data.flat.rankLevel === 5;

  // get artifact stats
  const mainStatKey = convertStat(data.flat.reliquaryMainstat.mainPropId);
  const mainStat: Stats = {
    stat: mainStatKey,
    value: getArtifactStat(isFiveStar, mainStatKey, lvl)
  };
  const substats: Stats[] = data.flat.reliquarySubstats.map((substat: EnkaSubStat) => ({
    stat: convertStat(substat.appendPropId),
    value: substat.statValue
  }));

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

/**
 *
 * @param data from Genshin Optimizer
 * @returns an object with a saved artifact item and corresponding type
 */
export function createArtifactGOOD(
  data: GOODArtifact
): { artifact: SavedArtifactItem; type: ArtifactType } | null {
  // ignore all 3 Star and below artifacts
  if (data.rarity > 5 || data.rarity < 4) return null;

  const setKey = data.setKey.toLowerCase();
  const artifact = ArtifactData.find((artifact) => {
    return artifact.name === setKey;
  });

  // if artifact not found return null
  if (!artifact) return null;

  const type: ArtifactType =
    data.slotKey === 'plume' ? 'feather' : (data.slotKey as ArtifactType);

  const selected: ArtifactNames = artifact.name;
  const lvl = data.level;
  const isFiveStar = data.rarity === 5;

  // get artifact stats
  const mainStatKey = convertStat(data.mainStatKey);
  const mainStat: Stats = {
    stat: mainStatKey,
    value: getArtifactStat(isFiveStar, mainStatKey, lvl)
  };
  const substats: Stats[] = data.substats.map((substat: GOODSubStat) => ({
    stat: convertStat(substat.key),
    value: substat.value
  }));

  const statsID = generateArtifactKey(selected, mainStat, substats);

  const completeArtifact = {
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

  return { artifact: completeArtifact, type };
}
