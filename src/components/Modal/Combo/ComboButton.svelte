<script lang="ts">
  import { getButtonHalves } from '$lib/helpers/getButtonHalves';
  import { character } from '$lib/stores/characterStore';
  import { beforeUpdate, onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let btn: any;
  export let totalDamage: any;
  export let btnID: string;
  export let deletable = false;

  let previousDamage = 0;
  let previousElement = btn.elemental;
  let isInitialized = false; // Add a flag to track component initialization

  onMount(() => {
    $totalDamage += btn.damage.base;
    isInitialized = true;

    return () => {
      if (previousDamage !== 0) {
        $totalDamage -= btn.damage[currentDmgType];
      }
    };
  });

  function removeButton() {
    if (deletable === true) {
      dispatch('removeBtn', { btnID, tag: btn.tag });
    }
  }

  const btnImage = btn.url
    ? `/images/talents/${btn.url}.webp`
    : `/images/ui/${$character.selected.weapon}.webp`;

  let dmgTypes = Object.keys(btn.damage);
  let currentIndex = 0;
  let currentDmgType = dmgTypes[currentIndex];

  beforeUpdate(() => {
    previousDamage = btn.damage[currentDmgType];
  });

  const addDamage = (dmgType: any) => {
    $totalDamage -= previousDamage;
    $totalDamage += btn.damage[dmgType];
  };

  const switchDamageType = () => {
    currentIndex = (currentIndex + 1) % dmgTypes.length;
    currentDmgType = dmgTypes[currentIndex];

    addDamage(currentDmgType);
    previousDamage = btn.damage[currentDmgType];
  };

  // ✅ - this conditional ensures changing stats don't switch
  // buttons from an elemental reaction state
  $: if (previousElement !== btn.elemental) {
    previousElement = btn.elemental;
    currentIndex = 0;
    currentDmgType = 'base';
    dmgTypes = Object.keys(btn.damage);
  }

  $: {
    if (isInitialized && btn.damage[currentDmgType] !== previousDamage) {
      addDamage(currentDmgType);
      previousDamage = btn.damage[currentDmgType];
    }
  }

  $: damageType = currentDmgType === 'base' ? btn.elemental : currentDmgType;
  $: classes = getButtonHalves(damageType, btn.elemental);
</script>

<button
  class="relative mr-2 flex h-[70px] w-10 flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-slate-600"
  on:click={switchDamageType}
  draggable="true"
  data-item-id={btn.btnID}
  disabled={deletable}
  transition:fade
>
  <div
    class="flex h-full w-full items-center justify-center border-b border-slate-700 border-opacity-0 transition-opacity duration-500 {classes.top}"
    class:border-opacity-100={classes.top !== classes.bot}
    class:bg-opacity-0={deletable}
  >
    <span class="pointer-events-none mt-1 text-slate-100">{btn.tag}</span>
  </div>
  <div
    class="relative flex h-full w-full items-center justify-center border-t border-slate-700 border-opacity-0 transition-opacity duration-500 {classes.bot}"
    class:border-opacity-100={classes.top !== classes.bot}
    class:bg-opacity-0={deletable}
  >
    <img src={btnImage} class="pointer-events-none top-1 mb-1 h-7 w-7" alt="Talent" />
  </div>

  {#if deletable}
    <button
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-red-500 bg-opacity-60 transition-opacity"
      on:click={removeButton}
      class:opacity-0={!deletable}
      class:opacity-100={deletable}
    >
      <div class="h-5 w-5 fill-slate-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
          />
        </svg>
      </div>
    </button>
  {/if}
</button>
