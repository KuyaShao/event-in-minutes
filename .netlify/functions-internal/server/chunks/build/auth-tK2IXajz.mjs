import { u as useAuthStore } from './auth-BLIz323i.mjs';
import { d as defineNuxtRouteMiddleware } from './server.mjs';
import 'pinia';
import 'vue';
import './cookie-CvjNBvgO.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@prisma/client';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  console.log(authStore.isLoggedIn);
  return;
});

export { auth as default };
//# sourceMappingURL=auth-tK2IXajz.mjs.map
