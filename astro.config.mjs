// @ts-check
import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    assets: 'a',
    inlineStylesheets: 'always',
  },
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
})
