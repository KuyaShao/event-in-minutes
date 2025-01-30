<template>
  <div>
    <SectionHeader />
    <FeaturedContent />
    <Articles />
  </div>
</template>

<script lang="ts" setup>
import FeaturedContent from "~/components/features/post/FeaturedContent.vue";
import Articles from "~/components/features/post/articles/Articles.vue";

definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
