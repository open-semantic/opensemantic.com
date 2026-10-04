import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
  ],
  // Pre-bundling moves the editor out of its package folder, which breaks the
  // relative URLs of its Monaco web workers in dev mode
  optimizeDeps: {
    exclude: ['datacontract-editor'],
  },
})
