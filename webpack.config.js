//webpack 配置文件；
//webpack 默认会加载此文件
// __dirname: nodejs 中一个全局变量；它指向当前执行脚本所在目录
//
// 构建命令： webpack 或是 webpack webpack.config.js (默认会加载webpack.config.js)
//

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //配置生成source maps
  //可选参数：source-map | cheap-module-source-map | eval-source-map | cheap-module-eval-source-map
  devtool: 'eval-source-map',

  //待构建项目唯一入口
  entry: __dirname + "/app/Main.js",
  output: {
    //编译输出 路径+文件名字
    path: __dirname + "/public",
    filename: "bundle.js"
  },


  module: {
    loaders: [
      {
        //此项目的所有json 文件；loaders json-loader 处理
        test: /\.json$/,
        loader: "json-loader"
      },
      // {
        // test: /\.js$/,
        // exclude: /node_modules/,
        // loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        // query: {
          // presets: ['es2015','react']
        // }
      // },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"//添加对样式表的处理
      }
    ],
  },

  plugins: [
    //new 一个这个插件的实例，并传入相关的参数
    new HtmlWebpackPlugin({
      title: "xxxxxxxxxxxxx",
      template: __dirname + "/app/index.tmpl.html",
      filename: __dirname + "/public/index_01.html",
      // inject: 'body'
    })
  ],

  //配置webpack 构建本地服务器
  devServer: {
    //本地服务器所加载页面；所在目录
    contentBase: "./public",
    //终端输出结果为彩色
    // color: true,
    //不进行 跳转,所有跳转都指向index.html
    historyApiFallback: true,
    //当源文件变化时，自动刷新
    inline: true,
    //监听端口；默认8080,可以自行指定
    port: 8011
  }
}
