<!-- ENTIRE OBJECT PASSED AS PROPS -->

<script>
import { newCount } from '../composables/useCountStore'

export default {
  setup() {
    return {
      newCount,
    };
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  emits: ['change-name']
}

</script>

<template>
  <h1>User: {{ user.name }}</h1>
  <h2>New Count: {{ newCount }}</h2>
  <p>Age: {{ user.age }}</p>
  <button :class="$style.button" @click="$emit('change-name')">Change Name</button>
</template>

<!-- TWO PROPS WITH SIMPLE TYPE -->

<!-- <script>
export default {
  props: {
    name: {
      type: String,
      default: "John Doe"
    },
    age: {
      type: Number,
      default: 30
    }
  }
}
</script>

<template>
  <h1>User: {{ name }}</h1>
  <p>Age: {{ age }}</p>
</template> -->

<style module>
.button {
  border: 10px solid green
}
</style>
