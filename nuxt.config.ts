// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://localhost:3000",
    },
  },

  modules: [
    "@prisma/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
  ],

  fonts: {
    families: [{ name: "Inter", provider: "google" }],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            inter: ["Inter", "sans-serif"],
          },
        },
      },
    },
  },
  build: {
    preload: {
      exclude: ["**/*.json", "**/meta/*.json"],
    },
  },
});
