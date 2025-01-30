<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    data-testid="login-container"
  >
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h1
        class="text-2xl font-semibold text-center text-blue-600"
        data-testid="login-title"
      >
        Login
      </h1>
      <form
        @submit.prevent="login"
        class="mt-4 space-y-4"
        data-testid="login-form"
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
        <div v-if="error" class="text-red-600" data-testid="error-message">
          {{ error }}
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          data-testid="submit-button"
        >
          Login
        </button>
      </form>

      <!-- Register Link -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
          Don't have an account?
          <NuxtLink to="/register" class="text-blue-600 hover:text-blue-800">
            Register here
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCookie } from "#app";
import { useAuthStore } from "~/stores/auth";

definePageMeta({
  middleware: "auth",
});

const email = ref("");
const password = ref("");
const error = ref<string | null>(null);
const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
  console.log("Login button clicked");

  error.value = null;

  try {
    const user = await $fetch("/api/auth/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const authCookie = useCookie("auth");
    authCookie.value = JSON.stringify(user);
    authStore.setUser(user);

    router.push({ path: "/" });
  } catch (err) {
    error.value = "Invalid email or password. Please try again.";
  }
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
