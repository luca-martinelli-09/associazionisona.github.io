// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/fonts/josefin-sans/main.css", "~/assets/fonts/instagram-sans-script/main.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Luca Martinelli",
      link: [
        {
          rel: "icon",
          href: "/favicon.png",
          type: "image/png",
        },
        {
          rel: "meta",
          type: "application/rdf+xml",
          title: "FOAF",
          href: "https://w3id.org/people/lucamartinelli",
        },
      ],
    },
  },

});
