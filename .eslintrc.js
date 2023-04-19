module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error', 'react-hooks/exhaustive-deps': 'warn', 'linebreak-style': 0, 'react/jsx-filename-extension': 0, 'no-alert': 0, 'react/react-in-jsx-scope': 0, 'import/no-unresolved': 0, 'react/jsx-props-no-spreading': 0, 'import/no-extraneous-dependencies': 0,
  },
};
