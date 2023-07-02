// src/lib/components/context.ts
import { writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

import type { Writable } from 'svelte/store';
import type { Combo } from '$lib/types/talents';

type Context = Writable<Combo>;

export function setCombo(combo: Combo) {
  const comboStore = writable<Combo>(combo);
  setContext('combo', comboStore);
}

export function getCombo() {
  return getContext<Context>('combo');
}
