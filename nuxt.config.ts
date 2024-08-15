// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' }
  },
})