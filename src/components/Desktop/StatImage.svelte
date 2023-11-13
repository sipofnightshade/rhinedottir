<script lang="ts">
  import type { ComponentType } from 'svelte';
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
    Pyro,
    Bloom,
    Hyperbloom,
    Burgeon,
    Burning,
    Shattered
  } from '$lib/icons';

  export let stat: string;
  export let lg = false;

  type Icons = {
    [key in string]: ComponentType;
  };

  const iconMap: Partial<Icons> = {
    anemo: Anemo,
    cryo: Cryo,
    dendro: Dendro,
    electro: Electro,
    geo: Geo,
    hydro: Hydro,
    pyro: Pyro,
    physical: Physical,
    atk: Attack,
    'atk%': Attack,
    def: Defence,
    'def%': Defence,
    hp: HP,
    'hp%': HP,
    healing: Healing,
    healingIncoming: Healing,
    critrate: CritRate,
    critdmg: CritDamage,
    energy: Energy,
    em: EM,
    bloom: Bloom,
    hyperbloom: Hyperbloom,
    burgeon: Burgeon,
    burning: Burning,
    shattered: Shattered
  };
</script>

{#if iconMap[stat]}
  <svelte:component this={iconMap[stat]} class={lg ? 'h-5 xs-375:h-6' : 'h-4 lg:h-5'} />
{:else}
  <span>-</span>
{/if}
