import { derived } from 'svelte/store';
import { combos } from './comboStore';
import { talents } from './talentStore';
// default infusion should be physical. replace this with infusion store

function createComboDamage() {
  return derived([combos, talents], ([$combos, $talents]) => {
    let foo;

    return {
      foo
    };
  });
}

export const damage = createComboDamage();
