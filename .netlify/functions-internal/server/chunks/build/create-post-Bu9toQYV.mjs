import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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
  __name: "create-post",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("");
    const content = ref("");
    const img = ref("");
    const category = ref("");
    const error = ref(null);
    const success = ref(false);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center mt-20 px-4 md:px-0" }, _attrs))} data-v-8f29ee48><h1 class="text-left text-[40px] font-semibold leading-[46.88px] mb-5" data-v-8f29ee48> Create New Post </h1><form class="w-full max-w-[600px]" data-v-8f29ee48><div class="mb-4" data-v-8f29ee48><label class="block text-gray-700 text-sm font-bold mb-2" for="title" data-v-8f29ee48> Title </label><input${ssrRenderAttr("value", title.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter post title" data-v-8f29ee48></div><div class="mb-4" data-v-8f29ee48><label class="block text-gray-700 text-sm font-bold mb-2" for="content" data-v-8f29ee48> Content </label><textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" placeholder="Enter post content" data-v-8f29ee48>${ssrInterpolate(content.value)}</textarea></div><div class="mb-4" data-v-8f29ee48><label class="block text-gray-700 text-sm font-bold mb-2" for="img" data-v-8f29ee48> Image URL </label><input${ssrRenderAttr("value", img.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="img" type="text" placeholder="Enter image URL" data-v-8f29ee48></div><div class="mb-4" data-v-8f29ee48><label class="block text-gray-700 text-sm font-bold mb-2" for="category" data-v-8f29ee48> Category </label><input${ssrRenderAttr("value", category.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Enter category" data-v-8f29ee48></div><div class="flex items-center justify-between" data-v-8f29ee48><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" data-v-8f29ee48> Create Post </button></div>`);
      if (error.value) {
        _push(`<div class="text-red-600 mt-4" data-v-8f29ee48>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (success.value) {
        _push(`<div class="text-green-600 mt-4" data-v-8f29ee48> Post created successfully! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/create-post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const createPost = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f29ee48"]]);

export { createPost as default };
//# sourceMappingURL=create-post-Bu9toQYV.mjs.map
