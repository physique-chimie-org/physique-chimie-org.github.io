import { resolveConfig } from "vite";
import type { VitePluginPWAAPI } from "vite-plugin-pwa";
import { pwa } from "./pwa";

export const buildEnd = async () => {
  const config = await resolveConfig(
    { plugins: [pwa()] },
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
