<script lang="ts">
  import { page } from '$app/stores';

  // $: {
  //   if (typeof gtag !== 'undefined') {
  //     gtag('config', 'G-PW88RRJCTJ', {
  //       page_title: document.title,
  //       page_path: $page.url.pathname
  //     });
  //   }
  // }
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-PW88RRJCTJ">
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-PW88RRJCTJ');
  </script>
</svelte:head>
