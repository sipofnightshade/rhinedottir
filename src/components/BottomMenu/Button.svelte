<script lang="ts">
  export let url: string;
  export let selected = false;
</script>

<button
  class="flex h-12 w-12 items-center justify-center rounded-lg"
  class:bg-anemo={selected}
>
  <img class="h-8 w-8" src="/images/ui/{url}" alt="Menu UI Icon:{url}" />
</button>
