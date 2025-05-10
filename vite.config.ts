import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/Bartosz_Dudziak_Web_Wroclaw",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        confirmation: path.resolve(__dirname, "confirmation.html"),
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
