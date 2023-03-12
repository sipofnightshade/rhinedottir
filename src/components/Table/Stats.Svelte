<script>
  import StatRow from '../TableRow/StatRow.svelte';
  import Cell from '../TableRow/Cell.svelte';
  import { stats } from '$lib/stores/statsStore';
</script>

<div class="">
  <div
    class="mb-.5 grid grid-cols-20 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
  >
    <Cell align="start" col="col-span-12" value="Stat" />
    <Cell align="end" col="col-span-4" value="Base" />
    <Cell align="end" col="col-span-4" value="Total" />
  </div>
  <StatRow label="HP" total={$stats.hp} base={$stats.baseHP} isPcnt={false} />
  <StatRow label="ATK" total={$stats.atk} base={$stats.baseATK} isPcnt={false} />
  <StatRow label="DEF" total={$stats.def} base={$stats.baseDEF} isPcnt={false} />
  <StatRow label="Elemental Mastery" total={$stats.em} isPcnt={false} />
  <StatRow label="CRIT Rate" total={$stats.critrate} base={5} isPcnt={true} />
  <StatRow label="CRIT DMG" total={$stats.critdmg} base={50} isPcnt={true} />
  <StatRow label="Anemo DMG Bonus" total={$stats.anemo} isPcnt={true} />
  <StatRow label="Anemo Res" total={$stats.anemoRes} isPcnt={true} />
  <StatRow label="Cryo DMG Bonus" total={$stats.cryo} isPcnt={true} />
  <StatRow label="Cryo Res" total={$stats.cryoRes} isPcnt={true} />
  <StatRow label="Dendro DMG Bonus" total={$stats.dendro} isPcnt={true} />
  <StatRow label="Dendro Res" total={$stats.dendroRes} isPcnt={true} />
  <StatRow label="Electro DMG Bonus" total={$stats.electro} isPcnt={true} />
  <StatRow label="Electro Res" total={$stats.electroRes} isPcnt={true} />
  <StatRow label="Geo DMG Bonus" total={$stats.geo} isPcnt={true} />
  <StatRow label="Geo Res" total={$stats.geoRes} isPcnt={true} />
  <StatRow label="Hydro DMG Bonus" total={$stats.hydro} isPcnt={true} />
  <StatRow label="Hydro Res" total={$stats.hydroRes} isPcnt={true} />
  <StatRow label="Pyro DMG Bonus" total={$stats.pyro} isPcnt={true} />
  <StatRow label="Pyro Res" total={$stats.pyroRes} isPcnt={true} />
  <StatRow label="Physical DMG Bonus" total={$stats.physical} isPcnt={true} />
  <StatRow label="Physical Res" total={$stats.physicalRes} isPcnt={true} />
  <StatRow label="Energy Recharge" total={$stats.energy} base={100} isPcnt={true} />
  <StatRow label="ATK SPD" base={0} total={0} isPcnt={true} />
  <StatRow label="Move SPD" base={0} total={0} isPcnt={true} />
  <StatRow label="Healing Bonus" base={0} total={0} isPcnt={true} />
  <StatRow label="Incoming Healing" base={0} total={0} isPcnt={true} />
</div>
