<script>
import BaseCounter from './components/BaseCounter.vue'

export default {
  components: {
    BaseCounter
  },
  data() {
    return {
      message: "Hello it works!",
      items: [
          { name: "Item 1", list:  [1, 2, 3] },
          { name: "Item 2", list:  [4, 5, 6] },
          { name: "Item 3", list:  [7, 8, 9] }
        ],
      }
    }
  }
</script>

<template>
  <BaseCounter />
  <hr />

  <h1>Hello!</h1>
  <p v-if="message.length % 2 === 0">Even: {{ message }}</p>
  <p v-else>Odd: {{ message.toUpperCase() }}</p>
  <ul v-for="(item, index) in items" :key="`item-${index}`">
    <li>{{ item.name }}</li>
    <ul>
      <li v-for="(number, index) in item.list" :key="`number-${index}`"> {{ number }}</li>
    </ul>
  </ul>

</template>
