import type { SvelteComponent } from 'svelte';
import type { WeaponCategory } from './global';
import type { All_Stats } from '$lib/data/Stats';

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
  | 'marechausseehunter'
  | 'goldentroupe'
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
  component: any;
  title: string;
}[];

export type ArtifactStats =
  | ''
  | 'hp'
  | 'atk'
  | 'def'
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
  shielded?: boolean;
  actionType?:
    | 'stack'
    | 'toggle'
    | 'select'
    | 'multiSelect'
    | 'input'
    | 'passive'
    | 'visionMatch';
  values: {
    scaling: string;
    coef: number | number[];
    source?: [All_Stats, number, number]; // [ the source stat, minimum, maximum]
  }[];
};

export type SelectedArtifact = {
  uid: number;
  name: ArtifactNames;
  fullName: string;
  url: string;
  rating: number[];
  twoPiece: Action[];
  fourPiece: Action[];
};
