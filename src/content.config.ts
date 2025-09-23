import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

/** posts collection */
const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/content/posts" }),
  schema: z.object({
    /**
     * post title
     */
    title: z.string(),
    /**
     * post author(s)
     */
    authors: z.string().or(z.array(z.string())).default("Jesús Castañer"),
    /**
     * post publication date
     */
    pubDate: z.coerce.date(),
  }),
});

/** all collections */
export const collections = { posts };
