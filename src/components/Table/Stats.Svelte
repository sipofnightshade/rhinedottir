<script lang="ts">
  import StatRow from '../TableRow/StatRow.svelte';
  import Cell from '../TableRow/Cell.svelte';

  // stores & helpers
  import { stats } from '$lib/stores/statsStore';
  import { enemy } from '$lib/stores/enemyStore';
  import { party } from '$lib/stores/partyStore';
  import { character } from '$lib/stores/characterStore';
  import { calcDEFMultiplier } from '$lib/calculators/calcDEFMultiplier';

  // types
  import type { Visions } from '$lib/types/global';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import EnemyStatRow from '../TableRow/EnemyStatRow.svelte';
  type CharacterID = 'main' | 'one' | 'two' | 'three';

  export let activeTabValue = 0;
  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);

  $: tabs = [
    {
      name: $character.selected.name,
      vision: $character.selected.vision as Visions,
      id: 'main' as CharacterID,
      value: 0,
      stats: $stats.main
    },
    {
      name: $party.one?.character.selected.name,
      vision: $party.one?.character.selected.vision as Visions,
      id: 'one' as CharacterID,
      value: 1,
      stats: $stats.one ?? null
    },
    {
      name: $party.two?.character.selected.name,
      vision: $party.two?.character.selected.vision as Visions,
      id: 'two' as CharacterID,
      value: 2,
      stats: $stats.two ?? null
    },
    {
      name: $party.three?.character.selected.name,
      vision: $party.three?.character.selected.vision as Visions,
      id: 'three' as CharacterID,
      value: 3,
      stats: $stats.three ?? null
    }
  ];

  const visionClasses = {
    anemo: 'border-anemo',
    cryo: 'border-cryo',
    dendro: 'border-dendro',
    electro: 'border-electro',
    geo: 'border-geo',
    pyro: 'border-pyro',
    hydro: 'border-hydro'
  };

  $: enemyDefMultiplier = calcDEFMultiplier(
    $character.lvl,
    $enemy.lvl,
    $enemy.defReduce,
    0
  );
</script>

