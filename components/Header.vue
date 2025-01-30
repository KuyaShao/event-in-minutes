<template>
  <div class="flex items-center justify-between pt-10 flex-wrap md:flex-nowrap">
    <div class="flex items-center mb-4 md:mb-0">
      <NuxtLink to="/">
        <MainLogo class="mr-4 cursor-pointer" />
      </NuxtLink>
      <ContactInfo class="ml-2" />
    </div>

    <div class="flex items-center text-sm font-semibold text-[#222] gap-6">
      <span class="hidden sm:block">Top Vendors, Apply Now!</span>
      <MainBurgerIcon />

      <!-- Display login link when not logged in -->
      <div v-if="!isLoggedIn">
        <NuxtLink to="/login" class="text-blue-500 hover:text-blue-700">
          Login
        </NuxtLink>
      </div>

      <!-- Show Avatar and dropdown when logged in -->
      <div
        v-if="isLoggedIn"
        class="relative"
        @mouseenter="showDropdown"
        @mouseleave="scheduleHideDropdown"
      >
        <AvatarIcon @click="toggleDropdown" />
        <div
          v-if="dropdownVisible"
          class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20"
          @mouseenter="clearHideDropdown"
          @mouseleave="scheduleHideDropdown"
        >
          <!-- Admin link -->
          <div v-if="isAdmin" class="px-4 py-2 text-gray-800 hover:bg-gray-200">
            <NuxtLink to="/admin" class="w-full text-left"
              >Admin Dashboard</NuxtLink
            >
          </div>
          <!-- Logout link -->
          <button
            @click="logout"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from "vue";
import MainLogo from "./Icons/MainLogo.vue";
import ContactInfo from "./Icons/ContactInfo.vue";
import MainBurgerIcon from "./Icons/MainBurgerIcon.vue";
import AvatarIcon from "./Icons/AvatarIcon.vue";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const isLoggedIn = ref(authStore.isLoggedIn());
const isAdmin = ref(false);

// Watch for changes in the user state to update isLoggedIn and isAdmin
watch(
  () => authStore.user,
  () => {
    isLoggedIn.value = authStore.isLoggedIn(); // Update login status
    isAdmin.value = authStore.user?.role === "admin"; // Check if the user is an admin
  },
  { immediate: true }
);

const dropdownVisible = ref(false);
let hideDropdownTimeout: ReturnType<typeof setTimeout>;

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const showDropdown = () => {
  dropdownVisible.value = true;
};

const scheduleHideDropdown = () => {
  hideDropdownTimeout = setTimeout(() => {
    dropdownVisible.value = false;
  }, 200);
};

const clearHideDropdown = () => {
  clearTimeout(hideDropdownTimeout);
};

const logout = async () => {
  await authStore.logout();
  isLoggedIn.value = false;
  await nextTick();
  dropdownVisible.value = false;
};
</script>

<style scoped></style>
