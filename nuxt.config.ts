import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  typescript: {
    strict: true,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})
