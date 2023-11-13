<script lang="ts">
  import { formatText } from '$lib/helpers/formatText';

  export let content: string;

  $: formattedText = formatText(content);
</script>

<div class="text-sm leading-relaxed {$$props.class} [&>p]:p-1">
  {@html formattedText}
</div>
