import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sidali-djeghbal.github.io",
  base: "/bunian-links/",
  integrations: [tailwind(), sitemap(), icon()],
  build: {
    inlineStylesheets: "auto",
  },
});
