<script lang="ts">
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
</script>

<!-- <button
  class="col-span-3 grid h-full grid-cols-3 items-center rounded-2xl bg-slate-700 p-1 text-sm lg:text-base "
>
  <div class="h-12 w-12 lg:h-[60px] lg:w-[60px] xl:h-16 xl:w-16">
    <Thumbnail img="/images/weapon/rust.webp" alt="rust" />
  </div>
  <div class="flex flex-col items-center  space-y-1">
    <p>90 - R1</p>
    <div class="flex items-center justify-center">
      <img class="h-5 w-5" src="/images/elements/crit.svg" alt="crit" />
      <span>44.8%</span>
    </div>
  </div>
  <div class="flex flex-col items-center  space-y-1">
    <p>ATK</p>
    <p class="font-bold">542</p>
  </div>
  <div class="flex items-center" />
</button> -->

<button
  class="col-span-3 flex h-full w-full items-end  rounded-2xl bg-slate-700 p-1 text-sm lg:text-base "
>
  <div class="h-12 w-12 lg:h-[60px] lg:w-[60px] xl:h-16 xl:w-16">
    <Thumbnail img="/images/weapon/rust.webp" alt="rust" />
  </div>
  <div class="flex flex-1 flex-col items-center space-y-1 px-1">
    <div class="flex w-full justify-between px-0.5 xl:text-lg">
      <span>Base ATK</span>
      <strong>542</strong>
    </div>
    <div
      class="flex w-full items-center justify-between rounded-full bg-slate-800 px-2 py-1"
    >
      <img
        class="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
        src="/images/elements/crit.svg"
        alt="crit"
      />
      <span class="text-xs lg:text-sm xl:text-base">44.8%</span>
    </div>
  </div>
</button>
