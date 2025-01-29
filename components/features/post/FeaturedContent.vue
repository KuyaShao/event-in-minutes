<template>
  <div v-if="!feature" class="text-center mt-20">No Feature</div>
  <div
    v-else
    class="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-between"
  >
    <NuxtImg
      :src="feature.img"
      :alt="feature.title"
      width="611"
      height="413"
      class="w-full md:w-[611px] md:h-[413px] mb-5 md:mb-0"
      loading="lazy"
    />
    <div
      class="flex flex-col justify-between w-full md:w-auto h-auto md:h-[413px] ml-0 md:ml-10 px-4 md:px-0"
    >
      <p
        class="text-xs md:text-sm mb-4 md:mb-6 opacity-70 font-normal leading-[19.6px]"
      >
        {{ new Date(feature.date).toLocaleDateString() }}
      </p>

      <h1
        class="text-[24px] md:text-[33px] font-medium leading-[36px] md:leading-[46.2px] mb-4 md:mb-5"
      >
        {{ feature.title }}
      </h1>

      <p
        class="text-sm md:text-base font-normal leading-[22px] md:leading-[25.6px] opacity-70 mb-4 md:mb-6"
      >
        {{ feature.content }}
      </p>

      <div class="flex justify-between items-center mt-auto">
        <p class="mb-3 text-xs md:text-sm">{{ feature.category.title }}</p>

        <NuxtLink
          :to="{ name: 'article-id', params: { id: feature.id } }"
          class="mt-0 md:mt-3 flex items-center space-x-2 text-sm md:text-base"
        >
          Read more <span><ArrowRight /></span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NuxtImg, NuxtLink } from "#components";
import type { Article } from "~/models/articles";
import ArrowRight from "~/components/Icons/ArrowRight.vue";

const feature = ref<Article | null>(null);

const fetchFeatured = async (): Promise<Article> => {
  const response = await $fetch<Article>("/api/featured");
  return response;
};

const featureData = await fetchFeatured();
feature.value = featureData;
</script>

<style scoped></style>
