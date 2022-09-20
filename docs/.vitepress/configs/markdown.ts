import type { MarkdownOptions } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import footnote from "markdown-it-footnote";
import implicitFigures from "markdown-it-image-figures";

/**
 * vitepress markdown config
 * @see https://vitepress.vuejs.org/config/app-configs.html#markdown
 */
export const markdownConfig: MarkdownOptions = {
  anchor: {
    level: 1,
  },
  config: (md) => {
    md.use(mathjax3);
    md.use(footnote);
    md.use(implicitFigures, {
      dataType: true,
      lazy: true,
      figcaption: "title",
      async: true,
    });
  },
};
