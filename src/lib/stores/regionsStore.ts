// stores
import { derived } from 'svelte/store';
import { character } from './characterStore';
import { party } from './partyStore';
import type { Regions } from '$lib/types/actions';

function createRegions() {
  return derived([character, party], ([$character, $party]): Regions[] => {
    const regions: Regions[] = [];

    regions[0] = $character.selected.region;
    regions[1] = $party.one?.character.selected.region as Regions;
    regions[2] = $party.two?.character.selected.region as Regions;
    regions[3] = $party.three?.character.selected.region as Regions;

    return regions.filter((region) => region);
  });
}

export const regions = createRegions();
