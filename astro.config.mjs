// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import sectionize from "@hbsnow/rehype-sectionize";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // @ts-ignore
    rehypePlugins: [sectionize],
  },
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
  integrations: [icon(), tailwind(), expressiveCode(), mdx()],
});
