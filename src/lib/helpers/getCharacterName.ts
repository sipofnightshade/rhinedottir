import type { SelectedCharacter } from '$lib/types/global';

export function getCharacterName(selectedCharacter: SelectedCharacter) {
  if (selectedCharacter.name === 'aether') {
    return `traveler${selectedCharacter.vision}`;
  } else {
    return selectedCharacter.name;
  }
}
