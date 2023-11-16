<script lang="ts">
  import ResonanceActions from '$lib/data/ResonanceActions';
  import { getVisionCount } from '$lib/helpers/getVisionCount';

  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';

  //stores
  import { party } from '$lib/stores/partyStore';
  import { character } from '$lib/stores/characterStore';
  import { stats } from '$lib/stores/statsStore';

  $: partyVisions = [
    $character.selected.vision,
    $party.one?.character.selected.vision ?? 'none',
    $party.two?.character.selected.vision ?? 'none',
    $party.three?.character.selected.vision ?? 'none'
  ];

  $: pyroResonance = getVisionCount(partyVisions, 'pyro') >= 2;
  $: hydroResonance = getVisionCount(partyVisions, 'hydro') >= 2;
  $: geoResonance = getVisionCount(partyVisions, 'geo') >= 2;
  $: dendroResonance = getVisionCount(partyVisions, 'dendro') >= 2;
  $: cryoResonance = getVisionCount(partyVisions, 'cryo') >= 2;
  $: anemoResonance = getVisionCount(partyVisions, 'anemo') >= 2;

  $: noResonance = getVisionCount(partyVisions, 'different') === 4;
</script>

{#if pyroResonance}
  <svelte:component
    this={PassiveButton}
    data={ResonanceActions['pyro']}
    type="pyro"
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
{/if}
{#if hydroResonance}
  <svelte:component
    this={PassiveButton}
    data={ResonanceActions['hydro']}
    type="hydro"
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
{/if}
{#if geoResonance}
  <svelte:component
    this={ToggleButton}
    data={ResonanceActions['geo']}
    type="geo"
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
  <svelte:component
    this={ToggleButton}
    data={ResonanceActions['geo2']}
    type="geo"
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
{/if}
{#if dendroResonance}
  <svelte:component
    this={StackButton}
    data={ResonanceActions['dendro']}
    type="dendro"
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
{/if}
{#if anemoResonance}
  <svelte:component
    this={PassiveButton}
    data={ResonanceActions['anemo']}
    type="anemo"
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
{/if}
{#if cryoResonance}
  <svelte:component
    this={ToggleButton}
    data={ResonanceActions['cryo']}
    type="cryo"
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
{/if}
{#if noResonance}
  <svelte:component
    this={PassiveButton}
    data={ResonanceActions['none']}
    type="resonance"
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
{/if}
