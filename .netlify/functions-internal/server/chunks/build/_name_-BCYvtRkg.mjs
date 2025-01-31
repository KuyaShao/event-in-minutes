import { _ as __nuxt_component_0 } from './nuxt-link-2RDwFI7R.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useAsyncData } from './asyncData-SXA9wDP2.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import '@prisma/client';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[name]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const categoryName = Array.isArray(route.params.name) ? route.params.name[0] : route.params.name;
    const { data: category, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `category-${categoryName}`,
      async () => {
        const response = await $fetch(`/api/category/${categoryName}`);
        return response;
      }
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      console.error("Error fetching category:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center mt-20 px-4 md:px-0" }, _attrs))} data-v-033b985d><h1 class="text-left text-[40px] font-semibold leading-[46.88px] mb-5" data-v-033b985d>${ssrInterpolate((_a = unref(category)) == null ? undefined : _a.title)}</h1>`);
      if (!unref(category)) {
        _push(`<div class="text-center" data-v-033b985d>Category not found.</div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_c = (_b = unref(category)) == null ? undefined : _b.posts) == null ? undefined : _c.length) > 0) {
        _push(`<div class="space-y-4" data-v-033b985d><!--[-->`);
        ssrRenderList(unref(category).posts, (post) => {
          _push(`<div class="flex flex-col items-start" data-v-033b985d>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/article/${post.id}`,
            class: "text-lg font-semibold text-blue-600 hover:text-blue-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(post.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="text-sm text-gray-500" data-v-033b985d>${ssrInterpolate(post.date)}</p><p class="text-sm mt-2" data-v-033b985d>${ssrInterpolate(post.content)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/categories/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _name_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-033b985d"]]);

export { _name_ as default };
//# sourceMappingURL=_name_-BCYvtRkg.mjs.map
