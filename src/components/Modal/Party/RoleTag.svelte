<script lang="ts">
  import type { LoadOutTag } from '$lib/types/loadout';

  export let role: LoadOutTag;
</script>

<div
  class="flex min-h-[22px] min-w-[22px] items-center justify-center rounded-full px-2"
  class:bg-rose-600={role === 'DPS'}
  class:bg-amber-600={role === 'Sub DPS'}
  class:bg-stone-500={role === 'Shield'}
  class:bg-green-600={role === 'Healer'}
  class:bg-violet-600={role === 'Support'}
>
  <span class="hidden text-xs xs-375:block">{role}</span>
</div>
