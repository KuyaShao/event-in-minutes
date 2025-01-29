<template>
  <div class="flex flex-col items-center mt-20 px-4 md:px-0">
    <!-- Loading Screen -->
    <div v-if="loading" class="loading-screen">
      <div class="loader"></div>
      <p class="text-center">Loading article...</p>
    </div>

    <!-- Article Content (Only visible when article is loaded) -->
    <div v-if="article && !error" class="w-full max-w-[611px] mb-5">
      <h3 class="text-left text-blue-600" data-testid="category">
        {{ article?.category.name }}
      </h3>
      <h1
        class="text-left text-[40px] font-semibold leading-[46.88px] mt-2"
        data-testid="title"
      >
        {{ article?.title }}
      </h1>
      <p class="text-left text-xs font-normal mt-5">
        Written By:
        <span class="underline text-blue-600" data-testid="author">
          {{ article?.author.name }}
        </span>
      </p>
      <p class="text-left text-xs font-semibold" data-testid="published">
        Published:
        {{
          article?.date
            ? new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Unknown"
        }}
      </p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="error-message">
      Oops! We couldn't fetch the article. Please try again later.
    </div>

    <!-- Article Image -->
    <NuxtImg
      v-if="article && !error"
      :src="article?.img || '/default-image.jpg'"
      width="611"
      height="413"
      loading="lazy"
      class="w-full md:w-auto md:h-auto mb-5"
      data-testid="image"
    />

    <!-- Article Content -->
    <div
      v-if="article && !error"
      class="w-full max-w-[621px] mb-5"
      data-testid="content"
    >
      <p class="text-base font-normal mt-5">{{ article?.content }}</p>
    </div>

    <!-- Read More Articles -->
    <div class="w-full mb-5" v-if="article && !error">
      <h1 class="text-left text-[20px] font-semibold leading-[46.88px] mt-5">
        Read More Articles
      </h1>
      <Card screen="readmore" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useAsyncData } from "nuxt/app";
import type { Article } from "~/models/articles";
import Card from "~/components/features/post/articles/content/Card.vue";

const route = useRoute();
const articleId = route.params.id;

const { data: article, error } = await useAsyncData<Article>(
  `article-${articleId}`,
  () => $fetch(`/api/article/${articleId}`)
);

const loading = !article && !error;

if (error) {
  console.error("Error fetching article:", error);
}
</script>

<style scoped>
h1,
h3,
p {
  text-align: left;
}

/* Styles for loading screen */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.2rem;
  z-index: 9999;
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Example styles for error state */
.error-message {
  color: red;
  font-size: 1rem;
  text-align: center;
}
</style>
