<script lang="ts">
  import Party from './Party.svelte';
  export let dialog: HTMLDialogElement;
</script>

<Party id="two" {dialog} />
