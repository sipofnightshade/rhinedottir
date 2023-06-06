<script lang="ts">
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import Filters from '../../Filters/Filters.svelte';
  import Picker from '../../Picker/Picker.svelte';
  import { WeaponData } from '$lib/data/Weapons';
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { labels } from '$lib/data/Levels';
  import { weaponStatLabels } from '$lib/data/Stats';
  import { statValueFormatter } from '$lib/helpers/statFormatter';

  // filter data
  const filters = ['atk', 'def', 'hp', 'em', 'crit', 'physical', 'energy'];

  // state
  let profileH;
  let contentH;
  let passive = false; // adjust when passive logic added
  let filter = '';
  let filteredData = WeaponData[$character.selected.weapon];
  let stats: number | string;

  // methods
  function handleIncrement(event: any) {
    weapon.increment(event.detail.groupID);
  }

  function handleDecrement(event: any) {
    weapon.decrement(event.detail.groupID);
  }

  function handleWeaponSelect(event: any) {
    weapon.setWeapon(event.detail.selected);
  }

  function handleFilters(event: any) {
    if (event.detail.selected === filter) {
      filter = '';
    } else {
      filter = event.detail.selected;
    }
  }

  // reactive expressions
  $: stats = statValueFormatter($weapon.selected.specialized, $weapon.stats?.specialized);

  $: filteredData = filter
    ? WeaponData[$character.selected.weapon].filter((item) =>
        item.specialized.includes(filter)
      )
    : WeaponData[$character.selected.weapon];
</script>

<div class="h-full overflow-hidden" bind:clientHeight={contentH}>
  <div bind:clientHeight={profileH} class=" mb-4 grid grid-cols-3 gap-x-2 gap-y-3">
    <Thumbnail
      img="/images/weapon/{$weapon.selected.name}.webp"
      alt={$weapon.selected.fullName}
    />
    <div class="col-span-2 flex flex-col justify-end">
      <div>
        <div class="flex items-end justify-between font-bold">
          <h2>{$weapon.selected.fullName}</h2>
          <h2 class="ml-2 text-xl">{$weapon.stats?.attack.toFixed(0)}</h2>
        </div>
        <div class="flex justify-between text-sm font-bold text-anemo">
          <span>{weaponStatLabels[$weapon.selected.specialized]}</span>
          <span>{stats}</span>
        </div>
      </div>
      <div class="mt-0.5 grid grid-cols-2 gap-x-2">
        <LevelGroup
          label="Level"
          value={labels.lvl[$weapon.lvl]}
          id="lvl"
          on:increment={handleIncrement}
          on:decrement={handleDecrement}
        />
        <LevelGroup
          label="Refinement"
          value={labels.refinement[$weapon.refinement]}
          id="refinement"
          on:increment={handleIncrement}
          on:decrement={handleDecrement}
        />
      </div>
    </div>
    <button
      on:click|stopPropagation={() => (passive = !passive)}
      class="relative col-span-3 w-full rounded-md bg-slate-800 py-2 px-3"
    >
      <p class="text-left text-base">{$weapon.selected.effectname}</p>
      {#if passive}
        <div
          class="absolute top-9 right-0 z-20 mt-1 w-full rounded-md bg-slate-800 p-2 py-2 px-3 text-left"
        >
          {$weapon.selected.effect}
        </div>
      {/if}
    </button>
  </div>
  <div class="h-full">
    <Filters selected={filter} {filters} on:filter={handleFilters} />
    <Picker
      on:selected={handleWeaponSelect}
      data={filteredData}
      type="weapon"
      h={contentH - profileH - 16 - 46 - 16}
    />
  </div>
</div>
