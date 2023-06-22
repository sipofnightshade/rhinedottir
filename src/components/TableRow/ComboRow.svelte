<script lang="ts">
  import ComboButton from './ComboButton.svelte';
  import ComboAddButton from './ComboAddButton.svelte';
</script>

<section class="my-1 border-b border-slate-700 pb-2">
  <div class="flex items-center">
    <ComboButton />
    <ComboButton />
    <ComboButton />
    <ComboAddButton />
  </div>
  <div class="flex justify-between">
    <div class="mt-1 flex">
      <img class="h-5 w-5 self-center" src="/images/elements/anemo.svg" alt="element" />
      <span>246,192</span>
    </div>
  </div>
</section>
