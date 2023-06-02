<script lang="ts">
  import MobileContainer from '../components/Container/MobileContainer.svelte';
  import DesktopContainer from '../components/Container/DesktopContainer.svelte';
</script>

<svelte:head>
  <title>Rhinedottir</title>
  <meta name="description" content="Genshin Impact Calculator" />
</svelte:head>

<DesktopContainer />
<MobileContainer />

<style lang="postcss">
  :global(html) {
    height: 100%;
    width: 100%;
  }
  :global(body) {
    background-color: theme(colors.slate.800);
    font-weight: theme(fontWeight.medium);
    color: theme(textColor.slate.300);
    line-height: 1.2;
    height: 100%;
    width: 100%;
  }
</style>
