<script setup>
import BaseCounter from "./components/BaseCounter.vue"
import UserCard from "./components/UserCard.vue"

</script>

<template>
  <BaseCounter />
  <UserCard :user="{ name: 'Ben', age: 28 }"  />

</template>

<style>

</style>
