<script>
export default {
  props: {
    favorites: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>

<h2>Favorites characters</h2>
<p v-if="favorites.length === 0 "> These is no favorites</p>
<ul v-else>
  <li v-for="(favorite, index) in favorites" :key="`favorite-${index}`"> {{ favorite.name }} {{ favorite.viking ? "⚔" : "👑" }}  </li>
</ul>

</template>
