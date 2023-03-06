<script setup lang="ts">
import PokemonCard from '../components/PokemonCard.vue'

import { fetchPokemonByIndex, type Pokemon } from '@/api/pokeapi';
import { onMounted, ref, type Ref } from 'vue';

const pkmn: Ref<Pokemon | undefined> = ref();

onMounted(() => {
  loadData();
});

function loadData() {
  fetchPokemonByIndex(3).then((p: Pokemon) => {
    pkmn.value = p;
  });
}
</script>

<template>
  <main>
    <PokemonCard v-if="!!pkmn" :pokemon="pkmn" />
  </main>
</template>
