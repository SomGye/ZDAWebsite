import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        commissions: resolve(__dirname, 'commissions/index.html'),
        examples: resolve(__dirname, 'examples/index.html'),
        portfolio: resolve(__dirname, 'portfolio/index.html'),
      },
    },
  },
})
