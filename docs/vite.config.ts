import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import { presetAttributify, presetUno } from 'unocss'
import Unocss from 'unocss/vite'


export default defineConfig({
  plugins: [
    // https://vitejs.dev/guide/build.html
    [splitVendorChunkPlugin()],
    // https://github.com/unocss/unocss
    Unocss({
      presets: [presetUno(), presetAttributify()],
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      outDir: ".vitepress/dist",
      registerType: "prompt",
      workbox: {
        globPatterns: [
          "**/*.{css,js,html,svg,png,ico,txt,woff2}",
          "**/**/*.{css,js,html,svg,png,ico,txt,woff2}",
        ],
        sourcemap: true,
      },
      manifest: {
        name: "classBot_",
        lang: "fr",
        orientation: "any",
        display: "fullscreen",
        short_name: "classBot_",
        description: "Les cours accessibles partout",
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
    }),
  ],
});
