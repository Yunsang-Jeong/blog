import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/blog/",
  plugins: [vue()],
  publicDir: "public",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  }
})
