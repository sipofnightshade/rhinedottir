<script lang="ts">
  import { createEquipment } from '$lib/helpers/createEquipment';
  import LoadoutCreators from './LoadoutCreators.svelte';

  let playerID: number = 618285856;
  let lastApiCallTimestamp: number = 0;
  let cachedData: any = null;

  let errorMessage: string = '';

  const cacheTTL: number = 60000;
  const headers = {
    'User-Agent': 'Rhinedottir WebApp | DEV - 0.81'
  };

  async function fetchDataFromApi(playerId: number) {
    const apiUrl = `https://enka.network/api/uid/${playerId}`; // Replace YOUR_API_ENDPOINT with the actual API endpoint

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
      console.log('Using cached data:', cachedData);
    } else {
      // If data is not in cache or expired, fetch from API and update the cache
      fetchDataFromApi(playerID)
        .then((data) => {
          cachedData = data;
          lastApiCallTimestamp = currentTime;
          console.log('Fetched data from API:', cachedData);
        })
        .catch((error) => {
          if (error.message.includes('400')) {
            errorMessage = 'Wrong UID format. Please enter a valid Player ID.';
          } else if (error.message.includes('404')) {
            errorMessage = 'Player does not exist. Please check the Player ID.';
          } else if (error.message.includes('424')) {
            errorMessage = 'Game maintenance or server error. Please try again later.';
          } else if (error.message.includes('429')) {
            errorMessage = 'Rate-limited. Too many requests. Please wait and try again.';
          } else if (error.message.includes('500')) {
            errorMessage = 'General server error. Please try again later.';
          } else if (error.message.includes('503')) {
            errorMessage = 'Server error. Please try again later.';
          } else {
            errorMessage = 'Unexpected error occurred. Please try again later.';
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

  $: playerBuilds = handleLoadoutBuilders(cachedData);
</script>

<div class="mb-4">
  <div class="flex w-full gap-2">
    <input
      bind:value={playerID}
      type="text"
      class="w-full rounded-full border border-slate-500 bg-transparent focus:ring-emerald-500"
      placeholder="Enter Player ID"
    />
    <button on:click={runEnkaImport} class="rounded-full bg-slate-600 px-4 py-1">
      Import
    </button>
  </div>
  {#if errorMessage}
    <div class="mt-2 rounded bg-red-700 px-2 py-1">
      <p class="text-sm">{errorMessage}</p>
    </div>
  {/if}
  {#if playerBuilds}
    <LoadoutCreators {playerBuilds} />
  {/if}
</div>
