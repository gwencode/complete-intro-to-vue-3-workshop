<script setup>
import UserCard from './UserCard.vue';
import { computed, defineProps, defineEmits, ref, reactive } from "vue";
import { users } from '../composables/useUserStore';
import { changeFirstUser, changeSecondUser } from '../composables/useUserFonction';

defineProps({
  title: {
    type: String,
    default: 'Users'
  }
})

// const emits = defineEmits(['change-first-user']);

// const changeFirstUser = () => {
//   users.value[0] = {
//     id: 1,
//     name: "Gwendal LE BRIS",
//     username: "gwencode",
//     email: "gwen@me.com",
//     phone: "06 35 22 29 54"
//   };
//   emits('change-first-user')
// }

</script>

<template>
  <h1>{{ title }}</h1>
  <button @click="changeFirstUser">Change First User</button>
  <button @click="changeSecondUser">Change Second User</button>
  <UserCard
    v-for="user in users"
    :key="`user-${user.id}`"
    :user="user"
    class="user-card"
  />
</template>

<style>

</style>
