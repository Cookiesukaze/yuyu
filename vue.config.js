const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/yuyu/' : '/'
})
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/yu': {
        target: 'http://127.0.0.1:5000/yu',  // 将请求代理到后端的地址
        changeOrigin: true,
        pathRewrite: {
          '^/yu': ''
        }
      },
      '/human1': {
        target: 'http://127.0.0.1:5000/human1',  // 将请求代理到后端的地址
        changeOrigin: true,
        pathRewrite: {
          '^/human1': ''
        }
      }
    }
  }
}
