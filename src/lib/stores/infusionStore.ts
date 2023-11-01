import { writable } from 'svelte/store';
import type { Target } from '$lib/types/actions';
import type { DamageType } from '$lib/types/global';

function createInfusion() {
  const { subscribe, set, update } = writable<DamageType>('physical');

  /**
   * @todo
   * Change infusion property to accept an array/object,
   * --> eg: infusion: ['pyro','self'] or infusion: ['pyro','melee']
   * Return an object from this store for each ID and they will contain
   * the appropriate infusions.
   */

  return {
    subscribe,
    setInfusion: (
      dmgType: DamageType,
      target: Target,
      id: 'main' | 'one' | 'two' | 'three'
    ) =>
      update((state) => {
        // Keep current infusion if self infused
        if (state !== 'physical') return state;

        if (target === 'self' && id === 'main') state = dmgType;

        if (target === 'party' && state === 'physical') state = dmgType;

        return state;
      }),
    // setInfusion2: (
    //   infusion: [DamageType, 'self' | 'melee'],
    //   id: 'main' | 'one' | 'two' | 'three'
    // ) =>
    //   update((state) => {
    //     // Keep current infusion if self infused
    //     if (state[id] !== 'physical') return state;

    //     switch (infusion[1]) {
    //       case 'self':
    //         state[id] = infusion;
    //         break;
    //       case 'melee':
    //         state.main = infusion;
    //         state.one = infusion;
    //         state.two = infusion;
    //         state.three = infusion;
    //         break;
    //       default:
    //         break;
    //     }

    //     return state;
    //   }),
    reset: () => set('physical')
  };
}

export const infusion = createInfusion();
