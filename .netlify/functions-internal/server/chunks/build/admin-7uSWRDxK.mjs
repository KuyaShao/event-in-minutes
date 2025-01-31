import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useState, a as useCookie } from './cookie-CvjNBvgO.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@prisma/client';
import 'vue/server-renderer';

const admin = defineNuxtRouteMiddleware((to, from) => {
  var _a;
  const user = useState("user", () => {
    const userCookie = useCookie("auth");
    return userCookie.value;
  });
  const isAdmin = ((_a = user.value) == null ? undefined : _a.role) === "admin";
  if (to.path === "/" && (!user.value || !isAdmin)) {
    return;
  }
  {
    if (!user.value || !isAdmin) {
      return navigateTo("/");
    }
  }
});

export { admin as default };
//# sourceMappingURL=admin-7uSWRDxK.mjs.map
