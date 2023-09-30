import HomePage from "./views/HomePage.vue"
import UsersPage from "./views/UsersPage.vue"
import LoginPage from "./views/LoginPage.vue"

export const routes = [
  { path: "/", component: HomePage },
  { path: "/users", component: UsersPage },
  { path: "/login", component: LoginPage },
]
