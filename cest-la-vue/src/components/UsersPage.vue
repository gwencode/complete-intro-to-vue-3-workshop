<script>
import UserCard from './UserCard.vue';

export default {
  components: {
    UserCard
  },
  async setup() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    console.log(users);

    return {
      users
    }
  }
}

</script>

<template>
  <h1>Users</h1>
  <UserCard
    v-for="user in users"
    :key="`user-${user.id}`"
    :user="user"
    class="user-card"
  />
</template>

<style>

</style>
