<script setup>
import BaseCounter from "./components/BaseCounter.vue"
import UserCard from "./components/UserCard.vue"
import { ref } from 'vue';

const colorPreference = ref('#e6a00a')

</script>

<template>
  <div class="wrapper">
    <h2>{{ colorPreference }} </h2>
    <input type="color" v-model="colorPreference">
    <BaseCounter />
    <UserCard :user="{ name: 'Ben', age: 28 }"  />
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
</style>
