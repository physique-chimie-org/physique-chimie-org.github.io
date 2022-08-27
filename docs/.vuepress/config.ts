import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

import { head } from "./configs/head";
import theme from "./configs/theme";

export default defineUserConfig({
  lang: "fr-FR",
  title: "classBot_",
  description: "Les cours accessibles partout",
  head,
  base: "/",
  theme,
  plugins: [
    searchPlugin({}),
    mdEnhancePlugin({
      enableAll: true,
    }),
    pwaPlugin({
      maxSize: 8192,
      update: "hint"
    }),
  ],
  extendsMarkdown: (md) => {
    md.use(require("markdown-it-abbr"));
  },
  shouldPrefetch: false,
});
