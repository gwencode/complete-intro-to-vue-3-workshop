<script>
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import UsersPage from './components/UsersPage.vue'

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
      <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showUsersPage">Users</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
    </nav>
  </header>
  <main>
    <component :is="currentPage + 'Page'" />
  </main>
</template>

<style>

main {
  background-color: #f5f5f5;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
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

</style>
