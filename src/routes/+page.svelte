<script lang="ts">
  import CombinedContainer from '../components/Container/CombinedContainer.svelte';
</script>

<svelte:head>
  <title>Rhinedottir</title>
  <meta name="description" content="Genshin Impact Calculator" />
</svelte:head>

<!-- <DesktopContainer />
<MobileContainer /> -->
<CombinedContainer />

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

  @media (min-width: 768px) {
    :global(.scrollbar)::-webkit-scrollbar {
      width: 8px;
    }

    :global(.scrollbar)::-webkit-scrollbar-track {
      border-radius: 12px;
      background-color: #e2e8f0;
      padding: 1px;
    }

    :global(.scrollbar)::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #334155;
    }

    :global(.horizontalScrollbar)::-webkit-scrollbar {
      width: 8px;
      height: 5px;
      margin-top: 10px;
    }

    :global(.horizontalScrollbar)::-webkit-scrollbar-track {
      border-radius: 12px;
      background-color: #e2e8f0;
      padding: 1px;
    }

    :global(.horizontalScrollbar)::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #334155;
    }
  }
</style>
