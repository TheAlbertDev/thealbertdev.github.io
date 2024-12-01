/** @type {import('tailwindcss').Config} */
import tailwindCss from "@tailwindcss/typography";
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui, tailwindCss],
  daisyui: {
    themes: ["light", "dark"],
  },
};
