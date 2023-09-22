<script>
import UserCard from './UserCard.vue';

export default {
  components: {
    UserCard
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json();
      this.users = data;
      console.log(this.users);
    }
  },
  created() {
    this.fetchUsers();
  }
}

</script>

<template>
  <h1>Users</h1>
  <UserCard
    v-cloak v-for="user in users"
    :key="`user-${user.id}`"
    :user="user"
    class="user-card"
  />
</template>

<style>
[v-cloak] {
  display: none;
}
</style>
