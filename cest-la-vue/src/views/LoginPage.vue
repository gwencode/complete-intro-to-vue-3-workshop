<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { users } from '@/composables/useUserStore';

const colorPreference = ref('#e6a00a')
const emailInput = ref("");
const router = useRouter();
const userLogin = ref(null);

const login = () => {
  if (emailInput.value.includes("@") && emailInput.value.length > 3) {
    console.log("Valid User");
    const userFound = users.value.find(user => user.email === emailInput.value);
    console.log(userFound)
    if (userFound != undefined) {
      router.push(`users/${userFound.id}`)
    }
    else {
      console.log("User not found")
    }
  } else {
    console.log("Invalid User");
  }
}

</script>

<template>
  <h1>Login</h1>
  <label for="email">Email</label>
  <input class="input-email" type="email" id="email" v-model="emailInput"/>
  <button class="login-button" @click="login()">Continue with email</button>
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
