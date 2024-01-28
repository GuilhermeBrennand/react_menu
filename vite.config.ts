import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/metronic8/react/demo5/",
  build: {
    chunkSizeWarningLimit: 3000,
  },
  server: {
    host: '192.168.1.4',
    port: 5173
  }
})
