import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bunian.netlify.app",
  experimental: {
    contentIntellisense: true,
  },
  integrations: [tailwind(), sitemap(), compress(), icon()],
});
