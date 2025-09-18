import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
   {
    ignores: ["node_modules/**", "dist/**", "eslint.config.mjs"], // 👈 move here
  },
  {
       files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    rules: {
      // eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-unused-expressions": ["error", { ignoreReadBeforeAssign: true }],
      "no-undef": ["error"],
      "no-console": ["warn"],      
    },
   
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended
]);
