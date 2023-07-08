<script lang="ts">
  import Button from './Button.svelte';
  // stores
  import { talents } from '$lib/stores/talentStore';
  import { combos } from '$lib/stores/comboStore';

  export let index: number;
</script>

<!-- @component - * - * - * - * - * - * - * - * - * - 
- Add Transformative reactions row
- Add element information to each button type. This
would have to be infusion for Normal/Charged Attacks.
-->

<div>
  <!-- Normal -->
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each $talents.normalRows as talent, btnIndex}
      <Button
        value={talent.tag}
        on:click={() => combos.addRowButton(index, 'normalRows', btnIndex)}
      />
    {/each}
  </section>
  <!-- Charged -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $talents.chargedRows as talent, btnIndex}
      <Button
        value={talent.tag}
        on:click={() => combos.addRowButton(index, 'chargedRows', btnIndex)}
      />
    {/each}
  </section>
  <!-- Plunge -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $talents.plungeRows as talent, btnIndex}
      <Button
        value={talent.tag}
        on:click={() => combos.addRowButton(index, 'plungeRows', btnIndex)}
      />
    {/each}
  </section>
  <!-- Skill -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $talents.skillRows as talent, btnIndex}
      <Button
        value={talent.tag}
        on:click={() => combos.addRowButton(index, 'skillRows', btnIndex)}
      />
    {/each}
  </section>
  <!-- Burst -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $talents.burstRows as talent, btnIndex}
      <Button
        value={talent.tag}
        on:click={() => combos.addRowButton(index, 'burstRows', btnIndex)}
      />
    {/each}
  </section>
</div>
