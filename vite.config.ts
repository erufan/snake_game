import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({
  plugins: [
    VitePWA({
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,mp3}"],
      },
    }),
  ],
});
