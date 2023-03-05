<script lang="ts">
  import TalentRow from '../TableRow/TalentRow.svelte';
  import Cell from '../TableRow/Cell.svelte';

  import { Talents } from '$lib/data/Talents';
  import { stats } from '$lib/stores/statsStore';
  import { character } from '$lib/stores/characterStore';

  const charName = 'traveleranemo';
  const infusion = undefined;

  $: talentRows = Talents[charName];
</script>

<div class="">
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
    <Cell align="start" col="col-span-full" value={talentRows.normal.name} />
  </div>

  {#each talentRows.normal.hits as hit}
    <TalentRow
      type={'combat1'}
      data={hit}
      stats={$stats}
      charLvl={$character.lvl}
      talentLvl={$character.atk}
      el={infusion ?? 'physical'}
    />
  {/each}

  <div class="my-1 grid grid-cols-24 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
    <Cell align="start" col="col-span-full" value={talentRows.skill.name} />
  </div>

  {#each talentRows.skill.hits as hit}
    <TalentRow
      type={'combat2'}
      data={hit}
      stats={$stats}
      charLvl={$character.lvl}
      talentLvl={$character.skill}
      el={$character.selected.vision}
    />
  {/each}

  <div class="my-1 grid grid-cols-24 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
    <Cell align="start" col="col-span-full" value={talentRows.burst.name} />
  </div>

  {#each talentRows.burst.hits as hit}
    <TalentRow
      type={'combat3'}
      data={hit}
      stats={$stats}
      charLvl={$character.lvl}
      talentLvl={$character.burst}
      el={$character.selected.vision}
    />
  {/each}
</div>
