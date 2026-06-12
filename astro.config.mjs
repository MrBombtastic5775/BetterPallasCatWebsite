import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://pallas-cat-atlas.pages.dev",
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    host: true,
  },

  adapter: cloudflare(),
})