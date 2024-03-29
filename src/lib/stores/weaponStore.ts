import { writable } from 'svelte/store';
import GenshinStats from '$lib/helpers/genshinStatsAll';
import { labels } from '$lib/data/Levels';
import type { SelectedWeapon, WeaponCategory } from '$lib/types/global';
import type { SavedWeapon } from '$lib/types/loadout';
import { WeaponData } from '$lib/data/Weapons';

type Adjustable = 'lvl' | 'refinement';

export type CurrentWeapon = {
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
    uid: 11406,
    name: 'prototyperancour',
    fullName: 'Prototype Rancour',
    url: 'UI_EquipIcon_Sword_Proto_Awaken',
    rating: 4,
    type: 'sword',
    specialized: 'physical',
    effectname: 'Smashed Stone',
    action: [
      {
        actionType: 'stack',
        values: [
          [
            { scaling: 'atk%', coef: [0.04, 0.04, 0.04, 0.04] },
            { scaling: 'def%', coef: [0.04, 0.04, 0.04, 0.04] }
          ],
          [
            { scaling: 'atk%', coef: [0.05, 0.05, 0.05, 0.05] },
            { scaling: 'def%', coef: [0.05, 0.05, 0.05, 0.05] }
          ],
          [
            { scaling: 'atk%', coef: [0.06, 0.06, 0.06, 0.06] },
            { scaling: 'def%', coef: [0.06, 0.06, 0.06, 0.06] }
          ],
          [
            { scaling: 'atk%', coef: [0.07, 0.07, 0.07, 0.07] },
            { scaling: 'def%', coef: [0.07, 0.07, 0.07, 0.07] }
          ],
          [
            { scaling: 'atk%', coef: [0.08, 0.08, 0.08, 0.08] },
            { scaling: 'def%', coef: [0.08, 0.08, 0.08, 0.08] }
          ]
        ]
      }
    ],
    effect:
      'On hit, Normal or Charged Attacks increase ATK and DEF by {0} for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
    ref: [['4%'], ['5%'], ['6%'], ['7%'], ['8%']]
  },
  lvl: 13,
  refinement: 0,
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
        state.refinement = 0;

        return state;
      }),
    importWeapon: (savedWeapon: SavedWeapon, weaponType: WeaponCategory) =>
      update((state) => {
        state.selected = WeaponData[weaponType].find(
          (weapon) => weapon.name === savedWeapon.selected
        ) as SelectedWeapon;
        state.lvl = savedWeapon.lvl;
        state.refinement = savedWeapon.refinement;

        // calculate weapon stats using the new state that was set above
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
