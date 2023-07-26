<script>
  import StatRow from '../TableRow/StatRow.svelte';
  import Cell from '../TableRow/Cell.svelte';
  import { stats } from '$lib/stores/statsStore';

  const x = $stats.main;
</script>

<div class="">
  <div
    class="mb-.5 grid grid-cols-20 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
  >
    <Cell align="start" col="col-span-12" value="Stat" />
    <Cell align="end" col="col-span-4" value="Base" />
    <Cell align="end" col="col-span-4" value="Total" />
  </div>
  <StatRow label="HP" total={x.hp} base={x.baseHP} isPcnt={false} />
  <StatRow label="ATK" total={x.atk} base={x.baseATK} isPcnt={false} />
  <StatRow label="DEF" total={x.def} base={x.baseDEF} isPcnt={false} />
  <StatRow label="Elemental Mastery" total={x.em} isPcnt={false} />
  <StatRow label="CRIT Rate" total={x.critrate} base={5} isPcnt={true} />
  <StatRow label="CRIT DMG" total={x.critdmg} base={50} isPcnt={true} />
  <StatRow label="Anemo DMG Bonus" total={x.anemo} isPcnt={true} />
  <StatRow label="Anemo Res" total={x.anemoRes} isPcnt={true} />
  <StatRow label="Cryo DMG Bonus" total={x.cryo} isPcnt={true} />
  <StatRow label="Cryo Res" total={x.cryoRes} isPcnt={true} />
  <StatRow label="Dendro DMG Bonus" total={x.dendro} isPcnt={true} />
  <StatRow label="Dendro Res" total={x.dendroRes} isPcnt={true} />
  <StatRow label="Electro DMG Bonus" total={x.electro} isPcnt={true} />
  <StatRow label="Electro Res" total={x.electroRes} isPcnt={true} />
  <StatRow label="Geo DMG Bonus" total={x.geo} isPcnt={true} />
  <StatRow label="Geo Res" total={x.geoRes} isPcnt={true} />
  <StatRow label="Hydro DMG Bonus" total={x.hydro} isPcnt={true} />
  <StatRow label="Hydro Res" total={x.hydroRes} isPcnt={true} />
  <StatRow label="Pyro DMG Bonus" total={x.pyro} isPcnt={true} />
  <StatRow label="Pyro Res" total={x.pyroRes} isPcnt={true} />
  <StatRow label="Physical DMG Bonus" total={x.physical} isPcnt={true} />
  <StatRow label="Physical Res" total={x.physicalRes} isPcnt={true} />
  <StatRow label="Energy Recharge" total={x.energy} base={100} isPcnt={true} />
  <StatRow label="ATK SPD" base={0} total={0} isPcnt={true} />
  <StatRow label="Move SPD" base={0} total={0} isPcnt={true} />
  <StatRow label="Healing Bonus" base={0} total={0} isPcnt={true} />
  <StatRow label="Incoming Healing" base={0} total={0} isPcnt={true} />
</div>
