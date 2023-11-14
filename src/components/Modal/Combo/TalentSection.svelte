<script lang="ts">
  import Button from './Button.svelte';
  import { talents } from '$lib/stores/talentStore';
  import { createEventDispatcher } from 'svelte';
  import { uid } from 'uid';

  type CharacterID = 'main' | 'one' | 'two' | 'three';
  type TalentType =
    | 'normal'
    | 'charged'
    | 'plunge'
    | 'special'
    | 'skill'
    | 'burst'
    | 'reactions';

  export let id: CharacterID;
  export let type: TalentType;
  export let constellation = 0;

  const dispatch = createEventDispatcher<{
    addbutton: { index: number; id: CharacterID; type: TalentType; btnID: string };
  }>();

  function sendData(index: number) {
    dispatch('addbutton', { index, id, type, btnID: uid() });
  }
</script>

{#if $talents[id][type]}
  <section class="mb-1 grid auto-cols-fr grid-flow-col gap-1">
    {#each $talents[id][type] as talent, index}
      <Button
        el={talent.elemental}
        value={talent.tag}
        on:click={() => sendData(index)}
        {constellation}
        talentConstellation={talent.constellation}
        rxn={talent.damageBonus}
      />
    {/each}
  </section>
{/if}
