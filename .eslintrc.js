module.exports = {
  root: true,
  parserOptions: {
    parser: 'typescript-eslint-parser',
    sourceType: 'module'
  },
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint-config-alloy/typescript'],
  rules: {
    'indent': ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    //强制不使用分号结尾
    '@typescript-eslint/semi': ['error', 'never']
  }
}
