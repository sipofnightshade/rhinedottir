import { writable } from 'svelte/store';
import GenshinStats from '$lib/helpers/genshinStatsAll';
import { labels } from '$lib/data/Levels';
import type { CharacterRecord } from '$lib/types/global';
import traveleranemo from '$lib/data/characters/traveleranemo';
import { allStats, type All_Stats } from '$lib/data/Stats';

export type Adjustable = 'lvl' | 'constellation' | 'atk' | 'skill' | 'burst';

export type CurrentCharacter = {
  selected: CharacterRecord;
  stats:
    | {
        level: string | undefined;
        ascension: number;
        hp: number;
        attack: number;
        defense: number;
        specialized: number;
        substat: string;
      }
    | undefined;
  additionalStats: Record<All_Stats, number>;
  lvl: number;
  constellation: number;
  atk: number;
  skill: number;
  burst: number;
  // could put combos here as well
};

const initialState: CurrentCharacter = {
  selected: traveleranemo,
  lvl: 13,
  constellation: 0,
  atk: 9,
  skill: 9,
  burst: 9,
  stats: GenshinStats.calcStatsForCharacter('aether', labels.lvlValues[13]),
  additionalStats: { ...allStats }
};

function createCharacter() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    setChar: (selected: CharacterRecord) =>
      update((state) => {
        state.selected = selected;
        state.lvl = 13;
        state.constellation = 0;
        state.stats = GenshinStats.calcStatsForCharacter(
          state.selected.name,
          labels.lvlValues[state.lvl]
        );
        state.additionalStats = { ...allStats };
        state.atk = 9;
        state.skill = 9;
        state.burst = 9;
        return state;
      }),
    increment: (key: Adjustable) =>
      update((state) => {
        if (key === 'atk' || key === 'skill' || key === 'burst') {
          const isC3Increase = state.constellation >= 3 && key === state.selected.c3;
          const isC5Increase = state.constellation >= 5 && key === state.selected.c5;

          // With c3/c5, the maximum is 12
          if ((isC3Increase || isC5Increase) && state[key] < 12) {
            state[key]++;
          } else if (state[key] < 9) {
            // Without c3/c5, the maximum is 9
            state[key]++;
          }
        } else {
          // Handle increment for other properties
          if (state[key] < labels[key].length - 1) {
            state[key]++;
          }

          // Handle c3/c5 talent increase
          if (key === 'constellation' && state[key] === 3 && state.selected.c3) {
            state[state.selected.c3] += 3;
          }

          if (key === 'constellation' && state[key] === 5 && state.selected.c5) {
            state[state.selected.c5] += 3;
          }
        }

        // Recalculate stats after any updates
        state.stats = GenshinStats.calcStatsForCharacter(
          state.selected.name,
          labels.lvlValues[state.lvl]
        );

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

          // handle c3/cs5 talent decrease
          if (key === 'constellation' && state[key] === 2 && state.selected.c3) {
            state[state.selected.c3] -= 3;
          }

          if (key === 'constellation' && state[key] === 4 && state.selected.c5) {
            state[state.selected.c5] -= 3;
          }
        }
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const character = createCharacter();
