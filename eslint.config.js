import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-config"; // Добавляем импорт


export default defineConfig([
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      ...stylistic.rules, // Добавляем правила Stylistic
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: "commonjs",
    },
    plugins: { js },
    extends: ["js/recommended"],
  }
]);

