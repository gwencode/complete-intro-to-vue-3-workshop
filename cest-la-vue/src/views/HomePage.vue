<script setup>
import { computed } from "vue";
// import { users } from '../composables/useUserStore';
import { useUserStore } from "@/stores/UserStore";

// import { changeFirstUser, changeSecondUser } from '../composables/useUserFonction';
import UserCard from '../components/UserCard.vue';

// const shortUserList = computed(() => {
//   return users.value.slice(0, 5)

// })

const userStore = useUserStore();
// Check if we already have users
if (userStore.userList.length === 0) {
  userStore.fetchUsers();
}

</script>

<template>
  <h1>Welcome to C'est La Vue</h1>
  <p>
    This is a place to manage various things: todos, users, posts, etc.<br>
    Whatever your minde desires!
  </p>
  <button @click="userStore.newChangeFirstUser">Change First User</button>
  <button @click="userStore.newChangeSecondUser">Change Second User</button>
  <UserCard
  v-for="user in userStore.shortUserList"
  :key="`user-${user.id}`"
  :user="user"
  class="user-card"
/>
</template>
