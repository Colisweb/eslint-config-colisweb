/**
 *
 */
module.exports = {
  extends: ['standard', 'standard-react', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    camelcase: 'off',
    'max-len': ['error', { code: 100 }],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'flowtype/semi': ['error', 'never']
  }
}
