import type { APIRoute } from "astro";

/**
 * generates and serves the robots.txt file
 * @param site site url provided in the astro config
 * @returns response with robots.txt file content
 */
export const GET: APIRoute = ({ site }) => {
  /** URL for the sitemap location */
  const sitemapURL = new URL("sitemap-index.xml", site);
  /** robots.txt file content */
  const robotsTxt = `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

  return new Response(robotsTxt);
};
