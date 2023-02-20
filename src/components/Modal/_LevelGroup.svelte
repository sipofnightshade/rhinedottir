<script lang="ts">
  export let label: string = 'Level';
  export let value: string = '80/90';
</script>

<div>
  <div class="mb-1 flex justify-between px-0.5 text-sm">
    <span>{label}</span>
    <span>{value}</span>
  </div>
  <div class="flex h-10 overflow-hidden rounded-lg bg-slate-800">
    <button class="w-full">-</button>
    <div class="h-full w-[1px] bg-slate-500" />
    <button class="w-full ">+</button>
  </div>
</div>
