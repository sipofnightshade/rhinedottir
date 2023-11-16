<script lang="ts">
  // types
  import type { Action, ActionBtnID, ActionButtonColor } from '$lib/types/actions';
  import type { Index_Stats } from '$lib/data/Stats';

  // components
  import ActionButton from './ActionButton.svelte';

  // other
  import { onMount } from 'svelte';
  import { character, type CurrentCharacter } from '$lib/stores/characterStore';
  import { party } from '$lib/stores/partyStore';
  import { longpress } from '$lib/actions/longpress';
  import ActionDetails from '../ActionDetails/ActionDetails.svelte';

  // props
  export let type: ActionButtonColor;
  export let data: Action;
  export let id: ActionBtnID;
  // export let currentChar: CurrentCharacter;
  // export let currentStats: Index_Stats;

  let isInitialized = false;

  const target = data.target;

  type Talents = 'atk' | 'skill' | 'burst';

  function addLevel() {
    // may need to add the coef to party as well later on
    data.values.forEach((value) => {
      const { scaling, coef } = value;

      if (target === 'self') {
        $character.lvlBonus[scaling as Talents] += coef as number;
      } else if (target === 'party') {
        $character.lvlBonus[scaling as Talents] += coef as number;

        if ($party.one) {
          $party.one.character.lvlBonus[scaling as Talents] += coef as number;
        }

        if ($party.two) {
          $party.two.character.lvlBonus[scaling as Talents] += coef as number;
        }

        if ($party.three) {
          $party.three.character.lvlBonus[scaling as Talents] += coef as number;
        }
      }
    });
  }

  function removeLevel() {
    // may need to add the coef to party as well later on
    data.values.forEach((value) => {
      const { scaling, coef } = value;

      if (target === 'self') {
        $character.lvlBonus[scaling as Talents] -= coef as number;
      } else if (target === 'party') {
        $character.lvlBonus[scaling as Talents] -= coef as number;

        if ($party.one) {
          $party.one.character.lvlBonus[scaling as Talents] -= coef as number;
        }

        if ($party.two) {
          $party.two.character.lvlBonus[scaling as Talents] -= coef as number;
        }

        if ($party.three) {
          $party.three.character.lvlBonus[scaling as Talents] -= coef as number;
        }
      }
    });
  }

  // handle longPress modal
  let dialog: HTMLDialogElement;
  const handleLongPress = () => {
    dialog.showModal();
  };

  onMount(() => {
    addLevel();
    // this return might be problematic if the state is reset when character changes
    // because then this might run after and substract values that were not added
    isInitialized = true;

    return () => {
      removeLevel();
    };
  });
</script>

<button
  on:longpress={handleLongPress}
  use:longpress={300}
  on:contextmenu={() => console.log(data.name)}
  data-testid="passive-action-button"
>
  <ActionButton {type} url={data.url} isActive />
</button>

<ActionDetails {id} {data} {type} bind:dialog />
