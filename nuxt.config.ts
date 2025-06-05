import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Larry Portfolio - Full Stack Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // Basic Meta Tags
        {
          id: "description",
          name: "description",
          content:
            "Larry's Portfolio - Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and get in touch for collaboration opportunities.",
        },
        {
          name: "keywords",
          content:
            "Larry, Portfolio, Full Stack Developer, Web Developer, JavaScript, Vue.js, Nuxt.js, React, Node.js",
        },
        { name: "author", content: "Larry" },

        { property: "og:site_name", content: "Larry Portfolio" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Larry Portfolio - Full Stack Developer",
        },
        {
          property: "og:description",
          content:
            "Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and get in touch for collaboration opportunities.",
        },
        { property: "og:image", content: "/og-image.png" }, // You'll need to add this image
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "Larry Portfolio - Full Stack Developer",
        },
        { property: "og:url", content: "https://larryjunior.vercel.app/" },

        // Additional Meta Tags
        { name: "theme-color", content: "#10b981" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "English" },
        { name: "revisit-after", content: "7 days" },

        // Schema.org structured data
        {
          name: "Larry's Portfolio",
          content: "Larry's Portfolio",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "canonical", href: "https://larryjunior.vercel.app/" },
      ],

      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Larry",
            jobTitle: "Full Stack Developer",
            url: "https://larryjunior.vercel.app/",
            sameAs: [
              "https://github.com/LarryJunior21",
              "https://www.linkedin.com/in/larryjunior2121/",
            ],
            knowsAbout: [
              "JavaScript",
              "Vue.js",
              "Nuxt.js",
              "React",
              "Node.js",
              "Full Stack Development",
              "Web Development",
            ],
            description:
              "Full Stack Developer specializing in modern web technologies",
          }),
        },
      ],
    },
  },

  build: {
    transpile: ["@iconify/vue"],
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@iconify/vue"],
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
    "@nuxt/image",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/supabase",
  ],
  compatibilityDate: "2025-04-10",
  supabase: {
    redirect: false,
  },
});
