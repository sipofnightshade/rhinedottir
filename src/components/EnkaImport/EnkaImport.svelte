<script lang="ts">
  import { createEquipment } from '$lib/helpers/createEquipment';
  import LoadoutCreators from './LoadoutCreators.svelte';
  import ResponseMessage from './ResponseMessage.svelte';

  let playerID: number;
  let lastApiCallTimestamp: number = 0;
  let cachedData: any = null;

  let responseCode: number | null;

  const cacheTTL: number = 60000;
  const headers = {
    'User-Agent': 'Rhinedottir Web'
  };

  async function fetchDataFromApi(playerId: number) {
    const apiUrl = `https://rhinedottir-proxy.gregorymcmillan96.workers.dev/${playerId}`;
    responseCode = 100;

    try {
      const response = await fetch(apiUrl, { headers });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`API request failed with status: ${response.status}`);
      }
    } catch (error: any) {
      throw new Error(`Error fetching data from API: ${error.message}`);
    }
  }

  async function runEnkaImport() {
    const currentTime = Date.now();

    // Check if the data is present in the cache and if it's within the TTL
    if (cachedData && currentTime - lastApiCallTimestamp < cacheTTL) {
      // If data is in cache and within TTL, use cached data
    } else {
      // If data is not in cache or expired, fetch from API and update the cache
      fetchDataFromApi(playerID)
        .then((data) => {
          cachedData = data;
          lastApiCallTimestamp = currentTime;
          // Update response message based on success
          responseCode = 200;
        })
        .catch((error) => {
          if (error.message.includes('400')) {
            responseCode = 400;
          } else if (error.message.includes('404')) {
            responseCode = 404;
          } else if (error.message.includes('424')) {
            responseCode = 424;
          } else if (error.message.includes('429')) {
            responseCode = 429;
          } else if (error.message.includes('500')) {
            responseCode = 500;
          } else if (error.message.includes('503')) {
            responseCode = 503;
          } else {
            responseCode = -1; // An unexpected error code
          }
        });
    }
  }

  // this function should be ran with the `cachedData`
  function handleLoadoutBuilders(data: any) {
    if (!data) return null;
    const { playerInfo, avatarInfoList } = data;
    const loadouts = avatarInfoList.map((item: any) => {
      return createEquipment(item, playerInfo.showAvatarInfoList);
    });

    return loadouts;
  }

  $: playerBuilds = handleLoadoutBuilders(cachedData) ?? [];
</script>

<div>
  <!-- INPUT & BUTTON -->
  <div class="flex w-full gap-2">
    <input
      bind:value={playerID}
      type="text"
      class="h-10 w-full rounded-md border border-slate-600 bg-slate-800 p-2 focus:border-slate-400 focus:ring-slate-300"
      placeholder="Enter Player ID"
    />
    <button
      on:click={runEnkaImport}
      class="h-10 rounded-lg border border-slate-600 bg-slate-700 px-3 transition-colors hover:border-slate-500 active:bg-slate-600"
    >
      Import
    </button>
  </div>
  <!-- RESPONSE MESSAGE -->
  <ResponseMessage {responseCode} />

  <!-- CREATE LOADOUT BUTTONS -->
  <LoadoutCreators {playerBuilds} />

  <!-- Divider -->
  <div class="mt-4 h-[1px] w-full bg-slate-600" />
</div>
