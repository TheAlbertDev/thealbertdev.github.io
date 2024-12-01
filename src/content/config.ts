import { z, reference, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
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

const categoriesCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

const authorsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      surname: z.string().optional(),
      image: image(),
      email: z.string().optional(),
      socialMedia: z
        .array(
          z.object({ name: z.string(), icon: z.string(), link: z.string() }),
        )
        .optional(),
    }),
});

const publicationsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    type: z.enum(["journal", "patent", "book", "thesis"]),
    pubYear: z.number(),
    pubMonth: z.number(),
    pubDay: z.number().optional(),
    doi: z.string().optional(),
    journal: z.string().optional(),
    authors: z.array(z.string()),
    publisher: z.string().optional(),
    volume: z.number().optional(),
    number: z.number().optional(),
    pages: z.string().optional(),
    abstract: z.string().optional(),
    preprint: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
  publications: publicationsCollection,
  categories: categoriesCollection,
};
