<script lang="ts">
  //types & data
  import type { LoadoutItem } from '$lib/stores/loadoutsStore';
  // ------
  import { labels } from '$lib/data/Levels';
  import { elementalBorders } from '$lib/data/Colors';

  // components
  import RoleTag from '../Modal/Party/RoleTag.svelte';
  import LoadoutBlockImages from './LoadoutBlockImages.svelte';

  export let item: LoadoutItem;
  export let deletable = false;
  export let highlighted = false;
</script>

<div
  class="flex w-full flex-col gap-y-2.5 rounded-2xl border bg-slate-700/80 p-3 transition-all {highlighted
    ? elementalBorders[item.character.vision]
    : 'border-slate-600'}"
  class:hover:border-slate-500={!deletable && !highlighted}
  class:active:bg-slate-600={!deletable}
  class:!border-red-500={deletable}
>
  <!-- Title -->
  <h3 class="w-full text-left">{item.title}</h3>

  <!-- Tags -->
  <div class="pointer-events-none flex w-full items-center gap-2 text-sm xs:gap-4">
    <div>
      <span class="rounded-full bg-slate-800 px-2.5 py-1">
        {labels.lvlValues[item.character.lvl]}
      </span>
      <span class="rounded-full bg-slate-800 px-2.5 py-1">
        C{item.character.constellation}
      </span>
    </div>
    <div>
      <span
        class="rounded-full bg-slate-800 px-2 py-1"
        class:text-green-500={item.character.lvlBonus.atk > 0}
      >
        {item.character.atk + 1 + item.character.lvlBonus.atk}
      </span>
      <span
        class="rounded-full bg-slate-800 px-2 py-1"
        class:text-green-500={item.character.lvlBonus.skill > 0}
      >
        {item.character.skill + 1 + item.character.lvlBonus.skill}
      </span>
      <span
        class="rounded-full bg-slate-800 px-2 py-1"
        class:text-green-500={item.character.lvlBonus.burst > 0}
      >
        {item.character.burst + 1 + item.character.lvlBonus.burst}
      </span>
    </div>

    <div class="ml-auto">
      <RoleTag role={item.tag} />
    </div>
  </div>
  <!-- Images -->
  <LoadoutBlockImages {item} />
</div>
