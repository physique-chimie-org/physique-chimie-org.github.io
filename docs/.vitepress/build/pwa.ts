import fg from "fast-glob";
import { resolve } from "pathe";
import { VitePWA } from "vite-plugin-pwa";
import { description, name } from "../meta";

/**
 * Vite Plugin PWA uses Workbox  library to build the service worker
 * can find more information on Workbox section.
 * @see https://vite-plugin-pwa.netlify.app/
 */
export const pwa = () => {
  return VitePWA({
    strategies: "generateSW",
    outDir: "docs/.vitepress/dist",
    registerType: "prompt",
    includeAssets: fg.sync("**/*.{png,svg,gif,ico,txt}", {
      cwd: resolve(__dirname, "../../public"),
    }),
    workbox: {
      sourcemap: true,
    },
    manifest: {
      name: name,
      lang: "fr",
      orientation: "any",
      display: "fullscreen",
      short_name: name,
      description: description,
      start_url: "/",
      scope: "/",
      id: "/",
      theme_color: "#3eaf7c",
      background_color: "#3eaf7c",
      icons: [
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
    },
  });
};
