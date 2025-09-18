import { withPwa } from '@vite-pwa/vitepress'
import footnote from "markdown-it-footnote"
import implicitFigures from "markdown-it-image-figures"
import { defineConfig } from 'vitepress'
import { head } from './head'
import { github, site, siteDescription, siteTitle } from './meta'
import { nav } from './navbar'
import { sidebar } from './sidebar'
// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  lang: 'fr-FR',
  title: siteTitle,
  titleTemplate: "Les cours accessibles partout",
  description: siteDescription,
  head: head,
  base: "/",
  ignoreDeadLinks: true,
  appearance: true,
  lastUpdated: true,
  markdown: {
    math: true,
    config(md) {
      md.use(footnote);
      md.use(implicitFigures, {
        dataType: true,
        lazy: true,
        figcaption: "title",
        async: true,
      });
    },
  },
  sitemap: {
    hostname: site,
  },
  cleanUrls: true,
  themeConfig: {
    logo: {
      src: "/logo.svg",
      alt: "classBot_ logo",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    outline: {
      level: "deep",
      label: "Sommaire",
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="128"/><circle cx="128" cy="128" style="fill:#17a865" r="123"/><path style="fill:#fff" d="M152.205 223.243c-16.908-6.08-29.592-19.942-33.441-36.547-1.655-7.139-.692-21.536 2.111-31.573 1.17-4.185 5.674-14.68 10.011-23.323 7.325-14.595 8.505-16.328 16.587-24.363 12.306-12.234 24.234-18.058 41.153-20.095 17.84-2.147 43.08 4.59 46.258 12.347 1.152 2.811.986 3.941-1.536 10.459-5.899 15.24-15.03 27.525-26.487 35.635-12.705 8.992-26.404 14.037-41.346 15.226l-7.774.618 4.807 6.402c6.534 8.702 9.223 16.172 9.78 27.166.375 7.408.052 10.119-1.925 16.188-2.551 7.833-6.07 12.45-10.141 13.308-1.398.295-5.024-.357-8.057-1.448zm-100.964-42.41c-12.677-3.65-18.759-8.12-18.737-13.772.015-3.93 6.392-16.459 10.913-21.442 7.751-8.544 21.603-15.087 31.854-15.048 2.811.011 5.112-.25 5.113-.58.001-.331-2.502-3.642-5.563-7.358-18.67-22.67-23.244-51.563-12.51-79.011 3.904-9.98 4.892-11.368 8.906-12.495 6.851-1.924 24.147 7.247 35.375 18.757 8.375 8.586 13.72 17.396 17.332 28.565 6.126 18.943 1.925 44.237-11.725 70.589-8.202 15.837-18.107 25.592-30.884 30.42-7.34 2.772-22.767 3.478-30.074 1.375z"/></svg>',
        },
        link: "https://0930124e.index-education.net/pronote/",
      },
      {
        icon: "github",
        link: github,
      },
    ],
    footer: {
      message: "Fait avec ❤️ à Pantin",
    },
    lastUpdated: {
      text: 'Dernière contribution',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
        forceLocale: true,
      }
    },
    docFooter: {
      prev: 'Précédent',
      next: 'Suivant',
    },
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: "Activer le thème clair",
    darkModeSwitchTitle: "Activer le thème sombre",
    sidebarMenuLabel: 'Plan de cours',
    returnToTopLabel: 'Retour en haut',
    externalLinkIcon: true,
    search: {
      provider: 'algolia',
      options: {
        appId: "9TE5KV94J0",
        apiKey: "4f40b79730bb4640efb7472c21f28d4b",
        indexName: "physique-chimie",
        placeholder: "Rechercher",
        translations: {
          button: {
            buttonText: "Rechercher",
            buttonAriaLabel: "Rechercher",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "Réinitialiser la recherche",
              resetButtonAriaLabel: "Réinitialiser la recherche",
              cancelButtonText: "Annuler",
              cancelButtonAriaLabel: "Annuler",
            },
            startScreen: {
              recentSearchesTitle: "Recherches récentes",
              noRecentSearchesText: "Aucune recherche récente",
              saveRecentSearchButtonTitle: "Enregistrer la recherche récente",
              removeRecentSearchButtonTitle: "Supprimer la recherche récente",
              favoriteSearchesTitle: "Recherches favorites",
              removeFavoriteSearchButtonTitle: "Supprimer la recherche favorite",
            },
            errorScreen: {
              titleText: "Une erreur s'est produite",
              helpText:
                "Essayez de rechercher à nouveau ou de modifier votre recherche",
            },
            footer: {
              selectText: "Sélectionner",
              selectKeyAriaLabel: "Sélectionner",
              navigateText: "Naviguer",
              navigateUpKeyAriaLabel: "Naviguer vers le haut",
              navigateDownKeyAriaLabel: "Naviguer vers le bas",
              closeText: "Fermer",
              closeKeyAriaLabel: "Fermer",
              searchByText: "Recherche par",
            },
            noResultsScreen: {
              noResultsText: "Aucun résultat trouvé",
              suggestedQueryText: "Recherche suggérée",
              reportMissingResultsText: "Signaler les résultats manquants",
              reportMissingResultsLinkText: "Signaler les résultats manquants",
            },
          },
        },
      }
    }
  },
  pwa: {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    manifest: {
      name: siteTitle,
      lang: "fr",
      orientation: "any",
      display: "standalone",
      display_override: [
        "window-controls-overlay",
        "standalone"
      ],
      short_name: siteTitle,
      description: siteDescription,
      start_url: "/",
      scope: "/",
      id: "classbot",
      theme_color: "#3eaf7c",
      background_color: "#3eaf7c",
      dir: "ltr",
      categories: [
        "education"
      ],
      launch_handler: {
        "client_mode": ["navigate-existing", "auto"]
      },
      icons: [
        {
          src: "/images/AppImages/any_icon.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any"
        },
        {
          src: "/images/AppImages/windows11/SmallTile.scale-100.png",
          sizes: "71x71",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SmallTile.scale-125.png",
          sizes: "89x89",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SmallTile.scale-150.png",
          sizes: "107x107",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SmallTile.scale-200.png",
          sizes: "142x142",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SmallTile.scale-400.png",
          sizes: "284x284",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square150x150Logo.scale-100.png",
          sizes: "150x150",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square150x150Logo.scale-125.png",
          sizes: "188x188",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square150x150Logo.scale-150.png",
          sizes: "225x225",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square150x150Logo.scale-200.png",
          sizes: "300x300",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square150x150Logo.scale-400.png",
          sizes: "600x600",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Wide310x150Logo.scale-100.png",
          sizes: "310x150",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Wide310x150Logo.scale-125.png",
          sizes: "388x188",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Wide310x150Logo.scale-150.png",
          sizes: "465x225",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Wide310x150Logo.scale-200.png",
          sizes: "620x300",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Wide310x150Logo.scale-400.png",
          sizes: "1240x600",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/LargeTile.scale-100.png",
          sizes: "310x310",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/LargeTile.scale-125.png",
          sizes: "388x388",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/LargeTile.scale-150.png",
          sizes: "465x465",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/LargeTile.scale-200.png",
          sizes: "620x620",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/LargeTile.scale-400.png",
          sizes: "1240x1240",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.scale-100.png",
          sizes: "44x44",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.scale-125.png",
          sizes: "55x55",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.scale-150.png",
          sizes: "66x66",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.scale-200.png",
          sizes: "88x88",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.scale-400.png",
          sizes: "176x176",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/StoreLogo.scale-100.png",
          sizes: "50x50",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/StoreLogo.scale-125.png",
          sizes: "63x63",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/StoreLogo.scale-150.png",
          sizes: "75x75",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/StoreLogo.scale-200.png",
          sizes: "100x100",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/StoreLogo.scale-400.png",
          sizes: "200x200",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SplashScreen.scale-100.png",
          sizes: "620x300",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SplashScreen.scale-125.png",
          sizes: "775x375",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SplashScreen.scale-150.png",
          sizes: "930x450",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SplashScreen.scale-200.png",
          sizes: "1240x600",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/SplashScreen.scale-400.png",
          sizes: "2480x1200",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-20.png",
          sizes: "20x20",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-24.png",
          sizes: "24x24",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-30.png",
          sizes: "30x30",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-36.png",
          sizes: "36x36",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-40.png",
          sizes: "40x40",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-44.png",
          sizes: "44x44",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.targetsize-256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          sizes: "20x20",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          sizes: "24x24",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          sizes: "30x30",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          sizes: "36x36",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          sizes: "40x40",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          sizes: "44x44",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          sizes: "20x20",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          sizes: "24x24",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          sizes: "30x30",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          sizes: "36x36",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          sizes: "40x40",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          sizes: "44x44",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/images/AppImages/android/android-launchericon-512-512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/images/AppImages/android/android-launchericon-192-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/images/AppImages/android/android-launchericon-144-144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "/images/AppImages/android/android-launchericon-96-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/images/AppImages/android/android-launchericon-72-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/images/AppImages/android/android-launchericon-48-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/20.png",
          sizes: "20x20",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/29.png",
          sizes: "29x29",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/40.png",
          sizes: "40x40",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/50.png",
          sizes: "50x50",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/57.png",
          sizes: "57x57",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/58.png",
          sizes: "58x58",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/76.png",
          sizes: "76x76",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/87.png",
          sizes: "87x87",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/100.png",
          sizes: "100x100",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/114.png",
          sizes: "114x114",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/120.png",
          sizes: "120x120",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/128.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/167.png",
          sizes: "167x167",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/180.png",
          sizes: "180x180",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/images/AppImages/ios/1024.png",
          sizes: "1024x1024",
          type: "image/png"
        },
        {
          purpose: "maskable",
          sizes: "48x48",
          src: "/images/AppImages/maskables/maskable_icon_x48.png",
          type: "image/png"
        },
        {
          purpose: "maskable",
          sizes: "72x72",
          src: "/images/AppImages/maskables/maskable_icon_x72.png",
          type: "image/png"
        },
        {
          purpose: "maskable",
          sizes: "96x96",
          src: "/images/AppImages/maskables/maskable_icon_x96.png",
          type: "image/png"
        },
        {
          purpose: "maskable",
          sizes: "128x128",
          src: "/images/AppImages/maskables/maskable_icon_x128.png",
          type: "image/png"
        },
        {
          purpose: "maskable",
          sizes: "192x192",
          src: "/images/AppImages/maskables/maskable_icon_x192.png",
          type: "image/png"
        },
        {
          purpose: "maskable",
          sizes: "384x384",
          src: "/images/AppImages/maskables/maskable_icon_x384.png",
          type: "image/png"
        },
        {
          purpose: "maskable",
          sizes: "512x512",
          src: "/images/AppImages/maskables/maskable_icon_x512.png",
          type: "image/png"
        }
      ],
      screenshots: [
        {
          "src": "/images/screenshot.webp",
          "sizes": "1394x786",
          "type": "image/webp",
          "form_factor": "wide",
          "label": "classBot_ screenshot"
        }
      ]
    },
    workbox: {
      sourcemap: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
    },
  },
  vite: {},
}))
