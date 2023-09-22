<script>
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json();
      this.users = data
    }
  }
}

</script>

<template>
  <h1>Users</h1>
  <pre> {{ users }} </pre>
  <button @click="fetchUsers">Fetch Users</button>

</template>
