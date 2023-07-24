// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon'],
  css: ['@/assets/css/main.css'],
  googleFonts: {
    download: true,
    inject: true,
    families: {
      'Work+Sans:wght@400;500': true,
      'JetBrains+Mono:wght@400;500': true,
    }
  },
  app: {
    head: {
      title: "Jonathan Bangert",
      meta: [
        {
          'name': 'description',
          'content': 'Jonathan Bangerts personal website'
        },
        {
          'name': 'theme-color',
          'content': '#272727',
        }
      ],
      htmlAttrs: {
        lang: 'en'
      },
    },
  },
  build: {
    transpile: ['gsap'],
  },
});
