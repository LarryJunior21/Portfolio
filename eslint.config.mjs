// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    // Disable multi-word component names for Nuxt pages
    'vue/multi-word-component-names': 'off',

    // Allow single-word components in Nuxt
    'vue/require-default-prop': 'off', // Disable default prop enforcement
    'vue/prop-name-casing': ['error', 'camelCase'], // Enforce camelCase for prop names

    // Customize other rules
    'no-console': 'warn', // Warn about console logs
    'no-debugger': 'warn', // Warn about debugger statements
    'no-unused-vars': 'warn', // Warn about unused variables
    'vue/no-unused-vars': 'warn', // Warn about unused Vue variables,
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
});
