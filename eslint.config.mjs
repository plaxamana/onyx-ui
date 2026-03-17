import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jest from 'eslint-plugin-jest';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import _import from 'eslint-plugin-import';
import { fixupPluginRules } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import storybook from 'eslint-plugin-storybook';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/coverage', '**/node_modules', '**/.vscode', '**/**.log', '**/build'],
  },
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
  }),
  {
    plugins: {
      prettier,
      react,
      'react-hooks': fixupPluginRules(reactHooks),
      jest,
      'jsx-a11y': jsxA11Y,
      import: fixupPluginRules(_import),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...jest.environments.globals.globals,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
      'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/label-has-associated-control': ['error'],
      'jsx-a11y/mouse-events-have-key-events': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'no-undef': 'error',
      'no-console': ['warn', { allow: ['error'] }],
      'prefer-template': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-no-undef': 'error',
      'react/no-unstable-nested-components': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.stories.{js,jsx,tsx,ts}'],
    plugins: {
      storybook: fixupPluginRules(storybook),
    },
    rules: {
      'no-console': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',
    },
  },
  {
    files: ['**/*.test.{js,jsx,tsx,ts}'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
