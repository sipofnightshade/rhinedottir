<script lang="ts">
  // -> make a function that has a switch statement to render correct icon
  // -> make a reactive statement using that function
  import {
    Anemo,
    Attack,
    CritDamage,
    CritRate,
    Cryo,
    Defence,
    Dendro,
    Electro,
    EM,
    Hydro,
    Energy,
    Geo,
    Healing,
    HP,
    Physical,
    Pyro
  } from '$lib/icons';
  import type { ComponentType } from 'svelte';

  export let stat: string;
  let icon: ComponentType;

  function renderIcon(stat: string) {
    switch (stat) {
      case 'anemo':
        icon = Anemo;
        break;
      case 'cryo':
        icon = Cryo;
        break;
      case 'dendro':
        icon = Dendro;
        break;
      case 'electro':
        icon = Electro;
        break;
      case 'geo':
        icon = Geo;
        break;
      case 'hydro':
        icon = Hydro;
        break;
      case 'pyro':
        icon = Pyro;
        break;
      case 'physical':
        icon = Physical;
        break;
      case 'atk':
      case 'atk%':
        icon = Attack;
        break;
      case 'def':
      case 'def%':
        icon = Defence;
        break;
      case 'hp':
      case 'hp%':
        icon = HP;
        break;
      case 'healing':
        icon = Healing;
        break;
      case 'critrate':
        icon = CritRate;
        break;
      case 'critdmg':
        icon = CritDamage;
        break;
      case 'energy':
        icon = Energy;
        break;
      case 'em':
        icon = EM;
        break;
      default:
        break;
    }
  }

  $: renderIcon(stat);
</script>

{#if stat}
  <svelte:component this={icon} class="w-full md:w-[18px] xl:w-5" />
{:else}
  <span>-</span>
{/if}
