var http = require('http')
var server = http.createServer(function (request, respond) {
  respond.writeHead(200, { 'Content-Type': 'text/plain' })
  respond.write('hello word')
  respond.end('end')
  
}).listen(9999)
console.log('start 9999')