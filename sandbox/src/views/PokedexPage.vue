<script setup>
  // TEST PAS REUSSI
  // import { ref } from 'vue';
  // const pokemonId = ref(1);
  // console.log(pokemonId.value);
</script>
<template>
  <h1>Pokedex Page</h1>
  <div>
    <!-- TEST PAS REUSSI -->
    <!-- <input type="number" value={{ pokemonId.value }}> -->
  </div>
  <!-- <router-link :to="'/pokedex/' + pokemonId.value">Go to Pokemon {{ pokemonId }} </router-link> -->
  <router-link to='/pokedex/20'>Go to Pokemon </router-link>
</template>
<style></style>
