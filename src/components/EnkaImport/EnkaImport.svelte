<script lang="ts">
  import { createEquipment } from '$lib/helpers/createEquipment';
  import LoadoutCreators from './LoadoutCreators.svelte';
  import ResponseMessage from './ResponseMessage.svelte';

  let playerID: number;
  let lastApiCallTimestamp: number = 0;
  let cachedData: any = null;

  let responseMsg = 'No Imported Characters';

  const cacheTTL: number = 60000;
  const headers = {
    'User-Agent': 'Rhinedottir Web'
  };

  async function fetchDataFromApi(playerId: number) {
    const apiUrl = `https://rhinedottir-proxy.gregorymcmillan96.workers.dev/${playerId}`;

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

  function runEnkaImport() {
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
        })
        .catch((error) => {
          if (error.message.includes('400')) {
            responseMsg = 'Wrong UID format. Please enter a valid Player ID.';
          } else if (error.message.includes('404')) {
            responseMsg = 'Player does not exist. Please check the Player ID.';
          } else if (error.message.includes('424')) {
            responseMsg = 'Game maintenance or server error. Please try again later.';
          } else if (error.message.includes('429')) {
            responseMsg = 'Rate-limited. Too many requests. Please wait and try again.';
          } else if (error.message.includes('500')) {
            responseMsg = 'General server error. Please try again later.';
          } else if (error.message.includes('503')) {
            responseMsg = 'Server error. Please try again later.';
          } else {
            responseMsg = 'Unexpected error occurred. Please try again later.';
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
      class="h-9 w-full rounded-md border border-slate-600 bg-slate-800 p-2 focus:border-slate-400 focus:ring-slate-300 md:h-10"
      placeholder="Enter Player ID"
    />
    <button
      on:click={runEnkaImport}
      class="h-9 rounded-lg border border-slate-600 bg-slate-700 px-3 transition-colors hover:border-slate-500 active:bg-slate-600 md:h-10"
    >
      Import
    </button>
  </div>
  <!-- RESPONSE MESSAGE -->
  <ResponseMessage {responseMsg} />

  <!-- CREATE LOADOUT BUTTONS -->
  <LoadoutCreators {playerBuilds} />

  <!-- Divider -->
  <div class="mt-4 h-[1px] w-full bg-slate-600" />
</div>
