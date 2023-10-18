<script lang="ts">
  let playerID: string;
  let lastApiCallTimestamp: number = 0;
  let cachedData: any = null;
  const cacheTTL: number = 60000;

  async function fetchDataFromApi(playerId: string) {
    const apiUrl = `https://enka.network/api/uid/618285856`; // Replace YOUR_API_ENDPOINT with the actual API endpoint
    const apiURL = 'https://dummyjson.com/products?limit=10';

    try {
      const response = await fetch(apiUrl);
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
</script>

<div class="mb-4 flex w-full gap-2">
  <input
    bind:value={playerID}
    type="text"
    class="w-full rounded-full border border-slate-500 bg-transparent focus:ring-emerald-500"
    placeholder="Enter Player ID"
  />
  <button on:click={runEnkaImport} class="rounded-full bg-slate-600 px-4 py-1"
    >Import</button
  >
</div>
