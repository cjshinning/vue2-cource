const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/assets/common.scss')]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-plugin-px2rem')({
              rootValue: 37.5,  //表示设计稿的大小 375->37.5rem
              // exclude: /node_modules/
            })
          ]
        }
      }
    }
  }
})
