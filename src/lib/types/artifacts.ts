import type { ALL_STATS } from '$lib/types/talents';
import type { SvelteComponent } from 'svelte';
import type { WeaponCategory } from './global';

export type ArtifactNames =
  | 'none'
  | 'gladiators'
  | 'wanderers'
  | 'noblesseoblige'
  | 'bloodstained'
  | 'maidenbeloved'
  | 'viridescent'
  | 'archaicpetra'
  | 'retracingbolide'
  | 'thundersoother'
  | 'thunderingfury'
  | 'lavawalker'
  | 'crimsonwitch'
  | 'blizzardstrayer'
  | 'heartofdepth'
  | 'tenacityofmillelith'
  | 'paleflame'
  | 'shimenawa'
  | 'emblemofseveredfate'
  | 'huskofopulentdreams'
  | 'oceanhued'
  | 'vermillionhereafter'
  | 'echoesofanoffering'
  | 'deepwoodmemories'
  | 'gildeddreams'
  | 'desertpavilionchronicle'
  | 'flowerofparadiselost'
  | 'nymphsdream'
  | 'vourukashasglow'
  | 'sojourner'
  | 'tinymiracle'
  | 'berserker'
  | 'instructor'
  | 'theexile'
  | 'defenderswill'
  | 'braveheart'
  | 'martialartist'
  | 'gambler'
  | 'scholar';

export type ArtifactType = 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';

export type ArtifactModalButtons = {
  id: ArtifactType;
  img: string;
  component: SvelteComponent;
  title: string;
}[];

export type ArtifactStats =
  | ''
  | 'hp'
  | 'atk'
  | 'hp%'
  | 'atk%'
  | 'def%'
  | 'em'
  | 'energy'
  | 'critrate'
  | 'critdmg'
  | 'physical'
  | 'anemo'
  | 'cryo'
  | 'dendro'
  | 'electro'
  | 'geo'
  | 'hydro'
  | 'pyro'
  | 'healing';

export type Action = {
  description?: string;
  weapons?: WeaponCategory[];
  target?: 'self' | 'party' | 'enemy';
  unique?: boolean;
  actionType?:
    | 'stack'
    | 'toggle'
    | 'select'
    | 'multiSelect'
    | 'input'
    | 'passive'
    | 'visionMatch';
  values: {
    scaling: ALL_STATS;
    coef: number | number[];
    source?: [ALL_STATS, number, number]; // [ the source stat, minimum, maximum]
  }[];
};

export type Artifact = {
  name: ArtifactNames;
  fullName: string;
  rating: number[];
  twoPiece: Action[];
  fourPiece: Action[];
};

export type SelectedArtifact = {
  name: ArtifactNames;
  fullName: string;
  rating: number[];
  twoPiece: Action[];
  fourPiece: Action[];
};
