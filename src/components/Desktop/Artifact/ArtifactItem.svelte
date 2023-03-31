<script lang="ts">
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import Stat from './Stat.svelte';
</script>

<div
  class="flex h-full max-h-40 w-full flex-col items-center justify-center rounded-lg bg-slate-700 px-2 text-slate-200 xl:px-3"
>
  <button class="mb-1 h-9 w-9 xl:h-12 xl:w-12">
    <Thumbnail img="/images/weapon/rust.webp" alt="rust" />
  </button>
  <div class="flex w-full flex-col items-stretch">
    <Stat />
    <Stat />
    <Stat />
    <Stat />
  </div>
</div>
