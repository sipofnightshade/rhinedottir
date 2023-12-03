import type { ArtifactState } from '$lib/stores/artifactStore';
import type { ArtifactNames, ArtifactType } from '$lib/types/artifacts';

export function countArtifactSets(artifacts: ArtifactState, current: ArtifactNames) {
  const artifactTypes: ArtifactType[] = [
    'flower',
    'feather',
    'sands',
    'goblet',
    'circlet'
  ];

  let count = 0;

  for (const value of artifactTypes) {
    if (artifacts[value].selected.name === current) {
      count++;
    }
  }
  return count;
}
