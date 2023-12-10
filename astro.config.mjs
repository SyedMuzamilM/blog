// https://astro.build/config
import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/all";
import partytown from "@astrojs/partytown";
import serviceWorker from "astrojs-service-worker";
import compress from "astro-compress";
import react from "@astrojs/react";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://www.blackkalu.com/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: ["rehype-plugin-image-native-lazy-loading"],
    smartypants: true,
    gfm: true,
  },
  image: {
    service: squooshImageService()
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push", "adsbygoogle.push"],
      },
    }),
    serviceWorker(),
    compress({
      svg: false,
    }),
    react(),
    purgecss(),
  ],
});
