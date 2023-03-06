<script setup lang="ts">
import PokemonCard from '../components/PokemonCard.vue'

import { fetchPokemonByIndex, type Pokemon } from '@/api/pokeapi';
import { onMounted, ref, type Ref } from 'vue';

const pkmn: Ref<Pokemon | undefined> = ref();
const pkmnMaxIndex = 1008;

onMounted(() => {
  loadData(getRandomPokemonIndex());
});

function getRandomPokemonIndex(): number {
  return Math.floor(Math.random() * (pkmnMaxIndex + 1));
}

function loadData(index: number) {
  fetchPokemonByIndex(index).then((p: Pokemon) => {
    pkmn.value = p;
  });
}
</script>

<template>
  <main>
    <PokemonCard v-if="!!pkmn" :pokemon="pkmn" />
  </main>
</template>
