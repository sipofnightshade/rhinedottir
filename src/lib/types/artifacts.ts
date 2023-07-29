import type { ALL_STATS } from '$lib/types/talents';
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

export type ArtifactModalButtons = {
  id: 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';
  img: string;
  component: any;
  title: string;
}[];

export type Artifact = {
  name: ArtifactNames;
  fullName: string;
  rating: [] | [4] | [4, 5];
  twoPiece: {
    scaling: ALL_STATS;
    coef: number;
  };
  fourPiece: {
    description: string;
    weapons?: WeaponCategory[];
    target: 'self' | 'party' | 'enemy';
    unique?: boolean;
    actionType:
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
  }[];
};
