import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { a as useCookie, u as useState } from './cookie-CvjNBvgO.mjs';

function useAuth() {
  const authCookie = useCookie("auth");
  const userState = useState("authUser", () => {
    return null;
  });
  const getUser = () => {
    var _a;
    if (!userState.value) {
      userState.value = (_a = authCookie.value) != null ? _a : null;
    }
    return userState.value;
  };
  const isLoggedIn = () => {
    var _a;
    if (!userState.value) {
      userState.value = (_a = authCookie.value) != null ? _a : null;
    }
    return userState.value !== null && userState.value !== undefined;
  };
  const logout = () => {
    userState.value = null;
    authCookie.value = undefined;
  };
  return {
    getUser,
    isLoggedIn,
    logout
  };
}
const useAuthStore = defineStore("auth", () => {
  useAuth();
  const authCookie = useCookie("auth");
  const user = ref(
    null
  );
  const isLoggedIn = computed(() => {
    var _a;
    if (!user.value) {
      user.value = (_a = authCookie.value) != null ? _a : null;
    }
    return user.value !== null && user.value !== undefined;
  });
  const getUser = () => {
    var _a;
    if (!user.value) {
      user.value = (_a = authCookie.value) != null ? _a : null;
    }
    return user.value;
  };
  const setUser = (userData) => {
    user.value = userData;
    authCookie.value = userData;
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

export { useAuthStore as u };
//# sourceMappingURL=auth-BLIz323i.mjs.map
