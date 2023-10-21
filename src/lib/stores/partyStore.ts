import type { SavedArtifacts, SavedCharacter, SavedWeapon } from '$lib/types/loadout';
import { writable } from 'svelte/store';
import GenshinStats from '$lib/helpers/genshinStatsAll';

// local data
import { characterData } from '$lib/data/characters';
import { WeaponData } from '$lib/data/Weapons';
import { ArtifactData } from '$lib/data/Artifacts';
import { labels } from '$lib/data/Levels';
import type { CurrentCharacter } from './characterStore';
import type { ArtifactState } from './artifactStore';
import type { CurrentWeapon } from './weaponStore';
import type { CharacterRecord, SelectedWeapon } from '$lib/types/global';
import type { Artifact } from '$lib/types/artifacts';
import type { LoadoutItem } from './loadoutsStore';
import { allStats } from '$lib/data/Stats';

type PartyMember = {
  loadoutID: string;
  character: CurrentCharacter;
  artifacts: ArtifactState;
  weapon: CurrentWeapon;
};

type Party = {
  one: PartyMember | undefined;
  two: PartyMember | undefined;
  three: PartyMember | undefined;
};

const initialState: Party = {
  one: undefined,
  two: undefined,
  three: undefined
};

function createParty() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    setPartyMember: (
      id: 'one' | 'two' | 'three',
      loadout: LoadoutItem // Fix the type here
    ) =>
      update((state) => {
        // character data
        const cName = loadout.character.selected;
        const cWeapon = loadout.character.weapon;
        const cID = loadout.character.id;
        const cLvl = loadout.character.lvl;
        // weapon data
        const wName = loadout.weapon.selected;
        const wLvl = loadout.weapon.lvl;
        // artifact data
        const flowerName = loadout.artifacts.flower.selected;
        const featherName = loadout.artifacts.feather.selected;
        const sandsName = loadout.artifacts.sands.selected;
        const gobletName = loadout.artifacts.goblet.selected;
        const circletName = loadout.artifacts.circlet.selected;

        // set character
        const character = {
          ...loadout.character,
          stats: GenshinStats.calcStatsForCharacter(cName, labels.lvlValues[cLvl]),
          selected: characterData.find((data) => data.id === cID) as CharacterRecord,
          additionalStats: { ...allStats }
        };

        // set weapon
        const weapon = {
          ...loadout.weapon,
          stats: GenshinStats.calcStatsForWeapon(wName, labels.lvlValues[wLvl]),
          selected: WeaponData[cWeapon].find(
            (data) => data.name === wName
          ) as SelectedWeapon
        };

        // set artifacts
        const flower = {
          ...loadout.artifacts.flower,
          selected: ArtifactData.find((data) => data.name === flowerName) as Artifact
        };
        const feather = {
          ...loadout.artifacts.feather,
          selected: ArtifactData.find((data) => data.name === featherName) as Artifact
        };
        const sands = {
          ...loadout.artifacts.sands,
          selected: ArtifactData.find((data) => data.name === sandsName) as Artifact
        };
        const goblet = {
          ...loadout.artifacts.goblet,
          selected: ArtifactData.find((data) => data.name === gobletName) as Artifact
        };
        const circlet = {
          ...loadout.artifacts.circlet,
          selected: ArtifactData.find((data) => data.name === circletName) as Artifact
        };

        state[id] = {
          loadoutID: loadout.id,
          character,
          weapon,
          artifacts: {
            flower,
            feather,
            sands,
            goblet,
            circlet
          }
        };

        return state;
      }),
    removePartyMember: (id: 'one' | 'two' | 'three') =>
      update((state) => {
        state[id] = undefined;
        console.log('removed party member:', id);
        return state;
      }),

    reset: () => set(initialState)
  };
}

export const party = createParty();
