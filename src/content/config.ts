import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default(["general"]),
    lang: z.enum(["en", "es"]),
    /** Shared by a post and its translation, so the language switch can find the pair. */
    translationKey: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
