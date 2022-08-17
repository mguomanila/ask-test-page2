import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  define: {
    'process.env': process.env
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: 'https://api.polygonscan.com',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace('/^\/xxx/', '')
      }
    }
  }
})
