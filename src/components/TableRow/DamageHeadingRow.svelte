<script lang="ts">
  import Cell from './Cell.svelte';

  type Heading = 'normal' | 'charged' | 'plunge' | 'skill' | 'burst' | 'reactions';
  type Value = { normal: string; skill: string; burst: string } | undefined;

  export let section: Heading;
  export let value: Value;
</script>

{#if section === 'normal' || section === 'skill' || section === 'burst'}
  <div class=" grid grid-cols-20 rounded-sm bg-slate-600 px-1.5 py-1 text-tb">
    <Cell align="start" col="col-span-full" value={value?.[section]} />
  </div>
{:else if section === 'charged' || section === 'plunge'}
  <div class="h-[1px] w-full bg-slate-600" />
{:else if section === 'reactions'}
  <div class=" grid grid-cols-20 rounded-sm bg-slate-600 px-1.5 py-1 text-tb">
    <Cell align="start" col="col-span-full" value="Reactions" />
  </div>
{/if}
