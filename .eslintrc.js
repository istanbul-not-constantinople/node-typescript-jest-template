module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/semi': 'warn',
    curly: 'warn',
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    semi: 'warn',
    quotes: ['warn', 'single', {
      allowTemplateLiterals: true,
    }],
    indent: ['warn', 2],
    'comma-dangle': ['warn', 'always-multiline'],
    'arrow-parens': 'warn',
    'no-var': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-spread': 'warn',
    'block-spacing': ['warn', 'always'],
    'no-multi-spaces': 'warn',
    'key-spacing': 'warn',
  },
};
