<script>
  import PokedexPage from "./views/PokedexPage.vue"
  export default {
    components: {
      PokedexPage,
    }
  }
  </script>

  <template>
    <h1>New App</h1>
    <Suspense>
      <PokedexPage region="Kante" />
      <template v-slot:fallback>Loading Pokedex data...</template>
    </Suspense>
  </template>

  <style>

  </style>
