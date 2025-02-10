import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import iconsForPWA from "./public/icons/iconsForPWA";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        id: "pwa-snake-game-erfan-taheri",
        theme_color: "#ffffff",
        icons: iconsForPWA,
        description: "classic snake game",
        launch_handler: { client_mode: "auto" },
        orientation: "portrait",
        screenshots: [
          {
            sizes: "1024x905",
            src: "/screenshots/1.png",
            form_factor: "narrow",
            label: "home-page",
            platform: "PC",
          },
          {
            sizes: "1024x1024",
            src: "/screenshots/2.png",
            form_factor: "narrow",
            label: "end-page",
            platform: "PC",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/assets/"),
            handler: "CacheFirst",
          },
        ],
      },
    }),
  ],
});
