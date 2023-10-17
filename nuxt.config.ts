// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.scss'],
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n', 'nuxt-icon', '@nuxt/image'],
  i18n: {
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    compilation: {
      strictMessage: false
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en',
        file: 'en.yml'
      },
      // {
      //   code: 'fr',
      //   name: 'Français',
      //   iso: 'fr',
      //   file: 'fr.yml'
      // },
      // {
      //   code: 'ru',
      //   name: 'Русский',
      //   iso: 'ru',
      //   file: 'ru.yml'
      // }
    ]
  },
  image: {
    format: ['avif']
  }
})


