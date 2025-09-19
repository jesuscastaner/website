/** @type {import('stylelint').Config} */
export default {
  // rules
  extends: ["stylelint-config-recommended", "stylelint-config-html"],

  // ignore everything except these files
  ignoreFiles: ["!**/*.{astro,css}"],
};
