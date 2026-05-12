import { z, reference, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().default(true),
    description: z.string(),
    category: reference("categories"),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    authors: z.array(z.object({ author: reference("authors") })),
    pubDate: z.date(),
    translatedPosts: z
      .array(
        z.object({
          translatedPost: reference("posts"),
        }),
      )
      .optional(),
    relatedPosts: z
      .array(
        z.object({
          relatedPost: reference("posts"),
        }),
      )
      .optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({}),
});

const categoriesCollection = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/categories" }),
  schema: z.object({
    name: z.string(),
  }),
});

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    surname: z.string().optional(),
    image: z.string(),
    email: z.string().optional(),
    socialMedia: z
      .array(z.object({ name: z.string(), icon: z.string(), link: z.string() }))
      .optional(),
  }),
});

const publicationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    type: z.enum([
      "journal",
      "patent",
      "book",
      "chapter",
      "thesis",
      "proceeding",
    ]),
    pubYear: z.number(),
    pubMonth: z.number(),
    pubDay: z.number().optional(),
    doi: z.string().optional(),
    journal: z.string().optional(),
    authors: z.array(z.string()),
    publisher: z.string().optional(),
    volume: z.string().optional(),
    number: z.string().optional(),
    pages: z.string().optional(),
    abstract: z.string().optional(),
    isbn: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
  authors: authorsCollection,
  publications: publicationsCollection,
  categories: categoriesCollection,
};
