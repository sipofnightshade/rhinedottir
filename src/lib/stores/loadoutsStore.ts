import type { SavedArtifacts, SavedCharacter, SavedWeapon } from '$lib/types/loadout';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Loadout = {
  title: string;
  character: SavedCharacter;
  weapon: SavedWeapon;
  artifacts: SavedArtifacts;
};

const initialState: Loadout[] = [];

function createLoadouts(initial_value: Loadout[], init = true) {
  // Load data from localStorage (if available)
  if (init) {
    const storedData = localStorage.getItem('loadouts');
    initial_value = storedData ? JSON.parse(storedData) : initial_value;
  }

  const { subscribe, set, update } = writable(initial_value);

  return {
    subscribe,
    set,
    addLoadout: (characterLoadout: Loadout) =>
      update((state) => {
        state.push(characterLoadout);
        saveToLocalStorage(state);
        return state;
      }),
    removeLoadout: (index: number) =>
      update((state) => {
        if (index >= 0 && index < state.length) {
          state.splice(index, 1);
          saveToLocalStorage(state);
        }
        return state;
      }),
    reset: () => {
      set(initialState);
      localStorage.removeItem('loadouts');
    }
  };
}

function saveToLocalStorage(data: any) {
  localStorage.setItem('loadouts', JSON.stringify(data));
}

export const loadouts = createLoadouts(initialState, browser);
