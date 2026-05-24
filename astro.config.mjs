import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentIntellisense: true,
  },
  integrations: [mdx(), sitemap(), tailwind(), partytown(), compress()],
});
