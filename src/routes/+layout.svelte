<script>
  import '../app.css';
  import Analytics from '../components/Analytics/Analytics.svelte';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Rhinedottir</title>
  <meta name="title" content="Rhinedottir" />
  <meta
    name="description"
    content="Optimize your Genshin Impact team's performance with our Combo Damage Calculator and Rotation Simulator. Visualize and enhance your strategies now!"
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
    content="Optimize your Genshin Impact team's performance with our Combo Damage Calculator and Rotation Simulator. Visualize and enhance your strategies now!"
  />
  <meta property="og:image" content="/share-screen.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://rhinedottir.com/" />
  <meta property="twitter:title" content="Rhinedottir" />
  <meta
    property="twitter:description"
    content="Optimize your Genshin Impact team's performance with our Combo Damage Calculator and Rotation Simulator. Visualize and enhance your strategies now!"
  />
  <meta property="twitter:image" content="share-screen-square.png" />

  <!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

<!-- <Analytics /> -->
<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
</style>
