<template>
  <div class="mt-10 px-4 sm:px-8 lg:px-0 lg:w-full">
    <div class="flex flex-col lg:flex-row lg:justify-between mb-10">
      <div class="flex flex-col items-start lg:items-start">
        <MainLogo />
        <div class="flex flex-wrap justify-start space-x-6 mt-4 lg:mt-5">
          <p class="text-sm font-normal leading-[19.6px] cursor-pointer">
            About Us
          </p>
          <p class="text-sm font-normal leading-[19.6px] cursor-pointer">
            Corporate Events
          </p>
          <p class="text-sm font-normal leading-[19.6px] cursor-pointer">
            Personal Events
          </p>
          <p class="text-sm font-normal leading-[19.6px] cursor-pointer">
            List Your Service
          </p>
          <p class="text-sm font-normal leading-[19.6px] cursor-pointer">
            How It Works
          </p>
        </div>
      </div>
      <div class="lg:ml-10 mt-6 lg:mt-0">
        <p class="text-sm font-semibold lead-[19.6px] cursor-pointer">
          Contacts
        </p>
        <div class="flex flex-col mt-2">
          <ContactInfo />
          <EmailInfo />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row lg:justify-between mb-10 space-y-4 lg:space-y-0 lg:w-full"
    >
      <!-- Links Section -->
      <div class="flex items-center lg:items-center lg:justify-start space-x-2">
        <p
          class="text-xs font-normal leading-[19.2px] cursor-pointer opacity-70"
        >
          Privacy Policy
        </p>
        <span class="text-[#6A6A6A] dot-separator"></span>
        <p
          class="text-xs font-normal leading-[19.2px] cursor-pointer opacity-70"
        >
          Terms and Conditions
        </p>
      </div>
      <!-- Copyright Section -->
      <div
        class="text-xs font-normal leading-[19.2px] text-left cursor-pointer opacity-70 mt-4 lg:mt-0"
      >
        <p>2024 @c All rights Reserved. Events in Minutes</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainLogo from "./Icons/MainLogo.vue";
import ContactInfo from "./Icons/ContactInfo.vue";
import EmailInfo from "./Icons/EmailInfo.vue";
</script>

<style scoped>
.dot-separator {
  height: 4px;
  width: 4px;
  border-radius: 50%; /* Makes it a circle */
  background-color: currentColor; /* Uses the current text color */
  display: inline-block;
  margin: 0 0.5rem;
  line-height: 1;
}
</style>
