import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "@fortawesome/free-brands-svg-icons"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // permite que el servidor escuche en la red local
    port: 3000,  // puerto que quieres utilizar
  },
 fonts: {
    build: {
      rollupOptions: {
        external: ["@fortawesome/free-brands-svg-icons"]
      }
    }
  }
})
