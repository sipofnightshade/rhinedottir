<script lang="ts">
  import { onMount } from 'svelte';
  export let remainingTime = 30;

  let countdown = remainingTime;
  let interval: string | number | NodeJS.Timeout | undefined;

  // Reactive statement that runs whenever `remainingTime` changes
  $: {
    countdown = remainingTime;
    clearInterval(interval);
    interval = setInterval(() => {
      countdown = --countdown <= 0 ? remainingTime : countdown;
    }, 1000);
  }

  onMount(() => {
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div id="countdown">
  <div id="countdown-number">{countdown}</div>
  <svg>
    <circle
      r="10"
      cx="20"
      cy="20"
      style="stroke-width: 4px; animation: countdown {remainingTime}s linear infinite forwards;"
    />
  </svg>
</div>

<style>
  #countdown {
    margin: auto;
    margin-top: 100px;
    height: 40px;
    width: 60px;
    display: flex;
    justify-content: space-between;
  }

  #countdown-number {
    color: white;
    line-height: 40px;
  }

  svg {
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }

  svg circle {
    stroke-dasharray: 63px;
    stroke-dashoffset: 0px;
    stroke-width: 2px;
    stroke: white;
    fill: none;
  }

  @keyframes -global-countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 63px;
    }
  }
</style>
