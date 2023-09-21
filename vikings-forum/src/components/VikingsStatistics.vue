<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  // data: () => {

  // },
  computed: {
    vikingsCount() {
      return this.characters.filter(character => character.viking).length;
    },
    nonVikingsCount() {
      return this.characters.filter(character => !character.viking).length;
    }
  },
}
</script>

<template>
  <h2>Statistics</h2>
  <p>There are {{ vikingsCount }} vikings and {{ nonVikingsCount }} non vikings.</p>

</template>
