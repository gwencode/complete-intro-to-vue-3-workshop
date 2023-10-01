<script setup>
import UserCard from '@/components/UserCard.vue';
// import { users } from '@/composables/useUserStore';
import { useUserStore } from "@/stores/UserStore";
import { useRoute } from "vue-router";
const route = useRoute();
// const id = parseInt(route.params.id, 10);
const name = route.params.name

const userStore = useUserStore();

const userFound = userStore.userList.find(user => user.name === name);
console.log(userFound);

</script>

<template>
  <h1>Dashboard</h1>
  <h3>{{ userFound.id }}. {{ userFound.name }}</h3>
  <p>Username: {{ userFound.username }}</p>
  <p>Email: {{ userFound.email }}</p>
  <p>Phone: {{ userFound.phone }}</p>
</template>

<style>

</style>
