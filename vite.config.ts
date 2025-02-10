import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import iconsForPWA from "./public/icons/iconsForPWA";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        theme_color: "#ffffff",
        icons: iconsForPWA,
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
