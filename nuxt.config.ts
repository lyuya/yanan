export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/src/styles/main.css'],
  routeRules: {
    '/': { prerender: true }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      script: [{ children: "localStorage.getItem('vueuse-color-scheme') && document.getElementsByTagName('html')[0].setAttribute( 'class', localStorage.getItem('vueuse-color-scheme'))" }],
    },
  },

  modules: ['@nuxt/icon'],
})