<script setup>

import BaseButton from "./BaseButton.vue";
import { computed, defineProps, defineEmits, ref, reactive } from "vue";

const props = defineProps({
  region: {
    type: String,
  }
});

const emits = defineEmits(['change-region']);

// Pure VanillaJS inside setup. Be very explicit and return
const regionName = ref('Kanto');

const regionNameUpperCase = computed(() => {
  // console.log(regionName);
  return regionName.value.toUpperCase();
  // With ref, regionName is not a string but a RefImpl
});

const state = reactive({
  elementType: 'lightning'
});

const elementTypeUpperCase = computed(() => {
  return state.elementType.toUpperCase() + " " + props.region;
})

const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
const data = await response.json();
const pokedex = data.results;

const changeRegionName = () => {
  regionName.value = "Hoenn";
  emits("change-region");
}

// computed: {
//   regionNameLowerCase() {
//     return this.regionName.toLowerCase()
//   }
// },
// methods: {
//   changeRegionName() {
//     this.regionName = "Hoenn";
//   }
// }

</script>

<template>
  <h3>Pokedex of {{ regionName }}</h3>
  <h3>Region Name Uppercase : {{ regionNameUpperCase }}</h3>
  <!-- <h3>Region Name Lowercase : {{ regionNameLowerCase }}</h3> -->
  <button @click="changeRegionName">Change Region Name</button>
  <h3>Element Type Uppercase (with reactive => Proxy) : {{ elementTypeUpperCase }}</h3>
  <BaseButton left="true" />
  <pre> {{ pokedex }}</pre>
</template>
