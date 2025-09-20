import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jesuscastaner.com/",
  integrations: [mdx()],
});
