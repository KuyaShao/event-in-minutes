import { _ as __nuxt_component_0 } from './nuxt-link-BJyUP_QN.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import './server.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import '@prisma/client';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const name = ref("");
    ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col items-center justify-center min-h-screen bg-gray-100",
        "data-testid": "register-container"
      }, _attrs))}><div class="w-full max-w-md bg-white rounded-lg shadow-md p-6"><h1 class="text-2xl font-semibold text-center text-blue-600" data-testid="register-title"> Register </h1><form class="mt-4 space-y-4" data-testid="register-form"><div><label class="block text-gray-700">Email</label><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="email-input"></div><div><label class="block text-gray-700">Password</label><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Password" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="password-input"></div><div><label class="block text-gray-700">Name</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="name-input"></div><button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300" data-testid="submit-button"> Register </button></form><div class="mt-4 text-center"><p class="text-sm text-gray-600"> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-blue-600 hover:text-blue-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Login here `);
          } else {
            return [
              createTextVNode(" Login here ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=register-Ce7At0MH.mjs.map
