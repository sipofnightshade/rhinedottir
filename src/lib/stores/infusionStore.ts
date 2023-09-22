import { writable } from 'svelte/store';
import type { Target } from '$lib/types/actions';
import type { DamageType } from '$lib/types/global';

function createInfusion() {
  const { subscribe, set, update } = writable<DamageType>('physical');

  return {
    subscribe,
    setInfusion: (dmgType: DamageType, target: Target) =>
      update((state) => {
        // Keep current infusion if self infused
        if (target === 'self' && state !== 'physical') return state;

        state = dmgType;
        return state;
      }),
    reset: () => set('physical')
  };
}

export const infusion = createInfusion();
