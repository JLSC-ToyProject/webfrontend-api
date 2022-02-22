import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
  },
  server: {
    port: 3042,
    host: '0.0.0.0'
  },
  preview: {
    port: 3042,
    host: '0.0.0.0'
  }
})
