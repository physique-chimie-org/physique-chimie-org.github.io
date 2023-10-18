import { HeadConfig } from "vitepress";
import { author, keywords, siteTitle } from "./meta";

export const head: HeadConfig[] = [
    [
        "link",
        {
            rel: "apple-touch-icon",
            href: "/images/icons/apple-touch-icon.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "57x57",
            href: "/images/icons/apple-touch-icon-57x57.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "60x60",
            href: "/images/icons/apple-touch-icon-60x60.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "72x72",
            href: "/images/icons/apple-touch-icon-72x72.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "76x76",
            href: "/images/icons/apple-touch-icon-76x76.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "114x114",
            href: "/images/icons/apple-touch-icon-114x114.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "120x120",
            href: "/images/icons/apple-touch-icon-120x120.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "144x144",
            href: "/images/icons/apple-touch-icon-144x144.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "152x152",
            href: "/images/icons/apple-touch-icon-152x152.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/images/icons/apple-touch-icon-180x180.png",
        },
    ],
    ["link", { rel: "shortcut icon", href: "/images/icons/favicon.ico" }],
    [
        "link",
        { rel: "icon", type: "image/x-icon", href: "/images/icons/favicon.ico" },
    ],
    [
        "link",
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/images/icons/favicon-16x16.png",
        },
    ],
    [
        "link",
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/images/icons/favicon-32x32.png",
        },
    ],
    [
        "link",
        {
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            href: "/images/icons/favicon-192x192.png",
        },
    ],
    [
        "link",
        {
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            href: "/images/icons/android-chrome-192x192.png",
        },
    ],
    [
        "link",
        {
            rel: "manifest",
            type: "application/manifest+json",
            href: "/manifest.webmanifest",
        },
    ],
    [
        "link",
        {
            rel: "mask-icon",
            href: "/images/icons/safari-pinned-tab.svg",
            color: "#3eaf7c",
        },
    ],
    ["meta", { siteTitle: "msapplication-TileColor", content: "#3eaf7c" }],
    ["meta", { siteTitle: "msapplication-config", content: "/browserconfig.xml" }],
    [
        "meta",
        {
            siteTitle: "theme-color",
            media: "(prefers-color-scheme: light)",
            content: "#ffffff",
        },
    ],
    [
        "meta",
        {
            siteTitle: "theme-color",
            media: "(prefers-color-scheme: dark)",
            content: "#242424",
        },
    ],
    ["meta", { siteTitle: "mobile-web-app-capable", content: "yes" }],
    ["meta", { siteTitle: "apple-mobile-web-app-capable", content: "yes" }],
    [
        "meta",
        {
            siteTitle: "viewport",
            content:
                "width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes",
        },
    ],
    ["meta", { siteTitle: "application-siteTitle", content: siteTitle }],
    ["meta", { siteTitle: "apple-mobile-web-app-title", content: siteTitle }],
    ["meta", { siteTitle: "author", content: author }],
    ["meta", { siteTitle: "generator", content: "VitePress" }],
    ["meta", { siteTitle: "keywords", content: keywords }],
];
