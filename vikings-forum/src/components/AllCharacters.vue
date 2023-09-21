<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    },
    favorites: {
      type: Array,
      required: true
    }
  },
  methods: {
    addFavorite(character) {
      this.favorites.push(character)
    }
  }
}
</script>

<template>

<h2>All characters</h2>

<div v-for="(character, index) in characters" :key="`character-${index}`">
  <h3 v-if="character.viking" style="color: red"> {{ character.name }}</h3>
  <h3 v-else style="color: blue"> {{ character.name }}</h3>
  <p> {{ character.description }} </p>
  <button @click="addFavorite(character)">Add to favorite</button>
</div>

</template>
