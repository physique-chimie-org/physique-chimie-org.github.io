import type { DefaultTheme } from "vitepress";
import { nav } from "./navbar";
import { sidebar } from "./sidebar";
import { github } from "../meta";

/**
 * Theme configs let you customize your theme.
 * @see https://vitepress.vuejs.org/config/theme-configs.html
 */
export const themeConfig: DefaultTheme.Config = {
  logo: {
    src: "/logo.svg",
    alt: "classBot_ logo",
  },
  nav: nav,
  sidebar: sidebar,
  algolia: {
    appId: "9TE5KV94J0",
    apiKey: "4f40b79730bb4640efb7472c21f28d4b",
    indexName: "physique-chimie",
    buttonText: "Rechercher",
  },
  outline: "deep",
  outlineTitle: "Sommaire",
  socialLinks: [
    {
      icon: {
        svg: '<svg viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="128"/><circle cx="128" cy="128" style="fill:#17a865" r="123"/><path style="fill:#fff" d="M152.205 223.243c-16.908-6.08-29.592-19.942-33.441-36.547-1.655-7.139-.692-21.536 2.111-31.573 1.17-4.185 5.674-14.68 10.011-23.323 7.325-14.595 8.505-16.328 16.587-24.363 12.306-12.234 24.234-18.058 41.153-20.095 17.84-2.147 43.08 4.59 46.258 12.347 1.152 2.811.986 3.941-1.536 10.459-5.899 15.24-15.03 27.525-26.487 35.635-12.705 8.992-26.404 14.037-41.346 15.226l-7.774.618 4.807 6.402c6.534 8.702 9.223 16.172 9.78 27.166.375 7.408.052 10.119-1.925 16.188-2.551 7.833-6.07 12.45-10.141 13.308-1.398.295-5.024-.357-8.057-1.448zm-100.964-42.41c-12.677-3.65-18.759-8.12-18.737-13.772.015-3.93 6.392-16.459 10.913-21.442 7.751-8.544 21.603-15.087 31.854-15.048 2.811.011 5.112-.25 5.113-.58.001-.331-2.502-3.642-5.563-7.358-18.67-22.67-23.244-51.563-12.51-79.011 3.904-9.98 4.892-11.368 8.906-12.495 6.851-1.924 24.147 7.247 35.375 18.757 8.375 8.586 13.72 17.396 17.332 28.565 6.126 18.943 1.925 44.237-11.725 70.589-8.202 15.837-18.107 25.592-30.884 30.42-7.34 2.772-22.767 3.478-30.074 1.375z"/></svg>',
      },
      link: "https://0930124e.index-education.net/pronote/eleve.html",
    },
    {
      icon: "github",
      link: github,
    },
  ],
  footer: {
    message: "Fait avec ❤️ par vos professeurs",
  },
  editLink: {
    pattern:
    github + "/edit/main/docs/:path",
    text: "Contribuer à cette page",
  },
  lastUpdatedText: "Dernière contribution",
  docFooter: {
    prev: "Précédent",
    next: "Suivant",
  },
};
