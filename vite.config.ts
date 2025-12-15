import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necessário para GitHub Pages: aponta para o nome do repositório
  base: "/my-portfolio/",
})
