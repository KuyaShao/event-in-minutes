import { type CookieRef } from "#app";
import type { User } from "~/models/articles";

export function useAuth() {
  const authCookie: CookieRef<User | undefined> = useCookie("auth");

  const userState = useState<User | null>("authUser", () => {
    return process.server ? null : authCookie.value ?? null;
  });

  const getUser = () => {
    if (!userState.value) {
      userState.value = authCookie.value ?? null;
    }
    return userState.value;
  };

  const isLoggedIn = (): boolean => {
    if (!userState.value) {
      userState.value = authCookie.value ?? null;
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
    logout,
  };
}
