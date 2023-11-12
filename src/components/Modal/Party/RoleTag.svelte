<script lang="ts">
  import type { LoadOutTag } from '$lib/types/loadout';

  export let role: LoadOutTag;
</script>

<div
  class="rounded-full px-2 py-0.5"
  class:bg-rose-600={role === 'DPS'}
  class:bg-amber-600={role === 'Sub DPS'}
  class:bg-stone-500={role === 'Shield'}
  class:bg-green-600={role === 'Healer'}
  class:bg-violet-600={role === 'Support'}
>
  <span class="text-xs uppercase text-slate-200">{role}</span>
</div>
