import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // permite que el servidor escuche en la red local
    port: 3000,  // puerto que quieres utilizar
    build: {
      rollupOptions: {
        external: {FontAwesomeIcon}
      }
    }
  },
})

// ["@fortawesome/free-brands-svg-icons"]
