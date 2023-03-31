<script lang="ts">
  import MobileContainer from '../components/Container/MobileContainer.svelte';
  import DesktopContainer from '../components/Container/DesktopContainer.svelte';

  const md = '(min-width: 768px)';
  let isMd = false;

  // this is a check to ensure that code is not being run on the server
  // find an alternative to it
  function matches(query: string) {
    if (import.meta.env.SSR) {
      return false;
    }

    return window.matchMedia(query).matches;
  }

  function handleResize(e: any) {
    isMd = matches(md);
  }

  $: isMd = matches(md);
</script>

<svelte:head>
  <title>Rhinedottir</title>
  <meta name="description" content="Genshin Impact Calculator" />
</svelte:head>

<svelte:window on:resize={handleResize} />

{#if isMd}
  <DesktopContainer />
{:else}
  <MobileContainer />
{/if}

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
