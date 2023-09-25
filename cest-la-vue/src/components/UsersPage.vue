<script setup>
import UserCard from './UserCard.vue';
import { computed, defineProps, defineEmits, ref, reactive } from "vue";

defineProps({
  title: {
    type: String,
    default: 'Users'
  }
})

const emits = defineEmits(['change-first-user']);

const state = reactive({
  userList: []
})

const response = await fetch("https://jsonplaceholder.typicode.com/users")
const data = await response.json();
// const users = ref(data);
state.userList = data;

const users = computed(() => {
  return state.userList;
})

const usersComputed = () => {
  users.value.push({
    id: 11,
    name: "Corentin LE BRIS",
    username: "coco22",
    email: "coco@me.com",
    phone: "06 00 00 00 00"
  });
  return users.value;
}
usersComputed();

const changeFirstUser = () => {
  users.value[0] = {
    id: 1,
    name: "Gwendal LE BRIS",
    username: "gwencode",
    email: "gwen@me.com",
    phone: "06 35 22 29 54"
  };
  emits('change-first-user')
}

</script>

<template>
  <h1>{{ title }}</h1>
  <button @click="changeFirstUser">Change First User</button>
  <UserCard
    v-for="user in users"
    :key="`user-${user.id}`"
    :user="user"
    class="user-card"
  />
</template>

<style>

</style>
