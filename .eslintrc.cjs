module.exports = {
  extends: [
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: [
    "node_modules",
    "dist",
    "src/services/**",
    "postcss.config.js",
    "openapi-codegen.config.ts",
    ".eslintrc.cjs",
    "commitlint.config.cjs",
    "tailwind.config.js",
    "src/**/*.js",
  ],
  plugins: ["react"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
  },
  root: true,
  settings: {
    // Add this section
    react: {
      version: "detect", // Automatically detect the version of React
    },
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^[A-Z]", argsIgnorePattern: "^[A-Z]" },
    ],
    // temporary disable start
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    // temporary disable end
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-restricted-syntax": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "max-len": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/ban-types": "off",
    "import/no-cycle": "off",
    "no-console": "warn",
    "no-plusplus": "off",
    camelcase: "off",
    "no-nested-ternary": "error",
    "testing-library/prefer-screen-queries": "off",
    "react/no-unescaped-entities": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
}
