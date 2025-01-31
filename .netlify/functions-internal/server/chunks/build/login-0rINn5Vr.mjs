import { _ as __nuxt_component_0 } from './nuxt-link-2RDwFI7R.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useAuthStore } from './auth-UrsGEJj7.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'pinia';
import './cookie-DkvH8PNc.mjs';
import 'unhead';
import '@unhead/shared';
import '@prisma/client';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    useRouter();
    useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col items-center justify-center min-h-screen bg-gray-100",
        "data-testid": "login-container"
      }, _attrs))} data-v-7f1ae5fe><div class="w-full max-w-md bg-white rounded-lg shadow-md p-6" data-v-7f1ae5fe><h1 class="text-2xl font-semibold text-center text-blue-600" data-testid="login-title" data-v-7f1ae5fe> Login </h1><form method="POST" data-testid="login-form" class="mt-4 space-y-4" data-v-7f1ae5fe><div data-v-7f1ae5fe><label class="block text-gray-700" data-v-7f1ae5fe>Email</label><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="email-input" data-v-7f1ae5fe></div><div data-v-7f1ae5fe><label class="block text-gray-700" data-v-7f1ae5fe>Password</label><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Password" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="password-input" data-v-7f1ae5fe></div>`);
      if (error.value) {
        _push(`<div class="text-red-600" data-testid="error-message" data-v-7f1ae5fe>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300" data-testid="submit-button" data-v-7f1ae5fe> Login </button></form><div class="mt-4 text-center" data-v-7f1ae5fe><p class="text-sm text-gray-600" data-v-7f1ae5fe> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "text-blue-600 hover:text-blue-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Register here `);
          } else {
            return [
              createTextVNode(" Register here ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f1ae5fe"]]);

export { login as default };
//# sourceMappingURL=login-0rINn5Vr.mjs.map
