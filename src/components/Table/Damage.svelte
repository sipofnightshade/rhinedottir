<script lang="ts">
  import TalentRow from '../TableRow/TalentRow.svelte';
  import Cell from '../TableRow/Cell.svelte';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';

  // types
  type CharacterID = 'main' | 'one' | 'two' | 'three';

  // stores
  import { character } from '$lib/stores/characterStore';
  import { talents } from '$lib/stores/talentStore';
  import { party } from '$lib/stores/partyStore';
  import type { Visions } from '$lib/types/global';
  import DamageHeadingRow from '../TableRow/DamageHeadingRow.svelte';
  import ReactionRow from '../TableRow/ReactionRow.svelte';

  type Heading = 'normal' | 'charged' | 'plunge' | 'skill' | 'burst' | 'reactions';

  export let activeTabValue = 0;
  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);

  $: tabs = [
    {
      name: $character.selected.name,
      url: $character.selected.url,
      vision: $character.selected.vision as Visions,
      talentName: $character.selected.talentNames,
      id: 'main' as CharacterID,
      value: 0,
      constellation: $character.constellation
    },
    {
      name: $party.one?.character.selected.name,
      url: $party.one?.character.selected.url,
      vision: $party.one?.character.selected.vision as Visions,
      talentName: $party.one?.character.selected.talentNames,
      id: 'one' as CharacterID,
      value: 1,
      constellation: $party.one?.character.constellation
    },
    {
      name: $party.two?.character.selected.name,
      url: $party.two?.character.selected.url,
      vision: $party.two?.character.selected.vision as Visions,
      talentName: $party.two?.character.selected.talentNames,
      id: 'two' as CharacterID,
      value: 2,
      constellation: $party.two?.character.constellation
    },
    {
      name: $party.three?.character.selected.name,
      url: $party.three?.character.selected.url,
      vision: $party.three?.character.selected.vision as Visions,
      talentName: $party.three?.character.selected.talentNames,
      id: 'three' as CharacterID,
      value: 3,
      constellation: $party.three?.character.constellation
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

  const sections: Heading[] = [
    'normal',
    'charged',
    'plunge',
    'skill',
    'burst',
    'reactions'
  ];

  // if tab destroyed while open, set tab to first tab
  $: if (!tabs[activeTabValue].name) {
    activeTabValue = 0;
  }
</script>

<div class="flex h-full flex-1 flex-col overflow-hidden">
  <div class="mb-2 grid list-none grid-flow-col gap-2">
    {#each tabs as item}
      {#if item.name}
        <button
          class="flex h-9 w-full flex-grow items-center justify-center rounded-md border
      {activeTabValue === item.value
            ? visionClasses[item.vision]
            : 'border-slate-600 hover:border-slate-500'}"
          on:click={handleClick(item.value)}
          class:opacity-30={!item.name}
          disabled={!item.name}
        >
          {#if item.name}
            <Thumbnail
              alt="{item.name} tab"
              img="https://enka.network/ui/{item.url}.png"
              classes="h-full"
              hasBG={false}
            />
          {:else}
            <Thumbnail alt="temp" img="/images/ui/UI_BtnIcon_Team.png" classes="h-2/3" />
          {/if}
        </button>
      {/if}
    {/each}
  </div>
  <div
    class="mb-1.5 grid grid-cols-20 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
  >
    <Cell align="start" col="col-span-2" value="ID" />
    <Cell align="start" col="col-span-10" value="Talent" />
    <Cell align="center" col="col-span-2" value="-" />
    <Cell align="end" col="col-span-6" value="AVG DMG" />
  </div>
  <div class="scrollbar w-full overflow-auto md:pr-0.5">
    {#each tabs as item (item.value)}
      {#if activeTabValue == item.value}
        {#each sections as section}
          {#if $talents[item.id][section] && $talents[item.id][section].length > 0}
            <DamageHeadingRow {section} value={item.talentName} />

            {#if section !== 'reactions'}
              {#each $talents[item.id][section] as data}
                <TalentRow {data} constellation={item.constellation} />
              {/each}
            {:else}
              {#each $talents[item.id][section] as data}
                <ReactionRow {data} />
              {/each}
            {/if}
          {/if}
        {/each}
      {/if}
    {/each}
  </div>
</div>
