<script lang="ts">
  import { elementalText } from '$lib/data/Colors';
  import { character } from '$lib/stores/characterStore';
</script>

<div class="mt-4 flex flex-col items-center">
  <img class="opacity-70" src="/images/ui/UI_BtnIcon_AvatarList.png" alt="UI Team" />
  <h3 class="mt-4 font-bold {elementalText[$character.selected.vision]}">
    You have no character loadouts!
  </h3>
  <p class="mt-1 w-4/5 text-center text-sm text-slate-300">
    Import character loadouts from your account above using Enka or create your own in the
    Character Builder!
  </p>
</div>
