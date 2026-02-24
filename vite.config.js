import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// # Add this to vite.config if proxy config is needed
// server: {
//   proxy: {
//     '/api': {
//       target: 'http://localhost:4000',
//       changeOrigin: true,
//       rewrite: (path) => path.replace(/^\/api/, ''),
//     },
//   },
// }