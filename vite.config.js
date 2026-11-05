import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// O GitHub Pages publica o site em https://<usuario>.github.io/<nome-do-repositorio>/
// Se você der outro nome ao repositório, troque aqui também.
export default defineConfig({
  base: '/landing-sistema-socios-ctg/',
  plugins: [tailwindcss(), react()],
})
