import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // src 路径
    }
  },
  server: {
    proxy: {
      '/dev-api': {
        target: 'http://39.108.187.100:8080/',
        ws: false,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dev-api/, '')
      }
    }
  }
})
