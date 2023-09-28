<script lang="ts">
  export let title: string;
</script>

<div class="mb-2 ml-0.5 flex items-center gap-1.5 stroke-slate-400 p-0.5">
  <svg viewBox="0 0 14 14" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
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
  <h3
    class="w-full min-w-[120px] items-center text-slate-400 underline-offset-2 hover:underline"
    contenteditable="true"
    bind:textContent={title}
  />
</div>
