var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, respond) {
  respond.writeHead(200, { 'Content-Type': 'text/html' })
  console.log(__dirname)
  var file = fs.createReadStream(__dirname + '/index.html', 'utf8')
  file.pipe(respond)
  
}).listen(9999)
console.log('start 9999')


