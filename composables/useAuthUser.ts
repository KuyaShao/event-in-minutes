import { type CookieRef } from "#app";
import type { User } from "~/models/articles";

export function useAuth() {
  const authCookie: CookieRef<User | undefined> = useCookie("auth");

  const userState = useState<User | undefined>(
    "authUser",
    () => authCookie.value
  );

  const getUser = () => {
    if (userState.value) {
      return userState.value;
    }
    return null;
  };

  const isLoggedIn = (): boolean => {
    return userState.value !== null && userState.value !== undefined;
  };

  const logout = () => {
    userState.value = undefined;
    authCookie.value = undefined;
  };

  return {
    getUser,
    isLoggedIn,
    logout,
  };
}
