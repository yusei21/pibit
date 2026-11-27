import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' permite publicar em qualquer subpasta (ex.: fabrica.ifma.edu.br/gea/)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
