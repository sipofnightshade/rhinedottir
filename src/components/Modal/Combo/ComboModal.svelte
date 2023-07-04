<script lang="ts">
  import Button from './Button.svelte';
  import { character } from '$lib/stores/characterStore';
  import { getCombo } from '$lib/context/comboContext';
  import type { Hit } from '$lib/types/talents';
  import { talents } from '$lib/stores/talentStore';

  const comboRow = getCombo();

  function pushButtonToRow(talent: any) {
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
    {#each $talents.normalRows as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
  <!-- Charged -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $talents.chargedRows as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
  <!-- Plunge -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $talents.plungeRows as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
  <!-- Skill -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $talents.skillRows as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
  <!-- Burst -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $talents.burstRows as talent}
      <Button value={talent.tag} on:click={() => pushButtonToRow(talent)} />
    {/each}
  </section>
</div>
