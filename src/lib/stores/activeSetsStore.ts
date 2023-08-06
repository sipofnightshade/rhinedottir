import type { ArtifactNames } from '$lib/types/artifacts';
import { writable } from 'svelte/store';

type Set = ArtifactNames | undefined;

export type ActiveSets = {
  main: Set;
  one: Set;
  two: Set;
  three: Set;
};

type State = {
  artifacts: ActiveSets;
  weapons: ActiveSets;
};

const initialState: State = {
  artifacts: {
    main: undefined,
    one: undefined,
    two: undefined,
    three: undefined
  },
  weapons: {
    main: undefined,
    one: undefined,
    two: undefined,
    three: undefined
  }
};

function createActiveSets() {
  const { subscribe, update } = writable(initialState);

  return {
    subscribe,
    setActiveSet: (
      type: 'weapons' | 'artifacts',
      id: 'main' | 'one' | 'two' | 'three',
      setName: Set
    ) =>
      update((state) => {
        state[type][id] = setName;
        return state;
      })
  };
}

export const activeSets = createActiveSets();
