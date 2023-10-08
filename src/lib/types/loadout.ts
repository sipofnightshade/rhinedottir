import type { Artifact } from '$lib/stores/artifactStore';
import type { CurrentCharacter } from '$lib/stores/characterStore';
import type { CurrentWeapon } from '$lib/stores/weaponStore';
import type { CharacterNames, CharacterSpecificNames } from '$lib/types/characters';
import type { ArtifactNames } from './artifacts';
import type { Visions, WeaponCategory } from './global';
import type { WeaponNames } from './weapons';

export type SavedCharacter = Omit<CurrentCharacter, 'selected'> & {
  selected: CharacterNames;
  vision: Visions;
  id: CharacterSpecificNames;
  weapon: WeaponCategory;
};

export type SavedWeapon = Omit<CurrentWeapon, 'selected'> & {
  selected: WeaponNames;
};

type NewArtifact = Omit<Artifact, 'selected'> & {
  selected: ArtifactNames;
};

export type SavedArtifacts = {
  flower: NewArtifact;
  feather: NewArtifact;
  sands: NewArtifact;
  goblet: NewArtifact;
  circlet: NewArtifact;
};
