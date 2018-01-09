/**
 *
 */
module.exports = {
  extends: ['standard', 'standard-react', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    test: true,
    test2: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    'generator-star-spacing': ['error', { before: false, after: true }],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    camelcase: 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true
      }
    ],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'flowtype/semi': ['error', 'never']
  }
}
