<script setup>
  import { useRoute } from "vue-router";
  const route = useRoute();
  const id = route.params.id;
</script>
<template>
  <h1>Pokemon {{ id }} </h1>
</template>
<style></style>
