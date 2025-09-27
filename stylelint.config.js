/** @type {import('stylelint').Config} */
export default {
  // rules
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html",
    "stylelint-config-tailwindcss",
  ],

  // ignore everything except these files
  ignoreFiles: ["!**/*.{astro,css}"],

  // cache
  cache: true,
};
