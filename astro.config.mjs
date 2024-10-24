// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon(), tailwind()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallback: {
      en: "es",
    },
    routing: {
      fallbackType: "rewrite",
      prefixDefaultLocale: false,
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
