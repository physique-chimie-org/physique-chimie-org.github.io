import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import footnote from "markdown-it-footnote";

import { nav, sidebar, head } from "./configs";

const customElements = ["mjx-container"];

export default defineConfig({
  base: "/docs-vitepress/",
  ignoreDeadLinks: true,
  lang: "fr-FR",
  title: "classBot_",
  titleTemplate: "Les cours accessibles partout",
  description: "Site de cours, accessibles partout.",
  head: head,

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  markdown: {
    config: (md) => {
      md.use(mathjax3);
      md.use(footnote);
    },
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    nav: nav,

    sidebar: sidebar,

    outlineTitle: "Sommaire",

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" width="933.333" height="933.333" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg"><path d="M323.5.6c-1.6.2-7.7.9-13.5 1.5-98.8 10.4-192.1 66.7-249.2 150.4C29.5 198.4 10.5 248.3 2.3 306c-2.5 17.9-2.5 70.1 0 88 6 42 16.7 77.2 34.7 113 45.1 89.9 125.7 155.4 224 181.9 41.9 11.3 95.5 14.2 140.8 7.6 34.7-5.1 69.5-16.1 102.7-32.4 87.6-43.2 152.5-119.7 181-213.6 9.9-32.8 14.5-64.4 14.5-100.5 0-55.6-11.5-104.8-35.9-154.5-34.6-70.2-89.5-125.1-159.6-159.6C464.3 16.2 424.3 4.9 380 1 369.5.1 330.6-.2 323.5.6zM384 244.4c21.8 5.6 39.2 19.2 48.4 37.8 7.1 14.6 8.6 23.6 9.3 56.8 1.1 54-3.1 73.5-19.9 91.5-12.1 13-24.7 20.1-41.3 23.2-11.7 2.2-34.5 1.4-44-1.7-20.1-6.4-36.1-19.9-44.5-37.4-7.9-16.4-9.5-29.8-8.7-73.9.6-33.1 1.3-39.2 6.2-52.3 8.4-22.4 30.3-40.2 55.2-44.9 9.3-1.8 30.9-1.3 39.3.9zM160.3 296c18 28.3 33.2 51.9 33.8 52.4.5.6.9-18.6.9-51.7V244h51v210l-22.2-.2-22.1-.3-32.8-51.4c-18-28.2-33.2-51.8-33.8-52.4-.8-.8-1.1 13.4-1.1 51.6V454H83V244l22.2.2 22.2.3 32.9 51.5zM617 266.5V289l-25.7.2-25.8.3-.3 82.2-.2 82.3h-50l-.2-82.3-.3-82.2-25.7-.3-25.8-.2v-45h154v22.5z" style="fill:#339970;fill-opacity:1"/><path d="M352.5 289.3c-8.8 3.6-14 9.3-16.4 18.2-2.1 7.8-3.3 39.9-2.2 59.5 1.1 20.2 2.5 26.5 7 32.7 9.3 12.9 32.2 13.1 41.8.4 4.8-6.3 6.2-12.5 7.5-33.2 1.3-21.3-.1-51.8-2.7-60.5-3.5-11.8-11.5-17.7-24.5-18.1-4.2-.1-8.8.3-10.5 1z" style="fill:#1e7751;fill-opacity:1"/><path style="fill:#1e7751;fill-opacity:1;stroke-width:.999998" d="M348.326.142c-3.326-.016-6.33.002-9.344.02-1.78.012-3.835-.003-5.413.021-4.625.072-8.34.198-10.068.393-1.6.2-7.7.9-13.5 1.5-6.175.65-12.33 1.479-18.454 2.483-79.619 13.053-154.34 55.644-207.697 117.85-6.486 7.56-12.555 15.49-18.38 23.613-1.547 2.158-3.171 4.256-4.67 6.452v.001a363.154 363.154 0 0 0-11.163 17.407 349.11 349.11 0 0 0-10.029 17.827 342.163 342.163 0 0 0-8.91 18.29v.002a342.033 342.033 0 0 0-7.81 18.799 348.94 348.94 0 0 0-6.727 19.353 362.809 362.809 0 0 0-5.662 19.95C7.076 277.613 4.35 291.55 2.3 305.975c-2.5 17.9-2.5 70.1 0 88 .75 5.25 1.574 10.394 2.476 15.446 4.51 25.26 10.982 48.224 20.052 70.701 3.628 8.99 7.673 17.904 12.173 26.854a353.038 353.038 0 0 0 18.542 32.54A348.379 348.379 0 0 0 129.05 621.7a350.602 350.602 0 0 0 45.523 31.35 356.32 356.32 0 0 0 50.429 24.087 363.975 363.975 0 0 0 35.999 11.737c4.724 1.275 9.64 2.406 14.633 3.465.901.19 1.793.39 2.702.574 4.827.978 9.76 1.854 14.772 2.63.989.154 1.987.294 2.981.439 5.196.758 10.45 1.443 15.777 1.985.234.024.472.038.706.061 5.216.52 10.487.91 15.775 1.22.946.056 1.89.122 2.837.17 4.302.221 8.617.32 12.929.4l1.48-245.984a74.69 74.69 0 0 1-4.955-.807c-1.555-.314-2.95-.666-4.138-1.053a81.96 81.96 0 0 1-7.337-2.726 79.385 79.385 0 0 1-6.914-3.356 76.82 76.82 0 0 1-6.447-3.95 74.329 74.329 0 0 1-5.939-4.505 71.965 71.965 0 0 1-5.39-5.026 69.802 69.802 0 0 1-4.802-5.51 67.887 67.887 0 0 1-4.17-5.958 66.392 66.392 0 0 1-3.5-6.368 90.728 90.728 0 0 1-2.675-6.076 72.048 72.048 0 0 1-2.13-6.19 75.436 75.436 0 0 1-1.632-6.696 99.535 99.535 0 0 1-1.176-7.601 155.508 155.508 0 0 1-.769-8.9 272.48 272.48 0 0 1-.407-10.592c-.161-7.714-.112-16.821.088-27.846.15-8.275.306-14.862.533-20.293.227-5.431.524-9.706.955-13.356.431-3.65.997-6.675 1.76-9.607.765-2.931 1.728-5.769 2.953-9.044a62.53 62.53 0 0 1 3.761-8.168 67.412 67.412 0 0 1 4.906-7.636 71.97 71.97 0 0 1 5.924-7.006 75.502 75.502 0 0 1 6.822-6.277 77.483 77.483 0 0 1 15.838-9.964 75.97 75.97 0 0 1 8.772-3.49 73.261 73.261 0 0 1 9.176-2.36c.566-.109 1.511-.132 2.162-.225zM83 243.976l22.201.2 22.2.3 32.899 51.499c18 28.3 33.201 51.9 33.801 52.4.125.15.244-.937.352-3.17.107-2.232.204-5.611.285-10.043.163-8.862.263-21.937.263-38.487v-52.7h51v210.001l-22.2-.2-22.1-.301-32.801-51.4c-18-28.2-33.2-51.8-33.8-52.4-.2-.2-.368.538-.508 2.354-.14 1.815-.254 4.708-.342 8.821-.175 8.225-.25 21.325-.25 40.425v52.701H83z"/></svg>',
        },
        link: "https://0930124e.index-education.net/pronote/",
      },
      {
        icon: "github",
        link: "https://github.com/physique-chimie-org/physique-chimie-org.github.io",
      },
    ],

    footer: {
      message: "Fait avec ❤️ par vos professeurs",
    },

    editLink: {
      pattern:
        "https://github.com/physique-chimie-org/physique-chimie-org.github.io/edit/main/docs/:path",
      text: "Contribuer à cette page",
    },
    lastUpdatedText: "Dernière contribution",
    docFooter: {
      prev: "Précédent",
      next: "Suivant",
    },
  },
});
