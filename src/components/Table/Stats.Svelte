<script>
  import StatRow from '../TableRow/StatRow.svelte';
  import Cell from '../TableRow/Cell.svelte';
  import { stats } from '$lib/stores/statsStore';
  import { enemy } from '$lib/stores/enemyStore';

  $: x = $stats.main;
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
  <StatRow label="Energy Recharge" total={x.energy} base={100} isPcnt={true} />
  <!-- Add separator here -->
  <StatRow label="Anemo Bonus" total={x.anemo} isPcnt={true} />
  <StatRow label="Anemo Res" total={x.anemoRes} isPcnt={true} />
  <StatRow label="Cryo Bonus" total={x.cryo} isPcnt={true} />
  <StatRow label="Cryo Res" total={x.cryoRes} isPcnt={true} />
  <StatRow label="Dendro Bonus" total={x.dendro} isPcnt={true} />
  <StatRow label="Dendro Res" total={x.dendroRes} isPcnt={true} />
  <StatRow label="Electro Bonus" total={x.electro} isPcnt={true} />
  <StatRow label="Electro Res" total={x.electroRes} isPcnt={true} />
  <StatRow label="Geo Bonus" total={x.geo} isPcnt={true} />
  <StatRow label="Geo Res" total={x.geoRes} isPcnt={true} />
  <StatRow label="Hydro Bonus" total={x.hydro} isPcnt={true} />
  <StatRow label="Hydro Res" total={x.hydroRes} isPcnt={true} />
  <StatRow label="Pyro Bonus" total={x.pyro} isPcnt={true} />
  <StatRow label="Pyro Res" total={x.pyroRes} isPcnt={true} />
  <StatRow label="Physical Bonus" total={x.physical} isPcnt={true} />
  <StatRow label="Physical Res" total={x.physicalRes} isPcnt={true} />
  <!-- Add separator here -->
  <StatRow label="Normal Attack Bonus" total={x.normal} isPcnt={true} />
  <StatRow label="Charged Attack Bonus" total={x.charged} isPcnt={true} />
  <StatRow label="Plunge Attack Bonus" total={x.plunge} isPcnt={true} />
  <StatRow label="Elemental Skill Bonus" total={x.skill} isPcnt={true} />
  <StatRow label="Elemental Burst Bonus" total={x.burst} isPcnt={true} />
  <!-- Add separator here -->
  <StatRow label="ATK SPD" base={0} total={0} isPcnt={true} />
  <StatRow label="Move SPD" base={0} total={0} isPcnt={true} />
  <StatRow label="Healing Bonus" base={0} total={0} isPcnt={true} />
  <StatRow label="Incoming Healing" base={0} total={0} isPcnt={true} />
  <div class="px-0.5 py-1 text-tb">
    <h3 class="text-red-500">ENEMY ------------------</h3>
  </div>
  <StatRow label="Anemo Res" base={0} total={$enemy.anemo} isPcnt={true} />
  <StatRow label="Cryo Res" base={0} total={$enemy.cryo} isPcnt={true} />
  <StatRow label="Dendro Res" base={0} total={$enemy.dendro} isPcnt={true} />
  <StatRow label="Electro Res" base={0} total={$enemy.electro} isPcnt={true} />
  <StatRow label="Hydro Res" base={0} total={$enemy.hydro} isPcnt={true} />
  <StatRow label="Geo Res" base={0} total={$enemy.geo} isPcnt={true} />
  <StatRow label="Pyro Res" base={0} total={$enemy.pyro} isPcnt={true} />
  <StatRow label="Physical Res" base={0} total={$enemy.physical} isPcnt={true} />
</div>
