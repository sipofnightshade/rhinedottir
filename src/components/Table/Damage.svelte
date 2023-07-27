<script lang="ts">
  import TalentRow from '../TableRow/TalentRow.svelte';
  import Cell from '../TableRow/Cell.svelte';

  // stores
  import { character } from '$lib/stores/characterStore';
  import { talents } from '$lib/stores/talentStore';
  import { party } from '$lib/stores/partyStore';
</script>

<div>
  <div
    class="mb-1.5 grid grid-cols-20 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
  >
    <Cell align="start" col="col-span-2" value="ID" />
    <Cell align="start" col="col-span-10" value="Talent" />
    <Cell align="center" col="col-span-2" value="-" />
    <Cell align="end" col="col-span-6" value="Damage" />
  </div>

  <div class=" grid grid-cols-20 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
    <Cell
      align="start"
      col="col-span-full"
      value={$character.selected.talentNames.normal}
    />
  </div>

  <!-- Normal -->
  {#each $talents.main.normal as data}
    <TalentRow {data} />
  {/each}

  <!-- Charged -->
  <div class="h-[1px] w-full bg-slate-600" />
  {#each $talents.main.charged as data}
    <TalentRow {data} />
  {/each}

  <!-- Plunge -->
  <div class="h-[1px] w-full bg-slate-600" />
  {#each $talents.main.plunge as data}
    <TalentRow {data} />
  {/each}

  <div class=" grid grid-cols-20 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
    <Cell
      align="start"
      col="col-span-full"
      value={$character.selected.talentNames.skill}
    />
  </div>

  {#each $talents.main.skill as data}
    <TalentRow {data} />
  {/each}
  <!---------- B U R S T ---------->
  <div class=" grid grid-cols-20 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
    <Cell
      align="start"
      col="col-span-full"
      value={$character.selected.talentNames.burst}
    />
  </div>

  {#each $talents.main.burst as data}
    <TalentRow {data} />
  {/each}

  <!---------- Party 1 ---------->
  {#if $party.one}
    {@const character = $party.one.character}
    <div class=" grid grid-cols-20 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
      <Cell align="start" col="col-span-full" value={character.selected.fullName} />
    </div>
    {#each $talents.one.skill as data}
      <TalentRow {data} />
    {/each}
    {#each $talents.one.burst as data}
      <TalentRow {data} />
    {/each}
  {/if}

  <!---------- Party 2 ---------->
  {#if $party.two}
    {@const character = $party.two.character}
    <div class=" grid grid-cols-20 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
      <Cell align="start" col="col-span-full" value={character.selected.fullName} />
    </div>
    {#each $talents.two.skill as data}
      <TalentRow {data} />
    {/each}
    {#each $talents.two.burst as data}
      <TalentRow {data} />
    {/each}
  {/if}

  <!---------- Party 3 ---------->
  {#if $party.three}
    {@const character = $party.three.character}
    <div class=" grid grid-cols-20 rounded-sm bg-slate-600 py-1 px-1.5 text-tb">
      <Cell align="start" col="col-span-full" value={character.selected.fullName} />
    </div>
    {#each $talents.three.skill as data}
      <TalentRow {data} />
    {/each}
    {#each $talents.three.burst as data}
      <TalentRow {data} />
    {/each}
  {/if}
</div>
