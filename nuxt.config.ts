// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/base.css",
    "bootstrap/dist/css/bootstrap.min.css",
    '@egjs/vue3-flicking/dist/flicking.css',
    '@egjs/vue3-flicking/dist/flicking-inline.css'
  ],
  build: { transpile: ['@egjs/vue3-flicking'] },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' }
      ]
    }
  }
});
