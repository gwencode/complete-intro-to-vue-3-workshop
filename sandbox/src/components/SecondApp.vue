<script>
  import FullPokedex from "./components/FullPokedex.vue"
  export default {
    components: {
      FullPokedex,
    }
  }
  </script>

  <template>
    <h1>New App</h1>
    <Suspense>
      <FullPokedex region="Kante" />
      <template v-slot:fallback>Loading Pokedex data...</template>
    </Suspense>
  </template>

  <style>

  </style>
