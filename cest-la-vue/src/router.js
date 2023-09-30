import HomePage from "./views/HomePage.vue"
// import UsersPage from "./views/UsersPage.vue"
// import LoginPage from "./views/LoginPage.vue"

export const routes = [
  { path: "/", component: HomePage },
  { path: "/users", component: () => import('@/views/UsersPage.vue') },
  { path: "/login", component: import('@/views/LoginPage.vue') },
]
