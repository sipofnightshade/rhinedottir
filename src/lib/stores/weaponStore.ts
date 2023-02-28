import { writable } from 'svelte/store';
import GenshinStats from '$lib/data/genshinStatsAll';
import { labels } from '$lib/data/Levels';
import type { SelectedWeapon } from '$lib/types/global';

type Adjustable = 'lvl' | 'refinement';

type CurrentWeapon = {
  selected: SelectedWeapon;
  stats:
    | {
        level: string | undefined;
        ascension: number;
        attack: number;
        specialized: number;
        substat: string;
      }
    | undefined;
  lvl: number;
  refinement: number;
};

const initialState: CurrentWeapon = {
  selected: {
    name: 'prototyperancour',
    fullName: 'Prototype Rancour',
    rating: 4,
    type: 'sword',
    specialized: 'physical'
  },
  lvl: 13,
  refinement: 4,
  stats: GenshinStats.calcStatsForWeapon('prototyperancour', labels.lvlValues[13])
};

function createWeapon() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    setWeapon: (selected: SelectedWeapon) =>
      update((state) => {
        state.selected = selected;
        state.stats = GenshinStats.calcStatsForWeapon(
          state.selected.name,
          labels.lvlValues[state.lvl]
        );
        return state;
      }),
    increment: (key: Adjustable) =>
      update((state) => {
        if (state[key] < labels[key].length - 1) {
          state[key]++;
          state.stats = GenshinStats.calcStatsForWeapon(
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
          state.stats = GenshinStats.calcStatsForWeapon(
            state.selected.name,
            labels.lvlValues[state.lvl]
          );
        }
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const weapon = createWeapon();
