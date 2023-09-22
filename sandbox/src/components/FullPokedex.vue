<script>

export default {
  async setup() {
    // Pure VanillaJS inside setup. Be very explicit and return
    const regionName = 'Kanto';

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    const pokedex = data.results;

    return {
      pokedex,
      regionName,
    };
  },
  created() {
    console.log(this.regionName);
    console.log(this.pokedex);
  }
}
</script>

<template>
  <h3>Pokedex of {{ this.regionName }}</h3>
  <pre> {{ this.pokedex }}</pre>
</template>
