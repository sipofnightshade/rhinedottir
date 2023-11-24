<script lang="ts">
  import { getStatLabel } from '$lib/helpers/formatStatLabel';
  import { elementalText } from '$lib/data/Colors';

  export let values: { stat: string; value: number }[] = [];

  function formatNumber(value: number) {
    if (value === 0) return 0;
    const isPercentage = value < 3;
    return isPercentage ? `${+(value * 100).toFixed(1)}%` : value.toString();
  }

  function getColoredText(stat: string) {
    if (elementalText[stat as keyof typeof elementalText] !== undefined) {
      return elementalText[stat as keyof typeof elementalText];
    } else return '';
  }
</script>

<ul class="leaders flex list-none flex-col gap-y-1 overflow-x-hidden">
  {#each values as { stat, value } (stat)}
    <li class="font-bold text-slate-300">
      <span class={getColoredText(stat)}>{getStatLabel(stat)}</span>
      <span>{formatNumber(value)}</span>
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
