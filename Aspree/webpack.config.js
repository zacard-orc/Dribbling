/**
 * Created by z30 on 16/12/3.
 */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

//var publicPath = 'http://127.0.0.1:3000/';
var publicPath='';
process.env.NODE_ENV==='dev'?publicPath='http://127.0.0.1:8080/dist/':publicPath='http://127.0.0.1:8080/dist/';


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),  //物理路径
    publicPath: publicPath, //虚拟路径
    filename: 'assets/js/build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.ejs$/,
        loader: "ejs-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        })
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    clientLogLevel: "info"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    }),
    new ExtractTextPlugin("assets/css/style1.css"),
    new HtmlWebpackPlugin({  // Also generate a test.html
      favicon:'src/assets/icons/page_bird1.ico',
      filename: 'linly.html',
      title: 'Trioly template',
      xfile:{
        js: [publicPath+'assets/js/jquery.min.js']
      },
      template: 'src/pages/page1/page1.ejs',
      inject: 'body',
      minify:{
        preserveLineBreaks:true,
        removeComments:true
      }
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      favicon:'src/assets/icons/page_bird1.ico',
      filename: 'xuechengyue.html',
      title: 'Trioly template',
      xfile:{
        js: [publicPath+'assets/js/jquery.min.js']
      },
      template: 'src/pages/page2/page2.ejs',
      inject: 'body',
      minify:{
        preserveLineBreaks:true,
        removeComments:true
      }
    })
  ],
  devtool: '#eval-source-map'
};


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
