<template>
  <div class="flex flex-col items-center mt-20 px-4 md:px-0">
    <h1 class="text-left text-[40px] font-semibold leading-[46.88px] mb-5">
      Create New Post
    </h1>
    <form @submit.prevent="submitPost" class="w-full max-w-[600px]">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title
        </label>
        <input
          v-model="title"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter post title"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
          Content
        </label>
        <textarea
          v-model="content"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          placeholder="Enter post content"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="img">
          Image URL
        </label>
        <input
          v-model="img"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="img"
          type="text"
          placeholder="Enter image URL"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="category"
        >
          Category
        </label>
        <input
          v-model="category"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          type="text"
          placeholder="Enter category"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Post
        </button>
      </div>
      <div v-if="error" class="text-red-600 mt-4">{{ error }}</div>
      <div v-if="success" class="text-green-600 mt-4">
        Post created successfully!
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
definePageMeta({
  middleware: "admin",
});
const title = ref("");
const content = ref("");
const img = ref("");
const category = ref("");
const error = ref<string | null>(null);
const success = ref<boolean>(false);
const router = useRouter();

const submitPost = async () => {
  error.value = null;
  success.value = false;
  try {
    const response = await $fetch("/api/article", {
      method: "POST",
      body: {
        title: title.value,
        content: content.value,
        img: img.value,
        category: category.value,
      },
    });

    success.value = true;
    router.push("/");
  } catch (err) {
    error.value = "Error creating post. Please try again.";
    console.error(err);
  }
};
</script>

<style scoped>
h1 {
  text-align: left;
}
</style>
