<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
<div>
  <h2>All names</h2>
  <p>
    <span v-for="(character, index) in characters" :key="`name-${index}`">
      {{ character.name }}{{ index === characters.length - 1 ? '' : ', '}}
    </span>
  </p>
</div>
</template>