<div class="flex h-full flex-1 flex-col overflow-hidden">
  <div class="mb-2 grid list-none grid-flow-col gap-2">
    {#each tabs as item}
      {#if item.name}
        <button
          class="flex h-9 w-full flex-grow items-center justify-center rounded-md border
      {activeTabValue === item.value ? visionClasses[item.vision] : 'border-slate-500'}"
          on:click={handleClick(item.value)}
          class:opacity-30={!item.name}
          disabled={!item.name}
        >
          {#if item.name}
            <Thumbnail
              alt="temp"
              img="/images/character/{item.name}.webp"
              hasBG={false}
              classes="h-full"
            />
          {:else}
            <Thumbnail
              alt="temp"
              img="/images/ui/UI_BtnIcon_Team.png"
              classes="h-2/3"
              hasBG={false}
            />
          {/if}
        </button>
      {/if}
    {/each}
    <!-- ENEMY TAB BUTTON -->
    <button
      class="flex h-9 w-full flex-grow items-center justify-center rounded-md border
      {activeTabValue === 4 ? 'border-red-600' : 'border-slate-500'}"
      on:click={handleClick(4)}
    >
      <Thumbnail
        alt="hilichurl"
        img="/images/ui/hilichurl.svg"
        classes="h-2/3"
        hasBG={false}
      />
    </button>
  </div>
  <div class="scrollbar w-full overflow-auto md:pr-0.5">
    {#each tabs as item (item.value)}
      {#if activeTabValue === item.value}
        {#if item.stats}
          <!-- TABLE HEADING -->
          <div
            class="mb-.5 grid grid-cols-20 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
          >
            <Cell align="start" col="col-span-12" value="Stat" />
            <Cell align="end" col="col-span-4" value="Base" />
            <Cell align="end" col="col-span-4" value="Total" />
          </div>
          <!-- STAT ROWS -->

          <StatRow
            label="HP"
            total={item.stats.hp}
            base={item.stats.baseHP}
            isPcnt={false}
          />
          <StatRow
            label="ATK"
            total={item.stats.atk}
            base={item.stats.baseATK}
            isPcnt={false}
          />
          <StatRow
            label="DEF"
            total={item.stats.def}
            base={item.stats.baseDEF}
            isPcnt={false}
          />
          <StatRow label="Elemental Mastery" total={item.stats.em} isPcnt={false} />
          <StatRow label="CRIT Rate" total={item.stats.critrate} base={5} isPcnt={true} />
          <StatRow label="CRIT DMG" total={item.stats.critdmg} base={50} isPcnt={true} />
          <StatRow
            label="Energy Recharge"
            total={item.stats.energy}
            base={100}
            isPcnt={true}
          />
          <!-- Add separator here -->
          <StatRow label="Anemo Bonus" total={item.stats.anemo} isPcnt={true} />
          <StatRow label="Anemo Res" total={item.stats.anemoRes} isPcnt={true} />
          <StatRow label="Cryo Bonus" total={item.stats.cryo} isPcnt={true} />
          <StatRow label="Cryo Res" total={item.stats.cryoRes} isPcnt={true} />
          <StatRow label="Dendro Bonus" total={item.stats.dendro} isPcnt={true} />
          <StatRow label="Dendro Res" total={item.stats.dendroRes} isPcnt={true} />
          <StatRow label="Electro Bonus" total={item.stats.electro} isPcnt={true} />
          <StatRow label="Electro Res" total={item.stats.electroRes} isPcnt={true} />
          <StatRow label="Geo Bonus" total={item.stats.geo} isPcnt={true} />
          <StatRow label="Geo Res" total={item.stats.geoRes} isPcnt={true} />
          <StatRow label="Hydro Bonus" total={item.stats.hydro} isPcnt={true} />
          <StatRow label="Hydro Res" total={item.stats.hydroRes} isPcnt={true} />
          <StatRow label="Pyro Bonus" total={item.stats.pyro} isPcnt={true} />
          <StatRow label="Pyro Res" total={item.stats.pyroRes} isPcnt={true} />
          <StatRow label="Physical Bonus" total={item.stats.physical} isPcnt={true} />
          <StatRow label="Physical Res" total={item.stats.physicalRes} isPcnt={true} />
          <!-- Add separator here -->
          <StatRow label="Normal Attack Bonus" total={item.stats.normal} isPcnt={true} />
          <StatRow
            label="Charged Attack Bonus"
            total={item.stats.charged}
            isPcnt={true}
          />
          <StatRow label="Plunge Attack Bonus" total={item.stats.plunge} isPcnt={true} />
          <StatRow label="Elemental Skill Bonus" total={item.stats.skill} isPcnt={true} />
          <StatRow label="Elemental Burst Bonus" total={item.stats.burst} isPcnt={true} />
          <!-- Add separator here -->
          <StatRow label="ATK SPD" total={item.stats.normalATKSpd} isPcnt={true} />
          <StatRow label="Move SPD" total={item.stats.moveSpd} isPcnt={true} />
          <StatRow label="Healing Bonus" total={item.stats.healing} isPcnt={true} />
          <StatRow
            label="Incoming Healing"
            total={item.stats.healingIncoming}
            isPcnt={true}
          />
        {/if}
      {/if}
    {/each}
    {#if activeTabValue === 4}
      <div
        class="mb-.5 grid grid-cols-20 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
      >
        <Cell align="start" col="col-span-12" value="Stat" />
        <Cell align="end" col="col-span-8" value="Value" />
      </div>
      <EnemyStatRow label="Level" value={$enemy.lvl} multiplier={false} />
      <EnemyStatRow label="Defence" value={enemyDefMultiplier} />
      <div class="h-[1px] w-full bg-slate-600" />
      <EnemyStatRow label="Anemo Res" value={$enemy.anemo} />
      <EnemyStatRow label="Cryo Res" value={$enemy.cryo} />
      <EnemyStatRow label="Dendro Res" value={$enemy.dendro} />
      <EnemyStatRow label="Electro Res" value={$enemy.electro} />
      <EnemyStatRow label="Hydro Res" value={$enemy.hydro} />
      <EnemyStatRow label="Geo Res" value={$enemy.geo} />
      <EnemyStatRow label="Pyro Res" value={$enemy.pyro} />
      <EnemyStatRow label="Physical Res" value={$enemy.physical} />
    {/if}
  </div>
</div>
