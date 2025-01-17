//根目录中创建 .eslintrc.js 文件
module.exports = {
  root: true, // 表示这是根配置文件，ESLint 不会去查找父级目录的配置文件
  parserOptions: {
    parser: 'babel-eslint', // 使用 Babel 的解析器，支持最新的 JavaScript 语法
  },
  env: {
    browser: true, // 浏览器环境
  },
  extends: [
    'plugin:vue/essential', // Vue.js 基本配置
    'eslint:recommended', // 使用 ESLint 推荐的基本规则
    'plugin:prettier/recommended', // 启用 Prettier 插件，并禁用与 Prettier 冲突的规则
  ],
  plugins: [
    'vue', // 启用 Vue 插件
  ],
  rules: {
    // Prettier 相关规则
    'prettier/prettier': ['error'], // 将 Prettier 格式化问题视为 ESLint 错误
    // 关闭生成器星号间隔规则
    'generator-star-spacing': 'off',
    // 关闭 camelcase 规则，允许对象属性使用非驼峰命名
    'camelcase': [0, { properties: 'always' }],
    // 允许在开发中使用 debugger，生产环境下禁用
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}