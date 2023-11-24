import type { ArtifactType } from '$lib/types/artifacts';

type ImageType = 'character' | 'weapon' | ArtifactType;
const artifactID = {
  flower: 4,
  feather: 2,
  sands: 5,
  goblet: 1,
  circlet: 3
};
export function getImageUrl(type: ImageType, url: string, name: string) {
  if (type === 'character' || type === 'weapon') {
    return `https://enka.network/ui/${url}.png`;
  }

  if (name !== 'none' && artifactID[type]) {
    return `https://enka.network/ui/${url}_${artifactID[type]}.png`;
  } else {
    return `/images/artifact/${name}_${artifactID[type]}.webp`;
  }
}
