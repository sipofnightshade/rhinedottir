<script lang="ts">
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import StarGroup from '../../Stars/StarGroup.svelte';
  import Filters from '../../Filters/Filters.svelte';
  import Picker from '../../Picker/Picker.svelte';
  import { CharacterData } from '$lib/data/Characters';
  import { character } from '$lib/stores/characterStore';
  import { labels } from '$lib/data/Levels';

  const filters = ['anemo', 'cryo', 'dendro', 'electro', 'geo', 'hydro', 'pyro'];

  // state
  let profileH;
  let contentH;
  let filter = '';
  let filteredData = CharacterData;

  // methods
  function handleIncrement(event: any) {
    character.increment(event.detail.groupID);
  }

  function handleDecrement(event: any) {
    character.decrement(event.detail.groupID);
  }

  function handleCharacterSelect(event: any) {
    character.setChar(event.detail.selected);
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
    ? CharacterData.filter((item) => item.vision === filter)
    : CharacterData;
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
