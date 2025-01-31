import { C as Card, _ as _sfc_main$1 } from './Card-Bi3WOxqv.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useAsyncData } from './asyncData-L02mk2RR.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import './vue.-sixQ7xP-BXTgS32W.mjs';
import './nuxt-link-BJyUP_QN.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import '@prisma/client';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const articleId = route.params.id;
    const { data: article, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `article-${articleId}`,
      () => $fetch(`/api/article/${articleId}`)
    )), __temp = await __temp, __restore(), __temp);
    const loading = !article && !error;
    if (error) {
      console.error("Error fetching article:", error);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center mt-20 px-4 md:px-0" }, _attrs))} data-v-c493ed17>`);
      if (unref(loading)) {
        _push(`<div class="loading-screen" data-v-c493ed17><div class="loader" data-v-c493ed17></div><p class="text-center" data-v-c493ed17>Loading article...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(article) && !unref(error)) {
        _push(`<div class="w-full max-w-[611px] mb-5" data-v-c493ed17><h3 class="text-left text-blue-600" data-testid="category" data-v-c493ed17>${ssrInterpolate((_a = unref(article)) == null ? undefined : _a.category.name)}</h3><h1 class="text-left text-[40px] font-semibold leading-[46.88px] mt-2" data-testid="title" data-v-c493ed17>${ssrInterpolate((_b = unref(article)) == null ? undefined : _b.title)}</h1><p class="text-left text-xs font-normal mt-5" data-v-c493ed17> Written By: <span class="underline text-blue-600" data-testid="author" data-v-c493ed17>${ssrInterpolate((_c = unref(article)) == null ? undefined : _c.author.name)}</span></p><p class="text-left text-xs font-semibold" data-testid="published" data-v-c493ed17> Published: ${ssrInterpolate(((_d = unref(article)) == null ? undefined : _d.date) ? new Date(unref(article).date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }) : "Unknown")}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<div class="error-message" data-v-c493ed17> Oops! We couldn&#39;t fetch the article. Please try again later. </div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(article) && !unref(error)) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: ((_e = unref(article)) == null ? undefined : _e.img) || "/default-image.jpg",
          width: "611",
          height: "413",
          loading: "lazy",
          class: "w-full md:w-auto md:h-auto mb-5",
          "data-testid": "image"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(article) && !unref(error)) {
        _push(`<div class="w-full max-w-[621px] mb-5" data-testid="content" data-v-c493ed17><p class="text-base font-normal mt-5" data-v-c493ed17>${ssrInterpolate((_f = unref(article)) == null ? undefined : _f.content)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(article) && !unref(error)) {
        _push(`<div class="w-full mb-5" data-v-c493ed17><h1 class="text-left text-[20px] font-semibold leading-[46.88px] mt-5" data-v-c493ed17> Read More Articles </h1>`);
        _push(ssrRenderComponent(Card, { screen: "readmore" }, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c493ed17"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DoZftjIj.mjs.map
