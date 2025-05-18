import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import sass from "sass";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Techzy-frontend/",
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
