import type { CharacterNames } from '$lib/types/characters';
import type { Visions } from '$lib/types/global';

export function getCharacterName(name: CharacterNames, vision: Visions) {
  if (name === 'aether') {
    return `traveler${vision}`;
  } else {
    return name;
  }
}
