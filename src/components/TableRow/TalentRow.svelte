<script lang="ts">
  import type { Hit } from '$lib/types/talents';
  import type { DamageType } from '$lib/types/global';
  import Cell from './Cell.svelte';

  export let el: DamageType;
  export let data: any;
</script>

<div class="grid grid-cols-24 px-1 py-1 text-tb">
  <Cell align="start" col="col-span-2" value={data.tag} />
  <Cell align="start" col="col-span-10 text-slate-400" value={data.name} />
  <Cell align="center" col="col-span-2">
    <img class="h-6 w-6" src="/images/elements/{el}.svg" alt="" />
  </Cell>
  <Cell align="end" col="col-span-4 text-slate-400" value={data.damage.toFixed(0)} />
  <Cell align="end" col="col-span-6" value={(data.damage * 1.5).toFixed(0)} />
</div>
