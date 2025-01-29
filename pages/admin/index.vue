<template>
  <div class="flex flex-col items-center mt-10 px-4 md:px-0">
    <h1 class="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
    <p class="text-gray-600 mt-2 text-lg">Welcome, Admin!</p>

    <div class="flex flex-col mt-8 gap-4 w-full max-w-md">
      <button
        @click="goToCreatePost"
        class="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        Create New Post
      </button>

      <button
        @click="goToCategories('CorporateEvents')"
        class="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
      >
        View Corporate Events Categories
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

definePageMeta({
  middleware: "admin",
});

const router = useRouter();

const goToCreatePost = () => {
  router.push("/admin/create-post");
};

const goToCategories = (categoryName: string) => {
  router.push(`/admin/categories/${categoryName}`);
};
</script>

<style scoped>
button {
  cursor: pointer;
  width: 100%;
}
</style>
