<script lang="ts">
  import ActionStats from './ActionStats.svelte';

  // types
  import type { Action, ActionBtnID, ActionButtonColor } from '$lib/types/actions';

  //components
  import MultiModal from '../MultiModal/MultiModal.svelte';
  import Formatted from '../Text/Formatted.svelte';
  import ActionTarget from './ActionTarget.svelte';
  import { actionsText } from '$lib/data/Colors';

  export let dialog: HTMLDialogElement;
  export let id: ActionBtnID;
  export let data: Action;
  export let talentLvl: number | null = null;
  export let type: ActionButtonColor;
  export let hasFooter = true;
  export let addedStats: { scaling: string; coef: number }[] = [];

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
  $: actionType = data.actionType.includes('vision') ? 'Vision Match' : data.actionType;
</script>

<MultiModal bind:dialog {hasFooter} small>
  <div slot="title" class="flex items-center gap-2">
    {#if shortID}
      <div
        class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-slate-600"
      >
        <span class="text-sm uppercase">{shortID}</span>
      </div>
    {/if}
    <h3>
      {data.name}
      <span class=" text-[15px] font-bold {actionsText[type]}">{showTalentLvl}</span>
    </h3>
  </div>
  <div class="scrollbar flex max-h-96 flex-col gap-4 overflow-y-auto text-sm md:pr-2">
    <!-- Content -->
    <div class="border-b border-slate-600 pb-3">
      {#if data.description}
        <Formatted content={data.description} class="text-slate-300" />
      {:else}
        <p>No description available.</p>
      {/if}
    </div>

    <!-- ❗ Stats ❗ -->
    <ActionStats values={addedStats} />
    <!-- Target -->
    <ActionTarget {id} target={data.target} />
  </div>
  <svelte:fragment slot="footer">
    <div class="flex w-full items-center justify-between">
      <h4 class="text-sm font-bold">
        {actionType.toUpperCase()}
      </h4>
      <slot name="footer" />
    </div>
  </svelte:fragment>
  <!-- Interactive FOOTER -->
</MultiModal>
