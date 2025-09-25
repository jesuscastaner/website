import { SITE } from "#consts";
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
    authors: z.string().or(z.array(z.string())).default(SITE.author),
    /**
     * post publication date
     */
    pubDate: z.coerce.date(),
    /** original publication */
    originalPub: z
      .object({
        /** name of the original publisher */
        publisher: z.string(),
        /** url to the original publication */
        url: z.string().url().optional(),
      })
      .optional(),
    /**
     * post tags
     */
    tags: z.array(z.string()).default(["otros"]),
  }),
});

/** all collections */
export const collections = { posts };
