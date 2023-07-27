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
    {#each $talents.main.normal as talent}
      <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
    {/each}
  </section>
  <!-- Charged -->
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each $talents.main.charged as talent}
      <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
    {/each}
  </section>
  <!-- Plunge -->
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each $talents.main.plunge as talent}
      <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
    {/each}
  </section>
  <!-- Skill -->
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each $talents.main.skill as talent}
      <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
    {/each}
  </section>
  <!-- Burst -->
  <section class="mb-1 grid grid-flow-col gap-1">
    {#each $talents.main.burst as talent}
      <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
    {/each}
  </section>

  <!-- 🚹 PARTY 1 -->
  {#if $talents.one.skill && $talents.one.burst}
    <section class="mb-1 grid grid-flow-col gap-1">
      {#each $talents.one.skill as talent}
        <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
      {/each}
      {#each $talents.one.burst as talent}
        <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
      {/each}
    </section>
  {/if}

  <!-- 🚹 PARTY 2 -->
  {#if $talents.two.skill && $talents.two.burst}
    <section class="mb-1 grid grid-flow-col gap-1">
      {#each $talents.two.skill as talent}
        <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
      {/each}
      {#each $talents.two.burst as talent}
        <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
      {/each}
    </section>
  {/if}

  <!-- 🚹 PARTY 3 -->
  {#if $talents.three.skill && $talents.three.burst}
    <section class="mb3 grid grid-flow-col gap-1">
      {#each $talents.three.skill as talent}
        <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
      {/each}
      {#each $talents.three.burst as talent}
        <Button value={talent.tag} on:click={() => combos.addRowButton(index, talent)} />
      {/each}
    </section>
  {/if}
</div>
