const webpack = require('webpack');
const path = require('path');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const ModernizrConfig = {
  'feature-detects':[
  'input',
  'canvas',
  'css/resize'
  ]
}

module.exports = [{
  entry:{
    app:[
      './src/app.js'
    ]
  },
  output:{
    path: path.join(__dirname, './assets/js'),
    filename:'[name].bundle.js',
    publicPath:'./assets/js/'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  },
  plugins:[
    new ModernizrWebpackPlugin(ModernizrConfig)
  ]
}];