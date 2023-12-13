<script lang="ts">
  export let value: number | string = '';
  export let align = 'center';
  export let col = 'col-span-2';
  export let bold = false;
  export let textColor = '';
</script>

<div
  class="flex items-center text-right {col} {textColor}"
  class:justify-end={align === 'end'}
  class:text-right={align === 'end'}
  class:justify-center={align === 'center'}
  class:justify-start={align === 'start'}
  class:font-bold={bold}
>
  {value}<slot />
</div>
