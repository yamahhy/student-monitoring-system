// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/styles/styles.css'],
  build: {
      transpile: ['@fortawesome/vue-fontawesome']
  },
  pages: true,
})
