let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var webpack = require('webpack');
module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
	mode: 'production', // production development
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash:8].js',
		path: path.resolve(__dirname, 'dist')// 绝对路径
		// publicPath: './dist/'
	},
	devServer: {
		port: 3000,
		progress: true,
		contentBase: path.join(__dirname, 'dist'),
		compress: true
		// after(e) {
		// 	// console.log(e, 11111111)
		// },
		// before(app) {
		// 	app.get('/', function (req, res) {
		// 		res.json({ custom: 'response' })
		// 	})
		// }
	},
	plugins: [
		new HtmlWebpackPlugin({
			// filename: path.join(__dirname, 'src') + '/aa.html', // 打包后的名字路径
			template: './src/index.html',
			title: 'hello world',
			minify: {
				// collapseWhitespace: true,
				// removeComments: true,
				// removeRedundantAttributes: true,
				// removeScriptTypeAttributes: true,
				// removeStyleLinkTypeAttributes: true,
				// useShortDoctype: true,
				// removeAttributeQuotes: true
			},
			hash: true,
			cache: true
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: "[id].css"
		}),
		new webpack.ProvidePlugin({
			$: 'jquery'
		})
		// new HtmlWebpackPlugin({  // Also generate a test.html
		//   filename: 'test.html',
		//   template: 'src/assets/test.html'
		// })
	],
	module: { // 模块
		rules: [
			// {
			// 	test: /\.js$/,
			// 	use: {
			// 		loader: 'eslint-loader',
			// 		options: {
			// 			enforce: 'pre'
			// 		}
			// 	}
			// },
			{
				test: require.resolve('jquery'),
				use: [{
						loader: 'expose-loader',
						options: 'jQuery'
				},{
						loader: 'expose-loader',
						options: '$'
				}]
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env'
							// 'es2015',
							// 'stage-2'
						],
						plugins: [
							'@babel/plugin-proposal-class-properties'
							// 'transform-decorators-legacy',
							// 'transform-class-properties'
						]
					}
				}
			},
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{
			// 			loader: 'style-loader/useable',
			// 			options: {
			// 				singleton: true,
			// 				minimize: true
			// 			}
			// 		},
			// 		'css-loader'
			// 	]
			// }
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{
			// 			loader: 'style-loader/url',
			// 			options: {
			// 				singleton: true // 不是 style-loader/url 的属性
			// 				// minimize: true // 已废弃
			// 			}
			// 		},
			// 		'file-loader'
			// 	]
			// }

			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader', // import 路径
					'postcss-loader',
					'less-loader'
				]
			}

			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{
			// 			loader: 'to-string-loader',
			// 			options: {
			// 				// singleton: true,
			// 				// modules: true // 废弃 无效 
			// 			}
			// 		},
			// 		'css-loader'
			// 	]
			// }

			// {
      //   test: /\.css$/,
      //   use: [
      //     'handlebars-loader', // handlebars loader expects raw resource string
      //     'extract-loader',
      //     'css-loader',
      //   ],
      // }
		]
	},
	externals: {
		jquery:'$'
	}
}