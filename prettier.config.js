/** @type {import('prettier').Config} */
export default {
  // core settings
  quoteProps: "preserve",
  proseWrap: "always",
  singleAttributePerLine: true,

  // plugin settings
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
