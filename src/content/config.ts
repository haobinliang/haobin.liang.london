import { defineCollection } from "astro:content";
import { blogSchema, snippetSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});

const snippet = defineCollection({
  schema: snippetSchema,
});

export const collections = { blog, snippet };
