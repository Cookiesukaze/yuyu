const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/yu': {
        target: 'http://localhost:5000/yu',  // 将请求代理到后端的地址
        changeOrigin: true,
        pathRewrite: {
          '^/yu': ''
        }
      },
      '/human1': {
        target: 'http://localhost:5000/human1',  // 将请求代理到后端的地址
        changeOrigin: true,
        pathRewrite: {
          '^/human1': ''
        }
      }
    }
  }
}
