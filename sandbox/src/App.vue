<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
export default {
  data: () => ({
      pokedex: [1, 2, 3],
    }),
  methods: {
    async fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      this.pokedex = data.results;
    }
  },
  created() {
    console.log('created');
    this.fetchPokemon();
    console.log(this.pokedex);
  }
}

</script>

<template>
  <h1>New App</h1>
  <button @click="fetchPokemon">Fetch Pokemon</button>
  <pre> {{ pokedex }}</pre>
</template>

<style>

</style>
