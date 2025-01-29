import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuth } from "~/composables/useAuthUser";
import type { User } from "~/models/articles";

export const useAuthStore = defineStore("auth", () => {
  const { getUser: getAuthUser, isLoggedIn: isAuthLoggedIn } = useAuth();

  const user = ref<User | null | undefined>(getAuthUser());

  const setUser = (userData: User) => {
    user.value = userData;
    const authCookie = useCookie("auth", {
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === "production",
    });
    authCookie.value = JSON.stringify(userData);
  };

  const getUser = (): User | null | undefined => {
    if (!user.value) {
      const authCookie = useCookie("auth");
      user.value = authCookie.value ? JSON.parse(authCookie.value) : null;
    }
    return user.value;
  };

  const isLoggedIn = (): boolean => {
    return user.value !== null && user.value !== undefined;
  };

  const logout = async () => {
    try {
      await $fetch("/api/auth/logout", {
        method: "POST",
      });
      user.value = null;
      const authCookie = useCookie("auth");
      authCookie.value = null;
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { setUser, getUser, isLoggedIn, logout, user };
});
