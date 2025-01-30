import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useCookie } from "#app";
import { useAuth } from "~/composables/useAuthUser";
import type { User } from "~/models/articles";

export const useAuthStore = defineStore("auth", () => {
  const { getUser: getAuthUser } = useAuth();
  const authCookie = useCookie<User | null>("auth");

  // ✅ Fix: Directly use `authCookie.value` without parsing
  const user = ref<User | null>(
    process.server ? null : authCookie.value ?? getAuthUser()
  );

  const isLoggedIn = computed((): boolean => {
    if (!user.value && process.client) {
      user.value = authCookie.value ?? null;
    }
    return user.value !== null && user.value !== undefined;
  });

  const getUser = (): User | null => {
    if (!user.value) {
      user.value = authCookie.value ?? null;
    }
    return user.value;
  };

  const setUser = (userData: User) => {
    user.value = userData;
    authCookie.value = userData; // ✅ Fix: Store object directly, no JSON.stringify
  };

  const logout = async () => {
    try {
      await $fetch("/api/auth/logout", { method: "POST" });
      user.value = null;
      authCookie.value = null;
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { setUser, getUser, isLoggedIn, logout, user };
});
