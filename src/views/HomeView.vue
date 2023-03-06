<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'

import { fetchPokemonByIndex, type Pokemon } from '@/api/pokeapi';
import { onMounted } from 'vue';


onMounted(() => {
  loadData();
});

function loadData() {
  fetchPokemonByIndex(3).then((pkmn: Pokemon) => console.log(pkmn));
}
</script>

<template>
  <main>
    <WelcomeItem />
    <button type="button" class="btn btn-primary">Primary</button>
  </main>
</template>
