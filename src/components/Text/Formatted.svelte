<script lang="ts">
  import Paragraph from './Paragraph.svelte';
  import { formatText } from '$lib/helpers/formatText';

  export let content: string;

  $: formattedText = formatText(content);
</script>

<Paragraph>
  {@html formattedText}
</Paragraph>
