import { writable } from 'svelte/store';
import type { Target } from '$lib/types/actions';
import type { DamageType } from '$lib/types/global';

function createInfusion() {
  const { subscribe, set, update } = writable<DamageType>('physical');

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
    reset: () => set('physical')
  };
}

export const infusion = createInfusion();
