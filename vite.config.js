import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so GitHub Pages (project site) and local preview both resolve assets
  base: './',
  publicDir: 'public',
  server: {
    port: 5500,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
