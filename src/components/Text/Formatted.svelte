<script lang="ts">
  import { formatText } from '$lib/helpers/formatText';

  export let content: string;

  $: formattedText = formatText(content);
</script>

<p class="text-sm leading-relaxed {$$props.class}">
  {@html formattedText}
</p>
