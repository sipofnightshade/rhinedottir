<script lang="ts">
  import { testData } from '$lib/helpers/convertStats';
  import { createEquipment } from '$lib/helpers/createEquipment';
  import LoadoutCreators from './LoadoutCreators.svelte';

  let playerID: number = 618285856;
  let lastApiCallTimestamp: number = 0;
  let cachedData: any = null;

  let playerBuilds: any = null;

  const cacheTTL: number = 60000;
  const headers = {
    'User-Agent': 'Rhinedottir WebApp - 0.83'
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
          console.error(error);
        });
    }
  }

  // this function should be ran with the `cachedData`
  function handleLoadoutBuilders(data: any) {
    const { playerInfo, avatarInfoList } = data;
    const loadouts = avatarInfoList.map((item: any) => {
      return createEquipment(item, playerInfo.showAvatarInfoList);
    });

    playerBuilds = loadouts;
  }
</script>

<div class="mb-4">
  <div class="flex w-full gap-2">
    <input
      bind:value={playerID}
      type="text"
      class="w-full rounded-full border border-slate-500 bg-transparent focus:ring-emerald-500"
      placeholder="Enter Player ID"
    />
    <button
      on:click={() => handleLoadoutBuilders(testData)}
      class="rounded-full bg-slate-600 px-4 py-1"
    >
      Import
    </button>
  </div>
  {#if playerBuilds}
    <LoadoutCreators {playerBuilds} />
  {/if}
</div>
