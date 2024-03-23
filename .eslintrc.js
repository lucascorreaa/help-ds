/* eslint-disable no-undef */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jest', 'react-hooks', 'testing-library', 'jsx-a11y', 'storybook'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    // 'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    // Adicione aqui suas regras personalizadas
    semi: ['error', 'never'], // Desabilitar ponto e vírgula
  },
}