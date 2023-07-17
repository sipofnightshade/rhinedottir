import { writable } from 'svelte/store';

type PartyCharacter = {
  character: any;
  artifacts: any;
};

type Party = {
  //
};

/**
 * @todo
 *  📢 When saving a character, save it with only its base stats.
 * So a new stat merging function should be ran basically or
 * return a value from stats that don't include @nonPASSIVE actions.
 * i.e: This would be the weapon and artifact stats alone
 */

const initialState: PartyCharacter[] | undefined[] = [];

function createParty() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    //💥
    setPartyMember: (index: number) =>
      update((state) => {
        // mutate/modify state
        return state;
      }),
    removePartyMember: (index: number) =>
      update((state) => {
        // mutate/modify state
        return state;
      }),

    reset: () => set(initialState)
  };
}

export const party = createParty();
