// import './assets/main.css' // Comment for the workshop
import { createApp } from 'vue'
import { createRouter } from "vue-router";
import { routes } from './router.js'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  routes
})

app.use(router)
app.mount('#app')

// Alternative one-line
// createApp(App).use(router).mount(#app)
