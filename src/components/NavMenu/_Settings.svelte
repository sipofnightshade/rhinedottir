<script lang="ts">
  import { settings } from '$lib/stores/settingsStore';
</script>

<div class="flex flex-col gap-y-2 p-2">
  <h2 class="text-sm font-bold uppercase">Settings</h2>
  <div class="flex items-center justify-between text-sm">
    <p>Limit App Colors</p>
    <button
      class="flex w-[54px] rounded-full border border-slate-600 p-0.5 transition-colors duration-300 {$settings.limitedColors
        ? 'bg-slate-300'
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
</div>
