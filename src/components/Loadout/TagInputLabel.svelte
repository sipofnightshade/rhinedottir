<script lang="ts">
  export let color: string;
  export let label: string;
</script>

<label
  for={label}
  class="relative flex cursor-pointer rounded-lg border border-slate-400 p-2 focus:outline-none peer-checked:border-opacity-0 [&_p]:text-slate-500 peer-checked:[&_p]:text-white {color} transition-all"
>
  <div class="flex w-full items-center justify-between">
    <p class="font-medium" id="headlessui-label-:R5qm:">{label}</p>
  </div>
</label>
