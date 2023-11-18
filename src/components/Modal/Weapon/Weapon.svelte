<script lang="ts">
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import Filters from '../../Filters/Filters.svelte';
  import Picker from '../../Picker/Picker.svelte';
  import { WeaponData } from '$lib/data/Weapons';
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { weaponStatLabels } from '$lib/data/Stats';
  import { statValueFormatter } from '$lib/helpers/statFormatter';

  import { generateWeaponEffect } from '$lib/helpers/generateWeaponText';
  import EffectDetails from '../EffectDetails.svelte';

  // filter data
  const filters = [
    'atk%',
    'def%',
    'hp%',
    'em',
    'critrate',
    'critdmg',
    'physical',
    'energy'
  ];
  const visionClasses = {
    anemo: 'text-anemo',
    cryo: 'text-cryo',
    dendro: 'text-dendro',
    electro: 'text-electro',
    geo: 'text-geo',
    pyro: 'text-pyro',
    hydro: 'text-hydro'
  };

  // state
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
    ? WeaponData[$character.selected.weapon].filter((item) => item.specialized === filter)
    : WeaponData[$character.selected.weapon];

  $: effectDetails = generateWeaponEffect($weapon.selected, $weapon.refinement);
</script>

<div class="flex h-full flex-col gap-4 overflow-hidden">
  <div class="grid grid-cols-3 gap-x-2 gap-y-3">
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
        <div
          class="flex justify-between text-sm font-bold {visionClasses[
            $character.selected.vision
          ]}"
        >
          <span>{weaponStatLabels[$weapon.selected.specialized]}</span>
          <span>{stats}</span>
        </div>
      </div>
      <div class="mt-0.5 grid grid-cols-2 gap-x-2">
        <LevelGroup
          label="Lvl"
          value={$weapon.lvl}
          id="lvl"
          on:increment={handleIncrement}
          on:decrement={handleDecrement}
        />
        <LevelGroup
          label="Ref."
          value={$weapon.refinement}
          id="refinement"
          on:increment={handleIncrement}
          on:decrement={handleDecrement}
        />
      </div>
    </div>
    <EffectDetails>
      <span slot="title">{$weapon.selected.effectname}</span>
      <span slot="details">{effectDetails} </span>
    </EffectDetails>
  </div>

  <Filters selected={filter} {filters} on:filter={handleFilters} />
  <Picker on:selected={handleWeaponSelect} data={filteredData} type="weapon" />
</div>
