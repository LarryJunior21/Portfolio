import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Larry Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { id: 'description', name: 'description', content: 'Larry Portfolio' },
      ],
    },
  },

  build: {
    transpile: ['@iconify/vue'],
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@iconify/vue'],
    },
  },

  typescript: {
    typeCheck: true,
  },

  runtimeConfig: {
    public: {
      EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
      EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/supabase',
  ],
  compatibilityDate: '2025-04-10',
  supabase: {
    redirect: false,
  },
});
