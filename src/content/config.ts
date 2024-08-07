import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default(["general"]),
  }),
});

export const collections = {
  blog: blogCollection,
};
