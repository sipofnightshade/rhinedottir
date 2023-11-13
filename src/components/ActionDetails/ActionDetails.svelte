<script lang="ts">
  import ActionStats from './ActionStats.svelte';

  // types
  import type { Action } from '$lib/types/actions';

  //components
  import MultiModal from '../MultiModal/MultiModal.svelte';
  import Formatted from '../Text/Formatted.svelte';

  export let dialog: HTMLDialogElement;
  export let data: Action;
  export let talentLvl: number | null = null;

  function createShortID(
    hasLevels: 'atk' | 'skill' | 'burst' | undefined,
    level: 2 | 8 | undefined,
    constellation: number | undefined
  ) {
    if (hasLevels === 'atk') return 'NA';
    if (hasLevels === 'skill') return 'E';
    if (hasLevels === 'burst') return 'Q';

    if (level === 2) return 'A1';
    if (level === 8) return 'A4';

    if (constellation && constellation > 0) return `C${constellation}`;

    return null;
  }

  const shortID = createShortID(data.hasLevels, data.level, data.constellation);

  $: showTalentLvl = talentLvl ? `Lv.${talentLvl + 1}` : '';

  $: console.log(talentLvl);
</script>

<MultiModal bind:dialog small>
  <div slot="title" class="flex items-center gap-2">
    {#if shortID}
      <div class="flex h-7 w-7 items-center justify-center rounded-full bg-slate-600">
        <span class="text-xs font-bold uppercase">{shortID}</span>
      </div>
    {/if}
    <h3>{data.name} {showTalentLvl}</h3>
  </div>
  <div class="flex flex-col gap-4 text-sm">
    <!-- Content -->
    {#if data.description}
      <Formatted content={data.description} class="text-slate-300" />
    {:else}
      <p>No description available.</p>
    {/if}
    <div class="h-[1px] w-full bg-slate-600" />
    <!-- ❗ Stats ❗ -->
    <!-- <ActionStats values={data.values} /> -->
    <!-- Target -->

    <!-- Interactive FOOTER -->
  </div>
</MultiModal>
