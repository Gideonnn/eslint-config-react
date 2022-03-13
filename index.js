module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "standard-react",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "promise",
    "import",
    "prettier",
    "simple-import-sort",
    "@typescript-eslint",
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [["react"], ["^@?\\w"], ["^"], ["^\\."], ["^\\u0000"]],
      },
    ],
    "simple-import-sort/exports": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/jsx-fragments": 1,
    "react/jsx-no-bind": ["off"],
  },
};
