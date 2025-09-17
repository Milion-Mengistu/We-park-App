import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // Ignore patterns
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "build/**",
      "dist/**",
      "out/**",
      "public/assets/**",
      "coverage/**",
      ".nyc_output/**",
      "**/*.log",
      ".env*",
      "public/sw.js",
      "public/workbox-*.js",
      "prisma/migrations/**",
      "**/*.backup",
      "**/*.bak",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
      "**/*.d.ts",
      "src/generated/**",
      "next-env.d.ts"
    ]
  },
  // Main configuration - using only Next.js configs for compatibility
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "react/no-unescaped-entities": "warn"
    }
  }
];

export default eslintConfig;