<script lang="ts">
  import Cell from './Cell.svelte';

  import StatImage from '../Desktop/StatImage.svelte';

  export let data: any;
</script>

<div class="grid grid-cols-24 px-1 py-1 text-tb">
  <Cell align="start" col="col-span-2" value={data.tag || '-'} />
  <Cell align="start" col="col-span-10 text-slate-400" value={data.name} />
  <Cell align="center" col="col-span-2">
    <StatImage stat={data.elemental} />
  </Cell>
  <Cell align="end" col="col-span-4 text-slate-400" value={data.damage.base.toFixed(0)} />
  <Cell align="end" col="col-span-6" value={(data.damage.base * 1.5).toFixed(0)} />
</div>
