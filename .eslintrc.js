module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Best Practices
    eqeqeq: 'off',
    curly: "off",
    quotes:"off"
  }

  // rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   semi: ['error', 'never'],
  //   'max-len': 'off',
  //   camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }]
  // }
}
