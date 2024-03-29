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

<div class="flex h-full flex-col gap-1 overflow-hidden">
  <div class="mb-4 grid grid-cols-3 gap-x-2 gap-y-3">
    <Thumbnail
      img="https://enka.network/ui/{$weapon.selected.url}.png"
      alt={$weapon.selected.fullName}
      rating={$weapon.selected.rating}
    />
    <div class="col-span-2 flex flex-col justify-end">
      <div>
        <div class="flex items-end justify-between text-base font-bold xs:text-xl">
          <h2>{$weapon.selected.fullName}</h2>
          <h2 class="ml-2">
            {$weapon.stats?.attack.toFixed(0)}
          </h2>
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
      <div class="mt-0.5 hidden grid-cols-2 gap-x-2 xs-375:grid">
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
    <div class="col-span-3 grid w-full grid-cols-2 gap-x-2 xs-375:hidden">
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
    <EffectDetails>
      <span slot="title">{$weapon.selected.effectname}</span>
      <span slot="details">{effectDetails} </span>
    </EffectDetails>
  </div>

  <Filters selected={filter} {filters} on:filter={handleFilters} />
  <Picker on:selected={handleWeaponSelect} data={filteredData} type="weapon" />
</div>
