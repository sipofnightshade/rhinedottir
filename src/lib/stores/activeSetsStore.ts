// activeSetsStore.ts
import { writable } from 'svelte/store';
import type { ArtifactNames } from '$lib/types/artifacts';

export type ActiveSets = Map<ArtifactNames, 'main' | 'one' | 'two' | 'three'>;

const initialState: ActiveSets = new Map();

function createActiveSets() {
  const { subscribe, update } = writable(initialState);

  return {
    subscribe,
    setActiveSet: (activeName: ArtifactNames, id: 'main' | 'one' | 'two' | 'three') =>
      update((state) => {
        // return if undefined
        if (!activeName) return state;

        // Check if the activeName is already present and has a different id
        const existingId = state.get(activeName);
        if (existingId && existingId !== id) {
          console.warn(
            `Active ${activeName} is unique and can only be set for ${existingId}`
          );
          return state;
        }

        state.set(activeName, id);
        return state;
      }),
    removeActiveSet: (activeName: ArtifactNames, id: 'main' | 'one' | 'two' | 'three') =>
      update((state) => {
        // return if undefined
        if (!activeName) return state;

        // if the activeName exists with the specified id, delete
        if (state.get(activeName) === id) state.delete(activeName);
        return state;
      })
  };
}

export const activeSets = createActiveSets();
