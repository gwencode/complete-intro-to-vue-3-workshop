<script>
import BaseCounter from './components/BaseCounter.vue'
import UserCard from './components/UserCard.vue'
import BaseButton from './components/BaseButton.vue'

export default {
  components: {
    BaseCounter,
    UserCard,
    BaseButton
  },
  data() {
    return {
      message: "Hello it works!",
      items: [
          { name: "Item 1", list:  [1, 2, 3] },
          { name: "Item 2", list:  [4, 5, 6] },
          { name: "Item 3", list:  [7, 8, 9] }
        ],
        userData: {
          name: "Gwendal",
          age: 28,
          email: "gwen@gmail.com",
          favoriteNumbers: [1, 2, 3, 4, 5]
        }
      }
    },
    computed: {
      refinedUserData() {
        return {
          name: this.userData.name,
          age: this.userData.age
        }
      }
    },
    methods: {
      changeName() {
        this.userData.name = "Charlie";
      },

      // filterObjectKeys(obj, keys) {
      //   return keys.reduce((acc, key) => {
      //     if (obj.hasOwnProperty(key)) {
      //       acc[key] = obj[key];
      //     }
      //     return acc;
      //   }, {});
      // }
    }
  }
</script>

<template>
  <!-- ENTIRE OBJECT PASSED AS PROPS -->

  <BaseButton>
    👋 Hi!
  </BaseButton>
  <br><br>
  <BaseButton />
  <br><br>
  <BaseButton left="true"></BaseButton>

  <UserCard :user="refinedUserData" @change-name="changeName"/>
  <!-- <UserCard :user="filterObjectKeys(userData, ['name', 'age'])" /> -->

  <!-- TWO PROPS WITH SIMPLE TYPE -->
  <!-- <UserCard :name="userData.name" :age="userData.age"/> -->

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
