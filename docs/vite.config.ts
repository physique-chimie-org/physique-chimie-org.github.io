import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      outDir: ".vitepress/dist",
      registerType: "prompt",
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}', '**/**/*.{css,js,html,svg,png,ico,txt,woff2}' ],
        sourcemap: true,
      },
      manifest: {
        start_url: "/",
        scope: "/",
        id: "/",
        theme_color: "#3eaf7c",
        background_color: "#3eaf7c",
        icons: [
          {
            src: "/images/icons/android-chrome-36x36.png",
            sizes: "36x36",
            type: "image/png",
          },
          {
            src: "/images/icons/android-chrome-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/images/icons/maskable_icon_x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/images/icons/android-chrome-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/images/icons/maskable_icon_x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/images/icons/android-chrome-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/images/icons/maskable_icon_x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/images/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/icons/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/images/icons/android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/images/icons/maskable_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/images/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/icons/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        orientation: "portrait-primary",
        prefer_related_applications: false,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
