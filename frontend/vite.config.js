import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 root: '.',  // Ensure this is set correctly
  build: {
    outDir: 'dist'  // Ensure output folder is correct
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
