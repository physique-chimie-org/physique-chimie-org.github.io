import { defineConfig } from "vitepress";
import { description, name } from "./meta";
import { buildEnd, pwa } from "./build";
import * as pageConfig from "./configs";

const customElements = ["mjx-container"];

export default defineConfig({
  base: "/",
  ignoreDeadLinks: true,
  lang: "fr-FR",
  title: name,
  titleTemplate: "Les cours accessibles partout",
  description: description,
  lastUpdated: true,
  cleanUrls: "without-subfolders",

  markdown: pageConfig.markdownConfig,
  head: pageConfig.head,
  themeConfig: pageConfig.themeConfig,

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  vite: {
    plugins: [pwa()],
  },
  buildEnd,
});
