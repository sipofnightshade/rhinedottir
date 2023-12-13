<script lang="ts">
  import { settings } from '$lib/stores/settingsStore';
  import { elementalBg } from '$lib/data/Colors';
  import { character } from '$lib/stores/characterStore';
</script>

<div class="space-y-4 p-2 md:space-y-2">
  <h2 class="font-bold uppercase md:text-sm">Settings</h2>
  <div class="flex flex-col gap-y-2 md:gap-y-2">
    <div class="flex items-center justify-between md:text-sm">
      <p>Hide Rating Colors</p>
      <button
        class="flex w-[54px] rounded-full border border-slate-600 p-0.5 transition-colors duration-300 {$settings.limitedColors
          ? elementalBg[$character.selected.vision]
          : 'bg-slate-800'}"
        on:click={() => settings.switchSetting('limitedColors')}
        role="checkbox"
        aria-checked={$settings.limitedColors}
      >
        <div
          class="h-6 w-6 rounded-full bg-slate-600 transition-all ease-in"
          class:translate-x-full={$settings.limitedColors}
        />
      </button>
    </div>
    <div class="flex items-center justify-between md:text-sm">
      <p>Hide Empty Rows</p>
      <button
        class="flex w-[54px] rounded-full border border-slate-600 p-0.5 transition-colors duration-300 {$settings.hideZeroStats
          ? elementalBg[$character.selected.vision]
          : 'bg-slate-800'}"
        on:click={() => settings.switchSetting('hideZeroStats')}
        role="checkbox"
        aria-checked={$settings.hideZeroStats}
      >
        <div
          class="h-6 w-6 rounded-full bg-slate-600 transition-all ease-in"
          class:translate-x-full={$settings.hideZeroStats}
        />
      </button>
    </div>
  </div>
  <!-- Mobile settings footer -->
  <div class="my-2 h-[1px] w-full bg-slate-600 md:hidden" />

  <div class="flex justify-between gap-2 px-2 text-slate-400 md:hidden">
    <a
      href="https://discord.gg/tHKkCXmd53"
      class="transition-colors hover:text-slate-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3.5"
        fill="currentColor"
        viewBox="0 0 640 512"
      >
        <path
          d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
        />
      </svg>
    </a>
    <div class="h-3/5 w-0.5 bg-slate-400" />

    <a
      class="text-sm uppercase transition-colors hover:text-slate-300 active:text-slate-400"
      href="/privacy-policy">Privacy</a
    >
    <div class="h-3/5 w-0.5 bg-slate-400" />
    <p class="text-sm uppercase">V1.2</p>
  </div>
</div>
