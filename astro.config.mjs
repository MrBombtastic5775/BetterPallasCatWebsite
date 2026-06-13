import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://pallas-cat-atlas.pages.dev",
  integrations: [sitemap()],
  image: {
    layout: "constrained",
  },
  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    host: true,
  },
})