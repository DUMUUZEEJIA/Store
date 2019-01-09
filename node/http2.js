var http = require('http')
var server = http.createServer(function (request, respond) {
  respond.writeHead(200, { 'Content-Type': 'application/json' })
  var obj = {
    'age': '20',
    'name': '志玲'
  }
  respond.end(JSON.stringify(obj))
  
}).listen(9999)
console.log('start 9999')