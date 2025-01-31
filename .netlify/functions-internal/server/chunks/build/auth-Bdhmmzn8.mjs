import { u as useAuthStore } from './auth-UrsGEJj7.mjs';
import { e as defineNuxtRouteMiddleware } from './server.mjs';
import 'pinia';
import 'vue';
import './cookie-DkvH8PNc.mjs';
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
//# sourceMappingURL=auth-Bdhmmzn8.mjs.map
