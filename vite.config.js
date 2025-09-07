import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"https://github.com/marjan-1064/react-project-nursery",
  plugins: [react()],
})
