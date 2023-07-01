<script lang="ts">
  import TalentRow from '../TableRow/TalentRow.svelte';
  import Cell from '../TableRow/Cell.svelte';

  // stores
  import { character } from '$lib/stores/characterStore';
  import { talents } from '$lib/stores/talentStore';

  const infusion = 'physical';
</script>

<div>
  <div
    class="mb-1.5 grid grid-cols-24 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
  >
    <Cell align="start" col="col-span-2" value="ID" />
    <Cell align="start" col="col-span-9" value="Talent" />
    <Cell align="center" col="col-span-3" value="-" />
    <Cell align="end" col="col-span-4" value="Base" />
    <Cell align="end" col="col-span-6" value="Total" />
  </div>

  <div class=" grid grid-cols-24 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
    <Cell
      align="start"
      col="col-span-full"
      value={$character.selected.talentNames.normal}
    />
  </div>

  {#each $talents.normalRows as data}
    <TalentRow {data} el={data.elemental || infusion} />
  {/each}

  <div class=" grid grid-cols-24 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
    <Cell
      align="start"
      col="col-span-full"
      value={$character.selected.talentNames.skill}
    />
  </div>

  {#each $talents.skillRows as data}
    <TalentRow {data} el={data.elemental || $character.selected.vision} />
  {/each}
  <!---------- B U R S T ---------->
  <div class=" grid grid-cols-24 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
    <Cell
      align="start"
      col="col-span-full"
      value={$character.selected.talentNames.burst}
    />
  </div>

  {#each $talents.burstRows as data}
    <TalentRow {data} el={data.elemental || $character.selected.vision} />
  {/each}
</div>
