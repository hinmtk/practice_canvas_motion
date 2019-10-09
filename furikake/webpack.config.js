const webpack = require('webpack');
const path = require('path');

module.exports = [{
  entry:{
    app:[
      './src/app.jsx'
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
        test:/\.jsx$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  },
  plugins:[
  ]
}];