<script>
  import '../app.css';
  import Analytics from '../components/Analytics/Analytics.svelte';
  import '@fontsource-variable/inter'; // installs fonts locally to improve performance
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Rhinedottir</title>
  <meta name="title" content="Rhinedottir" />
  <meta
    name="description"
    content="Genshin Impact Calculator. Rhinedottir empowers you to optimize your team's performance through advanced combo damage simulations. "
  />
  <meta
    name="keywords"
    content="Genshin Impact,Genshin Impact Calculator, Combo Calculator, Rotation Simulator, Team Optimization"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://rhinedottir.com/" />
  <meta property="og:title" content="Rhinedottir" />
  <meta
    property="og:description"
    content="Genshin Impact Calculator. Rhinedottir empowers you to optimize your team's performance through advanced combo damage simulations. "
  />
  <meta property="og:image" content="/share-screen.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://rhinedottir.com/" />
  <meta property="twitter:title" content="Rhinedottir" />
  <meta
    property="twitter:description"
    content="Genshin Impact Calculator. Rhinedottir empowers you to optimize your team's performance through advanced combo damage simulations. "
  />
  <meta property="twitter:image" content="share-screen-square.png" />

  <meta name="google-adsense-account" content="ca-pub-3936138317575261" />
</svelte:head>

<Analytics />
<slot />
