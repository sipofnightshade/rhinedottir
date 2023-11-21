import type { All_Stats } from '$lib/data/Stats';
import type { CharacterNames, CharacterSpecificNames } from '$lib/types/characters';
import type { ArtifactNames, ArtifactStats } from './artifacts';
import type { Visions, WeaponCategory } from './global';
import type { WeaponNames } from './weapons';

export type SavedCharacter = {
  selected: CharacterNames;
  url: string;
  vision: Visions;
  id: CharacterSpecificNames;
  weapon: WeaponCategory;
  lvl: number;
  constellation: number;
  atk: number;
  skill: number;
  burst: number;
  lvlBonus: {
    atk: number;
    skill: number;
    burst: number;
  };
};

export type SavedWeapon = {
  url: string;
  selected: WeaponNames;
  lvl: number;
  refinement: number;
};

export type SavedArtifactItem = {
  uid: number;
  selected: ArtifactNames;
  fullName: string;
  url: string;
  lvl: number;
  isFiveStar: boolean;
  mainStat: { stat: ArtifactStats; value: number };
  substats: { stat: ArtifactStats; value: number }[];
};

export type SavedArtifacts = {
  flower: SavedArtifactItem;
  feather: SavedArtifactItem;
  sands: SavedArtifactItem;
  goblet: SavedArtifactItem;
  circlet: SavedArtifactItem;
};

export type LoadOutTag = 'DPS' | 'Sub DPS' | 'Shield' | 'Healer' | 'Support';
