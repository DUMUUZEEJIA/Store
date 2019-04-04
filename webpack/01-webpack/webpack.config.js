let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development', // production development
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash:8].js',
		path: path.resolve(__dirname, 'dist') // 绝对路径
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
			// filename: path.join(__dirname, 'src') + '/aa.html',
			template: './src/index.html',
			title: 'hello world',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				removeAttributeQuotes: true
			},
			hash: true,
			cache: true
		}),
		new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'test.html',
      template: 'src/assets/test.html'
    })
	],
	module: { // 模块
		rules: [
			{ test: /\.css$/, use: [ {
				// loader: 'style-loader/url'
				loader: 'style-loader'
			},'css-loader'] }
		]
	}
}