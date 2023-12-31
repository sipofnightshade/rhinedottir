// stores
import { derived } from 'svelte/store';
import { character } from './characterStore';
import { party } from './partyStore';
import type { Visions } from '$lib/types/global';

function createVisions() {
  return derived([character, party], ([$character, $party]): Visions[] => {
    const visions: Visions[] = [];

    visions[0] = $character.selected.vision;
    visions[1] = $party.one?.character.selected.vision as Visions;
    visions[2] = $party.two?.character.selected.vision as Visions;
    visions[3] = $party.three?.character.selected.vision as Visions;

    return visions.filter((vision) => vision);
  });
}

export const visions = createVisions();
