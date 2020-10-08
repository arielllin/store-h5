/**
 * 開發用 webpack.dev.server 設定
 */
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    host: '0.0.0.0',
    port: 9797,
    https: false,
    open: true,
    hotOnly: true,
    // proxy: 'http://localhost:3889'
    proxy: {
      '/api/base': {
        target: 'http://localhost:3889',
        changeOrigin: true,
        pathRewrite: {
          '/api/base': ''
        },
        logLevel: 'debug'
      },
      '/zomato-api': {
        target: 'https://developers.zomato.com',
        changeOrigin: true,
        pathRewrite: {
          '/zomato-api': ''
        },
        logLevel: 'debug'
      }
    }
  }
}
