let path = require('path')
// console.log(path)
// console.log(path.resolve('dist'))
// console.log(path.normalize('dist'))
// console.log(path.isAbsolute('C:\workspace\Store\webpack\webpack.config.js'))
// console.log(path.join('C:\workspace\Store\webpack\webpack.config.js'))
// console.log(path.relative())
// console.log(path.toNamespacedPath())
// console.log(path.dirname('dist'))
// console.log(path.basename('dist'))
module.exports = {
    mode: 'development', // production development
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}