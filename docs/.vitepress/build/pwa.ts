import fg from "fast-glob";
import { resolve } from "pathe";
import { resolveConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import type { VitePluginPWAAPI } from "vite-plugin-pwa";

import { description, name } from "../meta";

/**
 * Vite Plugin PWA uses Workbox  library to build the service worker
 * can find more information on Workbox section.
 * @see https://vite-plugin-pwa.netlify.app/
 */
export const pwa = (outDir = ".vitepress/dist") => {
  return VitePWA({
    strategies: "generateSW",
    outDir: outDir,
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

export const regeneratePWA = async (outDir: string) => {
  const config = await resolveConfig(
    { plugins: [pwa(outDir)] },
    "build",
    "production"
  );
  // when `vite-plugin-pwa` is presented, use it to regenerate SW after rendering
  const pwaPlugin: VitePluginPWAAPI = config.plugins.find(
    (i) => i.name === "vite-plugin-pwa"
  )?.api;
  if (pwaPlugin && pwaPlugin.generateSW && !pwaPlugin.disabled)
    await pwaPlugin.generateSW();
  console.log(
    "\x1B[32m✓\x1B[0m regenerate PWA ServiceWorker... \x1B[90m[buildEnd]\x1B[0m"
  );
};
