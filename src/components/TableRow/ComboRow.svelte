<script lang="ts">
  import ComboButton from './ComboButton.svelte';
  import ComboAddButton from './ComboAddButton.svelte';
  import ComboModal from '../Modal/Combo/ComboModal.svelte';
  import ShortModal from '../Modal/ShortModal.svelte';

  import { combos } from '$lib/stores/comboStore';
  import { talents } from '$lib/stores/talentStore';

  export let index: number;

  let dialog: HTMLDialogElement;

  /**
   * Calculates the total damage and retrieves the talent objects involved in the damage calculation.
   * @param talents - Object containing talent rows.
   * @param combo - Combo object specifying the hits to calculate damage for.
   * @returns An object containing the total damage and the talent objects involved.
   */
  function calculateComboDamage(
    talents: Record<string, any[]>,
    combo: { hits: { talent: string; btnIndex: number }[] }
  ) {
    let totalDamage = 0;
    const talentObjects: any[] = [];

    for (const hit of combo.hits) {
      const talentRow = talents[hit.talent];
      const button = talentRow[hit.btnIndex];
      talentObjects.push(button);
      totalDamage += button.damage;
    }

    return {
      totalDamage,
      talentObjects
    };
  }

  function toggleModal() {
    dialog.showModal();
  }

  $: result = calculateComboDamage($talents, $combos[index]);
</script>

<!-- @component - * - * - * - * - * - * - * - * - * - 
- Add edit icon and more styles to show that the Title
is editable on shover and click etc

- ❗❗ Will probably need to calculate combo row `damage` 
in a new derived store as `ICD` restrictions will behave
differently in table than when put together in a 
`comboRow`. 
- 💥 Due to ICD complexity, comboRow might have to 
ignore ICD except for multihit skills.
-->

<section class="my-2 border-b border-slate-700 pb-2">
  <h3
    class="mb-2 w-fit min-w-[120px] underline-offset-2 hover:underline"
    contenteditable="true"
    bind:textContent={$combos[index].title}
  />

  <div class="flex items-center">
    {#each result.talentObjects as hit}
      <ComboButton {hit} />
    {/each}
    <ComboAddButton on:click={toggleModal} />
  </div>
  <div class="flex justify-between">
    <div class="mt-2 flex gap-1">
      <img class="h-5 w-5 self-center" src="/images/elements/anemo.svg" alt="element" />
      <span>{Math.round(result.totalDamage).toLocaleString() || '-'}</span>
    </div>
  </div>
</section>

<ShortModal bind:dialog modalTitle="Talents">
  <ComboModal {index} />
</ShortModal>
