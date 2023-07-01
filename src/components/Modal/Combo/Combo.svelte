<script lang="ts">
  import Button from './Button.svelte';

  import traveleranemo from '$lib/data/characters/traveleranemo';
</script>

<!-- @component
- Replace `traveleranemo` with the selected character
- Add Transformative reactions row
 -->

<div>
  <!-- Normal -->
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each traveleranemo.normal as talent}
      <Button value={talent.tag} />
    {/each}
  </section>
  <!-- Charged -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each traveleranemo.charged as talent}
      <Button value={talent.tag} />
    {/each}
  </section>
  <!-- Plunge -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each traveleranemo.plunge as talent}
      <Button value={talent.tag} />
    {/each}
  </section>
  <!-- Skill -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each traveleranemo.skill as talent}
      <Button value={talent.tag} />
    {/each}
  </section>
  <!-- Burst -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    {#each traveleranemo.burst as talent}
      <Button value={talent.tag} />
    {/each}
  </section>
</div>
