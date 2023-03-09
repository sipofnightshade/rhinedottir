<script>
  let passive = false;
</script>

<button
  on:click|stopPropagation={() => (passive = !passive)}
  class="relative col-span-3 flex w-full justify-between rounded-md bg-slate-800 py-2 px-3"
>
  <div class="text-base">
    <span>Set Bonuses: </span>
    <span class:text-green-500={true}>(4/4)</span>
  </div>
  <span class="text-base">></span>

  {#if passive}
    <div
      class="absolute top-9 right-0 z-10 mt-1 w-full rounded-md bg-slate-800 p-2 py-2 px-3 text-left"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error nostrum ipsa
      explicabo incidunt, inventore quod voluptatum esse molestias dolorum delectus eos
      culpa vitae. Sequi perspiciatis repellendus voluptates nobis numquam, dolor
      mollitia, quaerat aperiam error dolores fuga consequuntur velit expedita!
    </div>
  {/if}
</button>
