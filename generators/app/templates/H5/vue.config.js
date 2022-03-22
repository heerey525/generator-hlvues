const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.VUE_APP_PUBLICPATH, // 根据运行/打包的环境变量配置，也可以和之前一样，直接修改用来连接后端本地服务联调
  lintOnSave: false,
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存
  devServer: {
    port: 8080, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_HOST,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api/': '/',
        },
      },
    }, // 配置多个代理
  },
  // 移动端项目启用
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('./src/components'))
  },
  configureWebpack: (config) => {
    // 开发环境不需要gzip
    if (process.env.NODE_ENV !== 'production') return
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.(js|css|svg|woff|ttf|json|html)$/, // 正则匹配需要压缩的文件后缀
        threshold: 10240, // 大于10kb的会压缩
        deleteOriginalAssets: false, // 是否删除源文件
        // 其余配置查看compression-webpack-plugin
      }),
    )
  },
}
