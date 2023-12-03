import type { CharacterNames, CharacterSpecificNames } from '$lib/types/characters';
import type { ArtifactNames, ArtifactStats } from './artifacts';
import type { Visions, WeaponCategory } from './global';
import type { WeaponNames } from './weapons';

export type SavedCharacter = {
  selected: CharacterNames;
  url: string;
  fullName: string;
  vision: Visions;
  id: CharacterSpecificNames;
  weapon: WeaponCategory;
  lvl: number;
  rating: 4 | 5;
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
  rating: 3 | 4 | 5;
  refinement: number;
};

export type SavedArtifactItem = {
  statsID: string; // key generated based on artifact details; used for uniqueness matching/ is equipped
  uid: number;
  selected: ArtifactNames;
  rating: number[];
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
