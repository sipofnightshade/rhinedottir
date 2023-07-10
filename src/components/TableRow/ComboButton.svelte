<script lang="ts">
  import { combos } from '$lib/stores/comboStore';
  import StatImage from '../Desktop/StatImage.svelte';

  export let btn: any;
  export let rowIndex: number;
  export let btnIndex: number;

  let dmgTypes = btn.dmgTypes;
  let currentIndex = 0;
  let currentDmgType = dmgTypes[currentIndex];

  function switchDamage() {
    currentIndex = (currentIndex + 1) % dmgTypes.length;
    currentDmgType = dmgTypes[currentIndex];
    combos.changeBtnReaction(rowIndex, btnIndex, currentDmgType);
  }

  $: console.log(currentDmgType);
</script>

<button
  class="mr-2 flex h-16 w-10 flex-col items-center justify-center rounded-lg bg-slate-700"
  on:click={switchDamage}
>
  <span>{btn.tag}</span>
  <div class="flex h-6 w-full justify-center">
    {#if btn.elemental}
      <StatImage stat={btn.elemental} />
    {/if}
    {#if currentDmgType !== 'base'}
      <img
        class="relative top-1 -m-[13px] h-6 w-6 self-center"
        src="/images/elements/separator.svg"
        alt="Separator"
      />
    {/if}
    {#if currentDmgType === 'electrocharged'}
      <StatImage stat="hydro" />
    {/if}
    {#if currentDmgType === 'aggravate'}
      <StatImage stat="dendro" />
    {/if}
    {#if currentDmgType === 'superconduct'}
      <StatImage stat="cryo" />
    {/if}
    {#if currentDmgType === 'overloaded'}
      <StatImage stat="pyro" />
    {/if}
  </div>
</button>

<!-- NEW BUTTON -->

<!-- <button
  class="relative mr-2 flex h-16 w-10 items-center justify-center rounded-lg bg-slate-700 "
  ><div
    class="top absolute top-0 z-10 flex h-full w-full justify-center rounded-lg bg-slate-500"
  >
    <img class="m-1 h-5 w-5" src="/images/elements/pyro.svg" alt="element" />
  </div>
  <img
    class="absolute bottom-0 m-1 h-5 w-5"
    src="/images/elements/anemo.svg"
    alt="element"
  />
  <div class="z-[11]  font-bold text-white">N1</div>
</button> -->
<style lang="postcss">
  /* .top {
    clip-path: polygon(0 0, 100% 0%, 100% 35%, 0 65%);
  } */
</style>
