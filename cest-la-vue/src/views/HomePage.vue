<script setup>
import { computed } from "vue";
import { users } from '../composables/useUserStore';
import { UsersStore } from "@/stores/UsersStore";

import { changeFirstUser, changeSecondUser } from '../composables/useUserFonction';
import UserCard from '../components/UserCard.vue';

const shortUserList = computed(() => {
  return users.value.slice(0, 5)

})

const usersStore = UsersStore();
usersStore.fetchUsers();

const newShortUserList = computed(() => {
  return usersStore.newUsers.slice(0, 5)

})

</script>

<template>
  <h1>Welcome to C'est La Vue</h1>
  <p>
    This is a place to manage various things: todos, users, posts, etc.<br>
    Whatever your minde desires!
  </p>
  <button @click="usersStore.newChangeFirstUser">Change First User</button>
  <button @click="usersStore.newChangeSecondUser">Change Second User</button>
  <UserCard
  v-for="user in newShortUserList"
  :key="`user-${user.id}`"
  :user="user"
  class="user-card"
/>
</template>
