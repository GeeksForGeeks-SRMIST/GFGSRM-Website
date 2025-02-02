export default defineNuxtConfig({
  compatibilityDate: "2024-10-24",
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  ssr: false,
  devtools: { enabled: true },
  css: ["./app/app.css"],
  srcDir: "app",
});
