import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-config';


export default defineConfig([
  {
    files: ['**/*.{js,mjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ...stylistic, // Полностью заменяем конфигурацию на Stylistic
  },
]);

