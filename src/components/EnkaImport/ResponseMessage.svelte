<script lang="ts">
  export let responseCode: number | null;

  function getMessage(responseCode: number | null) {
    switch (responseCode) {
      case 100:
        return 'Loading...';
      case 200:
        return 'Characters successfully imported!';
      case 400:
        return 'Wrong UID format. Please enter a valid Player ID.';
      case 404:
        return 'Player does not exist. Please check the Player ID.';
      case 424:
        return 'Game maintenance or server error. Please try again later.';
      case 429:
        return 'Rate-limited. Too many requests. Please wait and try again.';
      case 500:
        return 'General server error. Please try again later.';
      case 503:
        return 'Server error. Please try again later.';
      default:
        return 'Unexpected error occurred. Please try again later.';
    }
  }

  $: message = getMessage(responseCode);
</script>

{#if responseCode}
  <div class="mt-2 rounded py-1">
    <p
      class="text-sm"
      class:text-rd-green={responseCode === 200}
      class:text-amber-600={responseCode >= 400 && responseCode <= 500}
      class:text-red-500={responseCode >= 500 || responseCode === -1}
    >
      {message}
    </p>
  </div>
{/if}
