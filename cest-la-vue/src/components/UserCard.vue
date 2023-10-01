<script>
export default {
  props : {
    user : {
      type : Object,
      required : true
    }
  }
}
</script>

<template>
  <router-link :to="`/users/${user.id}`" :class="$style['link-no-deco']">
    <div :class="$style['user-card']">
      <h3>{{ user.id }}. {{ user.name }}</h3>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
    </div>
  </router-link>

</template>

<style module>

.user-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
  padding: 10px;
}

p {
    margin: 0;
}

h3 {
  margin: 0;
}

.link-no-deco {
  text-decoration: none;
  color: black;
}

</style>
