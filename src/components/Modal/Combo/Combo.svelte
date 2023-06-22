<script lang="ts">
  import Button from './Button.svelte';
</script>

<div>
  <!-- Normal -->
  <section class="mb-1 grid grid-flow-col gap-1">
    <Button value="N1" />
    <Button value="N2" />
    <Button value="N3" />
    <Button value="N4" />
    <Button value="N5" />
  </section>
  <!-- Charged -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    <Button value="CA" />
    <Button value="CF" />
  </section>
  <!-- Plunge -->
  <section class="mb-1 grid  grid-flow-col gap-1">
    <Button value="P" />
    <Button value="LP" />
    <Button value="HP" />
  </section>
</div>
