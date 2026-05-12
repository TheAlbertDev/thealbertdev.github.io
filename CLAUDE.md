# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Dev server on port 3000 (0.0.0.0)
npm run build     # astro check + build to ./dist/
npm run preview   # Preview production build locally
npm run astro -- check  # Type-check only
```

## Architecture

This is an Astro static site — Albert's personal blog at `thealbert.dev`. It uses TailwindCSS + DaisyUI for styling, MDX for blog posts, and Expressive Code for syntax highlighting.

### i18n routing

Default locale is `es` (Spanish), `en` is secondary. The Spanish URL has no language prefix (`/posts/...`), English uses `/en/posts/...`. All pages live under `src/pages/[...lang]/` and use `getLangFromUrl`, `useTranslations`, and `useTranslatedPath` from `src/i18n/utils.ts` to resolve the current language and translate navigation paths.

### Content collections (`src/content/`)

- `posts/{lang}/{slug}.mdx` — blog posts, organized by language subfolder
- `pages/{lang}/{slug}.mdx` — static pages (about, contact)
- `categories/{lang}/{slug}.yaml` — post categories
- `authors/{slug}.yaml` — author profiles (shared across languages)
- `publications/{slug}.yaml` — academic publications (language-agnostic)

Collections are typed in `src/content/config.ts`. Posts reference categories and authors by slug.

### Post frontmatter

```yaml
title: ""
draft: false          # true hides the post
description: ""
category: en/slug     # must match a file in src/content/categories/{lang}/
tags: []
image: /src/assets/imgs/filename.jpg   # must exist in src/assets/imgs/
authors:
  - author: albert-alvarez              # must match src/content/authors/{slug}.yaml
pubDate: 2025-01-01T00:00:00.000Z
translatedPosts:
  - translatedPost: es/matching-slug   # optional cross-link to translated version
relatedPosts:
  - relatedPost: en/another-slug       # optional
```

## Conventions

- **Always create content for both languages.** New posts, pages, and categories must have both an `es/` and an `en/` version to maintain i18n consistency.
- **YAML frontmatter must use spaces, not tabs.** Tab characters cause parse errors in Astro/MDX.
- **Images must exist in `src/assets/imgs/`** before being referenced in post frontmatter. The slug page throws at build time if the glob doesn't match.
- **Styling** uses Tailwind utility classes and DaisyUI components. Themes are `light` and `dark` (configured in `tailwind.config.mjs`). Global styles are in `src/styles/global.css`.
- **External links** get `target="_blank"` automatically via the `targetBlank` rehype plugin (`src/plugins/targetBlank.ts`). Internal links use `useTranslatedPath` helpers.
