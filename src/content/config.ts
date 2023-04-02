import { defineCollection } from "astro:content";
import { blogSchema, snippetSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});

export const collections = { blog };

declare module "twikoo";