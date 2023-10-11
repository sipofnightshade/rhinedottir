<script lang="ts">
  import type { LoadOutTag } from '$lib/types/loadout';

  export let role: LoadOutTag;
</script>

<div
  class="rounded-full px-3 py-1"
  class:bg-rose-600={role === 'DPS'}
  class:bg-amber-600={role === 'Sub DPS'}
  class:bg-stone-500={role === 'Shield'}
  class:bg-emerald-500={role === 'Healer'}
  class:bg-violet-600={role === 'Support'}
>
  <span class="text-sm">{role}</span>
</div>
