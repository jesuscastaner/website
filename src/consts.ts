import type { SitePage } from "#types";

/* site metadata */
export const SITE = {
  /**
   * site name
   */
  name: "jesuscastaner.com",
  /**
   * site description
   */
  description: "Sitio web de Jesús Castañer.",
  /**
   * site language
   */
  lang: "es",
} as const;

/** site pages */
export const PAGES = {
  /**
   * home page
   */
  home: {
    name: "Inicio",
    href: "/",
    description: SITE.description,
  },
  /**
   * posts page
   */
  posts: {
    name: "Publicaciones",
    href: "/posts",
    description: "Publicaciones de Jesús Castañer.",
  },
  /**
   * contact page
   */
  contact: {
    name: "Contacto",
    href: "/contact",
    description: "Página de contacto de Jesús Castañer.",
  },
} as const satisfies Record<string, SitePage>;
