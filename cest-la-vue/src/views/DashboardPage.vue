<script setup>
  import UserCard from '@/components/UserCard.vue';
  import { users } from '@/composables/useUserStore';
  import { useRoute } from "vue-router";
  const route = useRoute();
  const id = parseInt(route.params.id, 10);

  console.log(users.value);
  console.log(id);
  console.log(typeof(id));

  const userFound = users.value.find(user => user.id === id);
  console.log(userFound);

  </script>

  <template>
    <h1>Dashboard</h1>
    <UserCard
      :key="`user-${userFound.id}`"
      :user="userFound"
      class="user-card"
    />
  </template>

  <style>

  </style>
