import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  console.log(authStore.isLoggedIn);
  if (process.server) return;

  if (authStore.isLoggedIn) {
    if (to.name === "login" || to.name === "register") {
      return navigateTo("/");
    }

    if (to.path.startsWith("/admin") && authStore.getUser()?.role !== "admin") {
      return navigateTo("/");
    }
  }
});
