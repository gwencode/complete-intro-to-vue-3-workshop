<script>
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import UsersPage from './views/UsersPage.vue'

export default {
  components: {
    HomePage,
    LoginPage,
    UsersPage,
  },
  data() {
    return {
      currentPage: 'Home'
    }
  },
  methods: {
   showHomePage() {
     this.currentPage = 'Home'
   },
    showLoginPage() {
      this.currentPage = 'Login'
    },
    showUsersPage() {
      this.currentPage = 'Users'
    }
  }
}
</script>

<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/logo.svg" width="30"> C'est La Vue
    </span>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>

body {
  background-color: #f5f5f5;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

main {
  margin: 20px;
}

.header {
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 20px;
}

.logo {
  align-items: center;
  display: flex;
}

.logo img {
  margin-right: 10px;
}

.nav a {
  color: #333;
  margin-left: 20px;
  text-decoration: none;
}

.nav a:hover {
  text-decoration: underline;
}

h1 {
  font-size: 2rem;
}

button {
  display: block;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px 0;
  padding: 10px;
}

</style>
