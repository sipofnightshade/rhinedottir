<script lang="ts">
  // stores
  import { character } from '$lib/stores/characterStore';
  import { party } from '$lib/stores/partyStore';
  import type { Visions } from '$lib/types/global';
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';

  // components
  import TalentSection from './TalentSection.svelte';

  // types
  type CharacterID = 'main' | 'one' | 'two' | 'three';
  type TalentType = 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';

  export let activeTabValue = 0;

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);

  $: tabs = [
    {
      name: $character.selected.name,
      vision: $character.selected.vision as Visions,
      id: 'main' as CharacterID,
      value: 0,
      sections: [
        'normal',
        'charged',
        'plunge',
        'skill',
        'burst',
        'reactions'
      ] as TalentType[],
      constellation: $character.constellation
    },
    {
      name: $party.one?.character.selected.name,
      vision: $party.one?.character.selected.vision as Visions,
      id: 'one' as CharacterID,
      value: 1,
      sections: ['skill', 'burst', 'reactions'] as TalentType[],
      constellation: $party.one?.character.constellation
    },
    {
      name: $party.two?.character.selected.name,
      vision: $party.two?.character.selected.vision as Visions,
      id: 'two' as CharacterID,
      value: 2,
      sections: ['skill', 'burst', 'reactions'] as TalentType[],
      constellation: $party.two?.character.constellation
    },
    {
      name: $party.three?.character.selected.name,
      vision: $party.three?.character.selected.vision as Visions,
      id: 'three' as CharacterID,
      value: 3,
      sections: ['skill', 'burst', 'reactions'] as TalentType[],
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
</script>

<div class="mb-2 grid list-none grid-flow-col gap-2">
  {#each tabs as item}
    {#if item.name}
      <button
        class="h- flex h-9 w-full items-center justify-center rounded-md border
    {activeTabValue === item.value ? visionClasses[item.vision] : 'border-slate-500'}"
        on:click={handleClick(item.value)}
        class:opacity-30={!item.name}
        disabled={!item.name}
      >
        {#if item.name}
          <Thumbnail
            alt="temp"
            img="/images/character/{item.name}.webp"
            classes="h-full"
          />
        {:else}
          <Thumbnail alt="temp" img="/images/ui/UI_BtnIcon_Team.png" classes="h-2/3" />
        {/if}
      </button>
    {/if}
  {/each}
</div>
<section class="scrollbar w-full flex-1 overflow-y-auto">
  {#each tabs as item (item.value)}
    {#if activeTabValue == item.value}
      {#each item.sections as section}
        <TalentSection
          on:addbutton
          id={item.id}
          type={section}
          constellation={item.constellation}
        />
      {/each}
    {/if}
  {/each}
</section>
