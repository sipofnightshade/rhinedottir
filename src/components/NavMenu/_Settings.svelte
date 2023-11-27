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
</div>
