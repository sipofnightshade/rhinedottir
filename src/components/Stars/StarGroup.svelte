<script lang="ts">
  export let rating: 5 | 4 | 3 | 1 = 1;
  const ratingClasses = {
    5: [
      'text-yellow-500',
      'text-yellow-500',
      'text-yellow-500',
      'text-yellow-500',
      'text-yellow-500'
    ],
    4: [
      'text-purple-500',
      'text-purple-500',
      'text-purple-500',
      'text-purple-500',
      'text-slate-500'
    ],
    3: [
      'text-cyan-400',
      'text-cyan-400',
      'text-cyan-400',
      'text-slate-500',
      'text-slate-500'
    ],
    1: [
      'text-slate-500',
      'text-slate-500',
      'text-slate-500',
      'text-slate-500',
      'text-slate-500'
    ]
  };
</script>

<div class="flex p-0.5">
  {#each ratingClasses[rating] as item}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-4 w-4 fill-current {item}"
      class:text-yellow-500={rating == 5}
      class:text-purple-600={rating == 4}
      class:text-cyan-400={rating == 3}
    >
      <path
        d="M9.24 1.34a.8.8 0 0 1 1.52 0l1.75 5.4c.11.33.42.55.77.55h5.67a.8.8 0 0 1 .47 1.45l-4.6 3.33a.8.8 0 0 0-.28.9l1.75 5.4a.8.8 0 0 1-1.23.9l-4.59-3.34a.8.8 0 0 0-.94 0l-4.6 3.33a.8.8 0 0 1-1.22-.9l1.75-5.4a.8.8 0 0 0-.29-.89L.57 8.74a.8.8 0 0 1 .48-1.45h5.67a.8.8 0 0 0 .77-.55l1.75-5.4Z"
      />
    </svg>
  {/each}
</div>
