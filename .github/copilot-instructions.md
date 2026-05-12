# Copilot Instructions for thealbertdev.github.io

## Project Overview
- **Framework:** Astro (with MDX, TailwindCSS, DaisyUI, Expressive Code, Partytown, Sitemap, Astro Icon)
- **Languages:** TypeScript, Astro, Markdown, YAML
- **Purpose:** Personal website/blog with multilingual support (Spanish, English), publications, and blog posts.

## Key Architecture & Patterns
- **Content Structure:**
  - Posts, pages, categories, authors, and publications are defined in `src/content/` using Astro Content Collections and YAML files.
  - Posts and pages are organized by language (`en`, `es`) in subfolders.
  - Author and publication metadata are in YAML files for structured data.
- **Internationalization (i18n):**
  - Language strings and helpers in `src/i18n/ui.ts` and `src/i18n/utils.ts`.
  - Routing and translation helpers: `getLangFromUrl`, `useTranslations`, `useTranslatedPath`.
  - Language picker logic in `src/components/LanguagePicker.astro`.
- **Components:**
  - All UI components in `src/components/` (Astro components, some using TailwindCSS/DaisyUI).
  - Layouts in `src/layouts/` (main layout: `Layout.astro`).
- **Plugins & Customization:**
  - Custom rehype plugin for external links: `src/plugins/targetBlank.ts` (adds `target="_blank"` except for own domain).
  - TailwindCSS config in `tailwind.config.mjs` (with DaisyUI themes).
- **SEO & Analytics:**
  - Uses `astro-seo` for SEO meta tags.
  - Google Analytics via Partytown in `Layout.astro`.

## Developer Workflows
- **Install:** `npm install`
- **Dev Server:** `npm run dev` (or `npm start`)
- **Build:** `npm run build` (runs `astro check` before build)
- **Preview:** `npm run preview`
- **Astro CLI:** `npm run astro -- <command>` (e.g., `npm run astro -- check`)

## Project-Specific Conventions
 **Content:**
   - All posts/pages must have language-specific slugs and metadata.
   - Images referenced in content must exist in `src/assets/imgs/`.
   - Use `draft: true` in post frontmatter to hide drafts.
  - **Post Metadata (YAML frontmatter) fields:**
     - `title`: Post title (string)
     - `description`: Short summary of the post (string)
     - `draft`: true/false (hide if true)
     - `category`: Category slug (e.g. `en/electronics`)
     - `tags`: List of tags (array of strings)
     - `image`: Path to main image (should exist in `src/assets/imgs/`)
     - `authors`: List of authors (YAML objects with `author` key, e.g. `- author: albert-alvarez`)
     - `pubDate`: Publication date in ISO format (e.g. `2026-02-23T00:00:00.000Z`)
     - `translatedPosts`: List of translated post slugs (YAML objects with `translatedPost` key)
     - (Optional) `slug`, `lang`, and other custom fields as needed
   - **Important:** Do not use tab characters for indentation in YAML frontmatter of content files (posts, pages, categories, etc.). Use spaces only, as tab characters will cause parsing errors in Astro/MDX.
   - **Category YAML structure:**
     - When creating, editing, or removing a category, always perform the change for both Spanish (`es`) and English (`en`) versions to maintain multilingual consistency.
     - `name`: Category name (string, required)
     - (Optional) `description`, `lang`, or other fields as needed
- **Styling:**
  - Use Tailwind utility classes and DaisyUI components.
  - Global styles in `src/styles/global.css`.
- **External Links:**
  - Use absolute URLs for external links; internal links should use Astro's routing helpers.

## Integration Points
- **Astro Integrations:** See `astro.config.mjs` for all enabled plugins.
- **Content Collections:** Defined in `src/content/config.ts`.
- **SEO:** Use the `SEO` component from `astro-seo` in layouts/pages.

## Examples
- See `src/components/PostCard.astro` for post rendering and image validation.
- See `src/pages/[...lang]/[...about].astro` for i18n-aware page routing and content loading.

---

For more details, see the [README.md](../README.md) or Astro documentation.
