/** site page */
export type SitePage = {
  /**
   * name of the site page
   */
  name: string;
  /**
   * link to the site page
   */
  href: string;
  /**
   * description of the site page
   */
  description: string;
};

/** social media link */
export type Social = {
  /**
   * name of the social media platform
   */
  name: string;
  /**
   * link to the social media profile
   */
  href: string;
  /**
   * icon of the social media platform
   */
  iconSlug: string;
};
