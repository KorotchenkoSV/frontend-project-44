import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      globals: {
        ...globals.node, // подключаем глобальные переменные Node.js (включая process)
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      // ваши дополнительные правила
    }
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

