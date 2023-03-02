import { writable } from 'svelte/store';
// import { labels } from '$lib/data/Levels';
import { getArtifactStat } from '$lib/helpers/getArtifactStat';
import type { SelectedArtifact, ArtifactType, ArtifactStats } from '$lib/types/global';

type Artifact = {
  selected: SelectedArtifact;
  lvl: number;
  isFiveStar: boolean;
  mainStat: { stat: ArtifactStats; value: number };
  substats: { stat: string; value: number }[];
};

interface ArtifactState {
  flower: Artifact;
  feather: Artifact;
  sands: Artifact;
  goblet: Artifact;
  circlet: Artifact;
}

const initialState: ArtifactState = {
  flower: {
    selected: {
      name: 'none',
      fullName: 'None',
      rating: []
    },
    lvl: 0,
    isFiveStar: false,
    mainStat: {
      stat: 'hp',
      value: 0
    },
    substats: [
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 }
    ]
  },
  feather: {
    selected: {
      name: 'none',
      fullName: 'None',
      rating: []
    },
    lvl: 0,
    isFiveStar: false,
    mainStat: {
      stat: 'atk',
      value: 0
    },
    substats: [
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 }
    ]
  },
  sands: {
    selected: {
      name: 'none',
      fullName: 'None',
      rating: []
    },
    lvl: 0,
    isFiveStar: false,
    mainStat: {
      stat: 'atk%',
      value: 0
    },
    substats: [
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 }
    ]
  },
  goblet: {
    selected: {
      name: 'none',
      fullName: 'None',
      rating: []
    },
    lvl: 0,
    isFiveStar: false,
    mainStat: {
      stat: 'anemo',
      value: 0
    },
    substats: [
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 }
    ]
  },
  circlet: {
    selected: {
      name: 'none',
      fullName: 'None',
      rating: []
    },
    lvl: 0,
    isFiveStar: false,
    mainStat: {
      stat: 'critrate',
      value: 0
    },
    substats: [
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 },
      { stat: '', value: 0 }
    ]
  }
};

function createArtifact() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    setArtifact: (relic: ArtifactType, selected: SelectedArtifact) =>
      update((state) => {
        state[relic].selected = selected;

        // reset artifact lvl and rating
        if (selected.rating.length > 1) {
          state[relic].lvl = 20;
          state[relic].isFiveStar = true;
        } else {
          state[relic].lvl = 16;
          state[relic].isFiveStar = false;
        }

        if (selected.name === 'none') {
          state[relic].mainStat.value = 0;
        } else {
          state[relic].mainStat.value = getArtifactStat(
            state[relic].isFiveStar,
            state[relic].mainStat.stat,
            state[relic].lvl
          );
        }
        return state;
      }),

    increment: (relic: ArtifactType) =>
      update((state) => {
        if (state[relic].isFiveStar && state[relic].lvl < 20) {
          state[relic].lvl++;
        } else if (state[relic].isFiveStar === false && state[relic].lvl < 16) {
          state[relic].lvl++;
        }
        // set artifact main stat whenever lvl increases
        if (state[relic].selected.name !== 'none' && state[relic].mainStat.stat) {
          state[relic].mainStat.value = getArtifactStat(
            state[relic].isFiveStar,
            state[relic].mainStat.stat,
            state[relic].lvl
          );
        }
        return state;
      }),

    decrement: (relic: ArtifactType) =>
      update((state) => {
        if (state[relic].lvl > 0) {
          state[relic].lvl--;
        }

        // set artifact main stat whenever lvl increases
        if (state[relic].selected.name !== 'none' && state[relic].mainStat.stat) {
          state[relic].mainStat.value = getArtifactStat(
            state[relic].isFiveStar,
            state[relic].mainStat.stat,
            state[relic].lvl
          );
        }
        return state;
      }),

    setRating: (relic: ArtifactType) =>
      update((state) => {
        if (state[relic].selected.rating.length > 1) {
          state[relic].isFiveStar = !state[relic].isFiveStar;
          if (state[relic].isFiveStar) {
            state[relic].lvl = 20;
          } else {
            state[relic].lvl = 16;
          }

          if (state[relic].mainStat.stat) {
            state[relic].mainStat.value = getArtifactStat(
              state[relic].isFiveStar,
              state[relic].mainStat.stat,
              state[relic].lvl
            );
          }
        }
        return state;
      }),

    setMainStat: (relic: ArtifactType, stat: ArtifactStats) =>
      update((state) => {
        state[relic].mainStat.stat = stat;

        if (state[relic].selected.name !== 'none' && stat) {
          state[relic].mainStat.value = getArtifactStat(
            state[relic].isFiveStar,
            state[relic].mainStat.stat,
            state[relic].lvl
          );
        } else {
          state[relic].mainStat.value = 0;
        }
        return state;
      }),

    setSubstats: (relic: ArtifactType, id: 0 | 1 | 2 | 3, stat: string) =>
      update((state) => {
        state[relic].substats[id].stat = stat;
        return state;
      }),

    setInput: (relic: ArtifactType, id: 0 | 1 | 2 | 3, value: number) =>
      update((state) => {
        if (value) {
          state[relic].substats[id].value = value;
        }
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const artifact = createArtifact();
