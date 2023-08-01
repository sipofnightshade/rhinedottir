import { ArtifactData } from '$lib/data/Artifacts';
import type { ArtifactState } from '$lib/stores/artifactStore';
import type { Action } from '$lib/types/artifacts';
import type { ALL_STATS } from '$lib/types/talents';

interface ResultObject {
  passives: Array<{
    scaling: ALL_STATS;
    coef: number | number[];
    source?: [ALL_STATS, number, number];
  }>;
  actives: Action | object;
}

export function getArtifactSetBonuses(artifactStore: ArtifactState) {
  const artifactNames = Object.values(artifactStore).map(
    (artifact) => artifact.selected.name
  );

  const artifactSetCount = artifactNames.reduce((count, name) => {
    if (name !== 'none') {
      count[name] = (count[name] || 0) + 1;
    }
    return count;
  }, {});

  const setBonuses: Action[] = [];

  for (const name in artifactSetCount) {
    const artifactData = ArtifactData.find((data) => data.name === name);
    if (!artifactData) continue;

    if (artifactSetCount[name] >= 2 && artifactData.twoPiece) {
      setBonuses.push(...artifactData.twoPiece);
    }

    if (artifactSetCount[name] >= 4 && artifactData.fourPiece) {
      setBonuses.push(...artifactData.fourPiece);
    }
  }

  // separate & combine all similar bonuses
  const separatedBonuses = setBonuses.reduce<ResultObject>(
    (result, bonus) => {
      if (bonus.actionType) {
        result.actives = bonus;
        result.actives = {
          name: 'Gladiators Finale',
          url: 'UI_Talent_S_PlayerWind_04',
          lvl: 1,
          constellation: 0,
          ...bonus
        };
      } else {
        result.passives.push(...bonus.values);
      }
      return result;
    },
    { passives: [], actives: {} }
  );

  return { ...separatedBonuses, artifactSetCount };
}
