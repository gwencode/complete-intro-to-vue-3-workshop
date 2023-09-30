<script setup>
import { computed } from "vue";
import { users } from '../composables/useUserStore';
import { changeFirstUser, changeSecondUser } from '../composables/useUserFonction';
import UserCard from '../components/UserCard.vue';

const shortUserList = computed(() => {
  return users.value.slice(0, 5)

})

</script>

<template>
  <h1>Welcome to C'est La Vue</h1>
  <p>
    This is a place to manage various things: todos, users, posts, etc.<br>
    Whatever your minde desires!
  </p>
  <button @click="changeFirstUser">Change First User</button>
  <button @click="changeSecondUser">Change Second User</button>
  <UserCard
  v-for="user in shortUserList"
  :key="`user-${user.id}`"
  :user="user"
  class="user-card"
/>
</template>
