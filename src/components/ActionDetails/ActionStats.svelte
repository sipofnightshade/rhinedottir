<script lang="ts">
  import type { ActionValue } from '$lib/types/actions';

  export let values: ActionValue[];
</script>

<ul class="leaders list-none overflow-x-hidden p-0">
  {#each values as { scaling, coef, source } (scaling)}
    <li class="text-slate-600">
      <span class="font-bold text-pyro">{scaling} {source ? `of ${source}` : ''}</span>
      <span class="text-slate-300">{coef}</span>
    </li>
  {/each}
</ul>

<style lang="postcss">
  ul.leaders li:before {
    float: left;
    width: 0;
    white-space: nowrap;
    content: '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . ';
  }

  ul.leaders span:first-child {
    padding-right: 0.33em;
    background: theme(colors.slate.800);
  }

  ul.leaders span + span {
    float: right;
    padding-left: 0.33em;
    background: theme(colors.slate.800);
  }
</style>
