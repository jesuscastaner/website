import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import globals from "globals";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  ts.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
  },

  // ignore files listed in .gitignore
  includeIgnoreFile(fileURLToPath(new URL(".gitignore", import.meta.url))),
]);
