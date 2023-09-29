<script>
  import StatRow from '../TableRow/StatRow.svelte';
  import Cell from '../TableRow/Cell.svelte';
  import { stats } from '$lib/stores/statsStore';
  import { enemy } from '$lib/stores/enemyStore';

  $: x = $stats.main;
</script>

<div>
  <div
    class="mb-.5 grid grid-cols-20 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
  >
    <Cell align="start" col="col-span-12" value="Stat" />
    <Cell align="end" col="col-span-4" value="Base" />
    <Cell align="end" col="col-span-4" value="Total" />
  </div>
  <StatRow label="HP" total={$stats.main.hp} base={$stats.main.baseHP} isPcnt={false} />
  <StatRow
    label="ATK"
    total={$stats.main.atk}
    base={$stats.main.baseATK}
    isPcnt={false}
  />
  <StatRow
    label="DEF"
    total={$stats.main.def}
    base={$stats.main.baseDEF}
    isPcnt={false}
  />
  <StatRow label="Elemental Mastery" total={$stats.main.em} isPcnt={false} />
  <StatRow label="CRIT Rate" total={$stats.main.critrate} base={5} isPcnt={true} />
  <StatRow label="CRIT DMG" total={$stats.main.critdmg} base={50} isPcnt={true} />
  <StatRow label="Energy Recharge" total={$stats.main.energy} base={100} isPcnt={true} />
  <!-- Add separator here -->
  <StatRow label="Anemo Bonus" total={$stats.main.anemo} isPcnt={true} />
  <StatRow label="Anemo Res" total={$stats.main.anemoRes} isPcnt={true} />
  <StatRow label="Cryo Bonus" total={$stats.main.cryo} isPcnt={true} />
  <StatRow label="Cryo Res" total={$stats.main.cryoRes} isPcnt={true} />
  <StatRow label="Dendro Bonus" total={$stats.main.dendro} isPcnt={true} />
  <StatRow label="Dendro Res" total={$stats.main.dendroRes} isPcnt={true} />
  <StatRow label="Electro Bonus" total={$stats.main.electro} isPcnt={true} />
  <StatRow label="Electro Res" total={$stats.main.electroRes} isPcnt={true} />
  <StatRow label="Geo Bonus" total={$stats.main.geo} isPcnt={true} />
  <StatRow label="Geo Res" total={$stats.main.geoRes} isPcnt={true} />
  <StatRow label="Hydro Bonus" total={$stats.main.hydro} isPcnt={true} />
  <StatRow label="Hydro Res" total={$stats.main.hydroRes} isPcnt={true} />
  <StatRow label="Pyro Bonus" total={$stats.main.pyro} isPcnt={true} />
  <StatRow label="Pyro Res" total={$stats.main.pyroRes} isPcnt={true} />
  <StatRow label="Physical Bonus" total={$stats.main.physical} isPcnt={true} />
  <StatRow label="Physical Res" total={$stats.main.physicalRes} isPcnt={true} />
  <!-- Add separator here -->
  <StatRow label="Normal Attack Bonus" total={$stats.main.normal} isPcnt={true} />
  <StatRow label="Charged Attack Bonus" total={$stats.main.charged} isPcnt={true} />
  <StatRow label="Plunge Attack Bonus" total={$stats.main.plunge} isPcnt={true} />
  <StatRow label="Elemental Skill Bonus" total={$stats.main.skill} isPcnt={true} />
  <StatRow label="Elemental Burst Bonus" total={$stats.main.burst} isPcnt={true} />
  <!-- Add separator here -->
  <StatRow label="ATK SPD" total={$stats.main.normalATKSpd} isPcnt={true} />
  <StatRow label="Move SPD" total={$stats.main.moveSpd} isPcnt={true} />
  <StatRow label="Healing Bonus" total={$stats.main.healing} isPcnt={true} />
  <StatRow label="Incoming Healing" total={$stats.main.healingIncoming} isPcnt={true} />
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
