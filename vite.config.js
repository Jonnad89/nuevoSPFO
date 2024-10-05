import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // permite que el servidor escuche en la red local
    port: 3000,  // puerto que quieres utilizar
  },
})
