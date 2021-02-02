module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'no-shadow': 0,
    'require-yield': 0,
    'no-param-reassign': 0,
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true
      }
    ],
    'import/order': [
      'error'
    ],
    'func-names': 0,
    'no-unused-expressions': 0,
    'prefer-arrow-callback': 1,
    'no-use-before-define': [
      2,
      {
        functions: false
      }
    ],
    'space-before-function-paren': [
      2,
      'always'
    ],
    'max-len': [
      2,
      120,
      2
    ],
    semi: [
      2,
      'never'
    ],
    strict: [
      2,
      'global'
    ],
    'arrow-parens': [
      2,
      'always'
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
