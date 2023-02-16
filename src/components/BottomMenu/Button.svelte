<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let url: string;
  export let selected = false;
  export let item: MenuItem;

  interface MenuItem {
    id: string;
    img: string;
    component: string;
  }

  const dispatch = createEventDispatcher();

  function handleClick(item: MenuItem) {
    dispatch('menuHandler', item);
  }
</script>

<button
  on:click={() => handleClick(item)}
  class="flex h-12 w-12 items-center justify-center rounded-lg"
  class:bg-anemo={selected}
>
  <img class="h-8 w-8" src="/images/ui/{url}" alt="Menu UI Icon:{url}" />
</button>
