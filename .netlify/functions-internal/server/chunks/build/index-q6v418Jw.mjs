import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$1$1, C as Card } from './Card-Bi3WOxqv.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BJyUP_QN.mjs';
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
import './vue.-sixQ7xP-BXTgS32W.mjs';
import './asyncData-L02mk2RR.mjs';

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center mt-20 px-4 md:px-0" }, _attrs))}><div class="text-center md:text-left"><h1 class="text-2xl md:text-4xl font-bold leading-[48px] md:leading-[67.2px]"> Events in Minutes Ideas </h1><p class="text-lg md:text-xl font-normal leading-6 md:leading-7 opacity-70"> Welcome to our Ideas Hub, where we share tips, trends, and inspiration for unforgettable events </p></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M3.33337 8.50122H12.6667" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 3.83453L12.6667 8.5012L8 13.1679" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/ArrowRight.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const ArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FeaturedContent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const feature = ref(null);
    const fetchFeatured = async () => {
      const response = await $fetch("/api/featured");
      return response;
    };
    const featureData = ([__temp, __restore] = withAsyncContext(() => fetchFeatured()), __temp = await __temp, __restore(), __temp);
    feature.value = featureData;
    return (_ctx, _push, _parent, _attrs) => {
      if (!feature.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-20" }, _attrs))}>No Feature</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-between" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(_sfc_main$1$1), {
          src: feature.value.img,
          alt: feature.value.title,
          width: "611",
          height: "413",
          class: "w-full md:w-[611px] md:h-[413px] mb-5 md:mb-0",
          loading: "lazy"
        }, null, _parent));
        _push(`<div class="flex flex-col justify-between w-full md:w-auto h-auto md:h-[413px] ml-0 md:ml-10 px-4 md:px-0"><p class="text-xs md:text-sm mb-4 md:mb-6 opacity-70 font-normal leading-[19.6px]">${ssrInterpolate(new Date(feature.value.date).toLocaleDateString())}</p><h1 class="text-[24px] md:text-[33px] font-medium leading-[36px] md:leading-[46.2px] mb-4 md:mb-5">${ssrInterpolate(feature.value.title)}</h1><p class="text-sm md:text-base font-normal leading-[22px] md:leading-[25.6px] opacity-70 mb-4 md:mb-6">${ssrInterpolate(feature.value.content)}</p><div class="flex justify-between items-center mt-auto"><p class="mb-3 text-xs md:text-sm">${ssrInterpolate(feature.value.category.title)}</p>`);
        _push(ssrRenderComponent(unref(__nuxt_component_0$1), {
          to: { name: "article-id", params: { id: feature.value.id } },
          class: "mt-0 md:mt-3 flex items-center space-x-2 text-sm md:text-base"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read more <span${_scopeId}>`);
              _push2(ssrRenderComponent(ArrowRight, null, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              return [
                createTextVNode(" Read more "),
                createVNode("span", null, [
                  createVNode(ArrowRight)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/post/FeaturedContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Articles",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-20 px-4 sm:px-8 lg:px-0 lg:w-full" }, _attrs))}><h3 class="text-2xl font-bold leading-[33.6px]">Popular Articles</h3>`);
      _push(ssrRenderComponent(Card, { screen: "homePage" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/post/articles/Articles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionHeader, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-q6v418Jw.mjs.map
