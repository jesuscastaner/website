export default {
  // run lint and format checks before commit
  "*": ["prettier --check --ignore-unknown"],
  "*.{astro,cjs,cts,js,mjs,mts,ts}": ["eslint"],
  "*.{astro,css}": ["stylelint"],
  "*.md": ["markdownlint"],
};
