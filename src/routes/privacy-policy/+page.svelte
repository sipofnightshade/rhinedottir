<script>
  import Footer from '../../components/Footer/Footer.svelte';
  import FullLogo from '../../components/Logos/FullLogo.svelte';
</script>

<div class="h-screen w-screen overflow-x-hidden bg-slate-800 p-4">
  <div
    class="container mx-auto text-slate-400 [&>h2]:text-lg [&>h2]:uppercase [&>h2]:text-slate-300 [&>h3]:text-slate-300 [&>p]:leading-6"
  >
    <nav
      class="relative w-full auto-cols-fr grid-flow-col items-center justify-between rounded-2xl border border-slate-600 px-4 py-2"
    >
      <a href="/" class="flex w-full justify-center">
        <FullLogo class="pointer-events-none h-12" vision="anemo" />
      </a>

      <a
        class="absolute top-6 flex items-center gap-2 text-sm font-bold transition-colors hover:text-slate-300 active:text-slate-400"
        href="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            fill="currentColor"
          />
        </svg>
        <span>HOME</span>
      </a>
    </nav>

    <h1
      class="mb-2 mt-4 text-center text-2xl font-bold text-slate-200 underline underline-offset-2"
    >
      Privacy Policy
    </h1>

    <p class="w-ful text-center">Your privacy is important to us.</p>

    <h2 class="mb-2 mt-6 text-xl font-bold underline underline-offset-2">
      Information we collect
    </h2>

    <p>
      We use third-party services, such as Google Analytics and AdSense, on our website.
      These services collect information about your device and how you use our website.
      This information is used to improve our website and provide you with more relevant
      advertising.
    </p>

    <h3 class="mb-1 mt-3 text-base font-bold">Google Analytics</h3>

    <p>
      Google Analytics collects information such as your IP address, browser type,
      operating system, the pages you visit on our website, and the links you click. You
      can learn more about Google's privacy practices here <a
        target="_blank"
        class="underline hover:text-slate-200"
        href="https://policies.google.com/privacy?hl=en-US">HERE</a
      >.
    </p>

    <h3 class="mb-1 mt-3 text-base font-bold">AdSense</h3>

    <p>
      AdSense collects information such as your IP address, browser type, operating
      system, and the pages you visit on our website. You can learn more about AdSense's
      privacy practices <a
        target="_blank"
        class="underline hover:text-slate-200"
        href="https://support.google.com/adsense/answer/10961370?hl=en">HERE</a
      >.
    </p>

    <h3 class="mb-1 mt-3 text-base font-bold">Your choices</h3>

    <p>
      You can choose to disable cookies in your browser settings. You can also opt out of
      Google Analytics <a
        target="_blank"
        class="underline hover:text-slate-200"
        href="https://support.google.com/analytics/answer/181881?hl=en">HERE</a
      >.
    </p>

    <h2 class="mb-2 mt-4 text-xl font-bold underline underline-offset-2">
      Your GDPR Rights
    </h2>

    <p>
      We take your privacy seriously and are committed to protecting your personal data.
      We comply with the General Data Protection Regulation (GDPR), a European Union (EU)
      law that gives you certain rights over your personal data.
    </p>

    <p>
      We do not collect or store any of your personal data.All of your personal data is
      collected and stored by Google, which is the data controller for your personal data.
      We are the data processor for your personal data.
    </p>

    <h3 class="mt-4 font-bold">Under the GDPR, you have the rights to:</h3>

    <ul class="mb-3 ml-5 mt-3 flex list-disc flex-col gap-2 text-slate-400">
      <li>Access your personal data</li>
      <li>Rectify your personal data</li>
      <li>Erase your personal data</li>
      <li>Restrict processing of your personal data</li>
      <li>Data portability</li>
      <li>Object to processing of your personal data</li>
    </ul>

    <p>
      If you would like to exercise any of your GDPR rights, you can contact Google
      directly. You can also contact us and we will help you to exercise your rights.
    </p>

    <h2 class="mb-2 mt-4 text-xl font-bold underline underline-offset-2">
      Changes to this policy
    </h2>

    <p>
      We may update this privacy policy from time to time. If we make any material
      changes, we will notify you on Discord or by posting a notice on our website.
    </p>

    <h2 class="mb-2 mt-4 text-xl font-bold underline underline-offset-2">Contact us</h2>

    <p>
      If you have any questions about this privacy policy, please contact me at <a
        class="font-bold uppercase transition-colors hover:text-slate-300 active:text-slate-400"
        href="https://discord.com/users/sipofnightshade">Kite</a
      > on Discord.
    </p>
    <div class="my-8 h-[1px] bg-slate-600" />
    <Footer />
  </div>
</div>
