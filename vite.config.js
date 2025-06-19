// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/anduruPortfolio/',    // ← your exact repo name, case-sensitive
  build: {
    outDir: 'docs',             // ← this makes Vite spit files into /docs
  },
  plugins: [tailwindcss()],
})