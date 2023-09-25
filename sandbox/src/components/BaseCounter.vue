<script>
import { newCount } from '../composables/countStore'

export default {
  setup() {
    return {
      newCount,
    };
  },
  data: () => ({
    count: 10,
    counterTitle: "Counter Standard",
    incrementAmount: 8
  }),
  computed: {
      displayTitle() {
        if (this.count > 20 ) {
          return 'Counter Standard - Very Long'
        } else {
          return 'Counter Standard'
        }
      },
      optimizedIncrementAmount() {
        return this.displayTitle.length * this.incrementAmount
      }
    },
    methods: {
      incrementCount(newAmount, event) {
        console.log(newAmount);
        console.log(event);
        this.count += this.optimizedIncrementAmount
        this.newCount += 10;
    }
  }
}
</script>

<template>
  <h1> {{ displayTitle }} </h1>
  <h2>New Count: {{ newCount }} </h2>
  <p> {{ count }} </p>
  <button @click="incrementCount(incrementAmount, $event)">Increment count</button>

  <div style="margin-top: 16px">
    <label for="incrementAmount">Increment by:</label>
    <input type="number" v-model="incrementAmount">
  </div>

  <h3>Increment Amount: {{ incrementAmount }}</h3>
  <h3>Optimized Increment Amount: {{ optimizedIncrementAmount }}</h3>

</template>
