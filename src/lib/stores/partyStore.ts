import { writable } from 'svelte/store';

type CharacterBuild = {
  character: any;
  artifacts: any;
  weapon: any;
};

type Party = {
  one: CharacterBuild | undefined;
  two: CharacterBuild | undefined;
  three: CharacterBuild | undefined;
};

const initialState: Party = {
  one: undefined,
  two: undefined,
  three: undefined
};

function createParty() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    setPartyMember: (
      id: 'one' | 'two' | 'three',
      character: CharacterBuild // Fix the type here
    ) =>
      update((state) => {
        state[id] = character;
        return state;
      }),
    removePartyMember: (id: 'one' | 'two' | 'three') =>
      update((state) => {
        state[id] = undefined;
        return state;
      }),

    reset: () => set(initialState)
  };
}

export const party = createParty();
