// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", 'nuxt-icon'],
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
      },

    runtimeConfig: {
          githubClientId: process.env.GITHUB_CLIENT_ID,
          githubClientSecret: process.env.GITHUB_CLIENT_SECRET
      },

})