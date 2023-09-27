<script setup>
import { ref } from 'vue';

const colorPreference = ref('#e6a00a')

</script>

<template>
  <h1>Login</h1>
  <label for="email">Email</label>
  <input class="input-email" type="email" id="email" />
  <button class="login-button">Continue with email</button>
  <p>Choose button color: {{ colorPreference }}</p>
  <input type="color" v-model="colorPreference">
</template>

<style>

label {
  display: block;
  font-size: 1rem;
  margin: 10px 0;
}

.input-email {
  display: block;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin: 10px 0;
  padding: 10px;
}

.login-button {
  background-color: v-bind(colorPreference);
}

</style>
