import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const VITE_BASENAME = process.env.VITE_BASENAME || '/'

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
}));
