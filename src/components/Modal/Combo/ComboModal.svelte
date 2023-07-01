<script lang="ts">
  import Button from './Button.svelte';
  import { character } from '$lib/stores/characterStore';

  function pushButtonToRow(tag: string) {
    console.log(tag);
  }
</script>

<!-- @component
- Add Transformative reactions row
 -->

<div>
  <!-- Normal -->
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each $character.selected.normal as talent}
      <Button value={talent.tag} {pushButtonToRow} />
    {/each}
  </section>
  <!-- Charged -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $character.selected.charged as talent}
      <Button value={talent.tag} {pushButtonToRow} />
    {/each}
  </section>
  <!-- Plunge -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $character.selected.plunge as talent}
      <Button value={talent.tag} {pushButtonToRow} />
    {/each}
  </section>
  <!-- Skill -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $character.selected.skill as talent}
      <Button value={talent.tag} {pushButtonToRow} />
    {/each}
  </section>
  <!-- Burst -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each $character.selected.burst as talent}
      <Button value={talent.tag} {pushButtonToRow} />
    {/each}
  </section>
</div>
