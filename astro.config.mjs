// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/all";
import partytown from "@astrojs/partytown";
import serviceWorker from "astrojs-service-worker";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://www.blackkalu.com/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: ["rehype-plugin-image-native-lazy-loading"],
    smartypants: true,
    gfm: true
  },
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push", "adsbygoogle.push"]
    }
  }), serviceWorker(), compress()]
});