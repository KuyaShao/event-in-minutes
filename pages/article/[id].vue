<template>
  <div class="flex flex-col items-center mt-20 px-4 md:px-0">
    <div class="w-full max-w-[611px] mb-5" v-if="article && !error">
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

    <!-- Loading or error state -->
    <div v-if="!article && !error" class="loading-indicator">Loading...</div>

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

/* Example styles for loading and error states */
.loading-indicator {
  text-align: center;
  font-size: 1.2rem;
  color: gray;
}

.error-message {
  color: red;
  font-size: 1rem;
  text-align: center;
}
</style>
