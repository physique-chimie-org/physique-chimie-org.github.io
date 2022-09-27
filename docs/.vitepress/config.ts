import { defineConfig } from "vitepress";

import { description, name } from "./meta";
import { regeneratePWA, pwa, generateSitemap } from "./build";
import * as pageConfig from "./configs";

export const sitemapLinks: Object[] = [];
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
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id) && !/[\\/]index\.html$/.test(id) && !/[\\/]README\.html$/.test(id) && !pageData.frontmatter.noSitemap)
      sitemapLinks.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
        lastmod: pageData.lastUpdated,
      });
  },

  buildEnd: ({ outDir }) => {
    generateSitemap({ outDir });
    regeneratePWA({ outDir });
  }
});
