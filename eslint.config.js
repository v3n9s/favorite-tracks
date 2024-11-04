// @ts-check
import path from "node:path";
import url from "node:url";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";

export default tseslint.config(
  {
    files: ["**/*.ts", "eslint.config.js"],
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.js"],
        },
        tsconfigRootDir: path.dirname(url.fileURLToPath(import.meta.url)),
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      // angular configured
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],

      // additional
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowDirectConstAssertionInArrowFunctions: false,
          allowExpressions: true,
          allowHigherOrderFunctions: false,
        },
      ],
      "@typescript-eslint/no-extraneous-class": [
        "error",
        { allowWithDecorator: true },
      ],
      "@typescript-eslint/strict-boolean-expressions": ["error"],

      // stylistic
      "@typescript-eslint/consistent-type-definitions": ["off"],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
);
