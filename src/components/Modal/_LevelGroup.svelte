<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  // props
  export let label: string;
  export let value: string | number;
  export let id: string;

  const dispatch = createEventDispatcher();

  function decreaseValue() {
    dispatch('decrement', {
      groupID: id
    });
  }

  function increaseValue() {
    dispatch('increment', {
      groupID: id
    });
  }
</script>

<div>
  <div class="mb-1 flex justify-between px-0.5 text-sm">
    <span>{label}</span>
    <span>{value}</span>
  </div>
  <div class="flex h-10 overflow-hidden rounded-lg bg-slate-800">
    <button on:click={decreaseValue} class="w-full">-</button>
    <div class="h-full w-[1px] bg-slate-500" />
    <button on:click={increaseValue} class="w-full ">+</button>
  </div>
</div>
