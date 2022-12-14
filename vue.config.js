const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    port: 1991,
    open: true
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/variables.scss";'
      }
    }
  }
});
