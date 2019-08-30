module.exports={
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    open: true, 
    compress: false, 
  },
  lintOnSave: false, 
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload');
  }
}