<template>
  <div class="flex flex-col items-center mt-20 px-4 md:px-0">
    <h1 class="text-left text-[40px] font-semibold leading-[46.88px] mb-5">
      {{ category?.title }}
    </h1>

    <div v-if="!category" class="text-center">Category not found.</div>

    <!-- Display posts related to the category -->
    <div v-if="category?.posts?.length > 0" class="space-y-4">
      <div
        v-for="post in category.posts"
        :key="post.id"
        class="flex flex-col items-start"
      >
        <NuxtLink
          :to="`/article/${post.id}`"
          class="text-lg font-semibold text-blue-600 hover:text-blue-400"
        >
          {{ post.title }}
        </NuxtLink>
        <p class="text-sm text-gray-500">{{ post.date }}</p>
        <p class="text-sm mt-2">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useAsyncData } from "nuxt/app";
import type { Category } from "~/models/articles";

// Page-specific metadata
definePageMeta({
  middleware: "admin",
  asyncData: async ({ params }) => {
    const categoryName = Array.isArray(params.name)
      ? params.name[0]
      : params.name;
    const response = await $fetch<Category>(`/api/category/${categoryName}`);
    return { category: response };
  },
});

const route = useRoute();
const categoryName = Array.isArray(route.params.name)
  ? route.params.name[0]
  : route.params.name;

const { data: category, error } = await useAsyncData(
  `category-${categoryName}`,
  async () => {
    const response = await $fetch<Category>(`/api/category/${categoryName}`);
    return response;
  }
);

if (error.value) {
  console.error("Error fetching category:", error.value);
}
</script>

<style scoped>
h1,
p {
  text-align: left;
}
</style>
