<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    data-testid="register-container"
  >
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h1
        class="text-2xl font-semibold text-center text-blue-600"
        data-testid="register-title"
      >
        Register
      </h1>
      <form
        @submit.prevent="register"
        class="mt-4 space-y-4"
        data-testid="register-form"
      >
        <div>
          <label class="block text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="email-input"
          />
        </div>
        <div>
          <label class="block text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="password-input"
          />
        </div>
        <div>
          <label class="block text-gray-700">Name</label>
          <input
            v-model="name"
            type="text"
            placeholder="Name"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="name-input"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          data-testid="submit-button"
        >
          Register
        </button>
      </form>

      <!-- Login Link -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
          Already have an account?
          <NuxtLink to="/login" class="text-blue-600 hover:text-blue-800">
            Login here
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const name = ref("");
const error = ref("");

const router = useRouter();

const register = async () => {
  error.value = "";
  try {
    await $fetch("/api/auth/register", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
        name: name.value,
      },
    });
    router.push({ path: "/login" });
  } catch (err) {
    error.value = "An error occurred during registration.";
    console.error(err);
  }
};

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
