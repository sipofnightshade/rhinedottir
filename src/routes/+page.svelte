<script>
  import BottomBar from '../components/BottomMenu/BottomBar.svelte';
  import ActionBar from '../components/Actions/ActionBar.svelte';
  import MobileContainer from '../components/Container/MobileContainer.svelte';
</script>

<svelte:head>
  <title>Rhinedottir</title>
  <meta name="description" content="Genshin Impact Calculator" />
</svelte:head>

<MobileContainer />

<style lang="postcss">
  :global(body) {
    background-color: theme(colors.slate.800);
    font-weight: theme(fontWeight.medium);
    color: theme(textColor.slate.300);
    line-height: 1.2;
  }
</style>
