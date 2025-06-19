// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/anduruPortfolio/',    // ← EXACTLY your repo name, case-sensitive
  build: {
    outDir: 'dist',             // ← this is the folder we'll publish
  },
  plugins: [tailwindcss()],
})