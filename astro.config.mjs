// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import sectionize from "@hbsnow/rehype-sectionize";
import expressiveCode from "astro-expressive-code";
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';
import { targetBlank } from './src/plugins/targetBlank';

// https://astro.build/config
export default defineConfig({
  site: 'https://thealbert.dev',
  markdown: {
    // @ts-ignore
    rehypePlugins: [sectionize, [targetBlank, { domain: 'thealbert.dev' }]],
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
  integrations: [
    icon(),
    tailwind(),
    expressiveCode(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    mdx(),
  ],
});
