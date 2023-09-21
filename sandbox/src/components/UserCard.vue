<!-- ENTIRE OBJECT PASSED AS PROPS -->

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <h1>User: {{ user.name }}</h1>
  <p>Age: {{ user.age }}</p>
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
