<script lang="ts">
  import Button from './Button.svelte';
  import { talents } from '$lib/stores/talentStore';
  import { createEventDispatcher } from 'svelte';
  import { uid } from 'uid';

  type CharacterID = 'main' | 'one' | 'two' | 'three';
  type TalentType = 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';

  export let id: CharacterID;
  export let type: TalentType;

  const dispatch = createEventDispatcher<{
    addbutton: { index: number; id: CharacterID; type: TalentType; btnID: string };
  }>();

  function sendData(index: number) {
    dispatch('addbutton', { index, id, type, btnID: uid() });
  }
</script>

{#if $talents[id][type]}
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each $talents[id][type] as talent, index}
      <Button el={talent.elemental} value={talent.tag} on:click={() => sendData(index)} />
    {/each}
  </section>
{/if}
