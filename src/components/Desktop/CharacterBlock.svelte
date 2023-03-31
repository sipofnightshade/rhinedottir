<script>
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import WeaponBlock from './WeaponBlock.svelte';
</script>

<section class="relative grid h-full max-h-40 w-full grid-flow-col gap-2 xl:gap-3">
  <button
    class="h relative h-[120px] w-[120px] bg-slate-400 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
  >
    <Thumbnail img="/images/character/aether.webp" vision={'anemo'} alt="aether" />
  </button>
  <div class="grid grid-cols-3 gap-2 xl:gap-4">
    <WeaponBlock />
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
