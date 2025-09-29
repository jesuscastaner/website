import type { SitePage, Social } from "#types";

/** site author */
const author = "Jesús Castañer";

/* site metadata */
export const SITE = {
  /**
   * site name
   */
  name: "jesuscastaner.com",
  /**
   * site description
   */
  description: `Sitio web de ${author}.`,
  /**
   * site author
   */
  author: author,
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
    description: `Publicaciones de ${SITE.author}.`,
  },
  /**
   * tags page
   */
  tags: {
    name: "Etiquetas",
    href: "/tags",
    description: "Búsqueda de contenido por etiquetas.",
  },
  /**
   * search page
   */
  search: {
    name: "Buscar",
    href: "/search",
    description: "Búsqueda de contenido en el sitio web.",
  },
  /**
   * contact page
   */
  contact: {
    name: "Contacto",
    href: "/contact",
    description: `Página de contacto de ${SITE.author}.`,
  },
} as const satisfies Record<string, SitePage>;

/** social media links */
export const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jesuscastaner/",
    iconSlug: "logos/linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/jesuscastaner",
    iconSlug: "logos/github",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/profile.php?id=100007511928598",
    iconSlug: "logos/facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/jesuscastaner/",
    iconSlug: "logos/instagram",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/jesuscastaner",
    iconSlug: "logos/x-twitter",
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@jesuscastaner",
    iconSlug: "logos/mastodon",
  },
] satisfies Social[];
