import { createWriteStream } from "node:fs";
import { resolve } from "pathe";
import { SitemapStream } from "sitemap";

export interface SitemapLinks {
  url: string;
  lastmod?: number;
}

export const generateSitemap = (outDir: string, sitemapLinks: SitemapLinks[]) => {
  const sitemap = new SitemapStream({
    hostname: "https://physique-chimie-org.github.io/",
  });
  const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
  sitemap.pipe(writeStream);
  sitemapLinks.forEach((link) => sitemap.write(link));
  sitemap.end();
  console.log("\x1B[32m✓\x1B[0m generate sitemap... \x1B[90m[buildEnd]\x1B[0m");
};
