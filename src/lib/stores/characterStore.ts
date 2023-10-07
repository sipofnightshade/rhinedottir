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
  lvlBonus: {
    atk: number;
    skill: number;
    burst: number;
  };
};

const initialState: CurrentCharacter = {
  selected: traveleranemo,
  lvl: 13,
  constellation: 0,
  atk: 9,
  skill: 9,
  burst: 9,
  stats: GenshinStats.calcStatsForCharacter('aether', labels.lvlValues[13]),
  additionalStats: { ...allStats },
  lvlBonus: {
    atk: 0,
    skill: 0,
    burst: 0
  }
};

function createCharacter() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
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
        state.lvlBonus = {
          atk: 0,
          skill: 0,
          burst: 0
        };
        return state;
      }),
    increment: (key: Adjustable) =>
      update((state) => {
        if (state[key] < labels[key].length - 1) {
          state[key]++;
          // Recalculate stats after any updates
          state.stats = GenshinStats.calcStatsForCharacter(
            state.selected.name,
            labels.lvlValues[state.lvl]
          );
          // Handle c3/c5 talent increase
          if (key === 'constellation' && state.constellation === 3 && state.selected.c3) {
            if (state.lvlBonus[state.selected.c3] > 2) {
              state.lvlBonus[state.selected.c3] = 5; // this ensures the lvl bonus is capped at 5
            } else {
              state.lvlBonus[state.selected.c3] += 3;
            }
          }

          if (key === 'constellation' && state.constellation === 5 && state.selected.c5) {
            if (state.lvlBonus[state.selected.c5] > 2) {
              state.lvlBonus[state.selected.c5] = 5; // this ensures the lvl bonus is capped at 5
            } else {
              state.lvlBonus[state.selected.c5] += 3;
            }
          }
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

          // handle c3/cs5 talent decrease
          if (key === 'constellation' && state.constellation === 2 && state.selected.c3) {
            if (state.lvlBonus[state.selected.c3] >= 3) {
              state.lvlBonus[state.selected.c3] -= 3;
            } else {
              state.lvlBonus[state.selected.c3] = 0; // this ensures the lvl bonus's minimum is 0
            }
          }

          if (key === 'constellation' && state.constellation === 4 && state.selected.c5) {
            if (state.lvlBonus[state.selected.c5] >= 3) {
              state.lvlBonus[state.selected.c5] -= 3;
            } else {
              state.lvlBonus[state.selected.c5] = 0; // this ensures the lvl bonus's minimum is 0
            }
          }
        }

        return state;
      }),
    reset: () => set(initialState)
  };
}

export const character = createCharacter();
