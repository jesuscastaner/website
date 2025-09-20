import { defineConfig } from "cspell";

export default defineConfig({
  // languages and dictionaries
  language: "en,es",
  import: ["@cspell/dict-es-es/cspell-ext.json"],
  dictionaryDefinitions: [
    {
      name: "dict-website",
      path: "dict-website.txt",
      addWords: true,
    },
  ],
  dictionaries: ["dict-website"],

  // patterns
  patterns: [
    {
      // c-style comments
      name: "c-comments",
      pattern: /\/\*[\s\S]*?\*\/|\/\/.*/g,
    },
    {
      // hash-style comments
      name: "hash-comments",
      pattern: /#.*/gm,
    },
    {
      // html-style comments
      name: "html-comments",
      pattern: /<!--[\s\S]*?-->/g,
    },
  ],

  // check these files
  files: ["**"],
  enableGlobDot: true,
  overrides: [
    {
      filename: ["*.astro"],
      includeRegExpList: ["c-comments", "html-comments"],
    },
    {
      filename: ["*.html"],
      includeRegExpList: ["html-comments"],
    },
    {
      filename: ["*.{cjs,css,cts,js,json,jsonc,mjs,mts,ts}"],
      includeRegExpList: ["c-comments"],
    },
    {
      filename: ["*.{gitignore,yaml,yml}", ".husky/**"],
      includeRegExpList: ["hash-comments"],
    },
  ],

  // ignore these files
  useGitignore: true,
  ignorePaths: [
    ".git/**",
    "*.json",
    "package-lock.json",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
  ],
});
