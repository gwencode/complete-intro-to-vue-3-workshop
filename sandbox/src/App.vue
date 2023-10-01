<script setup>
import BaseCounter from "@/components/BaseCounter.vue";
import UserCard from "@/components/UserCard.vue";
import { newCount } from '@/composables/useCountStore';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const colorPreference = ref('#ffffff');
const countStore = newCount;
const router = useRouter();

watch(countStore, (val) => {
  if (val > 140) {
    router.push("/pokedex");
  }
});

</script>

<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/pokedex">Pokedex</router-link>
    </nav>
    <h2> {{ countStore }} </h2>
    <main>
      <router-view />
      <h2>{{ colorPreference }} </h2>
      <input type="color" v-model="colorPreference">
      <BaseCounter />
      <UserCard :user="{ name: 'Ben', age: 28 }"  />
   </main>
  </div>

</template>

<style>
html {
  background-color: papayawhip;
}

.wrapper {
  background-color: v-bind(colorPreference);
}
.button {
  border: 10px solid red !important
}

nav {
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  background-color: #d1d1d1;
  color: #fff;
}

nav a {
  color: black;
  text-decoration: none;
  margin-right: 8px;
}

main {
  padding: 1rem;
}

h1 {
  margin-top: 0;
}
</style>
