import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      devOptions: { enabled: true },
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
    }),
  ],
});
