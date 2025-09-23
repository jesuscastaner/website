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
  {
    // use type aliases over interfaces
    files: ["**/*.astro", "**/*.cts", "**/*.mts", "**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  // ignore files listed in .gitignore
  includeIgnoreFile(fileURLToPath(new URL(".gitignore", import.meta.url))),
]);
