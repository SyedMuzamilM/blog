// https://astro.build/config
import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/all";
import partytown from "@astrojs/partytown";
import serviceWorker from "astrojs-service-worker";
import react from "@astrojs/react";
// import purgecss from "astro-purgecss";
import rehype from 'rehype-plugin-image-native-lazy-loading'
import Compress from 'astro-compress' 

// https://astro.build/config
export default defineConfig({
  site: "https://www.blackkalu.com/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehype],
    smartypants: true,
    gfm: true
  },
  image: {
    service: squooshImageService()
  },
  integrations: [
    mdx(), 
    sitemap(), 
    partytown({
      config: {
        forward: ["dataLayer.push", "adsbygoogle.push"]
      }
    }), 
    serviceWorker(),
    react(), 
    // purgecss(),
    Compress(),
    tailwind(), 
  ],
  redirects: {
    '/archive': '/blog'
  }
});