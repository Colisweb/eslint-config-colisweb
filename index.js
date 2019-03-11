/**
 *
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['standard', 'standard-react', 'react-app', 'plugin:jsx-a11y/recommended', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  plugins: ['flowtype', 'react-hooks', 'jsx-a11y'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'flowtype/semi': ['error', 'never'],
    'generator-star-spacing': ['error', { after: true, before: false }],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    camelcase: 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
