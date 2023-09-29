<script lang="ts">
  export let title: string;
</script>

<div class="relative mx-[1px] mb-1">
  <div
    class="pointer-events-none absolute inset-y-0 left-0 flex items-center stroke-slate-500 p-1"
  >
    <svg viewBox="0 0 14 14" class="h-[17px] w-[17px]" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 11.6667H12.25"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.625 2.0417C9.85706 1.80963 10.1718 1.67926 10.5 1.67926C10.6625 1.67926 10.8234 1.71127 10.9735 1.77345C11.1237 1.83564 11.2601 1.92679 11.375 2.0417C11.4899 2.1566 11.5811 2.29302 11.6432 2.44315C11.7054 2.59328 11.7374 2.75419 11.7374 2.9167C11.7374 3.0792 11.7054 3.24011 11.6432 3.39024C11.5811 3.54038 11.4899 3.67679 11.375 3.7917L4.08333 11.0834L1.75 11.6667L2.33333 9.33336L9.625 2.0417Z"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <input
    type="text"
    bind:value={title}
    id="input-group-1"
    class="block w-full rounded-lg border border-slate-800 bg-slate-800 p-1 pl-[26px] text-slate-300 placeholder:text-slate-500 focus:border-slate-300 focus:ring-slate-300"
    placeholder="New Row"
  />
</div>
