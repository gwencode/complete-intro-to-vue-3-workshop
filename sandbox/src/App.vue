<script>
  export default {
    data() {
      return {
        message: "Hello it works!",
        counterTitle: "Counter Standard",
        items: [
            { name: "Item 1", list:  [1, 2, 3] },
            { name: "Item 2", list:  [4, 5, 6] },
            { name: "Item 3", list:  [7, 8, 9] }
          ],
        count: 10,
        incrementAmount: 8
        }
      },
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
          // console.log(newAmount);
          // console.log(event);
          this.count += this.optimizedIncrementAmount
      },
      // watch: {
      //   count(newValue) {
      //     if (newValue > 20) {
      //       this.counterTitle += ' Very Long'
      //     }
      //   }
      // }
    }
  }
</script>

<template>
  <h1> {{ displayTitle }} </h1>
  <p> {{ count }} </p>
  <button @click="incrementCount(incrementAmount, $event)">Increment count</button>

  <div style="margin-top: 16px">
    <label for="incrementAmount">Increment by:</label>
    <input type="number" v-model="incrementAmount">
  </div>

  <h3>Increment Amount: {{ incrementAmount }}</h3>
  <h3>Optimized Increment Amount: {{ optimizedIncrementAmount }}</h3>

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
