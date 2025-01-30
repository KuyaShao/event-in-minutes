<template>
  <div
    v-if="isLoading"
    class="flex flex-wrap justify-between w-full mt-5 lg:mx-0"
  >
    <div
      class="flex flex-col mb-10 w-full md:w-1/2 lg:w-1/3 lg:pr-3 animate-pulse"
      v-for="n in 6"
      :key="n"
    >
      <div class="bg-gray-300 h-64 rounded-lg mb-3"></div>
      <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
      <div class="h-5 bg-gray-300 w-3/4 mb-3"></div>
      <div class="h-3 bg-gray-300 w-2/3"></div>
    </div>
  </div>

  <div v-else>
    <div
      v-if="articleStore.displayedArticles.length > 0"
      class="flex flex-wrap justify-between w-full mt-5 lg:mx-0"
    >
      <div
        class="flex flex-col mb-10 w-full md:w-1/2 lg:w-1/3 lg:pr-3"
        v-for="article in articleStore.displayedArticles"
        :key="article.id"
      >
        <NuxtImg
          :src="article.img"
          alt="featured 1"
          width="400"
          height="280"
          loading="lazy"
        />
        <p class="font-xs font-normal leading-[19.2px] opacity-70 mt-3">
          {{ new Date(article.date).toLocaleDateString() }}
        </p>
        <NuxtLink
          :to="{ name: 'article-id', params: { id: article.id } }"
          class="text-base font-semibold leading-[25.6px] mt-5 cursor-pointer hover:text-blue-400"
        >
          {{ article.title }}
        </NuxtLink>
        <p
          v-if="screen === 'homePage'"
          class="text-sm font-normal leading-[19.6px] opacity-70 mt-5"
        >
          {{ article.content }}
        </p>
      </div>
    </div>

    <div v-else>
      <p>No articles available.</p>
    </div>

    <button
      @click="articleStore.showMore"
      class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 focus:outline-none hover:border-gray-600"
    >
      View More
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useArticleStore } from "~/stores/articles";
import { useAsyncData } from "#app";

defineProps({
  screen: {
    type: String,
    required: true,
  },
});

const articleStore = useArticleStore();

const isLoading = ref(true);

const { data: articles, error: fetchError } = await useAsyncData(
  "articles",
  () => $fetch("/api/article"),
  {
    ssr: true,
  }
);

if (articles.value) {
  articleStore.setArticles(articles.value);
} else if (fetchError) {
  console.error("Error fetching articles:", fetchError);
} else {
  console.warn("No articles found.");
}

isLoading.value = false;
</script>

<style scoped>
.animate-pulse {
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.6;
  }
}
</style>
