import { writable } from 'svelte/store';
import GenshinStats from '$lib/data/genshinStatsAll';
import { labels } from '$lib/data/Levels';
import type { SelectedCharacter } from '$lib/types/global';

type Adjustable = 'lvl' | 'constellation' | 'atk' | 'skill' | 'burst';

type CurrentCharacter = {
  selected: SelectedCharacter;
  stats:
    | {
        level: string | undefined;
        ascension: number;
        hp: unknown;
        attack: unknown;
        defense: unknown;
        specialized: unknown;
        substat: unknown;
      }
    | undefined;
  lvl: number;
  constellation: number;
  atk: number;
  skill: number;
  burst: number;
};

const initialState: CurrentCharacter = {
  selected: {
    name: 'aether',
    fullName: 'Aether',
    rating: 5,
    vision: 'anemo',
    weapon: 'sword',
    specialized: 'atk%'
  },
  lvl: 13,
  constellation: 0,
  atk: 9,
  skill: 9,
  burst: 9,
  stats: GenshinStats.calcStatsForCharacter('aether', labels.lvlValues[13])
};

function createCharacter() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    setChar: (selected: SelectedCharacter) =>
      update((state) => {
        state.selected = selected;
        state.lvl = 13;
        state.constellation = 0;
        state.stats = GenshinStats.calcStatsForCharacter(
          state.selected.name,
          labels.lvlValues[state.lvl]
        );
        return state;
      }),
    increment: (key: Adjustable) =>
      update((state) => {
        if (state[key] < labels[key].length - 1) {
          state[key]++;
          state.stats = GenshinStats.calcStatsForCharacter(
            state.selected.name,
            labels.lvlValues[state.lvl]
          );
        }
        return state;
      }),
    decrement: (key: Adjustable) =>
      update((state) => {
        if (state[key] > 0) {
          state[key]--;
          state.stats = GenshinStats.calcStatsForCharacter(
            state.selected.name,
            labels.lvlValues[state.lvl]
          );
        }
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const character = createCharacter();
