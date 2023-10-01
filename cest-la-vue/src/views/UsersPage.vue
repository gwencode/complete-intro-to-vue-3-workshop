<script setup>
import UserCard from '@/components/UserCard.vue';
import { computed, defineProps, defineEmits, ref, reactive } from "vue";
// import { users } from '@/composables/useUserStore';
// import { changeFirstUser, changeSecondUser } from '@/composables/useUserFonction';
import { useUserStore } from "@/stores/UserStore";

defineProps({
  title: {
    type: String,
    default: 'Users'
  }
})

const userStore = useUserStore();
// Check if we already have users
if (userStore.userList.length === 0) {
  userStore.fetchUsers();
}

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
  <h1>{{ userStore.userList.length }} {{ title }}</h1>
  <button @click="userStore.newChangeFirstUser">Change First User</button>
  <button @click="userStore.newChangeSecondUser">Change Second User</button>
  <UserCard
    v-for="user in userStore.userList"
    :key="`user-${user.id}`"
    :user="user"
    class="user-card"
  />
</template>

<style>

</style>
