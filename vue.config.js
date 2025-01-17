const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  // 禁用 eslint 检查
  lintOnSave: false,

  // 配置开发服务器代理
  devServer: {
    port: 8080, // 设置为指定端口
    open: false, // 是否自动打开浏览器
    client: {
      overlay: {
        warnings: false, // 不显示警告
        errors: true // 仅显示错误
      }
    },
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
      },
    },
  },

  // 配置 webpack 别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
