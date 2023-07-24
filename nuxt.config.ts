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
      'Work+Sans:wght@100;200;300;400;500;600;700;800;900': true,
      'JetBrains+Mono:wght@500': true,
    }
  },
  app: {
    head: {
      script: ['https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js']
    }
  },
})
