// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // // 没找到解决方案， 一格式化webstorm script标签下面就会缩进，一缩进，eslint就报警。
    // // 只能从根源把他且了。
    // allow async-await
    // 由于官方有bug就暂时将index
    'indent': 'off',
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 1
    }],
    'vue/no-parsing-error': ['error', {
      'x-invalid-end-tag': false
    }],
    // 'no-useless-computed-key': 'off',
    'object-shorthand': ['off'],
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
