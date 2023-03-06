<script setup lang="ts">import type { Pokemon } from '@/api/pokeapi';

defineProps<{pokemon: Pokemon}>()

</script>
<template>
  <div class="card" style="width: 18rem;">
  <img v-bind:src="pokemon.sprites.front_default" class="card-img-top" alt="Pokemon Sprite">
  <div class="card-body">
    <h5 class="card-title">#{{pokemon.order}} {{ pokemon.name }}</h5>
    <p class="card-text">Type</p>
    <ul><li v-for="types in pokemon.types">{{ types.type.name }}</li></ul>
  </div>
</div>
</template>
<style scoped>
</style>