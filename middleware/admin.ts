import type { CookieRef } from "#app";
import type { User } from "~/models/articles";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState<User | undefined>("user", () => {
    const userCookie: CookieRef<User | undefined> = useCookie("auth");
    return userCookie.value;
  });

  const isAdmin = user.value?.role === "admin";

  if (to.path === "/" && (!user.value || !isAdmin)) {
    return;
  }

  if (process.server || process.client) {
    if (!user.value || !isAdmin) {
      return navigateTo("/");
    }
  }
});
