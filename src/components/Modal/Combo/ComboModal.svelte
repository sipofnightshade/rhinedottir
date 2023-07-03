<script lang="ts">
  import Button from './Button.svelte';
  import { character } from '$lib/stores/characterStore';
  import { getCombo } from '$lib/context/comboContext';
  import type { Hit } from '$lib/types/talents';

  const comboRow = getCombo();

  function pushButtonToRow(talent: Hit) {
    $comboRow.hits = [...$comboRow.hits, talent];
  }
</script>

<!-- @component - * - * - * - * - * - * - * - * - * - 
- Add Transformative reactions row
- Add element information to each button type. This
would have to be infusion for Normal/Charged Attacks.
-->

<div>
  <!-- Normal -->
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each $character.selected.normal as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
  <!-- Charged -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $character.selected.charged as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
  <!-- Plunge -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $character.selected.plunge as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
  <!-- Skill -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $character.selected.skill as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
  <!-- Burst -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $character.selected.burst as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
</div>
