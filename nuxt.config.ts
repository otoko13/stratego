// https://nuxt.com/docs/api/configuration/nuxt-config export default
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: { pageTransition: { name: "page", mode: "out-in" } },
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxt/eslint"],
  css: ["/assets/css/main.css"],
});
