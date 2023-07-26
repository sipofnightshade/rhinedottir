<script lang="ts">
  // components
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import StarGroup from '../../Stars/StarGroup.svelte';
  import Filters from '../../Filters/Filters.svelte';
  import Picker from '../../Picker/Picker.svelte';

  // stores
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { combos } from '$lib/stores/comboStore';

  // data
  import { DefaultWeapons } from '$lib/data/DefaultWeapons';
  import { characterData } from '$lib/data/characters/index';
  import { labels } from '$lib/data/Levels';

  // types
  import type { SelectedWeapon } from '$lib/types/global';
  import type { SelectedCharacter } from '$lib/types/global';

  // filter data
  const filters = ['anemo', 'cryo', 'dendro', 'electro', 'geo', 'hydro', 'pyro'];

  // state
  let profileH;
  let contentH;
  let filter = '';
  let filteredData = characterData;

  let currentCharacter: SelectedCharacter;
  let previousCharacter: SelectedCharacter;

  // methods
  function handleIncrement(event: any) {
    character.increment(event.detail.groupID);
  }

  function handleDecrement(event: any) {
    character.decrement(event.detail.groupID);
  }

  function handleCharacterSelect(event: any) {
    character.setChar(event.detail.selected);
    currentCharacter = $character.selected;

    if ($character.selected.weapon !== $weapon.selected.type) {
      weapon.setWeapon(DefaultWeapons[$character.selected.weapon] as SelectedWeapon);
    }

    // Reset combos if the character has changed
    if (currentCharacter !== previousCharacter) {
      combos.reset();
    }

    // Update the previousCharacter with the currentCharacter for the next comparison
    previousCharacter = currentCharacter;
  }

  function handleFilters(event: any) {
    if (event.detail.selected === filter) {
      filter = '';
    } else {
      filter = event.detail.selected;
    }
  }

  // reactive expressions
  $: filteredData = filter
    ? characterData.filter((item) => item.vision === filter)
    : characterData;
</script>

<div class="h-full overflow-hidden" bind:clientHeight={contentH}>
  <div bind:clientHeight={profileH} class=" mb-4 grid grid-cols-3 gap-x-2 gap-y-3">
    <Thumbnail
      img="/images/character/{$character.selected.name}.webp"
      vision={$character.selected.vision}
      alt={$character.selected.fullName}
    />
    <div class="col-span-2 flex flex-col justify-end">
      <div>
        <h3 class="text-lg">{$character.selected.fullName}</h3>
        <StarGroup rating={$character.selected.rating} />
      </div>
      <div class="grid grid-cols-2 gap-x-2">
        <LevelGroup
          label="Level"
          value={labels.lvl[$character.lvl]}
          id="lvl"
          on:increment={handleIncrement}
          on:decrement={handleDecrement}
        />
        <LevelGroup
          label="Const."
          value={labels.constellation[$character.constellation]}
          id="constellation"
          on:increment={handleIncrement}
          on:decrement={handleDecrement}
        />
      </div>
    </div>
    <LevelGroup
      label="Normal"
      value={labels.atk[$character.atk]}
      id="atk"
      on:increment={handleIncrement}
      on:decrement={handleDecrement}
    />
    <LevelGroup
      label="Skill"
      value={labels.skill[$character.skill]}
      id="skill"
      on:increment={handleIncrement}
      on:decrement={handleDecrement}
    />
    <LevelGroup
      label="Burst"
      value={labels.burst[$character.burst]}
      id="burst"
      on:increment={handleIncrement}
      on:decrement={handleDecrement}
    />
  </div>
  <div class="h-full">
    <Filters selected={filter} {filters} on:filter={handleFilters} />
    <Picker
      on:selected={handleCharacterSelect}
      data={filteredData}
      type="character"
      h={contentH - profileH - 16 - 46 - 16}
    />
  </div>
</div>
