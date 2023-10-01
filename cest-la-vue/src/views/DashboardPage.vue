<script setup>
  import { users } from '@/composables/useUserStore';
  import { useRoute } from "vue-router";
  const route = useRoute();
  const id = route.params.id;

  defineProps({
    title: {
      type: String,
      default: 'Users'
    }
  })

  console.log(users);

  </script>

  <template>
    <h1>Dashboard</h1>
    <!-- <UserCard
      v-for="user in users"
      :key="`user-${user.id}`"
      :user="user"
      class="user-card"
    /> -->
  </template>

  <style>

  </style>
