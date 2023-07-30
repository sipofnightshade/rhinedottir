import { ArtifactData } from '$lib/data/Artifacts';
import type { ArtifactState } from '$lib/stores/artifactStore';
import type { Action } from '$lib/types/artifacts';

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

  return setBonuses;
}
