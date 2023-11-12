<script lang="ts">
  //types
  import type { LoadoutItem } from '$lib/stores/loadoutsStore';

  // components
  import { labels } from '$lib/data/Levels';
  import RoleTag from '../Modal/Party/RoleTag.svelte';
  import LoadoutBlockImages from './LoadoutBlockImages.svelte';

  export let item: LoadoutItem;
  export let deletable = false;
</script>

<div
  class="flex w-full flex-col gap-y-2.5 rounded-2xl border border-slate-600 bg-slate-700 p-3 transition-all"
  class:opacity-50={deletable}
  class:hover:bg-opacity-60={!deletable}
>
  <!-- Title -->
  <h3 class="w-full text-left">{item.title}</h3>

  <!-- Tags -->
  <div class="pointer-events-none flex w-full items-center text-sm">
    <div class="mr-4">
      <span class="rounded-full bg-slate-800 px-2.5 py-1">
        {labels.lvl[item.character.lvl]}
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
