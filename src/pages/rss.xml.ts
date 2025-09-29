import { SITE } from "#consts";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

/**
 * generates and serves rss feed containing site metadata and posts list
 * @param context astro endpoint context object
 * @returns rss xml response
 */
export const GET: APIRoute = async (context) => {
  /** all posts */
  const posts = await getCollection("posts");
  // sort posts by publication date, newest first
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      /**
       * link to the post
       */
      link: `/posts/${post.id}/`,
      // destructure post data
      ...post.data,
    })),
  });
};
