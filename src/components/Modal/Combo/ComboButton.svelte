<script lang="ts">
  import { getButtonHalves } from '$lib/helpers/getButtonHalves';
  import { character } from '$lib/stores/characterStore';
  import { onMount } from 'svelte';

  export let btn: any;
  export let totalDamage: number;

  let previousDamage = 0;
  let previousElement = btn.elemental;

  onMount(() => {
    totalDamage += btn.damage.base;
    previousDamage += btn.damage.base;
    console.log('mounted');

    return () => {
      if (previousDamage !== 0) {
        totalDamage -= previousDamage;
      }
    };
  });

  const btnImage = btn.url
    ? `/images/talents/${btn.url}.webp`
    : `/images/ui/${$character.selected.weapon}.webp`;

  let dmgTypes = Object.keys(btn.damage);
  let currentIndex = 0;
  let currentDmgType = dmgTypes[currentIndex];

  function switchDamage() {
    totalDamage -= btn.damage[currentDmgType];
    currentIndex = (currentIndex + 1) % dmgTypes.length;
    currentDmgType = dmgTypes[currentIndex];
    totalDamage += btn.damage[currentDmgType];
    previousDamage = totalDamage;
  }

  $: dmgTypes = Object.keys(btn.damage);

  $: if (btn.elemental !== previousElement) {
    // ✅ - this conditional ensures changing stats don't switch
    // buttons from an elemental reaction state
    currentIndex = 0;
    currentDmgType = 'base';

    previousElement = btn.elemental;
  }

  $: if (btn.damage.base) {
    if (previousDamage !== btn.damage[currentDmgType]) {
      totalDamage -= previousDamage;
      totalDamage += btn.damage[currentDmgType];
      previousDamage = totalDamage;
    }
  }

  $: console.log('totalDMG:', totalDamage);

  $: damageType = currentDmgType === 'base' ? btn.elemental : currentDmgType;
  $: classes = getButtonHalves(damageType, btn.elemental);
</script>

<button
  class="mr-2 flex h-[70px] w-10 flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-slate-600"
  on:click={switchDamage}
>
  <div
    class="flex h-full w-full items-center justify-center border-b border-slate-700 border-opacity-0 {classes.top}"
    class:border-opacity-100={classes.top !== classes.bot}
  >
    <span class="mt-1 text-slate-100">{btn.tag}</span>
  </div>
  <div
    class="relative flex h-full w-full items-center justify-center border-t border-slate-700 border-opacity-0 transition-all {classes.bot}"
    class:border-opacity-100={classes.top !== classes.bot}
  >
    <img src={btnImage} class="top-1 mb-1 h-7 w-7" alt="Talent" />
  </div>
</button>
