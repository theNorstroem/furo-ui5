import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importXPlugin from "eslint-plugin-import-x";
import litPlugin from "eslint-plugin-lit";
import litA11yPlugin from "eslint-plugin-lit-a11y";
import wcPlugin from "eslint-plugin-wc";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      "**/*.js",
      "**/*.html",
      "**/*.d.ts",
      "stories/**",
      ".agents/**",
      "dist/**",
      "node_modules/**",
      "src/wc-type-renderer/**",
      "src/models/**",
      "src/x/models/**", // Generated protobuf models
    ],
  },

  // Base configs
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // Lit & Web Component flat configs (include plugins + rules together)
  litPlugin.configs["flat/all"],
  wcPlugin.configs["flat/best-practice"],

  // Main config for TypeScript files
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: { project: ["./tsconfig.eslint.json"] },
    },
    settings: {
      wc: { elementBaseClasses: ["LitElement", "LitFBP"] },
      "import-x/resolver": {
        node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
      },
    },
    plugins: {
      "unused-imports": unusedImports,
      "import-x": importXPlugin,
      "lit-a11y": litA11yPlugin,
    },
    rules: {
      // lit-a11y rules (no flat config support)
      ...litA11yPlugin.configs.recommended.rules,

      // Rules formerly from @open-wc/eslint-config
      "no-underscore-dangle": "off",
      "arrow-parens": ["error", "always"],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "LabeledStatement",
          message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "class-methods-use-this": [
        "error",
        {
          exceptMethods: [
            "connectedCallback",
            "disconnectedCallback",
            "performUpdate",
            "shouldUpdate",
            "firstUpdated",
            "update",
            "updated",
            "createRenderRoot",
            "render",
            "onPageActivated",
            "onPageQueryChanged",
            "onPageUpdated",
            "onPageDeactivated",
          ],
        },
      ],

      // Original .eslintrc rules (preserved exactly)
      "unused-imports/no-unused-imports": "error",
      "lit/quoted-expressions": ["error", "always"],

      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "warn",
      "wc/guard-super-call": "off",
      "import-x/no-unresolved": "off",
      "import-x/no-cycle": "off",
      "no-use-before-define": "off",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          "": "never",
          js: "always",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "max-classes-per-file": ["error", { ignoreExpressions: true, max: 2 }],

      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-function": "error",

      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" }],
      "no-unused-vars": "off", // Using @typescript-eslint/no-unused-vars instead

      // Import ordering (was simple-import-sort, now using import-x/order)
      "import-x/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index"],
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // Disable import/* namespace (using import-x instead)
      "import/no-duplicates": "off",
      "import/order": "off",
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "import/no-cycle": "off",
      "import/no-extraneous-dependencies": "off",
      "import/prefer-default-export": "off", // Named exports are standard for Lit components
    },
  },

  // Test file overrides
  {
    files: ["src/JSX/*.ts"],
    rules: {
      "@typescript-eslint/no-namespace":"off",
      "@typescript-eslint/no-empty-object-type":"off"
    },
  },
  // Test file overrides
  {
    files: ["src/**/*.spec.ts", "src/util/test-helpers/**/*.ts"],
    rules: {
      "require-jsdoc": "off",
      "import-x/extensions": "off",
      "import-x/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "class-methods-use-this": "off",
    },
  }
);
