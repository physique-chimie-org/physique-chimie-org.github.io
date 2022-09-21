import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import { presetAttributify, presetUno } from "unocss";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    // https://vitejs.dev/guide/build.html
    [splitVendorChunkPlugin()],
    // https://github.com/unocss/unocss
    Unocss({
      presets: [presetUno(), presetAttributify()],
    }),
  ],
});
