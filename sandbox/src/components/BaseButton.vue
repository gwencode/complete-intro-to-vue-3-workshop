<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <button>
    <!-- WITH NO DEFAULT :  -->
    <!-- <slot /> -->

    <!-- WITH DEFAULT :  -->
    <!-- <slot>Submit</slot> -->

    <!-- WITH IF / ELSE -->
    <slot v-if="left">Icon Left - Cancel</slot>
    <slot v-else>Submit</slot>

  </button>
</template>
