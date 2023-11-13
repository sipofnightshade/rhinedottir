<script lang="ts">
  // types
  import type { ActionBtnID, Target } from '$lib/types/actions';

  // stores
  import { party } from '$lib/stores/partyStore';
  import { character } from '$lib/stores/characterStore';

  // components
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';

  export let target: Target | undefined;
  export let id: ActionBtnID;

  type TargetIDs = 'main' | 'one' | 'two' | 'three' | 'enemy';

  const idList: ActionBtnID[] = ['main', 'one', 'two', 'three'];

  function getTargets(x: Target | undefined): TargetIDs[] {
    if (!x) return [id];

    let chars: TargetIDs[] = [];

    switch (x) {
      case 'self':
        chars.push(id);
        break;
      case 'active':
        chars.push('main');
        break;
      case 'notactive':
        chars.push('one', 'two', 'three');
        break;
      case 'party':
        chars.push('main', 'one', 'two', 'three');
        break;
      case 'enemy':
        chars.push('enemy');
        break;
      case 'nearby':
      case 'halfnearby':
      case 'thirdnearby':
        for (const nearby of idList) {
          if (id !== nearby) {
            chars.push(nearby);
          }
        }
        break;
      default:
        throw new Error(`Unexpected target: ${x}`);
    }

    return chars;
  }

  $: characters = {
    main: $character.selected,
    one: $party.one?.character.selected,
    two: $party.two?.character.selected,
    three: $party.three?.character.selected
  };

  $: targetCharacters = getTargets(target);
</script>

<div class="flex h-9 items-center justify-between rounded bg-slate-900 px-2 py-1.5">
  <h4 class="text-sm">Target</h4>
  <div class="grid grid-flow-col gap-1">
    {#each targetCharacters as id}
      {#if id === 'enemy'}
        <Thumbnail
          alt="hilichurl"
          img="/images/ui/hilichurl.svg"
          classes="h-7 p-0.5 pointer-events-none"
          hasBG={false}
        />
      {:else if characters[id]}
        <Thumbnail
          img="/images/character/{characters[id]?.name}.webp"
          vision={characters[id]?.vision}
          alt={characters[id]?.fullName || 'target'}
          classes="h-7 !rounded-full overflow-hidden"
        />
      {/if}
    {/each}
  </div>
</div>
