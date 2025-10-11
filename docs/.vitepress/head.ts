import { HeadConfig } from "vitepress";
import { adsenseOptions, author, keywords, siteTitle } from "./meta";

export const head: HeadConfig[] = [
    [
        "meta",
        {
            name: "viewport",
            content:
                "width=device-width, initial-scale=1",
        },
    ],
    [
        "link",
        { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
    ],
    [
        "link",
        { rel: "icon", href: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    [
        "link",
        { rel: "apple-touch-icon", href: "/images/icons/apple-touch-icon-180x180.png" },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-2048x2732.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2732x2048.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1668x2388.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2388x1668.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1536x2048.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2048x1536.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1640x2360.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2360x1640.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1668x2224.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2224x1668.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1620x2160.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2160x1620.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1488x2266.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2266x1488.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1320x2868.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2868x1320.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1206x2622.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2622x1206.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1290x2796.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2796x1290.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1179x2556.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2556x1179.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1170x2532.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2532x1170.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1284x2778.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2778x1284.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1125x2436.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2436x1125.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1242x2688.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2688x1242.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-828x1792.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-1792x828.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-1242x2208.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-2208x1242.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-750x1334.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-1334x750.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
            href: "/images/apple-splash/apple-splash-portrait-light-640x1136.png",
        },
    ],
    [
        "link",
        {
            rel: "apple-touch-startup-image",
            media: "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
            href: "/images/apple-splash/apple-splash-landscape-light-1136x640.png",
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
    ["meta", { name: "application-siteTitle", content: siteTitle }],
    ["meta", { name: "apple-mobile-web-app-title", content: siteTitle }],
    ["meta", { name: "author", content: author }],
    ["meta", { name: "generator", content: "VitePress" }],
    ["meta", { name: "keywords", content: keywords }],
    ["meta", { name: "google-adsense-account", content: adsenseOptions.client }],
];
