// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
   base: './',
  build: { outDir: 'docs' },
  plugins: [tailwindcss()],
})