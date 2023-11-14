<script lang="ts">
  import type { DamageType, Reactions } from '$lib/types/global';
  import { getButtonHalves } from '$lib/helpers/getButtonHalves';
  import { separateDamage } from '$lib/helpers/separateDamage';
  import { character } from '$lib/stores/characterStore';
  import { beforeUpdate, onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import { Bloom, Hyperbloom, Burgeon, Burning, Shattered } from '$lib/icons';

  type DamageObject = { dmgType: DamageType; dmgValue: number };
  type ButtonReactions = 'bloom' | 'hyperbloom' | 'burgeon' | 'burning' | 'shattered';

  const dispatch = createEventDispatcher();

  const reactions = {
    bloom: { component: Bloom, text: 'text-dendro' },
    hyperbloom: { component: Hyperbloom, text: 'text-dendro' },
    burgeon: { component: Burgeon, text: 'text-dendro' },
    burning: { component: Burning, text: 'text-pyro' },
    shattered: { component: Shattered, text: '' }
  };

  export let btn: any;
  export let btnID: string;
  export let deletable = false;
  export let damage: any;
  export let isReaction = false;

  const btnImage = btn.url
    ? `/images/talents/${btn.url}.webp`
    : `/images/ui/${$character.selected.weapon}.webp`;
  let isInitialized = false; // Add a flag to track component initialization

  // previous values
  let prevDmgObjs: any = [];
  let previousDmgType = btn.elemental;

  // current values
  let currentIndex = 0;
  let dmgTypes = Object.keys(btn.damage);
  let currentDmgType = dmgTypes[currentIndex];

  onMount(() => {
    $damage[btn.elemental] += btn.damage[btn.elemental] ?? btn.damage[btn.damageBonus];
    isInitialized = true;

    return () => {
      if (currentIndex === 0) {
        $damage[btn.elemental] -=
          btn.damage[btn.elemental] ?? btn.damage[btn.damageBonus];
      } else {
        separateDamage(
          currentDmgType as DamageType | Reactions,
          btn.damage[currentDmgType],
          btn.elemental,
          btn.damage[btn.elemental]
        ).forEach((dmgObj) => {
          $damage[dmgObj.dmgType] -= dmgObj.dmgValue;
        });
      }
    };
  });

  beforeUpdate(() => {
    // previousDamage = btn.damage[currentDmgType];
    // new
    prevDmgObjs = separateDamage(
      currentDmgType as DamageType | Reactions,
      btn.damage[currentDmgType],
      btn.elemental,
      btn.damage[btn.elemental]
    );
  });

  function addDamage(curr: DamageObject[], prev: DamageObject[]) {
    // remove previous damage objects
    prev.forEach((dmgObj: DamageObject) => {
      $damage[dmgObj.dmgType] -= dmgObj.dmgValue;
    });

    // add current damage objects
    curr.forEach((dmgObj: DamageObject) => {
      $damage[dmgObj.dmgType] += dmgObj.dmgValue;
    });
  }

  function switchDamageType() {
    if (dmgTypes.length === 1) return;

    currentIndex = (currentIndex + 1) % dmgTypes.length;
    currentDmgType = dmgTypes[currentIndex];

    const currDmgObjs = separateDamage(
      currentDmgType as DamageType | Reactions,
      btn.damage[currentDmgType],
      btn.elemental,
      btn.damage[btn.elemental]
    );

    addDamage(currDmgObjs, prevDmgObjs);
    prevDmgObjs = currDmgObjs;
  }

  // ✅ - this conditional ensures changing stats don't switch
  // buttons from an elemental reaction state
  $: if (previousDmgType !== btn.elemental) {
    previousDmgType = btn.elemental;
    currentIndex = 0;
    currentDmgType = btn.elemental;
    dmgTypes = Object.keys(btn.damage);
  }

  $: {
    if (isInitialized) {
      const currDmgObjs = separateDamage(
        currentDmgType as DamageType | Reactions,
        btn.damage[currentDmgType],
        btn.elemental,
        btn.damage[btn.elemental]
      );

      addDamage(currDmgObjs, prevDmgObjs);
      prevDmgObjs = currDmgObjs;
    }
  }

  function removeButton() {
    if (deletable === true) {
      dispatch('removeBtn', { btnID, tag: btn.tag });
    }
  }

  $: classes = getButtonHalves(currentDmgType, btn.elemental);
  $: reactionType = btn.damageBonus as ButtonReactions;
  $: stacks = currentIndex + 1;
</script>

<button
  class="relative mr-2 flex h-[70px] w-10 flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-600"
  on:click={switchDamageType}
  draggable="true"
  data-item-id={btn.btnID}
  disabled={deletable}
  transition:fly
>
  {#if !isReaction}
    <div
      class="flex h-full w-full items-center justify-center border-b border-slate-700 border-opacity-0 transition-opacity duration-500 {classes.top}"
      class:border-opacity-100={classes.top !== classes.bot}
    >
      <span class="text-shadow pointer-events-none mt-1 text-base text-slate-100"
        >{btn.tag}</span
      >
    </div>
    <div
      class="relative flex h-full w-full items-center justify-center border-t border-slate-700 border-opacity-0 transition-opacity duration-500 {classes.bot}"
      class:border-opacity-100={classes.top !== classes.bot}
    >
      <img src={btnImage} class="pointer-events-none top-1 mb-1 h-7 w-7" alt="Talent" />
    </div>
  {:else}
    <div class="flex h-full flex-col items-center justify-center gap-1">
      <svelte:component this={reactions[reactionType].component} class="h-6" />
      {#if dmgTypes.length > 1}
        <span class="stacks text-sm font-bold {reactions[reactionType].text}"
          >x{stacks}</span
        >
      {/if}
    </div>
  {/if}

  {#if deletable}
    <button
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-60 transition-opacity"
      on:click={removeButton}
      class:opacity-0={!deletable}
      class:opacity-100={deletable}
    >
      <div class="h-5 w-5 fill-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
          />
        </svg>
      </div>
    </button>
  {/if}
</button>

<style>
  .text-shadow {
    text-shadow: -1px 1px 0 rgba(15, 23, 42, 0.5), 1px 1px 0 rgba(15, 23, 42, 0.5),
      1px -1px 0 rgba(15, 23, 42, 0.5), -1px -1px 0 rgba(15, 23, 42, 0.5);
  }

  .stacks {
    text-shadow: -1px -1px 2px #334155, 1px -1px 2px #334155, -1px 1px 1px #334155,
      1px 1px 1px #334155;
  }
</style>
