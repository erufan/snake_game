import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/snake.png",
            purpose: "any maskable",
            sizes: "144x144",
            type: "image/png",
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
