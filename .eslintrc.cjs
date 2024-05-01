module.exports = {
  extends: [
    "prettier",
    "next",
    "plugin:@typescript-eslint/recommended",
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
  plugins: ['unused-imports', 'simple-import-sort'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  root: true,
  // settings: {
  //   // Add this section
  //   react: {
  //     version: "detect", // Automatically detect the version of React
  //   },
  // },
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
    "react-hooks/exhaustive-deps": "off",
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
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages 'react' related packages come first.
          ['^react', '^next', '^@?\\w'],
          ['^@/'],
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          // relative paths up until 3 levels
        ],
      },
    ],
  },
}
