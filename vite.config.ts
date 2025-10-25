import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

const VITE_BASENAME = process.env.VITE_BASENAME || '/'

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:4001", // json-server local
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "") // /api/plants → /plants
      },
    },
  },
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
}))
