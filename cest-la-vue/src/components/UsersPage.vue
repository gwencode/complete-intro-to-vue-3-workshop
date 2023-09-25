<script>
import UserCard from './UserCard.vue';
import { computed, ref, reactive } from "vue";

export default {
  components: {
    UserCard
  },

  async setup() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    // const users = ref(data);

    const state = reactive({
      usersState: data
    })
    // console.log(state);

    const users = computed(() => {
      return state.usersState;
    })

    // const usersComputed = computed(() => {
    //   return this.users.push( {
    //     id: 12,
    //     name: "Corentin LE BRIS",
    //     username: "coco22",
    //     email: "coco@me.com",
    //     phone: "06 00 00 00 00"
    //   });
    // })

    // console.log(usersComputed);

    return {
      users
    }
  },
  computed: {
    usersComputed() {
      this.users.push({
        id: 11,
        name: "Corentin LE BRIS",
        username: "coco22",
        email: "coco@me.com",
        phone: "06 00 00 00 00"
      });
      console.log(this.users);
      return this.users;
    }
  },
  methods: {
    changeFirstUser() {
      this.users[0] = {
        id: 1,
        name: "Gwendal LE BRIS",
        username: "gwencode",
        email: "gwen@me.com",
        phone: "06 35 22 29 54"
      };
      console.log(this.users[0]);
    }
  }
}

</script>

<template>
  <h1>Users</h1>
  <button @click="changeFirstUser">Change First User</button>
  <UserCard
    v-for="user in usersComputed"
    :key="`user-${user.id}`"
    :user="user"
    class="user-card"
  />
</template>

<style>

</style>
