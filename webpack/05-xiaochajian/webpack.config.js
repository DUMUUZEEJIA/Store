let htmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
  mode: 'production', // production development
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: {
    home: './src/index.js',
    other: './src/other.js'
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'home.html',
      chunks: ['home'],
      title: 'home'
    }),
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'other.html',
      chunks: ['other'],
      
      title: 'other'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
}
/**
 * devtool: 'source-map'
 * source-map 大而全 生成单独源码文件，定义行和列
 * eval-source-map 不会生成单独的源码文件 
 *  */