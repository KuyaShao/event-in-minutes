import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuth } from "~/composables/useAuthUser";
import type { User } from "~/models/articles";
import { useCookie } from "#app"; // Ensure you are importing `useCookie` from Nuxt.

export const useAuthStore = defineStore("auth", () => {
  const { getUser: getAuthUser, isLoggedIn: isAuthLoggedIn } = useAuth();

  // Initialize `user` ref with the user data either from a composable or cookie
  const user = ref<User | null | undefined>(getAuthUser());

  // Store user in Pinia and in the cookie
  const setUser = (userData: User) => {
    user.value = userData;
    const authCookie = useCookie("auth", {
      maxAge: 60 * 60 * 24 * 7, // Cookie duration: 7 days
      secure: process.env.NODE_ENV === "production", // Secure cookie in production
      path: "/", // Ensure cookie is accessible to all paths
    });
    authCookie.value = JSON.stringify(userData); // Set cookie value
  };

  // Fetch user from the store or cookie if not already set
  const getUser = (): User | null | undefined => {
    if (!user.value) {
      // Check if we're on the client side and the cookie is available
      if (process.client) {
        const authCookie = useCookie("auth");
        user.value = authCookie.value ? JSON.parse(authCookie.value) : null;
      }
    }
    return user.value;
  };

  // Check if the user is logged in based on the user object being set
  const isLoggedIn = (): boolean => {
    return user.value !== null && user.value !== undefined;
  };

  // Logout functionality that clears the user and the cookie
  const logout = async () => {
    try {
      await $fetch("/api/auth/logout", {
        method: "POST", // Assuming you have a logout API
      });
      user.value = null;

      // Clear the cookie upon logout
      const authCookie = useCookie("auth");
      authCookie.value = null; // Remove cookie
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Return the methods and state from the store
  return { setUser, getUser, isLoggedIn, logout, user };
});
