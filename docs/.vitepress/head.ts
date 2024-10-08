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
            rel: "manifest",
            type: "application/manifest+json",
            href: "/manifest.webmanifest",
        },
    ],
    [
        "meta",
        {
            name: "theme-color",
            media: "(prefers-color-scheme: light)",
            content: "#f6f6f7",
        },
    ],
    [
        "meta",
        {
            name: "theme-color",
            media: "(prefers-color-scheme: dark)",
            content: "#161618",
        },
    ],
    ["meta", { name: "mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
        "meta",
        {
            name: "viewport",
            content:
                "width=device-width, initial-scale=1",
        },
    ],
    ["meta", { name: "application-siteTitle", content: siteTitle }],
    ["meta", { name: "apple-mobile-web-app-title", content: siteTitle }],
    ["meta", { name: "author", content: author }],
    ["meta", { name: "generator", content: "VitePress" }],
    ["meta", { name: "keywords", content: keywords }],
];
