<script lang="ts">
  import { getStatLabel } from '$lib/helpers/formatStatLabel';
  import { elementalText } from '$lib/data/Colors';

  export let values: { scaling: string; coef: number }[] = [];

  function formatNumber(coef: number) {
    if (coef === 0) return 0;
    const isPercentage = coef < 3;
    return isPercentage ? `${+(coef * 100).toFixed(1)}%` : coef.toFixed(0);
  }

  function getColoredText(scaling: string) {
    if (elementalText[scaling as keyof typeof elementalText] !== undefined) {
      return elementalText[scaling as keyof typeof elementalText];
    } else return '';
  }
</script>

{#if values.length > 0}
  <section>
    <ul class="leaders flex list-none flex-col gap-y-1.5 overflow-x-hidden">
      {#each values as { scaling, coef } (scaling)}
        <li class=" text-slate-300">
          <span class={getColoredText(scaling)}>{getStatLabel(scaling)}</span>
          <span class="font-bold">{formatNumber(coef)}</span>
        </li>
      {/each}
    </ul>
  </section>
{/if}

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
