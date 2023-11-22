import type { ArtifactState } from '$lib/stores/artifactStore';
import type { ArtifactNames } from '$lib/types/artifacts';

export function getArtifactSetCount(
  artifacts: ArtifactState
): Map<ArtifactNames, number> {
  const artifactNames = Object.values(artifacts).map(
    (artifact) => artifact.selected.name
  );

  const artifactSetCount = new Map();

  artifactNames.forEach((name) => {
    if (name !== 'none') {
      artifactSetCount.set(name, (artifactSetCount.get(name) || 0) + 1);
    }
  });

  return artifactSetCount;
}
