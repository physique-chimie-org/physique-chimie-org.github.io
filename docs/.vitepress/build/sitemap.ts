import { createWriteStream } from "node:fs";
import { resolve } from 'pathe'
import { SitemapStream } from "sitemap";

import { sitemapLinks } from "../config";

export const generateSitemap = ({ outDir }) => {
  const sitemap = new SitemapStream({
    hostname: "https://physique-chimie-org.github.io/",
  });
  const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
  sitemap.pipe(writeStream);
  sitemapLinks.forEach((link) => sitemap.write(link));
  sitemap.end();
  console.log(
    "\x1B[32m✓\x1B[0m generate sitemap... \x1B[90m[buildEnd]\x1B[0m"
  );
};
