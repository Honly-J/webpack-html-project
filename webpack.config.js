const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let env = process.env.NODE_ENV == "development" ? "development" : "production";

module.exports = {
  mode: env,
  entry:{
    'statics/js/page.js':'./src/statics/js/page.js',
    'statics/js/detail.js':'./src/statics/js/detail.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath:  '/',
    filename: '[name]-[hash:8].js'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPaht: './'
            }
          },
          {loader: 'css-loader'}
        ]
      },
      {
        test:/\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:1024 * 10,
              outputPath:'./statics/imgs/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
            loader: 'html-loader'
        }
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:5].css",
    }),
    new webpack.HotModuleReplacementPlugin()    //引入热更新插件
  ],
  devServer:{
    host:'localhost',   //服务器的ip地址
    port:1573,  //端口
    inline: true,//实时刷新
    open:true,  //自动打开页面
    hot: true,
    // hotOnly:true
  }
}