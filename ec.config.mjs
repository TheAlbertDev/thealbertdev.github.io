import { defineEcConfig } from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
  themes: ['github-dark-dimmed', 'github-light'],
  themeCssSelector: (theme) => `[data-code-theme='${theme.name}']`,
  useDarkModeMediaQuery: false,
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
});
