<script>
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
</script>

<section class="relative grid h-full max-h-40 w-full grid-flow-col gap-2 xl:gap-3">
  <button
    class="h relative h-[120px] w-[120px] bg-slate-400 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
  >
    <Thumbnail img="/images/character/aether.webp" vision={'anemo'} alt="aether" />
  </button>
  <div class="grid grid-cols-3 gap-2 xl:gap-4">
    <button
      class="col-span-3 grid w-full grid-cols-3 items-center rounded-2xl bg-slate-700 p-1"
    >
      <div class="h-12 w-12 lg:h-[60px] lg:w-[60px] xl:h-16 xl:w-16">
        <Thumbnail img="/images/weapon/rust.webp" alt="rust" />
      </div>
      <div class="col-span-2 flex flex-col px-1">
        <div class="flex w-full justify-between">
          <p>90 - R1</p>
          <p>542</p>
        </div>
        <div class="flex items-center">
          <img class="h-5 w-5" src="/images/elements/crit.svg" alt="crit" />
          <span>44.8%</span>
        </div>
      </div>
    </button>
    <div class="grid grid-flow-col gap-2 lg:gap-3">
      <button
        class="h-14 w-14 bg-slate-400 lg:h-[68px] lg:w-[68px] xl:h-[72px] xl:w-[72px]"
      >
        <Thumbnail img="/images/weapon/rust.webp" alt="rust" />
      </button>
      <button
        class="h-14 w-14 bg-slate-400 lg:h-[68px] lg:w-[68px] xl:h-[72px] xl:w-[72px]"
      >
        <Thumbnail img="/images/weapon/rust.webp" alt="rust" />
      </button>
      <button
        class="h-14 w-14 bg-slate-400 lg:h-[68px] lg:w-[68px] xl:h-[72px] xl:w-[72px]"
      >
        <Thumbnail img="/images/weapon/rust.webp" alt="rust" />
      </button>
    </div>
  </div>
</section>
