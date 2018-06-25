const path = require('path')

export default {
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
  ],
  alias: {
    '@': path.join(__dirname, 'src')
  },
  proxy: {
    '/api': {
      target: 'http://101.132.34.71:7001/api',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
  // 禁用css module
  disableCSSModules: true,
  publicPath: '/'
}
